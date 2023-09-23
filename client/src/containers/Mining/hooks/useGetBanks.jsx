import { useContractRead } from "wagmi"
import { mining_contract } from "../data/addresses"
import abi from '../abi/mining.json'
import { app_chain_id } from "../../../shared/data/chains"



export const useGetBanks = ()=> {


const data = useContractRead({

address : mining_contract && mining_contract,
abi : abi && abi,
functionName:'getAllBanks',
chainId:app_chain_id&& app_chain_id,

})

return data

}