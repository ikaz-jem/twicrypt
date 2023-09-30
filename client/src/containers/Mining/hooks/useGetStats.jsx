import { useContractRead } from "wagmi";
import { mining_contract } from "../data/addresses";
import mining_abi from '../abi/mining.json';
import { app_chain_id } from "../../../shared/data/chains";
import { useDispatch } from "react-redux";
import { useContractReads } from "wagmi";


export const useGetStats =()=>{


    const dispatch = useDispatch();
    const setMiningInfos = (data)=> dispatch(setMiningInfos(data));



    const {data,isLoading,hasError} = useContractReads({

contracts:[

    {
        address: mining_contract && mining_contract,
        abi: mining_abi && mining_abi,
        chainId: app_chain_id && app_chain_id,
        functionName: 'getStats',
        cacheTime: 10_000,
    },
    {
        address: mining_contract && mining_contract,
        abi: mining_abi && mining_abi,
        chainId: app_chain_id && app_chain_id,
        functionName: 'getAllBanks',
        cacheTime: 10_000,
    }
           
    ]
        }
        )

    return data

}