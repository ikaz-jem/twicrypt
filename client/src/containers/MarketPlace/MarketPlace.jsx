import React, { useEffect } from "react";
import { Suspense } from "react";
import { HashLoader } from 'react-spinners';
import MyNfts from "./MyNfts/MyNfts";
import MyListings from "./MyListings/MyListings";
import TabFilter from "./TabFilter/TabFilter";
import { useParams, useSearchParams } from "react-router-dom";
//pages
import NftsPage from "../Earn/components/Nfts/NftsPage";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { setMarketplacePage,setFilter } from "../../app/features/MarketPlace/MarketplaceSlice";
///web3
import { useDispatch } from "react-redux";
//all-nfts



const MarketPlace = () => {



const {page}=useParams()
let [searchParams, setSearchParams] = useSearchParams();
const paramChain = searchParams.get('chain')

const dispatch = useDispatch()

//states getters
const marketPage = useSelector(state=>state.marketPlace.marketplacePage)
//state setterrs
const setComponent = (item)=> dispatch(setMarketplacePage(item))    
const setNftFilter=(item)=> dispatch(setFilter(item))


useEffect(()=>{
    const controller = new AbortController()
!!page && setComponent(page)
!!paramChain && setNftFilter({chain:paramChain})
return ()=> controller.abort()
},[page])




    const Components = {
    'all-nfts': <NftsPage  />,
    'all-listings': <NftsPage />,
    'my-listings': <MyListings />,
    'my-nfts': <MyNfts />,
    5: <NftsPage  />}

    return (
        <React.Fragment>
            <div className="lg:flex bg-gradient-to-b from-[#111111] to-black bg-opacity-70 relative h-auto w-full  ">

                <div className="h-full lg:z-10 lg:sticky xl:sticky xl:top-22 lg-top-20 overflow-x-none fixed top-0  z-10  ">

                </div>
                <div className="flex flex-col gap-0  w-full relative  h-full   container--xxxlarge px-10 pl-28 sm:pl-25 md:pl-26 lg:pl-10  container--center ">
                    <div className="w-full h-auto relative   ">
                        <TabFilter  page={page} setSearchParams={setSearchParams} />
               <div className="w-80 flex items-center justify-start">

              
               </div>
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