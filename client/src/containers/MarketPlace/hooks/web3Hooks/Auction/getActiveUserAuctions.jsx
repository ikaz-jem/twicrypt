import { useContractRead} from "wagmi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { marketplace_contract } from "../../../data/Addresses";
import { setMyListings } from "../../../../../app/features/MarketPlace/MarketplaceSlice";
import abi from '../../../abi/marketPlace2.json'
import { app_chain_id } from "../../../../../shared/data/chains";


export const useGetActiveUserAuctions = ()=> {
const dispatch = useDispatch();


const {address}=useSelector(state=>state.session)
const setData = (data)=> dispatch(setMyListings(data))

const user = "0xF4Cbc0147930C3F1E9920A2dB64BE02EcB4192aD"

        const {data,isLoading,hasError}  = useContractRead({
            address: '0x4141523071aae15CbDF665BcD7BA3a3bb8D17B74',
            abi :abi && abi,
            functionName:'getAllUserListings',
            chainId:app_chain_id && app_chain_id,
            args:[user],
            enabled: address ? true : false
            
        })


// useEffect(()=>{
// const controller = new AbortController();
// data && setData(data);
// return ()=> controller.abort()
// },[data,address ,abi])

return data


}