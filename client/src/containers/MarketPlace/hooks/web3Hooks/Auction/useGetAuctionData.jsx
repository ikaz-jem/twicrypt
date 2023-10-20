import { useContractRead} from "wagmi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { marketplace_contract } from "../../../data/Addresses";
import { setMyListings } from "../../../../../app/features/MarketPlace/MarketplaceSlice";
import abi from '../../../abi/marketPlace2.json'
import { app_chain_id } from "../../../../../shared/data/chains";

export const useGetAuctionData = ()=> {
const dispatch = useDispatch();


const {address}=useSelector(state=>state.session)
const setData = (data)=> dispatch(setMyListings(data))
const nftData = useSelector(state=>state.marketPlace.nftDetailsPageState)
const tokenId = nftData?.tokenId


        const {data,isLoading,hasError}  = useContractRead({
            address: marketplace_contract && marketplace_contract,
            abi :abi && abi,
            functionName:'getAuctionData',
            chainId:app_chain_id && app_chain_id,
            args:[tokenId && tokenId],
            
        })

useEffect(()=>{
const controller = new AbortController();
data && setData(data);
return ()=> controller.abort()
},[data,address])

return data


}