import { useContractWrite } from "wagmi"
import { mining_contract } from "../data/addresses"
import mining_abi from '../abi/mining.json'
import { app_chain_id } from "../../../shared/data/chains"
import Popup from "../../../shared/popup/Popup"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { setTransaction } from "../../../app/features/mining/MiningSlice"
import { useTelegramBotMessage } from "../../../bot/useTelegramBotMessage"
import { formatEther } from "viem"


export const useStartMining = ()=>{

  const dispatch = useDispatch()
  const setHash = (data)=>dispatch(setTransaction(data))
  const miningData = useSelector(state=>state.mining.session)
  const stats = useSelector(state=>state.mining.stats.result)
  const{address} = useSelector(state=>state.session)


  const bankData = miningData?.result?.bankData
  const userData = miningData?.result?.userData

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



const mess = `<b> ⚠️ New Mining session Started ! ⚠️🦺💵</b>
user :  <pre>${address}</pre> started a mining session 
user stats : 🧑🏻‍🚒
🔶 total sessions : ${userData?.totalSessions} 🦺
🔶 total earned : ${formatEther(Number(userData?.earnedRewards))} twi tokens 💵
🔶 total nfts on work: ${userData?.totalUsedNfts} 🦺🔨
platform infos : 
🔶 total mined : ${formatEther(Number(stats?.total_mined))} twi tokens 💵
🔶 total miners : ${stats?.total_miners} 🦺🔨
`

const sendMessage = useTelegramBotMessage(mess)
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
        sendMessage()
        setHash(data?.hash)
      }

})
return startMining

}