import { useContractWrite } from "wagmi"
import { mining_contract } from "../data/addresses"
import abi from '../abi/mining.json'





export const useClaimBank = ()=>{

    const {data,isLoading,hasError}=useContractWrite({
        address:mining_contract && mining_contract,
        abi: abi && abi,
        functionName:'claimBank',
    })






}