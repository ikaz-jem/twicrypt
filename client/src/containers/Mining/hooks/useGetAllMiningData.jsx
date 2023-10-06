import { useContractReads } from "wagmi"
import { app_chain_id } from "../../../shared/data/chains"
import { mining_contract } from "../data/addresses"
import { nft_contract } from "../../MarketPlace/data/Addresses"
import mining_abi from '../abi/mining.json'
import { useDispatch, useSelector } from "react-redux"
import { setBanks, setMiningSession } from "../../../app/features/mining/MiningSlice"
import { useEffect } from "react"
import { setMiningPlatformInfos } from "../../../app/features/mining/MiningSlice"


export const useGetAllMiningData = ()=> {
const {address}= useSelector(state=>state.session)
const dispatch=useDispatch()
const setMiningData = (data)=>dispatch(setMiningSession(data))
const setPlatformInfos = (data)=>dispatch(setMiningPlatformInfos(data))
const setBankData = (data)=>dispatch(setBanks(data))

const {data, isError, isLoading } = useContractReads({

contracts :[
{
    address: mining_contract && mining_contract,
    abi: mining_abi && mining_abi,
    functionName:'getAllData',
    args:[address],
    chainId:app_chain_id&&app_chain_id ,
  
},
{
    address: mining_contract && mining_contract,
    abi: mining_abi && mining_abi,
    functionName:'getAllBanks',
    chainId:app_chain_id&&app_chain_id ,
 
  
},
{
    address: mining_contract && mining_contract,
    abi: mining_abi && mining_abi,
    chainId: app_chain_id && app_chain_id,
    functionName: 'getStats',
    cacheTime: 10_000,
},
{
    address:mining_contract && mining_contract,
    abi: mining_abi && mining_abi,
    functionName:'sessionData',
    args:[address && address],
    chainId:app_chain_id,
}

],watch:true

})

let sessionData = data?.length>0 && data[0]
let bankData = data?.length>0 && data[1]
let platformStats= data?.length>0 && data[2]

const isDataReady = data?.length>0  ? true : false;


useEffect(()=>{
    const controller = new AbortController();

!isLoading && setMiningData(sessionData)
!isLoading && setPlatformInfos(platformStats)
!isLoading && setBankData(bankData)

return()=>controller.abort()
    
},[sessionData,bankData,platformStats,isDataReady ])

return data

}