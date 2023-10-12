
import { lazy, useState } from "react";
import { Suspense } from "react";
import AccordionTabs from "../../../../../shared/AccordionTabs/AccordionTabs";
import { nftFaq } from "./Contribute/data";
import Discount from "./Contribute/Discount";
import { useBalance, useSwitchNetwork } from "wagmi";
import { useNetwork } from "wagmi";
import {useParams} from 'react-router-dom'

import Spinner from "../../../../../shared/Spinner/Spinner";
import Referrals from "./Referrals/Referrals";
import { useGetMinterStats } from "../hooks/useGetMinterStats";





const MintNft = lazy(() => import('./Contribute/MintNft'))



const MintPage = () => {
    
    const [bnb, setBNB] = useState(0.1)
    const { chain } = useNetwork()
    
    const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()
    
    const {address={}} = useParams();


    const referralStats = useGetMinterStats()
  



    const RenderLeftMenu = () => {

        return (
            <>
                <h3 className="text-left my-2 p-0 border-b border-purple-700 w-full rounded-2xl px-5 pb-2 text-pink-600 font-bold text-xl ">Need Help ? <span className="m-0 pl-5 text-neutral-400 text-base ">Faq concerning sale Stages : </span>  </h3>
                <AccordionTabs data={nftFaq} />
            </>
        )
    }


    return (


    <div className=" w-auto container--xxxlarge container--center  bg-gradient-to-r from-indigo-900 via-purple-900 to-[#3b002173] rounded-3xl opacity-90  overflow-hidden mb-20 mt-10 px-5 py-10 relative">

            <div className="grid grid-cols-2 gap-10  w-auto container--xxxlarge px-5 container--center  place-items-start place-content-start relative   ">
                {/* {<MenuStats />} */}
                {/* <ul className="flex justify-start gap-10 py-2 wrap my-2  w-full border-b border-neutral-800  rounded-xl text-sm text-neutral-400">
                        <li>Total purchased Tokens : 0</li>
                        <li>Totla Assets Value : 0</li>
                        <li>Address:</li>
                    </ul> */}
         <div className="w-full lg:w-[48%]   border border-purple-500  rounded-xl overflow-hidden flex items-center justify-center h-full ">

                    <Suspense fallback={
                        <div className="w-full h-full" >
                            <Spinner message={'loading minting dapp ...'} />

                        </div>
                    } >
                        <MintNft data={referralStats}/>
                    </Suspense>

                </div>
                <div className="w-full lg:w-[45%] h-full    ">
                    <div className="w-full flex justify-center items-center overflow-clip relative gap-5 ">
                    </div>
                    <div className="m-0 p-0 flex flex-col gap-1">

                    <h3 className="text-left my-2 p-0 border-b border-purple-700 w-full rounded-2xl px-5 pb-2 text-yellow-500 font-bold text-xl ">twicrypt affiliate program<span className="m-0 pl-5 text-neutral-200 text-base ">up to 10% each sale : </span>  </h3>

                        {/* <Discount /> */}
                        <Referrals data={referralStats} />
                        <RenderLeftMenu />
                    </div>
                </div>
            </div>
        </div>



    )

}

export default MintPage