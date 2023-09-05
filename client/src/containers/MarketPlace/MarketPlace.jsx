import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import { HashLoader } from 'react-spinners';
import { useGetNftByAccount } from "./hooks/useGetNftByAccount";
import MyNfts from "./MyNfts/MyNfts";
import MyListings from "./MyListings/MyListings";
import TabFilter from "./TabFilter/TabFilter";
import { useParams, useSearchParams } from "react-router-dom";
//pages
import NftsPage from "../Earn/components/Nfts/NftsPage";
import { getNftPlaceholder } from "./data/requestPlaceholder";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { userData } from "../../app/features/session/sessionSlice";
import { marketplacePage,setMarketplacePage,setFilter } from "../../app/features/MarketPlace/MarketplaceSlice";
//

///web3
import { useContractRead } from 'wagmi'
import { useDispatch } from "react-redux";
//all-nfts
const MarketPlace = ({ className = "" }) => {



const {page}=useParams()
const {address}=useSelector(userData)
let [searchParams, setSearchParams] = useSearchParams();
const paramChain = searchParams.get('chain')

const dispatch = useDispatch()

//states getters
const filter = useSelector(state=>state.marketPlace.nftFilter)
const MarketStore = useSelector(state=>state.marketPlace)
const marketPage = useSelector(state=>state.marketPlace.marketplacePage)
//state setterrs
const setMarketPage=(item)=> dispatch(setMarketplacePage(item))
const setComponent = (item)=> dispatch(setMarketplacePage(item))    
const setNftFilter=(item)=> dispatch(setFilter(item))


    // const [nftFilter, setNftFilter] = useState({
    //     chain:'bsctestnet',
    //     execute: true,      
    //     limit: 50
    // })
   console.log(MarketStore)



// const marketplaceAbi = require('./abi/MarketPlace.json')

// const { data, isError, isLoading } = useContractRead({
//     address: '0x5333d0d6387C2F5f50902249c2E6334A8a066367',
//     abi: marketplaceAbi,
//     functionName: 'getAllPlugins',
//     // args:[0,1000000]
  
//   })


useEffect(()=>{
    const controller = new AbortController()
!!page && setComponent(page)
!!paramChain && setNftFilter({chain:paramChain})

return ()=> controller.abort()

},[page])




    const Components = {'all-nfts': <NftsPage  />,'all-listings': <NftsPage />,'my-listings': <MyListings  />,'my-nfts': <MyNfts  setNftFilter={setNftFilter} setSearchParams={setSearchParams} searchParams={searchParams} />,5: <NftsPage  />}

    return (
        <React.Fragment>
            <div className="lg:flex bg-gradient-to-b from-[#111111] to-black bg-opacity-70 relative h-auto w-full  ">

                <div className="h-full lg:z-10 lg:sticky xl:sticky xl:top-22 lg-top-20 overflow-x-none fixed top-0  z-10  ">
                </div>

                <div className="flex flex-col gap-0  w-full relative  h-full   container--xxxlarge px-10 pl-28 sm:pl-25 md:pl-26 lg:pl-10  container--center ">

                    <div className="w-full h-auto relative   ">
                        <TabFilter  page={page} setSearchParams={setSearchParams} />
                        <Suspense fallback={
                            <>
                                <div className=" h-screen  flex justify-center items-center " >
                                    <HashLoader size={50} color="#fff" style={{ text: 'center' }} />
                                </div>
                            </>}>
                          
                        { marketPage && Components[marketPage]}
                          
                        </Suspense>
                    </div>

                </div>
            </div>

        </React.Fragment>
    );
};

export default MarketPlace;