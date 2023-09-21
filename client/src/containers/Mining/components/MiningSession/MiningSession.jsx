import Disclamer from "../../../../shared/Disclamer/Disclaimer"
import { AiOutlineBank } from 'react-icons/ai'
import { BiTime } from 'react-icons/bi'
import { BsPiggyBank, BsSpeedometer2 } from 'react-icons/bs'
import { useSessionData } from "../../hooks/useSessionData"
import { UseStartSession } from "../../../../hooks/useConnectUser"
import { useStartMining } from "../../hooks/useStartMining"
import { useClaimBank } from "../../hooks/useClaimBank"
import RewardCounter from "../RewardCounter"

const MiningSession = () => {


  // const miningSessionData = useSessionData()

const startMining = useStartMining()
const claimBank = useClaimBank();

const handleClick = ()=>{
  startMining.write()
}
const handleClaimBank = ()=>{
  claimBank.write()
}

    return (
        <div className="w-full h-full  bg-neutral-900 py-5">
            <div className="px-10 opacity-50">
                <Disclamer message={'before starting a new session send tokens to bank otherwise they will be lost ! '}></Disclamer>
                <RewardCounter/>

            </div>
         
<div className="flex flex-wrap gap-2 px-5 justify-center my-2">

    <div className="w-24 h-24  border border-neutral-700 flex flex-col rounded-xl items-center justify-center">
    <AiOutlineBank className="text-white text-2xl" />
      <p className="text-xs text-neutral-500">bank</p>
    </div>
    <div className="w-24 h-24 border border-neutral-700 flex flex-col rounded-xl items-center justify-center">
    <BsPiggyBank className="text-white text-2xl" />
      <p className="text-xs text-neutral-500">accumulated</p>
    </div>
    <div className="w-24 h-24 border border-neutral-700 flex flex-col rounded-xl items-center justify-center">
    <BsSpeedometer2 className="text-white text-2xl" />
      <p className="text-xs text-neutral-500">speed</p>
    </div>
    <div className="w-24 h-24 border border-neutral-700 flex flex-col rounded-xl items-center justify-center">
    <BiTime className="text-white text-2xl" />
      <p className="text-xs text-neutral-500">speed</p>
    </div>
    <div className="w-24 h-24 border border-neutral-700 flex flex-col rounded-xl items-center justify-center">
    <AiOutlineBank className="text-white text-2xl" />
      <p className="text-xs text-neutral-500">speed</p>
    </div>



</div>

            <div className="flex justify-between px-5 py-5">

            <div className="flex flex-col gap-1 ">
                <p className="font-bold" >Mining Session Available</p>
                <p className="font-bold" >Mining Session Available</p>
            </div>

                <div className="flex flex-col gap-1">

                <button onClick={handleClick} className=" rounded-lg px-5 py-2 bg-blue-500 hover:bg-neutral-200 hover:text-black transition-all duration-300 text-xs">Start mining</button>
                <button  className=" rounded-lg px-5 py-2 bg-orange-500 hover:bg-neutral-200 hover:text-black transition-all duration-300 text-xs">send to bank</button>
                <button onClick={handleClaimBank} className=" rounded-lg px-5 py-2 bg-orange-500 hover:bg-neutral-200 hover:text-black transition-all duration-300 text-xs">Claim free Bank</button>
                </div>

            </div>
        </div>

    )
}

export default MiningSession