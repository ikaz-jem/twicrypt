import { useContractRead } from "wagmi"
import { sponsor_contract } from "../data"
import { app_chain_id } from "../../../shared/data/chains"
import sponsor_abi from '../abi/sponsor.json'




export const useGetAllAds = ()=>{


const {data,isLoading,isError} = useContractRead({
    address: sponsor_contract && sponsor_contract,
    abi : sponsor_abi && sponsor_abi ,
    chainId: app_chain_id && app_chain_id ,
    functionName:'get_all_ads',
    watch:true
})



}