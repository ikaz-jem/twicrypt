import { useContractWrite } from "wagmi"
import { mining_contract } from "../data/addresses"
import abi from '../abi/mining.json'
import toast from "react-hot-toast"
import Popup from "../../../shared/popup/Popup"
import { app_chain_id } from "../../../shared/data/chains"
import { useTelegramBotMessage } from "../../../bot/useTelegramBotMessage"
import { useSelector } from "react-redux"
import { formatEther } from "viem"

export const useClaimBank = ()=>{

const {address} = useSelector(state=>state.session)


const mess = `<b> 🏦🏦 ⚠️ a new free bank has been claimed ! ⚠️ 🏦🏦</b>
user :  <pre>${address}</pre> claimed a Free bank to store mining Earnings !
transaction :

`

const sendMessage  = useTelegramBotMessage(mess)



    const claimBank=useContractWrite({
        address:mining_contract && mining_contract,
        abi: abi && abi,
        functionName:'claimBank',
        chainId:app_chain_id &&app_chain_id,
        
        onMutate({ args, overrides }) {
            toast.custom(
            (t) => (
              <Popup productImage={ null} show={true} t={t} title={`Claiming your Free Bank ...`} desc={`your first bank is free , you can upgrade to higher tiers `}/>
            ),
            { position: "bottom-center", duration: 2000 }
          ); 
          },  onError(error) {
            toast.custom(
            (t) => (
              <Popup productImage={ null} show={true} t={t} title={`error ⚠️`} desc={`${error?.message || "something went wrong ..."}`}/>
            ),
            { position: "bottom-center", duration: 2000 }
          ); 
          },
         onSuccess(error) {
          sendMessage()
          },
    })


return claimBank



}