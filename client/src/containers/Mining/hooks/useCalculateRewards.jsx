
import { useContractRead } from "wagmi"
import { mining_contract } from "../data/addresses"
import abi from '../abi/mining.json'
import { useSelector } from "react-redux"
import { useSessionData } from "./useSessionData"
import { app_chain_id } from "../../../shared/data/chains"

export const useCalculateRewards = ()=>{
    const {address}= useSelector(state=>state?.session)
    const miningData = useSelector(state=>state.mining.session)



    const rewards = useSessionData()

    const data=useContractRead({
        address:mining_contract && mining_contract,
        abi: abi && abi,
        functionName:'calculateSessioRewards',
        args:[address && address],
        chainId:app_chain_id && app_chain_id
    })



    const startTime = rewards?.data ? Number(rewards?.data[4]) : null
    const endTime = rewards?.data ? Number(rewards?.data[5]) : null
    const rate = 0.5
    const currentTime = Math.floor(new Date().getTime() / 1000);

    const sessionDuration = endTime - startTime;
    const totalSessionRewards = sessionDuration * rate;
    const realtimeReward = (currentTime - startTime) * rate

    
return {data,startTime,endTime,rate,currentTime,totalSessionRewards,realtimeReward}
    
}