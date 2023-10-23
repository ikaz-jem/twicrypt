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
import CreateListing from "./CreateListing/CreateListing";
import AllListings from "./AllListings/AllListings";
//all-nfts
import CreateAuction from "./CreateAuction/CreateAuction";


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
    'all-listings': <AllListings />,
    'my-listings': <MyListings />,
    'my-nfts': <MyNfts />,
    'create-listing': <CreateListing />,
    'create-auction': <CreateAuction />
}

    return (
        <React.Fragment>
            <div className="lg:flex  relative h-auto w-full  ">

                <div className="flex flex-col gap-0  w-full relative  h-full container--xxxlarge px-0 pl-5 mx-auto sm:pl-25 md:pl-26 lg:pl-0  container--center ">
                    <div className="w-full h-auto relative   ">
                        <TabFilter  page={page} setSearchParams={setSearchParams} />

                        <Suspense fallback={
                            <>
                                <div className=" h-screen  flex justify-center items-center  w-full " >
                                    <HashLoader size={50} color="#fff" style={{ text: 'center' }} />
                                </div>
                            </>}>
                        { marketPage && Components[marketPage] ?  Components[marketPage] : <h1>something wrong !!</h1> }
                        </Suspense>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
};

export default MarketPlace;