
import { useSelector } from "react-redux"
import { useSessionData } from "./useSessionData"

export const useCalculateRewards = ()=>{
    const {address}= useSelector(state=>state?.session)
    const miningData = useSelector(state=>state.mining.session)

    
    const rewards = useSessionData()
    
 
    
    const userPower = Number(miningData?.userData?.miningPower) ;
    const startTime = Number(miningData?.userData?.lastMiningSession) ;
    const endTime = Number(miningData?.userData?.miningEndTime) ;
    
    
    
    const currentTime = Math.floor(new Date().getTime() / 1000);
    const sessionDuration = endTime - startTime;
    const totalSessionRewards = sessionDuration * userPower ;
    const realtimeReward = (currentTime - startTime) * userPower
    const miningSpeed = (totalSessionRewards / (sessionDuration))
    
    

    
    return {startTime,endTime,currentTime,totalSessionRewards,realtimeReward,miningSpeed}
    
}


