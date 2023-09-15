import { useContractRead} from "wagmi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { marketplace_contract } from "../../data/Addresses";
import { setMyListings } from "../../../../app/features/MarketPlace/MarketplaceSlice";
import abi from '../../abi/marketPlace2.json'

export const useGetUserListing = ()=> {
const dispatch = useDispatch();


const {address}=useSelector(state=>state.session)
const setData = (data)=> dispatch(setMyListings(data))



        const {data,isLoading,hasError}  = useContractRead({
            address: marketplace_contract && marketplace_contract,
            abi :abi && abi,
            functionName:'getActiveUserListings',
            chainId:97,
            args:[address && address],
            enabled: address ? true : false
            
        })



useEffect(()=>{
const controller = new AbortController();
data && setData(data);
return ()=> controller.abort()
},[data,address ,abi])




}