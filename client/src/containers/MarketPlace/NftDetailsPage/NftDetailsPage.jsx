import ButtonPrimary from "../../../shared/Button/ButtonPrimary";
import ButtonSecondary from "../../../shared/Button/ButtonSecondary";
import axios from 'axios'
import { useEffect, useState,lazy } from "react";
import { useNftOwner } from "../hooks/web3Hooks/useNftOwner";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNftDetailsPageState } from "../../../app/features/MarketPlace/MarketplaceSlice";
import Spinner from "../../../shared/Spinner/Spinner";

const NftInfoTable = lazy (()=> import ('./components/NftInfoTable'))
const NftDetailsImage = lazy (()=> import ('./components/NftDetailsImage'))
const NftTraits = lazy (()=> import ('./components/NFtTraits'))
const NftOffers = lazy (()=> import ('./components/NftOffers'))




const NftDetailsPage = () => {
    
    const [searchParams] = useSearchParams()
    const [metadata, setMetadata] = useState({
        metadata: null,
        protocolGateaway: null,
        tokenId: null,
        contractAddress: null,
        metadata_Url: null,
        chainId: null
    })

    // const {nftDetailsPageState} = useSelector(state=>state.marketPlace)
    // console.log(nftDetailsPageState)

const dispatch = useDispatch()
const setNftStore = (data)=> dispatch(setNftDetailsPageState(data))

    const extractUrl = () => {
        const contractAddress = searchParams.get('address')
        const tokenId = searchParams.get('id')
        const metadata_Url = searchParams.get('cid')
        const chainId = searchParams.get('chain')
        contractAddress && tokenId && chainId && setMetadata((prev) => ({
            ...prev,
            metadata_Url: metadata_Url,
            tokenId: tokenId && tokenId,
            chainId: Number(chainId),
            contractAddress: contractAddress && contractAddress,
        }))
        setNftStore({
            metadata_Url: metadata_Url,
            tokenId: tokenId && tokenId,
            chainId: Number(chainId),
            contractAddress: contractAddress && contractAddress,
        })
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
    const { nftOwner, pageVisitor, isOwner, loading, error, isVisitorConnected } = useNftOwner()

    const getNFtData = async () => {
        let isUrl = await metadata?.metadata_Url?.includes('https')
        if (isUrl) {
            const res = await axios.get(metadata?.metadata_Url).then((res) => res.data)
            setMetadata((prev) => ({
                ...prev,
                metadata: res,
                protocolGateaway: 'json',
            }))
            setNftStore({
                metadata: res,
                protocolGateaway: 'json',
            })
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
            <div className="flex flex-col justify-start items-center  rounded-3xl  bg-[#000000d2] w-auto h-auto overflow-hidden border border-neutral-900 relative ">
                {/* <div className="bg-[#4b005575] w-full h-10 "> hell</div> */}
              {<img onLoad={loaded} src={generateImageLink()} alt="Fetching image" className=" object-contain w-full relative rounded-b-md" />}
            </div>
        )
    }




    return (
        <div className="m-0 mb-10  shadow-lg  border-t   border-[#353d284b] h-auto relative flex rounded-xl overflow-hidden  flex-wrap ">
            <div className="flex h-full w-full m-2 flex-wrap lg:flex-nowrap gap-0 lg:gap-0  ">
                <div className=" flex flex-col gap-2 w-full  lg:w-1/2 ">

                    <div className="w-full">
                        {/* <SingleAccordionTab title={metadata?.metadata?.name} open={true} >
                            <div>
                                {<RenderNftImage />}
                            </div>

                        </SingleAccordionTab > */}
                                {/* {<RenderNftImage />} */}
                                {<NftDetailsImage />}

                        <NftTraits />


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
                            {/* <RenderInfoTable /> */}
                            <NftInfoTable />
                            <NftOffers />



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
