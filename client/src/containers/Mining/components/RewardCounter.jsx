import { useEffect, useState } from "react";
import {useCalculateRewards} from '../hooks/useCalculateRewards'
import { useSessionData } from "../hooks/useSessionData";
import { bigIntToFormated } from "../../../utils/web3Functions";
import { unixToDate } from "../../../utils/unixToDate";
import { useWatchMiningStart } from "../hooks/Listeners/useWatchMiningStart";



const RewardCounter =()=>{
    const [counter,setCounter]=useState(0)
    const [reward,setReward]=useState(0)
     
    const  {data,startTime,endTime,rate,currentTime,totalSessionRewards,realtimeReward} = useCalculateRewards()

    // const event = useWatchMiningStart()


    const calculate = ()=> {

        if(endTime <= currentTime){
            // console.log('mining time ended')
            return totalSessionRewards
        } else {
            // console.log('mining ...')
            return reward.toFixed(4)
        }

    }   

useEffect(()=>{

    const interval = setInterval(()=>{
     
        setReward(Number(realtimeReward))
    },1000)
return()=> clearInterval(interval)

},[counter,realtimeReward  ])

return (
<div>
    {/* <p>reward</p>
<h6>{calculateRewards?.data && bigIntToFormated(Number(calculateRewards?.data),18)}</h6>
<p>session start</p>
<h6>{start}</h6>
<p>realtime rewards</p>
<h5>{counter}</h5>
<h3>session TotalRewards</h3>
<h5>{totalSessionRewards.toFixed(2)}</h5> */}

<h1>mining :</h1>
<h1>{calculate()}</h1>
<h1>total session rewards :</h1>
<h1>{totalSessionRewards } Tw Tokens</h1>
</div>


)

}

export default RewardCounter