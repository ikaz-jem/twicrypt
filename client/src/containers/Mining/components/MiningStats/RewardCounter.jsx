import { useEffect, useState } from "react";
import { useCalculateRewards } from "../../hooks/useCalculateRewards";

import { useSessionData } from "../../hooks/useSessionData";

import { useSelector } from "react-redux";
import { formatEther } from "viem";
import { unixCountDown, unixToDate } from "../../../../utils/unixToDate";



const RewardCounter = () => {
    const [counter, setCounter] = useState(0)
    const [reward, setReward] = useState(0)
    
    const ddd = useCalculateRewards()
    // const event = useWatchMiningStart()
    const {address}=useSelector(state=>state.session)
    
    
    const miningData = useSelector(state=>state.mining.session)
    const userPower = Number(miningData?.userData?.miningPower) ;
    const startTime = Number(miningData?.userData?.lastMiningSession) ;
    const endTime = Number(miningData?.userData?.miningEndTime) ;
    
    const NextSession = Number(miningData?.userData?.miningStartTime) ; // next mining session start time after write
    
    const totalMined = Number(miningData?.userData?.earnedRewards)
    const currentTime = Math.floor(new Date().getTime() / 1000);
    
    const sessionDuration = endTime - startTime;
    const totalSessionRewards = sessionDuration * userPower ;
    const realtimeReward = (currentTime - startTime) * userPower
    const miningSpeed = (totalSessionRewards / (sessionDuration))

    let sessionStartIn = NextSession - currentTime

    const [countdown,setCountdown]=useState(sessionStartIn);


    const calculate = () => {
        if (endTime <= currentTime) {
            // console.log('mining time ended')
            return formatEther(totalSessionRewards)
        } else {
            
            return (reward).toFixed(4)
        }
    }


    useEffect(() => {
        const interval = setInterval(() => {
            if(currentTime<=endTime ){

                setReward(Number(realtimeReward))
            } else {
                setReward(0)
               setCountdown(sessionStartIn)
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [counter, currentTime])



    const renderStats = ()=> {
      return  <>
        <div className="flex gap-2 items-center">


        <p className="font-bold text-md text-white">mining :</p>
       { sessionStartIn <= 0  || endTime > currentTime ? <p className="font-bold text-lg text-pink-600">{formatEther(reward)} tw</p> : <p className="text-orange-500">session Ended come back when new session is available!</p> }
    </div>
    <div className="flex gap-2 items-center">
        <p className="font-bold text-md text-white">total mined :</p>
        <p className="font-bold text-lg text-pink-600">{formatEther(totalMined)} tw</p>
    </div>


    <div className="flex gap-2 items-center">
        <p className="font-bold text-md text-white">estimated earnings  :</p>
        <p className="font-bold text-lg text-pink-600">{formatEther(totalSessionRewards)} Tw Tokens / session</p>

    </div>
    <div className="flex gap-2 items-center">
        <p className="font-bold text-md text-white">mining speed/power :</p>
        <p className="font-bold text-lg text-pink-600" >{Number(formatEther(miningSpeed)).toFixed(4)}tw/s</p>
    </div>
        </>

    }


    return (
        <div className="flex w-full h-full flex-col border border-[#610044] m-5 rounded-xl bg-[#00000070] text-xs p-5 shadow-lg">
<div className="flex flex-col gap-2">
    
<div className="flex gap-5">
<p>next session : </p>

    <p>{ unixToDate( NextSession)   } </p>
</div>
<div className="flex gap-5">
<p>countdown to next session : </p>

    <p> {currentTime <= NextSession && endTime <= currentTime ? unixCountDown(countdown) : 'mining session available'    } </p>
</div>

</div>

{renderStats()}

<div className="flex py-2">

            <p className="text-xs text-pink-200">{address}</p>
</div>
        </div>


    )

}

export default RewardCounter