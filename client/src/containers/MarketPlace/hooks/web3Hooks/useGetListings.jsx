import { useContractRead} from "wagmi";
import { setListings } from "../../../../app/features/MarketPlace/MarketplaceSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { marketplace_contract } from "../../data/Addresses";

export const useGetListing = ()=> {
const dispatch = useDispatch();


const setData = (data)=> dispatch(setListings(data))


const abi = require('../../abi/marketPlace2.json')

        const {data,isLoading,hasError}  = useContractRead({
            address: marketplace_contract,
            abi :abi,
            functionName:'getActiveListings',
            chainId:97,
        })




useEffect(()=>{
const controller = new AbortController();
data && setData(data);
return ()=> controller.abort()
},[data])




}