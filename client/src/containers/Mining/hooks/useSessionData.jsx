import { useContractRead } from "wagmi"
import { mining_contract } from "../data/addresses"
import abi from '../abi/mining.json'




export const useSessionData = ()=>{


    const data = useContractRead({

        address:mining_contract && mining_contract,
        abi: abi && abi,
        functionName:'sessionData'

    })


}