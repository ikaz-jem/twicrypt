

import {useSelector } from "react-redux/es/hooks/useSelector";
import { useContractRead } from "wagmi";
import { app_chain_id } from "../../shared/data/chains";
import { nft_contract } from "../../containers/MarketPlace/data/Addresses";

import abi from './interfaces/IERC721.json'

export const useNftBalanceOf = ()=> {


const {address } = useSelector((state=>state.session))


const {data,isLoading,hasError}= useContractRead({
address:nft_contract && nft_contract,
abi:abi && abi,
functionName:'balanceOf',
args:[address && address],
chainId: app_chain_id && app_chain_id,


})


return {data,isLoading,hasError}


}