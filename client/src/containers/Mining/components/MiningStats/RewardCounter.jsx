import { useEffect, useState } from "react";
import { useCalculateRewards } from "../../hooks/useCalculateRewards";

import { useSessionData } from "../../hooks/useSessionData";

import { useSelector } from "react-redux";
import { formatEther } from "viem";
import { unixCountDown, unixToDate } from "../../../../utils/unixToDate";
import { userData } from "../../../../app/features/session/sessionSlice";
import { toFormated } from "../../../../utils/web3Functions";



const RewardCounter = () => {
    const [counter, setCounter] = useState(0)
    const [reward, setReward] = useState(0)


    // const event = useWatchMiningStart()
    const { address } = useSelector(state => state.session)

    const sessionData = useSelector(state => state.mining.session)
    const allData = useSelector(state => state.mining)

    const miningStats = allData?.stats?.result || []


    const miningData = sessionData?.result
    
    const totalSessions= miningData?.userData?.totalSessions
    
    const startTime = Number(miningData?.userData?.lastMiningSession);
    const endTime = Number(miningData?.userData?.miningEndTime);
    const NextSession = Number(miningData?.userData?.miningStartTime); // next mining session start time after write
    const userPower = Number(miningData?.userData?.miningPower);
    
    const totalMined = Number(miningData?.userData?.earnedRewards)
    const currentTime = Math.floor(new Date().getTime() / 1000);

    const sessionLength = endTime - startTime;
    const totalSessionRewards = Number(sessionLength) * formatEther(userPower);
    const realtimeReward = (currentTime - startTime) * userPower
    const miningSpeed = isNaN((totalSessionRewards / (sessionLength))) ? 0 : (totalSessionRewards / (sessionLength))

    let sessionStartIn = NextSession - currentTime

    const [countdown, setCountdown] = useState(sessionStartIn);



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
            if (currentTime <= endTime) {

                setReward(Number(realtimeReward))
            } else {
                setReward(0)
                setCountdown(sessionStartIn)
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [counter, currentTime])


    const renderStats = () => {
        return <>
            <div className="flex gap-2 items-center">
                <p className="font-bold text-xs text-green-500">mining session available </p>
            </div>
            <div className="flex gap-2 items-center">

                <p className="font-bold text-xs text-white">mining :</p>
                {sessionStartIn <= 0 || endTime > currentTime ? <p className="font-bold text-md text-pink-500">{parseFloat(toFormated(reward,18).toFixed(2))} tw</p> : <p className="text-orange-500">session Ended come back when new session is available!</p>}
            </div>
       


            <div className="flex gap-2 items-center">
                <p className="font-bold text-xs text-white truncate">estimated earnings  :</p>
                <p className="font-bold text-md text-pink-500 truncate">{miningData?.userData? totalSessionRewards+ ' Tw Tokens / session ' : 'loading ...'}</p>

            </div>
            <div className="flex gap-2 items-center">
                <p className="font-bold text-xs text-white truncate">mining speed/power :</p>
                <p className="font-bold text-md text-pink-500" >{miningData?.userData ? miningSpeed.toFixed(4) + ' tw/s' : 'loading ...' }</p>
            </div>
        </>

    }
    const renderSessionInfos = () => {
        const earnings =  Number(miningData?.userData?.earnedRewards.toString()) || 0
        const totalEarnings =  isNaN(earnings) ? 0 :  parseFloat(toFormated(earnings,18).toFixed(2))

        return <>
            <div className="flex gap-2 items-center">


                <p className="font-bold text-xs text-white">bank Level :</p>
            <p className="font-bold text-md text-pink-500">{miningData?.bankData?.level}</p>
            </div>
            <div className="flex gap-2 items-center">
                <p className="font-bold text-xs text-white">total earnings + spendings :</p>
                <p className="font-bold text-md text-pink-500">{totalEarnings >= 0 ? totalEarnings + " tw " : 'loading ...'} </p>
            </div>


            <div className="flex gap-2 items-center">
                <p className="font-bold text-xs text-white">total workers  :</p>
                <p className="font-bold text-md text-pink-500">{miningData ? Number(miningData?.nftBalance)  : 'loading ...'}</p>

            </div>
            <div className="flex gap-2 items-center">
                <p className="font-bold text-xs text-white">earnings per 24h :</p>
                <p className="font-bold text-md text-pink-500" >{miningData?.userData ?  (miningSpeed*3600*24).toFixed(2) + ' tw' : 'loading ...' }</p>
            </div>
            <div className="flex gap-2 items-center">
                <p className="font-bold text-xs text-white">total sessions :</p>
                <p className="font-bold text-md text-pink-500" >{miningData?.userData ?Number(totalSessions) : 'loading ...' }</p>
            </div>
        </>

    }


    return (
        <div className="lg:flex-row xl:flex-row flex flex-col w-full h-full border border-[#610044] m-5 rounded-xl bg-[#00000070] text-xs p-5 shadow-lg">

<div className="flex w-full h-full flex-col">
            {renderSessionInfos()}
            {/* <div className="flex py-2">
                <p className="text-xs text-pink-200 truncate">{address}</p>
            </div> */}
</div>
<div className="flex w-full h-full flex-col">
         
         
{/* currentTime <= NextSession && endTime  <= currentTime   */}
         
     { currentTime <= NextSession && endTime  <= currentTime   ?
            <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
                <p className="font-bold text-xs text-white">next session : </p>
                <p className="font-bold text-md text-pink-500" >{miningData?.userData ? unixToDate(NextSession) : 'loading'} </p>
            </div>
            <div className="flex gap-2 items-center">
                <p className="font-bold text-xs text-white">next session starts in : </p>
                <p className="font-bold text-md text-pink-500" > {currentTime <= NextSession && endTime <= currentTime ? unixCountDown(countdown) : 'mining session available'}</p>
            </div>


            </div>
            :
            <>
            {renderStats()}
        </>
        }





</div>

        </div>


    )

}

export default RewardCounter