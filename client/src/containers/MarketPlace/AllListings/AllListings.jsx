import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import NftsCard from "../../Earn/components/NftCards/NftsCard";
import { HashLoader } from 'react-spinners';


import { useDispatch, useSelector } from 'react-redux'

import { getCarouselData } from "../../../app/features/carousel/carouselThunks"; 

import MarketplaceSliders from "./MarketplaceSliders";


const NftSliderCat2 = React.lazy(() => import("../../Earn/components/NftSlider/NftSliderCat2"));



const AllListings = ({ className = "" }) => {

    const dispatch = useDispatch()

    const listings = useSelector(state=>state.marketPlace.allListings)

    // const {isLoading,hasError} = useGetListing()

    //fetch api data
    useEffect(() => {
        var controller = new AbortController();
        dispatch(getCarouselData())
        return (() => {
            controller.abort()
        })
    }, [])


    

    const RenderCards = () => {
        // const { isLoading, data=false } = Nfts
        let  data  = listings?.listings || []

        const random = Math.floor(Math.random()*500)


        const Nfts = [
            ...data ,
           {
           name: 'Twicrypt Demo',
           tokenId:random+256,
           price:random+256*100000000000000000,
           image:`https://api.twicrypt.com/eth/img/${random+265}.png`,
           metadata_url:`https://api.twicrypt.com/eth/metadata/${random+256}.json`
           
           },
           {
           name: 'Twicrypt Demo',
           tokenId:random+69,
           price:random+69*100000000000000000,
           image:`https://api.twicrypt.com/eth/img/${random+69}.png`,
           metadata_url:`https://api.twicrypt.com/eth/metadata/${random+69}.json`
           
           },
           {
           name: 'Twicrypt Demo',
           tokenId:random+96,
           price:random+96*100000000000000000,
           image:`https://api.twicrypt.com/eth/img/${random+96}.png`,
           metadata_url:`https://api.twicrypt.com/eth/metadata/${random+96}.json`
           
           },
           {
           name: 'Twicrypt Demo',
           tokenId:random+369,
           price:random+369*100000000000000000,
           image:`https://api.twicrypt.com/eth/img/${random+369}.png`,
           metadata_url:`https://api.twicrypt.com/eth/metadata/${random+369}.json`
           
           },
           {
           name: 'Twicrypt Demo',
           tokenId:random,
           price:random*100000000000000000,
           image:`https://api.twicrypt.com/eth/img/${random}.png`,
           metadata_url:`https://api.twicrypt.com/eth/metadata/${random}.json`
           }
           
           ]


        return (
            <>
                {!data  ?
                    <div className="  h-40 flex relative" >
                        <HashLoader size={50} color="#fff" style={{ text: 'center' }} />
                        <p className="text-whie">Getting All Nfts data ...</p>
                    </div>
                    :
                    Nfts?.map((item, index) => (
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
                    <MarketplaceSliders />
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