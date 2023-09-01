
import MenuTopLinks from "../Earn/components/MenuTopLink/MenuTopLinks";
import SaleStagesCards from "./SaleStages/SaleStagesCards";
import AccordionTabs from "../../shared/AccordionTabs/AccordionTabs";
import MenuStats from "../../shared/MenuStats/MenuStats";
import { lazy, Suspense } from "react";

const Contribute = lazy(() => import('./Contribute/Contribute'))

const TokenSale = () => {

    return (
        <div className=" w-auto container--xxxlarge p-0 container--center ">
            <SaleStagesCards />
            <div className="grid grid-cols-2 gap-10  w-auto container--xxxlarge px-5 container--center  place-items-start place-content-start relative   ">
                {<MenuStats />}
                {/* <ul className="flex justify-start gap-10 py-2 wrap my-2  w-full border-b border-neutral-800  rounded-xl text-sm text-neutral-400">
                        <li>Total purchased Tokens : 0</li>
                        <li>Totla Assets Value : 0</li>
                        <li>Address:</li>
                    </ul> */}
                <div className="w-full lg:w-[45%] h-full my-5">
                    <div className="w-full flex justify-center items-center overflow-clip relative gap-10  ">
                    </div>
                    <div className="m-0 p-0 flex flex-col gap-1">
                        <h3 className="text-left my-2 p-0 border-b border-neutral-800 w-full rounded-2xl px-5 pb-2 text-pink-600 font-bold text-xl ">Need Help ? <span className="m-0 pl-5 text-neutral-400 text-base ">Faq concerning sale Stages : </span>  </h3>

                        <AccordionTabs />
                    </div>
                </div>
                <div className=" w-full lg:w-[50%] ">
                    
                    <Suspense fallback='loading ...' >
                        <Contribute />
                    </Suspense>

                </div>
            </div>
        </div>
    )

}

export default TokenSale