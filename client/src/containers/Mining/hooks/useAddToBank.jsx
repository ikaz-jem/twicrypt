import { useContractWrite } from "wagmi"
import { mining_contract } from "../data/addresses"
import abi from '../abi/mining.json'





export const useAddToBank = ()=>{

    const addToBank=useContractWrite({
        address:mining_contract && mining_contract,
        abi: abi && abi,
        functionName:'addToBank',
        chainId:97
    })


return addToBank



}