import { useContractRead } from "wagmi"
import { nft_contract } from "../../../../MarketPlace/data/Addresses"
import nftAbi from "../../../components/Nfts/ERC721_Nft.json"
import { app_chain_id } from "../../../../../shared/data/chains"




const useGetClaimedRewards = ()=>{

const claimedRewards= useContractRead({
    address:nft_contract && nft_contract,
    abi : nftAbi && nftAbi,
    functionName : 'getClaimedRewards',
    chainId:app_chain_id && app_chain_id
})



return claimedRewards ;

}