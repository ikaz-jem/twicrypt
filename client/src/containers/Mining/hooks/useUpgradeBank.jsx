import { useContractWrite } from "wagmi"
import { mining_contract } from "../data/addresses"
import abi from '../abi/mining.json'
import toast from "react-hot-toast"
import Popup from "../../../shared/popup/Popup"
import { app_chain_id } from "../../../shared/data/chains"

export const useUpgradeBank = ({price})=> {

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