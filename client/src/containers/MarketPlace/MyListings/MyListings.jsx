import React from "react";
import NftsCard from "../../Earn/components/NftCards/NftsCard";
import { HashLoader } from 'react-spinners';


import { useDispatch, useSelector } from 'react-redux'

import { fetchedCarouselData } from "../../../app/features/carousel/carouselSlice";




const MyListings = ({ className = "" }) => {
    const Nfts = useSelector(fetchedCarouselData)

    //fetch api data
   




    const RenderCards = () => {
        // const { isLoading, data=false } = Nfts
        let { data } = Nfts


        return (
            <>
                {!data ?

                    <div className="  h-40 flex relative" >
                        <HashLoader size={50} color="#fff" style={{ text: 'center' }} />
                        <p className="text-whie">Getting All Nfts data ...</p>
                    </div>
                    :
                    data.map((item, index) => (
                        <NftsCard data={item} key={index} />
                    ))


                }
            </>
        )
    }


    return (
        <div className="container--xxxlarge flex justify-center items-center   ">
            <main>
                <h1>My listings</h1>
                {/* FILTER */}
                <div className="flex items-center justify-around ">
                    <div className="align-center justify-start  ">
                    

                    </div>
                </div>
                {/* <hr className=" mt-5 mb-5 border-slate-700 " /> */}
                <div className="flex flex-col  gap-10  w-auto h-auto items-center justify-center   ">
                    {/* <Sliders /> */}
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

export default MyListings;