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


    const message = `<b>New Winner 🤑🤑🤑</b>
    <b> user ${address} claimed an nft and won ${formatEther(Number(nft?.reward))} BNB !!</b>
    <b>congrats !!</b>
    <b>user :  <pre>${address}</pre> </b>
    `;

const sendMessage = useTelegramBotMessage(message)




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