import { useContractWrite } from "wagmi"
import { mining_contract } from "../data/addresses"
import abi from '../abi/mining.json'
import toast from "react-hot-toast"
import Popup from "../../../shared/popup/Popup"
import { app_chain_id } from "../../../shared/data/chains"
import { useTelegramBotMessage } from "../../../bot/useTelegramBotMessage"
import { useSelector } from "react-redux"


export const useWithdrawEarnings = ()=>{

const {address}=useSelector(state=>state.session)



  const mess = `<b> Claimed Funds To bank ⚠️ 🪫🪫</b>
  user :  <pre>${address}</pre> has Claimed Funds to his Bank ! 🔋🔋🔋
  `
const sendMessage = useTelegramBotMessage(mess)


    const withdraw=useContractWrite({
        address:mining_contract && mining_contract,
        abi: abi && abi,
        functionName:'withdraw_earnings',
        chainId:app_chain_id &&app_chain_id,
        
        onMutate({ args, overrides }) {
          
            toast.custom(
            (t) => (
              <Popup productImage={ null} show={true} t={t} title={`Claiming Tokens...`} desc={`please complete transaction `}/>
            ),
            { position: "bottom-center", duration: 2000 }
          ); 
          },  onError(error) {
            toast.custom(
            (t) => (
              <Popup productImage={ null} show={true} t={t} title={`error ⚠️`} desc={`${ error.details ||"  something is wrong ! funds could not be Claimed  Please retry later ! "}`}/>
            ),
            { position: "bottom-center", duration: 2000 }
          ); 
          },
          onSuccess(data) {
            sendMessage()
            toast.custom(
            (t) => (
              <Popup productImage={ null} show={true} t={t} title={`Tokens Has been Sent `} desc={`${ "your Mined Tokens Sent To your wallet "}`}/>
            ),
            { position: "bottom-center", duration: 2000 }
          ); 
          },
    })


return withdraw



}