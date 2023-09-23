import { useContractWrite } from "wagmi"
import { mining_contract } from "../data/addresses"
import mining_abi from '../abi/mining.json'
import { app_chain_id } from "../../../shared/data/chains"
import Popup from "../../../shared/popup/Popup"
import toast from "react-hot-toast"


export const useStartMining = ()=>{


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
          <Popup productImage={ null} show={true} t={t} title={`error ⚠️`} desc={`${error?.details || "please claim a bank to store your earnings "}`}/>
        ),
        { position: "bottom-center", duration: 2000 }
      ); 
      },

})
return startMining

}