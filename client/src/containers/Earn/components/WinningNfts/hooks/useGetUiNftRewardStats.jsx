import { useContractRead } from "wagmi"
import { nft_contract } from "../../../../MarketPlace/data/Addresses"
import nftAbi from '../../Nfts/ERC721_Nft.json'
import { app_chain_id } from "../../../../../shared/data/chains"





export const useGetUiNftRewardStats = ()=>{


const winningNfts = useContractRead({
    address: nft_contract,
    abi:nftAbi,
    functionName:'getUiNftRewardStats',
    chainId:app_chain_id
})

const allWinningNfts = winningNfts?.data ? winningNfts?.data[0] : null;
const allClaimedNfts = winningNfts?.data ? winningNfts?.data[1] : null;

return {allClaimedNfts,allWinningNfts}




}