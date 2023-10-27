import { useContractWrite } from "wagmi"
import { sponsor_contract } from "../../sponsorUs/data"
import abi from '../../sponsorUs/abi/sponsor.json'
import { app_chain_id } from "../../../shared/data/chains"
import toast from "react-hot-toast"
import Popup from "../../../shared/popup/Popup"



export const useWithdrawPartnerProfits = (id)=> {

    
const partnerId = id?.id && id?.id;

    const withdraw = useContractWrite({
        address: sponsor_contract && sponsor_contract,
        abi : abi && abi,
        chainId:app_chain_id && app_chain_id,
        functionName:'withraw_partner_profits',
        args:[partnerId && partnerId],
        onMutate(data, error) {
            toast.custom(
            (t) => (
              <Popup productImage={null} show={true} t={t} title={`withdrawing ...`} desc={`wait and complete the transaction`}/>
            ),
            { position: "bottom-center", duration: 2000 }
            )
          },
        onSuccess(data, error) {
            toast.custom(
            (t) => (
              <Popup productImage={null} show={true} t={t} title={`profits transfered...`} desc={`profits has been transfered `}/>
            ),
            { position: "bottom-center", duration: 2000 }
            )
          },
        onError(data, error) {
            toast.custom(
            (t) => (
              <Popup productImage={null} show={true} t={t} title={`Error...`} desc={`double check your id and network`}/>
            ),
            { position: "bottom-center", duration: 2000 }
            )
          },

    })

return withdraw


}