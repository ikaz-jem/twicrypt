import { useEffect, useState } from "react";
import { useCalculateRewards } from '../hooks/useCalculateRewards'
import { useSessionData } from "../hooks/useSessionData";
import { bigIntToFormated } from "../../../utils/web3Functions";
import { unixToDate } from "../../../utils/unixToDate";
import { useWatchMiningStart } from "../hooks/Listeners/useWatchMiningStart";
import { useSelector } from "react-redux";



const RewardCounter = () => {
    const [counter, setCounter] = useState(0)
    const [reward, setReward] = useState(0)

    const { data, startTime, endTime, rate, currentTime, totalSessionRewards, realtimeReward } = useCalculateRewards()

    // const event = useWatchMiningStart()
const {address}=useSelector(state=>state.session)

    const calculate = () => {

        if (endTime <= currentTime) {
            // console.log('mining time ended')
            return totalSessionRewards
        } else {
            // console.log('mining ...')
            return reward.toFixed(4)
        }

    }

    useEffect(() => {

        const interval = setInterval(() => {

            setReward(Number(realtimeReward))
        }, 1000)
        return () => clearInterval(interval)

    }, [counter, realtimeReward])

    return (
        <div className="flex w-full h-full flex-col border border-[#610044] m-5 rounded-xl bg-[#00000070] text-xs p-5 shadow-lg">

            <div className="flex gap-2 items-center">
                <p className="font-bold text-md text-white">total mined :</p>
                <p className="font-bold text-lg text-pink-600">{calculate()} tw</p>
            </div>


            <div className="flex gap-2 items-center">
                <p className="font-bold text-md text-white">estimated session length rewards :</p>
                <p className="font-bold text-lg text-pink-600">{totalSessionRewards} Tw Tokens</p>

            </div>
            <div className="flex gap-2 items-center">
                <p className="font-bold text-md text-white">mining speed :</p>
                <p className="font-bold text-lg text-pink-600" >0.02 tw/s</p>
            </div>

<div className="flex py-2">

            <p className="text-xs text-pink-200">{address}</p>
</div>
        </div>


    )

}

export default RewardCounter