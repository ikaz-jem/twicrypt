import { useContractWrite } from "wagmi"
import { nft_contract } from "../../../../MarketPlace/data/Addresses"
import nftAbi from "../../../components/Nfts/ERC721_Nft.json"
import { app_chain_id } from "../../../../../shared/data/chains"
import { useTelegramBotMessage } from "../../../../../bot/useTelegramBotMessage"
import { useSelector } from "react-redux"
import { formatEther } from "viem"




export const useClaimNftReward = (nft)=>{

    const {address} = useSelector(state=>state.session)
    const tokenId = Number(nft?.tokenId);



const mess = `<b> 💰   New Winner 🤑🤑🤑 !  💰</b>

user :  <code>${address}</code>  claimed an nft and won ${formatEther(Number(nft?.reward))} BNB !

you can win too when minting nfts !!
     
🔸 win up to 1BTC 💰💰 in value while minting ! 
🔸 get referral commision  👥, up to 10% each nft sale , instant withdraw and realtime stats ! 💰💰
    
visit : <a>https://twicrypt.com/dashboard/mint</a>
    `
    


const sendMessage = useTelegramBotMessage(mess)




const claim = useContractWrite({
    address : nft_contract,
    abi :nftAbi,
    functionName : 'claimNftReward',
    chainId:app_chain_id,
    args:[tokenId],
    onSuccess(data){
        sendMessage();
    }
},)


return claim

}