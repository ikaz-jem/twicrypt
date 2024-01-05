import { useContractWrite } from "wagmi"
import { mining_contract } from "../data/addresses"
import abi from '../abi/mining.json'
import toast from "react-hot-toast"
import Popup from "../../../shared/popup/Popup"
import { app_chain_id } from "../../../shared/data/chains"
import { useTelegramBotMessage } from "../../../bot/useTelegramBotMessage"
import { useSelector } from "react-redux"
import { toFormated } from "../../../utils/web3Functions"

export const useUpgradeBank = ({price})=> {

  const {address}=useSelector(state=>state.session)

const data = useSelector(state=>state.mining.session.result)

  const mess = `<b> 💰🏦 bank upgrade !  🏦💰</b>
  user :  <pre>${address}</pre> upgraded his bank from tier ${data?.bankData?.level}  to tier ${data?.bankData?.level +1}  ! 🏦💵
  his capacity now is augmented !! 
  🔸 user workers : ${data?.nftBalance}  🦺🏦
  🔸 user mining rate : ${toFormated(Number(data?.userData?.miningPower),18)} twi/s 💰
  upgrade your bank level to store more tokens !
  `


  const sendMessage = useTelegramBotMessage(mess)

const upgrade = useContractWrite({
address:mining_contract && mining_contract,
abi:abi&&abi,
functionName:'upgrade',
value:price && price,
chainId:app_chain_id&&app_chain_id,
onMutate({ args, overrides }) {
  
    toast.custom(
    (t) => (
      <Popup productImage={ null} show={true} t={t} title={`Upgrading your bank ...`} desc={`please complete the transaction ..`}/>
    ),
    { position: "bottom-center", duration: 2000 }
  ); 
  },  onError(error) {
    toast.custom(
    (t) => (
      <Popup productImage={ null} show={true} t={t} title={`error ⚠️`} desc={`${error?.details || "something went wrong bank max level reached "}`}/>
    ),
    { position: "bottom-center", duration: 2000 }
  ); 
  }, onSuccess({ args, overrides }) {
    sendMessage()
    toast.custom(
    (t) => (
      <Popup productImage={ null} show={true} t={t} title={`Bank Upgraded 💲`} desc={`your bank upgraded to the next level`}/>
    ),
    { position: "bottom-center", duration: 2000 }
  ); 
  }, 


})
return upgrade
}