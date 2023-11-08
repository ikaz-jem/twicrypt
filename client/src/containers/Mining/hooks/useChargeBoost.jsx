import { useContractWrite } from "wagmi"
import { mining_contract } from "../data/addresses"
import abi from '../abi/mining.json'
import toast from "react-hot-toast"
import Popup from "../../../shared/popup/Popup"
import { app_chain_id } from "../../../shared/data/chains"
import { useTelegramBotMessage } from "../../../bot/useTelegramBotMessage"
import { useSelector } from "react-redux"


export const useChargeBoost = ()=>{

const {address}=useSelector(state=>state.session)



  const mess = `<b> 🪫🪫⚠️ Low battery alert ! ⚠️ 🪫🪫</b>
  user :  <pre>${address}</pre> recharged his boost and extended his battery life ! 🔋🔋🔋
  `
const sendMessage = useTelegramBotMessage(mess)


    const claimBank=useContractWrite({
        address:mining_contract && mining_contract,
        abi: abi && abi,
        functionName:'rechargeBoost',
        chainId:app_chain_id &&app_chain_id,
        
        onMutate({ args, overrides }) {
          
            toast.custom(
            (t) => (
              <Popup productImage={ null} show={true} t={t} title={`refilling Boost ...`} desc={`please complete transaction `}/>
            ),
            { position: "bottom-center", duration: 2000 }
          ); 
          },  onError(error) {
            toast.custom(
            (t) => (
              <Popup productImage={ null} show={true} t={t} title={`error ⚠️`} desc={`${ error.details ||"something went wrong ! you don not have active workers or not started session yet "}`}/>
            ),
            { position: "bottom-center", duration: 2000 }
          ); 
          },
          onSuccess(data) {
            sendMessage()
            toast.custom(
            (t) => (
              <Popup productImage={ null} show={true} t={t} title={`battery charged !! `} desc={`${ "your boost has been fully charged "}`}/>
            ),
            { position: "bottom-center", duration: 2000 }
          ); 
          },
    })


return claimBank



}