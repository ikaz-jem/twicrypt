import CardCategory1 from "../../shared/Cards/NftCards/NftsCard";
import InfoCard from "../../shared/infoCard/InfoCard";
import { useGetMintedNfts } from "./hooks/useGetMintedNfts";
import { nft_contract } from "../MarketPlace/data/Addresses";
import MiningRewardCalculator from "./components/MiningRewardCalculator/MiningRewardCalculator";
import RewardCounter from "./components/RewardCounter";
import MiningMenu from "./components/Menu/MiningMenu";

import anime from '../../media/3d2.png'
import animation from '../../media/animation.GIF'
//icones
import { AiOutlineBank } from 'react-icons/ai'
import { BsPiggyBank, BsSpeedometer2 } from 'react-icons/bs'


import { lazy, useState } from "react";
import { useSelector } from "react-redux";
import { useMiningData } from "./hooks/useMiningData";


const NftBalance = lazy (()=> import('./components/Nfts/NftBalance' ))
const Bank = lazy (()=> import('./components/Bank/Bank' ))
const MiningSession = lazy (()=> import('./components/MiningSession/MiningSession' ))



const MiningHome = () => {

    const {page}=useSelector(state=>state.mining)


let components={
'mining-session': <MiningSession/>,
'my-bank': <Bank/>,
'my-nft':  <NftBalance/>,
'profit-calculator': <MiningRewardCalculator/>,

}
 

const data = useMiningData()

const bankData = data?.data?.bankData || null
const userData = data?.data?.userData || null


    const RenderMiningSession = () => {

        return (

            <div className=" w-full lg:w-[52%] border border-neutral-700 h-auto rounded-xl ">
                {/* <Contribute /> */}
                <div className="flex items-center justify-center flex-col">

                <h1 className="m-0 p-0 ">start mining session now !</h1>
                <img src={anime} alt="" className="w-[50%]" />
                </div>

            </div>


        )


    }







    return (
        <div className=" w-auto container--xxxlarge container--center  bg-[#222831] rounded-3xl overflow-hidden mb-40 px-5 pb-5">
            {/* 
<div className="flex items-center">

<InfoCard title={'Start mining session !'}  desc={'start mining session to mine tokens , session expires in certain time'}/>
<InfoCard title={'save funds to bank !'}  desc={'save your funds to your bank after session ends'}/>
<InfoCard title={'claim!'}  desc={'claim your rewards and withdraw to your account'}/>
</div> */}

            <div className="flex rounded-xl m-5">
                <ul className="flex justify-start items-center gap-5 py-1 wrap my-2  w-full border-b border-neutral-700 rounded-xl text-xs text-white font-bold">
                    <AiOutlineBank className="text-white text-2xl" /> <li>  Bank capacity : {0} </li>
                    <BsPiggyBank className="text-white text-2xl" />  <li>Total Earnings: 0</li>
                    <AiOutlineBank className="text-white text-2xl" /> <li>next Session: 23</li>
                    <BsSpeedometer2 className="text-white text-2xl" />   <li>mining speed: 23</li>
                </ul>
            </div>

            <div className="grid grid-cols-2 gap-2 h-auto w-auto container--xxxlarge p-2 container--center  place-items-start place-content-start relative rounded-2xl bg-[#393E46] ">

                <div className="w-full lg:w-[45%] h-full  border border-neutral-700 bg-[#071952] rounded-xl overflow-hidden shadow-xl ">
                    <div className=" h-auto w-full">
                        <MiningMenu />
                    </div>
                    <div className="w-full flex justify-center items-center  relative gap-10  ">
                    </div>

                    <div className="flex items-center justify-center   ">
                   

{
    components[page]
}

                    </div>

                    <div className="m-0 p-0 flex flex-col gap-1 my-5 mx-2 ">
                        <h1 className="m-0 p-0">empty</h1>
                    </div>

                </div>

                <RenderMiningSession />
            </div>
        </div>
    )


}


export default MiningHome