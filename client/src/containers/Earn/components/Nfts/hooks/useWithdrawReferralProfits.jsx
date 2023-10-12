import { useContractWrite } from "wagmi"

import NftAbi from '../ERC721_Nft.json'
import { nft_contract } from "../../../../MarketPlace/data/Addresses"
import { app_chain_id } from "../../../../../shared/data/chains"
import toast from "react-hot-toast"
import Popup from "../../../../../shared/popup/Popup"
import { useSelector } from "react-redux"


export const useWithdrawReferralProfits = ()=>{
    
const {address} = useSelector(state=>state.session)

const withdraw = useContractWrite({
address: nft_contract && nft_contract,
abi:NftAbi && NftAbi,
functionName:'withraw_referall_profits',
chainId:app_chain_id,
args:[address&&address],
onMutate({ args, overrides }) {
    return toast.custom(
     (t) => (
       <Popup productImage={ null} show={true} t={t} title={`whitdrawing earnings ...`}    desc={`your profits will be transfered to your wallet ! please complete the transaction`}/>
     ),
     { position: "bottom-center", duration: 2000 }
   );
 },
 onSuccess({ args, overrides }) {
    return toast.custom(
     (t) => (
       <Popup productImage={ null} show={true} t={t} title={`earnings transfered !!`}    desc={`earnings are being transfered to your account ! enjoy   `}/>
     ),
     { position: "bottom-center", duration: 2000 }
   );
 },

})


return withdraw


}