
import { lazy, useState } from "react";
import { Suspense } from "react";
import AccordionTabs from "../../../../../shared/AccordionTabs/AccordionTabs";
import { nftFaq } from "./Contribute/data";
import Discount from "./Contribute/Discount";
import { useSwitchNetwork } from "wagmi";
import { useNetwork } from "wagmi";
const MintNft = lazy(() => import('./Contribute/MintNft'))


const MintPage = () => {

    const [bnb, setBNB] = useState(0.1)
    const { chain } = useNetwork()

    const { chains, error, isLoading, pendingChainId, switchNetwork } =
        useSwitchNetwork()

    console.log(chain)

    const RenderLeftMenu = () => {


        return (
            <>
                <h3 className="text-left my-2 p-0 border-b border-neutral-800 w-full rounded-2xl px-5 pb-2 text-pink-600 font-bold text-xl ">Need Help ? <span className="m-0 pl-5 text-neutral-400 text-base ">Faq concerning sale Stages : </span>  </h3>
                <AccordionTabs data={nftFaq} />
            </>
        )
    }


    return (




    //     <div className="flex rounded-xl my-5">
    //         <MenuNavbar />
    //     </div>
        
    //     <div className="grid grid-cols-2 gap-2 h-auto w-auto container--xxxlarge p-2 container--center  place-items-start place-content-start relative ">

    //         <div className="w-full lg:w-[45%] h-full  border border-neutral-700 bg-[#071952] rounded-xl overflow-hidden shadow-xl shadow-pink-900 ">
    //             <div className=" h-auto w-full p-1">
    //                 <MiningMenu />
                    
    //             </div>
    //             <div className="w-full flex justify-center items-center  relative gap-10  ">
    //             </div>
    //             <div className="flex items-center justify-center relative   ">
    //                 <img src={bg} alt="" className="absolute w-full h-full opacity-20 object-fit z-0 " />

    //                 {address ?
    //                     <div className="z-10 w-full g-full p-2">

    //                         {components[page] && data ? components[page] : <h5>somethings went wrong ... please refresh</h5>}
    //                     </div> : <ConnectWalletError />
    //                 }
    //             </div>
    //             <div className="m-0 p-0 flex flex-col gap-1 my-5 mx-2  ">
    //                 {/* <h1 className="m-0 p-0">bobobob</h1> */}
    //             </div>
    //         </div>
    //         {data ?
    //             <MiningStats />
    //             :
    //             null
    //         }

    //     </div>

        
    // </div>


    <div className=" w-auto container--xxxlarge container--center  bg-gradient-to-r from-indigo-900 via-purple-900 to-[#3b002173] rounded-3xl opacity-90  overflow-hidden mb-20 px-5 pb-5 relative">

            <div className="grid grid-cols-2 gap-10  w-auto container--xxxlarge px-5 container--center  place-items-center place-content-start relative   ">
                {/* {<MenuStats />} */}
                {/* <ul className="flex justify-start gap-10 py-2 wrap my-2  w-full border-b border-neutral-800  rounded-xl text-sm text-neutral-400">
                        <li>Total purchased Tokens : 0</li>
                        <li>Totla Assets Value : 0</li>
                        <li>Address:</li>
                    </ul> */}
         <div className="w-full lg:w-[48%]   border border-purple-500  rounded-xl overflow-hidden flex items-center justify-center h-full ">

                    <Suspense fallback='loading ...' >
                        <MintNft />
                    </Suspense>

                </div>
                <div className="w-full lg:w-[45%] h-full my-5">
                    <div className="w-full flex justify-center items-center overflow-clip relative gap-5 ">
                    </div>
                    <div className="m-0 p-0 flex flex-col gap-1">


                        <Discount />
                        <RenderLeftMenu />
                    </div>
                </div>
            </div>
        </div>



    )

}

export default MintPage