import ButtonPrimary from "../../../shared/Button/ButtonPrimary";
import ButtonSecondary from "../../../shared/Button/ButtonSecondary";
import axios from 'axios'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Spinner from "../../../shared/Spinner/Spinner";
import SingleAccordionTab from "../../../shared/AccordionTabs/SingleAccordionTab";
import { useNftOwner } from "../hooks/web3Hooks/useNftOwner";
import SingleAccordion from "../../../shared/Accordion/SingleAccordion";
import { MdOutlineLocalOffer, MdLabelOutline } from 'react-icons/md'

const NftDetailsPage = () => {
    const location = useLocation()
    const [metadata, setMetadata] = useState({
        metadata: null,
        protocolGateaway: null,
        tokenId: null,
        contractAddress: null,
        metadata_Url: null,
        chainId: null
    })


    const extractUrl = () => {
        const contractAddress = new URLSearchParams(location?.search).get('address')
        const tokenId = new URLSearchParams(location?.search).get('id')
        const metadata_Url = new URLSearchParams(location?.search).get('cid')
        const chainId = new URLSearchParams(location?.search).get('chain')
        contractAddress && tokenId && chainId && setMetadata((prev) => ({
            ...prev,
            metadata_Url: metadata_Url,
            tokenId: tokenId && tokenId,
            chainId: Number(chainId),
            contractAddress: contractAddress && contractAddress,
        }))
    }

    useEffect(() => {
        const controller = new AbortController()
        extractUrl()
        return () => controller.abort()
    }, [])

    useEffect(() => {
        metadata.metadata_Url && getNFtData()
    }, [metadata.metadata_Url])

    //custom hook to compare nft owner and page visitor
    const { nftOwner, pageVisitor, isOwner, loading, error, isVisitorConnected } = useNftOwner({
        contract: metadata.contractAddress && metadata.contractAddress,
        tokenId: metadata.tokenId && metadata.tokenId,
        chain: metadata.chainId && metadata.chainId,
        execute: metadata.tokenId && metadata.contractAddress && metadata.chainId && true,
    })

    const getNFtData = async () => {
        let isUrl = await metadata?.metadata_Url?.includes('https')
        if (isUrl) {
            const res = await axios.get(metadata?.metadata_Url).then((res) => res.data)
            setMetadata((prev) => ({
                ...prev,
                metadata: res,
                protocolGateaway: 'json',
            }))
        } else {
            const gateway = 'https://ipfs.io/ipfs/'
            let endpoint = await metadata?.metadata_Url
            const url = `${gateway}${endpoint}`
            try {
                const res = await axios.get(url).then((res) => res.data)
                setMetadata((prev) => ({
                    ...prev,
                    metadata: res,
                    protocolGateaway: 'ipfs',
                }))
                return res
            } catch (err) {
                throw new Error(err.message)
            }
        }
        return null
    }


    const RenderNftImage = () => {
        const [imgLoad, setImgLoad] = useState(false)
        const loaded = () => {
            setImgLoad(true)
        }

        const generateImageLink = () => {
            const isHttp = metadata?.metadata?.image.includes('https://')
            const Cid = metadata?.metadata?.image.slice(7, metadata?.metadata?.image.length);
            const imageLink = `https://ipfs.io/ipfs/${Cid}`
            if (metadata?.protocolGateaway == 'ipfs' && metadata?.metadata && !isHttp) {
                return imageLink
            } else if (metadata?.metadata && isHttp) {
                return metadata?.metadata?.image

            } return metadata?.metadata?.image

        }
        if (!metadata?.metadata?.image && !imgLoad) {

            return (
                <div className="flex flex-col justify-start items-center  rounded-xl  bg-[#00000050] w-auto h-auto overflow-hidden border border-neutral-900 relative ">
                    <Spinner message={'Getting Asset Ready...'} />
                </div>
            )

        } else return (
            <div className="flex flex-col justify-start items-center  rounded-xl  bg-[#000000d2] w-auto h-auto overflow-hidden border border-neutral-900 relative ">
                {/* <div className="bg-[#4b005575] w-full h-10 "> hell</div> */}
                <img onLoad={loaded} src={generateImageLink()} alt="Fetching image" className=" object-contain w-80 relative rounded-b-md" />
            </div>
        )
    }

    const RenderInfoTable = () => {

        return (
            <>
                <div className="my-5 px-5 rounded-2xl ">
                    <div className="  rounded-xl w-full flex flex-col items-start justify-center">
                        <h2 className="m-0 p-0 font-extrabold">{metadata?.metadata?.name}</h2>
                        <p className="text-left text-neutral-400 font-bold text-sm p-0 m-0">Owned by : {nftOwner?.slice(0, 20)}...</p>
                    </div>

                    {isVisitorConnected ?
                        <div className="border border-neutral-700  mt-5  rounded-2xl bg-neutral-900 flex flex-col">


                            <div className="px-5 border-b border-neutral-700">
                                <p className="text-left m-0 p-0">{metadata?.metadata?.description || 'getting informations ...'}</p>
                                <p className="text-left m-0 p-0"> nft owner ? : {isOwner.toString()}</p>
                               
                            </div>
                            <div className="px-5 py-5">
                                <p className="text-left p-0 m-0 text-xs text-neutral-400"> current price :</p>
                                <h3 className="text-left p-0 m-0 font-extrabold"> 10 ETH</h3>

                            </div>

                            <div className="" >
                                <div className="flex w-full gap-5 border-t border-neutral-800 p-5 ">
                                    <button className="w-1/2 text-white font-bold bg-pink-500 rounded-lg h-14">Buy Now</button>
                                    <button className="w-1/2 text-black font-bold bg-neutral-300 rounded-lg h-14">Make Offer</button>
                                </div>
                            </div>


                        </div> : "please connect your wallet "}
                </div>
            </>
        )
    }

    const RenderOffers = () => {

        return (
            <>
                <div className=" p-5 ">
                    <SingleAccordion title={"offers"} Icon={MdOutlineLocalOffer} >

                        {isVisitorConnected ?
                            <div className="border border-neutral-700  rounded-b-2xl bg-neutral-900 flex flex-col overflow-hidden ">

                                <li className="flex justify-center items-center mx-auto px-auto w-full pl-3  py-2 border-b bg-[#0003] font-bold border-neutral-800" >
                                    <div className="w-1/4 flex">item</div>
                                    <div className="w-1/4 flex">item</div>
                                    <div className="w-1/4 flex">item</div>
                                    <div className="w-1/4 flex">item</div>
                                </li>

                                <div className="w-full overflow-y-scroll h-60" >


                                    <ul className=" flex w-full  flex-col justify-start items-start m-0 p-0" role="table">
                                        <li className=" flex justify-start items-start w-full border-b border-neutral-800 py-3 pl-3 " role="row">
                                            <div className="w-1/4 flex">item</div>
                                            <div className="w-1/4 flex">item</div>
                                            <div className="w-1/4 flex">item</div>
                                            <div className="w-1/4 flex">item</div>
                                        </li>
                                        <li className=" flex justify-start items-start w-full border-b border-neutral-800 py-3 pl-3" role="row">
                                            <div className="w-1/4 flex">item</div>
                                            <div className="w-1/4 flex">item</div>
                                            <div className="w-1/4 flex">item</div>
                                            <div className="w-1/4 flex">item</div>
                                        </li>

                                    </ul>

                                </div>


                            </div> : "please connect your wallet "}

                    </SingleAccordion >
                </div>

            </>
        )
    }

    const RenderTraits = () => {

        return (
            <>
                <div className=" py-5 w-full">
                    <SingleAccordion title={"Traits"} Icon={MdLabelOutline} >
                    
                            <div className="border border-neutral-700 w-auto rounded-b-2xl bg-neutral-900 flex flex-wrap p-2 ">
                                        {
                                            metadata?.metadata?.attributes?.map((att, i) => {
                                                return (
                                                    <div key={i} className="flex gap-0 p-1  flex-wrap relative w-1/3">
                                                        <div className="border border-neutral-700 p-2 rounded-md flex flex-col w-40 grow bg-[#aaa1]">
                                                            <p className="p-0 m-0">{att.trait_type}: </p>
                                                            <p className="p-0 m-0"> {att.value} </p>
                                                        </div>

                                                    </div>)
                                            })
                                        }
                            </div> 

                    </SingleAccordion >
                </div>

            </>
        )
    }

    return (
        <div className="m-0  shadow-lg  border-t   border-[#353d284b] h-auto relative flex rounded-xl overflow-hidden  flex-wrap mb-10">
            <div className="flex h-full w-full m-2 flex-wrap lg:flex-nowrap gap-0 lg:gap-0  ">
                <div className=" flex flex-col gap-2 w-full  lg:w-1/2 ">

                    <div className="w-full">
                        <SingleAccordionTab title={metadata?.metadata?.name} open={true} >
                            <div>
                                {<RenderNftImage />}
                            </div>

                        </SingleAccordionTab >

                        <RenderTraits />


                        {/* <Accordion /> */}
                    </div>
                </div>
                <div className="  w-full lg:w-[70%] h-100 m-0  rounded-md">
                    <div className=" w-auto h-full rounded-md flex flex-col relative ">
                        <div className=" flex justify-between  ">
                            <div className="p-0 m-0">
                                {/* <h3>{metadata?.metadata?.name}</h3>
                               <h5 className="p-0 m-0">Item Name</h5> */}
                            </div>
                        </div>
                        <div className="">
                            {/* <Table/> */}
                            <RenderInfoTable />

                            <RenderOffers />
                            <div className=" rounded-md  py-10 w-auto h-100 ">
                                <div className="flex justify-center items-center m-0 ">
                                    <img className='w-60 h-60' src="https://2.bp.blogspot.com/-0I51uHN8NTk/VzCMR8AuAAI/AAAAAAAAND0/HHu8ZKnTn2cUXgbSRrF2OPzQF08QDmhBACLcB/s1600/present-150291_1280.png" alt="" />
                                </div>
                                <div className="flex justify-around">
                                    <ButtonSecondary> ButtonSecondaryon test</ButtonSecondary>
                                    <ButtonPrimary> button buttun</ButtonPrimary>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NftDetailsPage


/*






[
    {

data,
data2,
data3,

    }
]


*/

