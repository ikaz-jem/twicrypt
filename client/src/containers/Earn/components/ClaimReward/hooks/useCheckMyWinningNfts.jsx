import { useSelector } from "react-redux"
import { app_chain_id } from "../../../../../shared/data/chains"
import { nft_contract } from "../../../../MarketPlace/data/Addresses"
import nftAbi from "../../../components/Nfts/ERC721_Nft.json"
import { useContractRead } from "wagmi"


export const useCheckMyWinningNfts = ()=>{

    const {address} = useSelector(state=>state.session)

const {data,isLoading,isError} = useContractRead({

    
            address:nft_contract && nft_contract,
            abi: nftAbi && nftAbi,
            functionName:'getUserNftRewardStats', 
            chainId:app_chain_id,
            args:[address]
        
  
})



const isWinner =data && data?.userHaswon
const winingNfts =data && data?.myWiningNfts;

return {data,isWinner,winingNfts,isLoading,isError}



}