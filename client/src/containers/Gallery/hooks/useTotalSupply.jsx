

import { useContractRead } from "wagmi"
import NftAbi from '../../MarketPlace/abi/ERC721_Nft.json'
import { app_chain_id } from "../../../shared/data/chains"
import { nft_contract } from "../../MarketPlace/data/Addresses"
import { useSelector } from "react-redux"
 


export const useTotalSupply = ()=> {
const {address} = useSelector(state=>state.session)


const {data,isLoading,isError} = useContractRead({

address : nft_contract && nft_contract,
abi : NftAbi && NftAbi,
functionName:'totalSupply',
chainId:app_chain_id&& app_chain_id,
})






return {data,isLoading,isError}


}


