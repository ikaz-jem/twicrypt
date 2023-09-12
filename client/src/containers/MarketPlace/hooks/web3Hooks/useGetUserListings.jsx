import { useDispatch, useSelector } from "react-redux"
import { setMyListings } from "../../../../app/features/MarketPlace/MarketplaceSlice"
import { useContractRead} from "wagmi";
import { setListings } from "../../../../app/features/MarketPlace/MarketplaceSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";




const useGetUserListings = ()=> {

const dispatch = useDispatch()
const setUserListings = (data)=> dispatch(setMyListings(data))

const {address}= useSelector(state=>state.session)

const abi = require('../../abi/marketPlace2.json')

        const {data,isLoading,hasError}  = useContractRead({
            address: '0x8a4e14aFC69a04f310E2c314c593D0A2FD3Cb4e5',
            abi :abi,
            functionName:'nftListings',
            chainId:97,
        })




useEffect(()=>{
const controller = new AbortController();
data && setData(data);
return ()=> controller.abort()
},[data])




}



