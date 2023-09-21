import { useContractWrite } from "wagmi"
import { mining_contract } from "../data/addresses"
import mining_abi from '../abi/mining.json'





export const useStartMining = ()=>{


const startMining = useContractWrite({
    address:mining_contract && mining_contract,
    abi : mining_abi && mining_abi,
    functionName:'startSession',
    chainId:97,
})
return startMining

}