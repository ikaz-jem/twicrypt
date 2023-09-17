
import abi from '../../../abi/marketPlace2.json'
import { useDispatch, useSelector } from 'react-redux'
import { useContractRead } from 'wagmi'
import { marketplace_contract } from '../../../data/Addresses'
import { setNftDetailsPageState } from '../../../../../app/features/MarketPlace/MarketplaceSlice'
import { useEffect } from 'react'
export const useCheckIsListed = (props)=> {

const nftDetails = useSelector(state=>state?.marketPlace?.nftDetailsPageState)


const {data,isLoading,hasError} =useContractRead({
address:marketplace_contract && marketplace_contract ,
abi:abi &&abi,
functionName:'vaultItems',
args:[nftDetails?.tokenId && nftDetails?.tokenId],
chainId:97,

})


const seller = data && data[2]
const isListed =  data && seller?.includes('0x00000000000000000000000000000') ? false : true



return {isListed,data,seller}
}