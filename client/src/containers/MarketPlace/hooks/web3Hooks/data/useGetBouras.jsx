import { useContractRead} from "wagmi";
import { setListings } from "../../../../../app/features/MarketPlace/MarketplaceSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { marketplace_contract } from "../../../data/Addresses";
import marketplace_abi from '../../../abi/marketPlace2.json'
import { app_chain_id } from "../../../../../shared/data/chains";


export const useGetBouras = ()=> {


        const {data,isLoading,hasError}  = useContractRead({
            address: marketplace_contract&&marketplace_contract,
            abi :marketplace_abi&&marketplace_abi,
            functionName:'getAllAuctions',
            chainId:app_chain_id&&app_chain_id,
            // args:[80]
        })


console.log(data)

return {data}


}