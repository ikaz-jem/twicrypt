

import {useSelector } from "react-redux/es/hooks/useSelector";
import { useContractRead } from "wagmi";
import { nft_contract } from "../../../../MarketPlace/data/Addresses";
import { app_chain_id } from "../../../../../shared/data/chains";

import nftAbi from "../../../components/Nfts/ERC721_Nft.json"

export const useWalletOfOwner = ()=> {


const {address } = useSelector((state=>state.session))


const {data,isLoading,hasError}= useContractRead({
address:nft_contract && nft_contract,
abi:nftAbi && nftAbi,
functionName:'walletOfOwner',
args:[address && address],
chainId: app_chain_id && app_chain_id,


})


return {data,isLoading,hasError}


}