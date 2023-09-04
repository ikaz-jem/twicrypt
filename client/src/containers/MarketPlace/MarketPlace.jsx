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


///web3
import { useContractRead } from 'wagmi'

const MarketPlace = ({ className = "" }) => {
    const {page}=useParams()
    const [component, setComponent] = useState('all-nfts')
    const [nftFilter, setNftFilter] = useState(getNftPlaceholder)
    let [searchParams, setSearchParams] = useSearchParams();
// const openSea = useGetNftByAccount({ 
//   chain:'ethereum',
//   walletAddress:'0x21111b0C84E33D2c3aF2EA3E4D851186b9F204C0',
//   execute:true,
//   limit:50

// })


const paramChain = searchParams.get('chain')

// const marketplaceAbi = require('./abi/MarketPlace.json')

// const { data, isError, isLoading } = useContractRead({
//     address: '0x5333d0d6387C2F5f50902249c2E6334A8a066367',
//     abi: marketplaceAbi,
//     functionName: 'getAllPlugins',
//     // args:[0,1000000]
  
//   })


useEffect(()=>{
!!page && setComponent(page)
!!paramChain && setNftFilter((prev)=> ({
    ...prev,
    chain:paramChain
}))
},[page])





    const Components = {'all-nfts': <NftsPage  />,'all-listings': <NftsPage />,'my-listings': <MyListings  />,'my-nfts': <MyNfts nftFilter={nftFilter} setNftFilter={setNftFilter} setSearchParams={setSearchParams} searchParams={searchParams} />,5: <NftsPage  />}

    return (
        <React.Fragment>
            <div className="lg:flex bg-gradient-to-b from-[#111111] to-black bg-opacity-70 relative h-auto w-full  ">

                <div className="h-full lg:z-10 lg:sticky xl:sticky xl:top-22 lg-top-20 overflow-x-none fixed top-0  z-10  ">
                </div>

                <div className="flex flex-col gap-0  w-full relative  h-full   container--xxxlarge px-10 pl-28 sm:pl-25 md:pl-26 lg:pl-10  container--center ">

                    <div className="w-full h-auto relative   ">
                        <TabFilter setComponent={setComponent} setNftFilter={setNftFilter} page={page} setSearchParams={setSearchParams} nftFilter={nftFilter}/>
                        <Suspense fallback={
                            <>
                                <div className=" h-screen  flex justify-center items-center " >
                                    <HashLoader size={50} color="#fff" style={{ text: 'center' }} />
                                </div>
                            </>}>
                          
                        {Components[component]}
                          
                        </Suspense>
                    </div>

                </div>
            </div>

        </React.Fragment>
    );
};

export default MarketPlace;