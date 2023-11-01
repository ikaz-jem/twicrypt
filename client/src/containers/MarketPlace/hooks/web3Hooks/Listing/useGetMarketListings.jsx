import { useContractRead, useContractReads} from "wagmi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { marketplace_contract } from "../../../data/Addresses";
import { setListings, setMyListings } from "../../../../../app/features/MarketPlace/MarketplaceSlice";
import abi from '../../../abi/marketPlace2.json'
import { app_chain_id } from "../../../../../shared/data/chains";



export const useGetMarketListings = ()=> {
const dispatch = useDispatch();


const {address}=useSelector(state=>state.session)
const setData = (data)=> dispatch(setListings(data))


        const auction = useContractRead(           {
          address: marketplace_contract && marketplace_contract,
         abi :abi && abi,
         functionName:'getAllAuctions',
         chainId:app_chain_id,
         },)
        const listing = useContractRead(           {
          address: marketplace_contract && marketplace_contract,
         abi :abi && abi,
         functionName:'getAllListings',
         chainId:app_chain_id,
         },)


const auctionData = auction && auction?.data?.length < 5 ? auction?.data : auction?.data?.slice(0,5) 
const listingData = listing  && listing?.data?.length < 5 ? listing?.data : listing?.data?.slice(0,5) 


useEffect(()=>{
const controller = new AbortController();
auction?.data && setData({auction:auctionData,listings:listingData});
return ()=> controller.abort()
},[auction?.data,address ,abi])




}