import axios from 'axios'
import { useEffect, useState, lazy, Suspense } from "react";
import { useNftOwner } from "../hooks/web3Hooks/useNftOwner";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNftDetailsPageState } from "../../../app/features/MarketPlace/MarketplaceSlice";
import Spinner from "../../../shared/Spinner/Spinner";
import { clearNftDetailsState } from "../../../app/features/MarketPlace/MarketplaceSlice";
import { useCheckIsListed } from "../hooks/web3Hooks/Listing/useCheckIsListed";
import AuctionInfoTable from "./Auction/AuctionInfoTable";
import AuctionBids from "./Auction/AuctionBids";
import { useSelector } from 'react-redux';

const NftDetailsImage = lazy(() => import('./components/NftDetailsImage'))
const NftTraits = lazy(() => import('./components/NFtTraits'))

const AuctionDetailsPage = () => {

    const [searchParams] = useSearchParams()
    const [metadata, setMetadata] = useState({
        metadata: null,
        protocolGateaway: null,
        tokenId: null,
        contractAddress: null,
        metadata_Url: null,
        chainId: null
    })
    

    const dispatch = useDispatch()
    const setNftStore = (data) => dispatch(setNftDetailsPageState(data))

    const extractUrl = async () => {
        const contractAddress = searchParams.get('address')
        const tokenId = searchParams?.get('id')
        const metadata_Url = searchParams?.get('cid')
        const chainId = Number(searchParams?.get('chain'))
        contractAddress && tokenId && chainId && setMetadata((prev) => ({
            ...prev,
            metadata_Url: metadata_Url,
            tokenId: tokenId && tokenId,
            chainId: chainId && chainId,
            contractAddress: contractAddress && contractAddress,
        }))
        setNftStore({
            metadata_Url: metadata_Url,
            tokenId: tokenId && tokenId,
            chainId: chainId && chainId,
            contractAddress: contractAddress && contractAddress,
        })
    }

    useEffect(() => {
        const controller = new AbortController()
        dispatch(clearNftDetailsState()) && extractUrl()
        return () => controller.abort()
    }, [])

    useEffect(() => {
        metadata.metadata_Url && getNFtData()
    }, [metadata.metadata_Url])

    //custom hook to compare nft owner and page visitor
    const { nftOwner, pageVisitor, isOwner, loading, error, isVisitorConnected } = useNftOwner()
    // custom hook to check if nft is listed
    const {isListed,data,seller,listingType,isSeller} = useCheckIsListed()



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
            let endpoint = metadata?.metadata_Url
            const url = `${gateway}${endpoint}`
            try {
                const res = await axios.get(url).then((res) => res.data)
                setMetadata((prev) => ({
                    ...prev,
                    metadata: res,
                    protocolGateaway: 'ipfs',
                }))
                setNftStore({
                    metadata: res,
                    protocolGateaway: 'ipfs',
                })
                return res
            } catch (err) {
                throw new Error(err.message)
            }
        }
        return null
    }



    return (
        <div className="m-0 mb-10  shadow-lg  border-t   border-[#353d284b] h-auto relative flex rounded-xl overflow-hidden  flex-wrap ">
            <div className="flex h-full w-full m-2 flex-wrap lg:flex-nowrap gap-0 lg:gap-0  ">
                <div className=" flex flex-col gap-2 w-full  lg:w-1/2 ">
                    <div className="w-full">
                        <Suspense fallback={
                            <Spinner message={'getting Nft Infos ...'} />
                        }>
                            {<NftDetailsImage />}
                        </Suspense>
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
                   
                          <AuctionInfoTable isOwner={isOwner} isSeller={isSeller} data={data}  isListed={isListed} seller={seller}/>
                          <AuctionBids isOwner={isOwner} isSeller={isSeller}  isListed={isListed} />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AuctionDetailsPage
