import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import { Link } from 'react-router-dom';
import NftsCard from '../NftCards/NftsCard'
import NftSlider from "../NftSlider/NftSlider";

import { HashLoader } from 'react-spinners';


import ButtonPrimary from "../../../../shared/Button/ButtonPrimary";
import { useDispatch, useSelector } from 'react-redux'

import { getCarouselData } from "../../../../app/features/carousel/carouselThunks";
import { fetchedCarouselData } from "../../../../app/features/carousel/carouselSlice";


const NftSliderCat2 = React.lazy(() => import("../NftSlider/NftSliderCat2"));



const NftsPage = ({ className = "" }) => {
    const dispatch = useDispatch()
    const Nfts = useSelector(fetchedCarouselData)

    //fetch api data
    useEffect(() => {
        var controller = new AbortController();
        dispatch(getCarouselData())
        return (() => {
            controller.abort()
        })
    }, [])


    const Sliders = () => {
        return (
            <>
                <div>
                    <div className="flex justify-between overflow-visible ">
                        <h3 className="text-left my-2 p-0 border-b border-neutral-800 w-auto pb-2 text-pink-600 font-bold text-xl ">Rare NFTS <span className="m-0 pl-5 text-neutral-400 text-base ">Highest Reward Nfts</span>  </h3>
                        <ButtonPrimary className="w-auto">Get your chance  !</ButtonPrimary>
                    </div>
                    {
                        <Suspense fallback={
                            <>
                                <div className=" h-screen  flex justify-center items-center " >
                                    <HashLoader size={50} color="#fff" style={{ text: 'center' }} />
                                </div>
                            </>}>
                            <NftSliderCat2 />
                        </Suspense>
                    }
                    <div className="flex justify-between ">
                        <h3 className="text-left font-bold text-xl my-2 p-0 border-b border-neutral-800 w-full text-pink-600 pb-2">Collections <span className="m-0 pl-5 text-neutral-400 text-base ">Newest collections</span>  </h3>
                       
                    </div>
                    {<NftSlider data={Nfts.data} />}
                    <h3 className="text-left my-2 p-0 border-b  border-neutral-800 w-full text-pink-600 font-bold text-xl pb-2">All Arts <span className="m-0 pl-5 text-neutral-400 text-base ">Twicrypt Nfts</span>  </h3>
                </div>
            </>)
    }


    const RenderCards = () => {
        const { isLoading, data } = Nfts
        return (
            <>
                {!data ?

                    <div className=" h-screen  flex justify-center items-center " >
                        <HashLoader size={50} color="#fff" style={{ text: 'center' }} />
                    </div>
                    :
                    data.map((item, index) => (
                        <NftsCard data={item} key={index} />
                    ))}
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
                <div className="grid grid-cols-3 gap-10  w-auto h-auto place-content-center   ">
                    <Sliders />
                    <RenderCards />
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

export default NftsPage;