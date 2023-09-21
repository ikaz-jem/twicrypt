import { useContractRead } from "wagmi"
import { mining_contract } from "../data/addresses"
import abi from '../abi/mining.json'
import { useDispatch, useSelector } from "react-redux"
import { setMiningSession } from "../../../app/features/mining/MiningSlice"

export const useMiningData = ()=> {

const dispatch=useDispatch()
const setMiningData = (data)=>dispatch(setMiningSession(data))

    const {address}=useSelector(state=>state?.session)

    const allData = useContractRead({
        address: mining_contract && mining_contract,
        abi: abi && abi,
        functionName:'getAllData',
        args:[address && address],
        chainId:97,
        onSuccess(data) {
            setMiningData(data)
          },
    },
    )
    
return allData;
}