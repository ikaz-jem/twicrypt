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



        const {data,isLoading,hasError}  = useContractReads({
            contracts:[  
           {
             address: marketplace_contract && marketplace_contract,
            abi :abi && abi,
            functionName:'getAllAuctions',
            chainId:app_chain_id,
            },
           {
             address: marketplace_contract && marketplace_contract,
            abi :abi && abi,
            functionName:'getAllListings',
            chainId:app_chain_id,
            }



            ]
        })

const auctionData = data[0]?.result && data[0]?.result?.length < 5 ? data[0]?.result : data[0]?.result?.slice(0,5) 
const listingData = data[1]?.result && data[1]?.result?.length < 5 ? data[1]?.result : data[1]?.result?.slice(0,5) 


useEffect(()=>{
const controller = new AbortController();
data && setData({auction:auctionData,listings:listingData});
return ()=> controller.abort()
},[data,address ,abi])




}