import CardCategory1 from "../../shared/Cards/NftCards/NftsCard";
import InfoCard from "../../shared/infoCard/InfoCard";
import MiningRewardCalculator from "./components/MiningRewardCalculator/MiningRewardCalculator";
import MiningMenu from "./components/Menu/MiningMenu";
import bsc from '../../media/icons/bsc.svg'

import anime from '../../media/3d2.png'
import animation from '../../media/animation.GIF'

import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMiningData } from "./hooks/useMiningData";
import { formatEther } from "viem";

import bg from '../../media/icons/bg.png'
import bank from '../../media/icons/bank.png'
import coin from '../../media/icons/coin.png'
import time from '../../media/icons/time.png'
import clock from '../../media/icons/clock.png'

import MiningStats from "./components/MiningStats/MiningStats";
import ConnectWalletError from "../../shared/ConnectWalletError/ConnectWalletError";
import { useCorrectNetwork } from "../../hooks/useCorrectNetwork";
import { useNftBalanceOf } from "../../hooks/web3/useNftBalanceOf";

import Popup from "../../shared/popup/Popup";
import toast from "react-hot-toast";
import {  useSearchParams } from "react-router-dom";
import { setMiningPage } from "../../app/features/mining/MiningSlice";
import { unixCountDown } from "../../utils/unixToDate";
import { useGetAllMiningData } from "./hooks/useGetAllMiningData";




const NftBalance = lazy(() => import('./components/Nfts/NftBalance'))
const Bank = lazy(() => import('./components/Bank/Bank'))
const MiningSession = lazy(() => import('./components/MiningSession/MiningSession'))

const MiningHome = () => {
const [searchParams]=useSearchParams()

const dispatch = useDispatch()
const setPage =(data)=> dispatch(setMiningPage(data))
const id = searchParams.get('id')

const { address } = useSelector(state => state.session)

useEffect(()=>{
const controller = new AbortController();
id && setPage(id)
return ()=> controller.abort()
},[id])

// const data = useMiningData()
const platformData = useGetAllMiningData()


const data = platformData?.length> 0 &&  platformData[0]?.result 


const { chain, switchNetwork } = useCorrectNetwork({
    fallback: ()=> null
})

const nftWarning = ({title ,message})=> {
        toast.custom(
            (t) => (
                <Popup  show={true} t={t} title={title&&title} desc={message && message}/>
                ),
                { position: "bottom-center", duration: 2000 }
                );
            }
            
            const bankData = data?.bankData || null
            const userData = data?.userData || null
            const { page } = useSelector(state => state.mining)
            
            let components = {
        'mining-session': <MiningSession nftWarning={nftWarning} />,
        'banks': <Bank data={data}  nftWarning={nftWarning}/>,
        'miners': <NftBalance nftWarning={nftWarning} />,
        'profit-calculator': <MiningRewardCalculator  />,
    }
    
    


    const MenuNavbar = () => {

          
        const changeNetwork = ()=> {
            switchNetwork?.switchNetwork()
        }

        const NextSession = Number(userData?.miningStartTime);
        const currentTime = Math.floor(new Date().getTime() / 1000);
        return (

            <div className="w-full border-b px-5 border-neutral-700 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-xs text-white font-bold shadow-xl" >

                <div className="flex justify-between items-center flex-wrap">
                    <div className="flex ">

                        <ul className="flex justify-start items-center gap-4 py-1 wrap my-2  w-full flex-wrap ">
                            <img src={bank} alt="" className="w-9 h-9" />
                            <li className="text-white font-bold">  Bank capacity : {bankData && formatEther(bankData?.capacity) + ' tw'} </li>
                            <img src={coin} alt="" className="w-9 h-9 " /> <li className="text-white font-bold">Total Earnings : {bankData && formatEther(bankData?.funds)+ ' tw'}</li>
                            <img src={time} alt="" className="w-9 h-9" /> <li className="text-white font-bold">next Session : {currentTime >= NextSession ? <span className="p-0 m-0 text-green-500 font-bold">available now</span> : unixCountDown(NextSession) }</li>
                            <img src={clock} alt="" className="w-9 h-9" /><li className="text-white font-bold">mining speed : {userData && formatEther(userData?.miningPower) + ' tw/s'}</li>
                        </ul>
                    </div>


                    <div className="flex items-center justify-center gap-5">
                     {address &&   <p className="text-xs text-white opacity-80" > {address.slice(0,5)+'...'+address.slice(35,40)}</p>}
                        { address && chain?.id != 97 ?
                         <button onClick={changeNetwork} className="flex px-1 py-1 bg-blue-500 text-xs text-white items-center rounded-lg pag-2"> ⚠️ switch Network <img src={bsc} alt="bsc icon" className="pl-2 w-8" /></button> : null}

                    </div>
                </div>
            </div>

        )

    }




    return (
        <div className=" w-auto container--xxxlarge container--center  bg-gradient-to-r from-indigo-900 via-purple-900 to-[#3b002173] rounded-3xl opacity-90  overflow-hidden mb-40 px-5 pb-5 relative">

            {/* 
<div className="flex items-center">
<InfoCard title={'Start mining session !'}  desc={'start mining session to mine tokens , session expires in certain time'}/>
<InfoCard title={'save funds to bank !'}  desc={'save your funds to your bank after session ends'}/>
<InfoCard title={'claim!'}  desc={'claim your rewards and withdraw to your account'}/>
</div> */}
            <div className="flex rounded-xl my-5">

                <MenuNavbar />

            </div>
            <div className="grid grid-cols-2 gap-2 h-auto w-auto container--xxxlarge p-2 container--center  place-items-start place-content-start relative ">

                <div className="w-full lg:w-[45%] h-full  border border-neutral-700 bg-[#071952] rounded-xl overflow-hidden shadow-xl shadow-pink-900 ">
                    <div className=" h-auto w-full p-1">
                        <MiningMenu />
                    </div>
                    <div className="w-full flex justify-center items-center  relative gap-10  ">
                    </div>
                    <div className="flex items-center justify-center relative   ">
                        <img src={bg} alt="" className="absolute w-full h-full opacity-20 object-fit z-0 " />

                        {address ?
                            <div className="z-10 w-full g-full p-2">

                                {components[page] && platformData?.length>0 ? components[page] : <h5>somethings went wrong ... please refresh</h5>}
                            </div> : <ConnectWalletError />
                        }
                    </div>
                    <div className="m-0 p-0 flex flex-col gap-1 my-5 mx-2  ">
                        {/* <h1 className="m-0 p-0">bobobob</h1> */}
                    </div>
                </div>
                { data && platformData[0] ? 
                 <MiningStats /> 
                 : 
                 null
                 }

            </div>
        </div>
    )


}


export default MiningHome