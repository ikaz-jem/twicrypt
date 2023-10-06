
import abi from '../../../abi/marketPlace2.json'
import { useDispatch, useSelector } from 'react-redux'
import { useContractRead } from 'wagmi'
import { marketplace_contract } from '../../../data/Addresses'
import { setNftDetailsPageState } from '../../../../../app/features/MarketPlace/MarketplaceSlice'
import { useEffect } from 'react'
import { app_chain_id } from '../../../../../shared/data/chains'

export const useCheckIsListed = (props)=> {

const nftDetails = useSelector(state=>state?.marketPlace?.nftDetailsPageState)


const {data,isLoading,hasError} =useContractRead({
address:marketplace_contract && marketplace_contract ,
abi:abi &&abi,
functionName:'listedNfts',
args:[nftDetails?.tokenId && nftDetails?.tokenId],
chainId:app_chain_id && app_chain_id,

})


const seller = data && data[2]
const isListed =  data && seller?.includes('0x00000000000000000000000000000') ? false : true



return {isListed,data,seller}
}