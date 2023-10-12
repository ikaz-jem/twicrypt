import { useContractRead } from "wagmi"
import { sponsor_contract } from "../data"
import { app_chain_id } from "../../../shared/data/chains"
import sponsor_abi from '../abi/sponsor.json'
import { useDispatch } from "react-redux"
import { setSponsorshipData } from "../../../app/features/sponsorships/Sponsorships"
import { useEffect } from "react"



export const useGetAllAds = ()=>{

const dispatch = useDispatch()

const setData = (data)=>dispatch(setSponsorshipData(data))


const {data,isLoading,isError} = useContractRead({
    address: sponsor_contract && sponsor_contract,
    abi : sponsor_abi && sponsor_abi ,
    chainId: app_chain_id && app_chain_id ,
    functionName:'get_all_ads',
})




useEffect(()=> {

   data && setData(
        {
            ...data,
            isLoading:isLoading,
            isError:isError
        }
        )

},[data])



return data

}