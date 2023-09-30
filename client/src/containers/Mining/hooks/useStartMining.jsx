import { useContractWrite } from "wagmi"
import { mining_contract } from "../data/addresses"
import mining_abi from '../abi/mining.json'
import { app_chain_id } from "../../../shared/data/chains"
import Popup from "../../../shared/popup/Popup"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { setTransaction } from "../../../app/features/mining/MiningSlice"


export const useStartMining = ()=>{

  const dispatch = useDispatch()
  const setHash = (data)=>dispatch(setTransaction(data))
  const miningData = useSelector(state=>state.mining.session)

  const bankData = miningData?.bankData
  const userData = miningData?.userData

  const currentTime = Math.floor(new Date().getTime() / 1000);
  const NextSession = Number(userData?.miningStartTime); // next mining session start time after write

const checkError = ()=>{

if (bankData?.capacity =='0') {
  return 'please claim a bank to store your earnings'

} else if (currentTime < NextSession) {
  return 'session is not available yet'
} else {
  return 'something went wrong'
}

}

const errorMessage = checkError()


const startMining = useContractWrite({
    address:mining_contract && mining_contract,
    abi : mining_abi && mining_abi,
    functionName:'startSession',
    chainId:app_chain_id&&app_chain_id,
    onMutate({ args, overrides }) {
        toast.custom(
        (t) => (
          <Popup productImage={ null} show={true} t={t} title={`Starting mining session ...`} desc={`please complete the transaction ..`}/>
        ),
        { position: "bottom-center", duration: 2000 }
      ); 
      },  onError(error) {
        toast.custom(
        (t) => (
          <Popup productImage={ null} show={true} t={t} title={`error ⚠️`} desc={errorMessage}/>
        ),
        { position: "bottom-center", duration: 2000 }
      ); 
      },
      onSuccess(data){
        setHash(data?.hash)
      }

})
return startMining

}