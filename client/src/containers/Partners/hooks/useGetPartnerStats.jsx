

import { sponsor_contract } from "../../sponsorUs/data"
import sponsorAbi from '../../sponsorUs/abi/sponsor.json'
import { app_chain_id } from "../../../shared/data/chains"
import { useSelector } from "react-redux"
import { useContractRead } from "wagmi"


export const useGetPartnerStats = ()=>{


    const {address} = useSelector(state=>state.session)



    const sponsor = useContractRead({
        address : sponsor_contract,
        abi : sponsorAbi,
        functionName: 'getPartnerStats',
        chainId: app_chain_id,
        args: [address]
    })


return sponsor?.data

}