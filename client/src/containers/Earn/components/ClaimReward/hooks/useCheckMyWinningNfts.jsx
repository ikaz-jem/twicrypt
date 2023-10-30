import { nft_contract } from "../../../../MarketPlace/data/Addresses"
import nftAbi from "../../../components/Nfts/ERC721_Nft.json"
import { useContractReads } from "wagmi"


export const useCheckMyWinningNfts = ()=>{


const check = useContractReads({
    contracts:[
        {
            address:nft_contract && nft_contract,
            abi: nftAbi && nftAbi,
            functionName:'checkMyNfts', 
        },
        {
            address:nft_contract && nft_contract,
            abi: nftAbi && nftAbi,
            functionName:'checkNftReward', 
        },
    ]
})



const hasReward = check?.data[1]?.result;
const winingNfts = check?.data[0]?.result;

return {hasReward,winingNfts}



}