import { useDispatch, useSelector } from "react-redux";
import { useContractRead } from "wagmi";

import { marketplace_contract } from "../../../data/Addresses";
import abi from '../../../abi/marketPlace2.json'

import { setNftOffers } from "../../../../../app/features/MarketPlace/MarketplaceSlice";
import { useEffect } from "react";
import { mainChainId } from "../../../data/chains";


export const useGetOffers = (props)=> {
    const nftDetails = useSelector(state=>state.marketPlace.nftDetailsPageState);
    const id = nftDetails?.tokenId

    const dispatch = useDispatch()
const setOffers =(data)=> dispatch(setNftOffers(data))

const nftOffers = useContractRead({
    address : marketplace_contract&&marketplace_contract,
    abi:abi &&abi,
    functionName:'getAllOffersForToken',
    args:[id&&id || props?.id],
    enabled: nftDetails ? true : false,
    chainId:mainChainId && mainChainId || 97
})

useEffect(()=>{
    nftOffers?.data ? setOffers(nftOffers) :  setOffers(nftOffers?.error)
},[nftOffers?.data])

}