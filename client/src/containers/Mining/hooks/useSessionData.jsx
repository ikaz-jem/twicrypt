import { useContractRead } from "wagmi"
import { mining_contract } from "../data/addresses"
import abi from '../abi/mining.json'
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"


export const useSessionData = ()=>{
const {address}= useSelector(state=>state?.session)

    const miningSessionData = useContractRead({

        address:mining_contract && mining_contract,
        abi: abi && abi,
        functionName:'sessionData',
        args:[address && address],
        chainId:97,
        watch:true
    })


    return miningSessionData

}