import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import { Link } from 'react-router-dom';
import NftsCard from "../../Earn/components/NftCards/NftsCard";
import NftSlider from "../../Earn/components/NftSlider/NftSlider";
import { HashLoader } from 'react-spinners';


import ButtonPrimary from "../../../shared/Button/ButtonPrimary";
import { useDispatch, useSelector } from 'react-redux'

import { getCarouselData } from "../../../app/features/carousel/carouselThunks"; 
import { fetchedCarouselData } from "../../../app/features/carousel/carouselSlice";
import { useGetListing } from "../hooks/web3Hooks/Listing/useGetListings";

const NftSliderCat2 = React.lazy(() => import("../../Earn/components/NftSlider/NftSliderCat2"));



const AllListings = ({ className = "" }) => {

    const dispatch = useDispatch()
    const Nfts = useSelector(fetchedCarouselData)
    const listings = useSelector(state=>state.marketPlace.allListings)

    const {isLoading,hasError} = useGetListing()


    //fetch api data
    useEffect(() => {
        var controller = new AbortController();
        dispatch(getCarouselData())
        return (() => {
            controller.abort()
        })
    }, [])


    const Sliders = () => {
        let { data } = false


        return (
            <>

                {!listings  ?

                    <div className="  h-40 flex relative" >
                        <HashLoader size={50} color="#fff" style={{ text: 'center' }} />
                        <p className="text-whie">Loading data ...</p>
                    </div>
                    :

                    <div>
                        <div className="flex justify-between overflow-visible ">
                            <h3 className="text-left my-2 p-0 border-b border-neutral-800 w-auto pb-2 text-pink-600 font-bold text-xl ">Rare NFTS <span className="m-0 pl-5 text-neutral-400 text-base ">Highest Reward Nfts</span>  </h3>
                            <ButtonPrimary className="w-auto">Get your chance  !</ButtonPrimary>
                        </div>
                        {
                            <Suspense fallback={
                                <>
                                    <div className=" h-full  flex justify-center items-center " >
                                        <HashLoader size={50} color="#fff" style={{ text: 'center' }} />
                                    </div>
                                </>}>
                                <NftSliderCat2 data={listings} />
                            </Suspense>
                        }



                        <div className="flex justify-between ">
                            <h3 className="text-left font-bold text-xl my-2 p-0 border-b border-neutral-800 w-full text-pink-600 pb-2">Collections <span className="m-0 pl-5 text-neutral-400 text-base ">Newest collections</span>  </h3>
                        </div>
                        {<NftSlider data={listings && listings} />}
                        <h3 className="text-left my-2 p-0 border-b  border-neutral-800 w-full text-pink-600 font-bold text-xl pb-2">All Arts <span className="m-0 pl-5 text-neutral-400 text-base ">Twicrypt Nfts</span>  </h3>
                    </div>
                }
            </>)
    }


    const RenderCards = () => {
        // const { isLoading, data=false } = Nfts
        let { data } = Nfts


        return (
            <>
                {!data  ?

                    <div className="  h-40 flex relative" >
                        <HashLoader size={50} color="#fff" style={{ text: 'center' }} />
                        <p className="text-whie">Getting All Nfts data ...</p>
                    </div>
                    :
                    data?.map((item, index) => (
                        <NftsCard data={item} key={index} />
                    ))


                }
            </>
        )
    }


    return (
        <div className="container--xxxlarge flex justify-center items-center   ">
            <main>
                {/* FILTER */}
                <div className="flex items-center justify-around ">
                    <div className="align-center justify-start  ">

                        {
                            
                            <Link to='./create'>
                                {/* <ButtonPrimary>Mint To Earn Now !</ButtonPrimary> */}
                            </Link>
                        }
                    </div>
                </div>
                {/* <hr className=" mt-5 mb-5 border-slate-700 " /> */}
                <div className="flex flex-col  gap-10  w-auto h-auto items-center justify-center   ">
                    <Sliders />
                    <div className="grid gap-10 place-content-center">

                        <RenderCards />
                    </div>
                </div>
                {/* PAGINATION */}
                <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
                    {/* <Pagination />
            <ButtonPrimary loading>Show me more</ButtonPrimary> */}
                </div>
            </main>
            <hr className="border-slate-200 dark:border-slate-700" />
        </div>
    );
};

export default AllListings;