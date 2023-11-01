

import { useContractRead } from "wagmi"
import NftAbi from '../ERC721_Nft.json'
import { nft_contract } from "../../../../MarketPlace/data/Addresses"
import { app_chain_id } from "../../../../../shared/data/chains"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
 


export const useGetMinterStats = ()=> {
const {address} = useSelector(state=>state.session)


const referralStats = useContractRead({

address : nft_contract && nft_contract,
abi : NftAbi && NftAbi,
functionName:'get_user_stats',
chainId:app_chain_id&& app_chain_id || null,
args:[address && address],
enabled: address ? true : false,
watch:true
})
const mintStats = useContractRead({

address : nft_contract && nft_contract,
abi : NftAbi && NftAbi,
functionName:'get_mint_stats',
chainId:app_chain_id&& app_chain_id || null,
watch:true
})






return {referralStats,mintStats}


}


