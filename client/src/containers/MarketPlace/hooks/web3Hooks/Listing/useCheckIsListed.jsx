
import abi from '../../../abi/marketPlace2.json'
import {  useSelector } from 'react-redux'
import { useContractRead } from 'wagmi'
import { marketplace_contract } from '../../../data/Addresses'
import { app_chain_id } from '../../../../../shared/data/chains'

export const useCheckIsListed = (props)=> {

const nftDetails = useSelector(state=>state?.marketPlace?.nftDetailsPageState)
const {address} = useSelector(state=>state.session)

const {data,isLoading,hasError} =useContractRead({
address:marketplace_contract && marketplace_contract ,
abi:abi &&abi,
functionName:'is_listed',
args:[nftDetails?.tokenId && Number(nftDetails?.tokenId)],
chainId:app_chain_id && app_chain_id,

})


// const seller = data && data[2]
// const isListed =  data && seller?.includes('0x00000000000000000000000000000') ? false : true

const seller = data?.owner && data?.owner 
const isListed =  data?.listed && data?.listed
const listingType =  data?.listingsType && data?.listingsType
const isSeller = address?.toLowerCase() === seller?.toLowerCase() ? true :false

return {isListed,data,seller,listingType,isSeller}
}