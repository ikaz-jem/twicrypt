import { useContractRead} from "wagmi";
import { setListings } from "../../../../app/features/MarketPlace/MarketplaceSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { marketplace_contract } from "../../data/Addresses";
import abi from '../../abi/marketPlace2.json'

export const useGetListing = ()=> {
const dispatch = useDispatch();


const setData = (data)=> dispatch(setListings(data))



        const {data,isLoading,hasError}  = useContractRead({
            address: marketplace_contract,
            abi :abi&&abi,
            functionName:'getActiveListings',
            chainId:97,
        })




useEffect(()=>{
const controller = new AbortController();
data && setData(data);
return ()=> controller.abort()
},[data])

return {isLoading,hasError}


}