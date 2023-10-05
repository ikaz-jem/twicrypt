import { useContractWrite } from "wagmi"
import { mining_contract } from "../data/addresses"
import abi from '../abi/mining.json'
import toast from "react-hot-toast"
import Popup from "../../../shared/popup/Popup"
import { app_chain_id } from "../../../shared/data/chains"


export const useClaimGift= ()=>{

    const claimGift=useContractWrite({
        address:mining_contract && mining_contract,
        abi: abi && abi,
        functionName:'claimGift',
        chainId:app_chain_id &&app_chain_id,
        
        onMutate({ args, overrides }) {
            toast.custom(
            (t) => (
              <Popup productImage={ null} show={true} t={t} title={`Claiming your gift ...`} desc={`your gift is on the way please complete the transaction`}/>
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
    })


return claimGift



}