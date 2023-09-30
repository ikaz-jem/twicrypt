import { useContractRead } from "wagmi"
import { mining_contract } from "../data/addresses"
import abi from '../abi/mining.json'
import { useDispatch, useSelector } from "react-redux"
import { setMiningSession } from "../../../app/features/mining/MiningSlice"
import { app_chain_id } from "../../../shared/data/chains"
import { useEffect } from "react"




export const useMiningData = ()=> {

const dispatch=useDispatch()
const setMiningData = (data)=>dispatch(setMiningSession(data))

const {address}=useSelector(state=>state?.session)

    const allData = useContractRead({
        address: mining_contract && mining_contract,
        abi: abi && abi,
        functionName:'getAllData',
        args:[address],
        chainId:app_chain_id&&app_chain_id  ,
        watch:false,
        onSuccess(data) {
            setMiningData(data)
        },
    },
    )




return allData;
}