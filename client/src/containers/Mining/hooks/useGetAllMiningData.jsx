import { useContractReads } from "wagmi"
import { app_chain_id } from "../../../shared/data/chains"
import { mining_contract } from "../data/addresses"
import { nft_contract } from "../../MarketPlace/data/Addresses"
import IERC721 from '../../../hooks/web3/interfaces/IERC721.json'
import IERC20 from '../../../hooks/web3/interfaces/IERC20.json'
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
    watch:false,
  
},
{
    address: mining_contract && mining_contract,
    abi: mining_abi && mining_abi,
    functionName:'getAllBanks',
    chainId:app_chain_id&&app_chain_id ,
    watch:false,
  
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
    watch:false
}
]


})


let sessionData = data[0]
let bankData = data[1]
let platformStats= data[2]



useEffect(()=>{
    const controller = new AbortController();

!isLoading && setMiningData(sessionData)
!isLoading && setPlatformInfos(platformStats)
!isLoading && setBankData(bankData)
console.log(data)
    return()=>controller.abort()
    
},[data])
return data

}