import { useContractRead, useContractWrite } from "wagmi";
import Accordion from "../../../../shared/Accordion/Accordion";
import SingleAccordion from "../../../../shared/Accordion/SingleAccordion";
import ButtonPrimary from "../../../../shared/Button/ButtonPrimary";
import ButtonSecondary from "../../../../shared/Button/ButtonSecondary";
import { Table } from "../../../../shared/Table";
import axios from 'axios'
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import Spinner from "../../../../shared/Spinner/Spinner";



const NftDetailsPage = () => {
    const [metadata, setMetadata] = useState({
        metadata: null,
        protocolGateaway: null,
        tokenId: null,
        contractAddress: null,
    })

    const location = useLocation()

    const extractUrl = ()=>{
        const contractAddress = new URLSearchParams(location?.search).get('address')
        const tokenId = new URLSearchParams(location?.search).get('id')
        contractAddress && tokenId && setMetadata((prev) => ({
            ...prev,
            tokenId: tokenId && tokenId,
            contractAddress: contractAddress && contractAddress
        }))
    }


    useEffect(() => {
        const controller = new AbortController()
        extractUrl()
        return () => controller.abort()
    }, [])

    console.log(metadata)

    const getNFtData = async (data) => {
        let isIpfs = await data?.includes('ipfs://')
        if (isIpfs) {
            const gateway = 'https://ipfs.io/ipfs/'
            let endpoint = await data.slice(7, data.length)
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
                console.log(err.message)
            }


        } else {
            const res = await axios.get(data).then((res) => res.data)
            setMetadata((prev) => ({
                ...prev,
                metadata: res,
                protocolGateaway: 'json',
            }))
        }


    }

    const ERC721Abi = require('./Abi.json')

    const NftDetails = useContractRead({
        address: metadata?.contractAddress && metadata?.contractAddress,
        abi: ERC721Abi && ERC721Abi,
        functionName: 'tokenURI',
        args: [!!metadata?.tokenId && metadata?.tokenId],
        onSuccess(data) {
            getNFtData(data)
        },

    })








    const RenderNftImage = () => {


        const Cid = metadata?.metadata?.image.slice(7, metadata?.metadata?.image.length);
        const imageLink = `https://ipfs.io/ipfs/${Cid}`

        if (NftDetails.isLoading) {

            return (
                <div className="flex flex-col justify-start items-center  rounded-xl  bg-[#00000050] w-auto h-auto overflow-hidden border border-neutral-900 relative ">
                    <Spinner message={'Getting Asset Ready...'} />
                </div>

            )
        } else if (NftDetails.isError && metadata.metadata) {
            <div className="flex flex-col justify-start items-center  rounded-xl  bg-[#00000050] w-auto h-auto overflow-hidden border border-neutral-900 relative ">
                <h5>something went wrong please refresh or try again later ...</h5>
            </div>
        } else return (

            <div className="flex flex-col justify-start items-center  rounded-xl  bg-[#00000050] w-auto h-auto overflow-hidden border border-neutral-900 relative ">
                {/* <div className="bg-[#4b005575] w-full h-10 "> hell</div> */}
                <img src={metadata?.protocolGateaway == 'ipfs' && metadata?.metadata ? imageLink : metadata?.metadata?.image || ''} alt="Fetching image" className="  object-contain w-80 relative rounded-b-md" />
            </div>


        )


    }



    return (


        <div className="m-0  shadow-lg  border-t   border-[#353d284b] h-auto relative flex rounded-xl overflow-hidden  flex-wrap mb-10">


            <div className="flex h-full w-full m-5 flex-wrap lg:flex-nowrap gap-5 lg:gap-5  ">
                <div className=" flex flex-col gap-5 w-full   lg:w-1/2 ">
                    <RenderNftImage />
                    <div className="">
                        <Accordion />
                    </div>
                </div>

                <div className="  w-full lg:w-[70%] md:w-[46%] h-100 m-0  rounded-md">
                    <div className=" w-auto h-full rounded-md flex flex-col mx-5 relative ">
                        <div className=" flex justify-between  ">
                            <div className="p-0 m-0">
                                {/* <h3>{metadata?.metadata?.name}</h3> */}
                                <h5 className="p-0 m-0">Item Name</h5>
                            </div>
                            <div className="">
                                <h5 className="p-0 m-0">something here maybe buttons</h5>
                                {/* <h3>{metadata?.metadata?.description || 'getting informations ...'}</h3> */}
                            </div>
                        </div>
                        <div className="">
                            {/* <Table/> */}


                            <div className=" rounded-md  py-10 w-auto h-100 ">
                                <SingleAccordion title={'title accordion'} desc={"some description"} />
                                <div className="flex justify-center items-center m-10 ">

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

