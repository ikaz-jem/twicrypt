import { useContractWrite, useWaitForTransaction } from "wagmi"

import NftAbi from '../ERC721_Nft.json'
import { nft_contract } from "../../../../MarketPlace/data/Addresses"
import { app_chain_id } from "../../../../../shared/data/chains"
import toast from "react-hot-toast"
import Popup from "../../../../../shared/popup/Popup"
import { useSelector } from "react-redux"
import { useTelegramBotMessage } from "../../../../../bot/useTelegramBotMessage"
import { formatEther } from "viem"
import { useState } from "react"


export const useWithdrawReferralProfits = (reff)=>{
  const [whitdrawHash,setWithdrawHash]=useState(null)  

const {address} = useSelector(state=>state.session)


const mess = `<b> 💰a partner claimed his earnings  !  💰</b>

user :  <code>${address}</code> claimed a total of :  ${formatEther(Number(reff?.totalWithdrawls))} BNB !

more about this user :
🔸 total referrals : ${reff?.reffCount} 
🔸 user percentage : ${reff?.percentage + '%'} BNB
🔸 nft balance : ${reff?.nftBalance} assets
🔸 total user withdrawls : ${formatEther(Number(reff?.totalReward)+ Number(reff?.totalWithdrawls))} BNB

transaction : ${'https://testnet.bscscan.com/tx/'+whitdrawHash}

🔸 win up to 1BTC 💰💰 in value while minting ! 
🔸 get referral commision  👥, up to 10% each nft sale , instant withdraw and realtime stats ! 💰💰

visit : <a>https://twicrypt.com/dashboard/mint</a>
`

const sendMessage = useTelegramBotMessage(mess)

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
 onSuccess(data) {
setWithdrawHash(data?.hash)
return toast.custom(
     (t) => (
       <Popup productImage={ null} show={true} t={t} title={`earnings transfered !!`}    desc={`earnings are being transfered to your account ! enjoy   `}/>
     ),
     { position: "bottom-center", duration: 2000 }
   ) 
 },


})



useWaitForTransaction({
  hash:whitdrawHash,
  onSuccess(){
    sendMessage()
  }
})


return withdraw


}