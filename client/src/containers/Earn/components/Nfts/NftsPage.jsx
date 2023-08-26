import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom';

import NftsCard from '../NftCards/NftsCard'
import NftSlider from "../NftSlider/NftSlider";

import axios from "axios";


import ButtonPrimary from "../../../../shared/Button/ButtonPrimary";


const NftsPage = ({ className = "" }) => {
    const [Nfts, setNfts] = useState('')







    //fetch api data


    const fetchNfts = async () => {

        const response = await axios.get('https://dummyjson.com/products').then((res) => {
            return res.data.products
        })
        setNfts(response)
        return response
    }


    useEffect(() => {

        fetchNfts();
    }, [])


  


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

                    {/* {<LaunchpadSearchFilter setSearchParams={setQuery} /> } */}

                    {/* LOOP ITEMS */}
                    {/* <div className="grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10 overflow-hidden">
            {PRODUCTS.map((item, index) => (
                <ProductCard data={item} key={index}  />
                ))}
            </div> */}
                    <div className="grid grid-cols-3 gap-10  w-auto h-auto place-content-center   ">
                        <div>
<div className="flex justify-between ">

            <h3 className="text-left my-2 p-0 border-b border-neutral-700 w-auto">Collections <span className="m-0 pl-5 text-neutral-400 text-xl">Newest collections</span>  </h3>
                                    <ButtonPrimary className="w-auto">Mint  !</ButtonPrimary>
</div>
            <NftSlider data={Nfts}/>

                        <h3 className="text-left my-2 p-0 border-b  border-neutral-700 w-full">All Arts <span className="m-0 pl-5 text-neutral-400 text-xl">Twicrypt Nfts</span>  </h3>
                        </div>

                        {Nfts && Nfts.map((item, index) => (
                            <NftsCard data={item} key={index} />
                        ))}
                    </div>

                    {/* PAGINATION */}
                    <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
                        {/* <Pagination />
            <ButtonPrimary loading>Show me more</ButtonPrimary> */}
                    </div>
                </main>
                <hr className="border-slate-200 dark:border-slate-700" />

                {/* === SECTION 5 === 
        <SectionSliderCollections />
        <hr className="border-slate-200 dark:border-slate-700" />
      */}




                {/* SUBCRIBES 
        
        <SectionPromo1 /> 
        */}


        

        </div>
    );
};

export default NftsPage;
