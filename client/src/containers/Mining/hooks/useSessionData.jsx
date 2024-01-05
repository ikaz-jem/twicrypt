import { useContractRead } from "wagmi"
import { mining_contract } from "../data/addresses"
import abi from '../abi/mining.json'
import { useSelector } from "react-redux"
import { app_chain_id } from "../../../shared/data/chains"

export const useSessionData = ()=>{
const {address}= useSelector(state=>state?.session)

    const miningSessionData = useContractRead({

        address:mining_contract && mining_contract,
        abi: abi && abi,
        functionName:'sessionData',
        args:[address && address],
        chainId:app_chain_id,
        watch:true
    })


    return miningSessionData

}