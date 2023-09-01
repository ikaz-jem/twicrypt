import React, { useState } from "react";
import { Suspense } from "react";
import { HashLoader } from 'react-spinners';


import TabFilter from "./TabFilter/TabFilter";

//pages
import NftsPage from "../Earn/components/Nfts/NftsPage";



const MarketPlace = ({ className = "" }) => {
    const [component, setComponent] = useState(1)

    const Components = {1: <NftsPage />,2: <NftsPage />,3: <NftsPage />,4: <NftsPage />,5: <NftsPage />}

    return (
        <React.Fragment>
            <div className="lg:flex bg-gradient-to-b from-[#111111] to-black bg-opacity-70 relative h-auto w-full  ">

                <div className="h-full lg:z-10 lg:sticky xl:sticky xl:top-22 lg-top-20 overflow-x-none fixed top-0  z-10  ">
                </div>

                <div className="flex flex-col gap-0  w-full relative  h-full   container--xxxlarge px-10 pl-28 sm:pl-25 md:pl-26 lg:pl-10  container--center ">

                    <div className="w-full h-auto relative   ">
                        <TabFilter setComponent={setComponent} />
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