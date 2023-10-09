import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { useState } from 'react'
import Popup from '../../../shared/popup/Popup'
import toast from 'react-hot-toast'
import sponsorAbi from '../abi/sponsor.json'
import { app_chain_id } from '../../../shared/data/chains'

import { sponsor_contract } from '../data'

export const useCreateSliderAd = () => {
    const [createHash,setCreateHash]=useState(null)
 


    const createAd = useContractWrite({
        address: sponsor_contract  && sponsor_contract ,
        abi: sponsorAbi&&sponsorAbi,
        functionName: 'create_slider_ad',
        chainId: app_chain_id && app_chain_id,
        args: [""],
        value: 2,
        onSuccess(data, error) {
             toast.custom(
             (t) => (
               <Popup productImage={null} show={true} t={t} title={`Listing ...`} desc={`listing in progress please waitto complete`}/>
             ),
             { position: "bottom-center", duration: 2000 }
             )
             setCreateHash(data.hash)
           },

    })
   

    const waitTransaction = useWaitForTransaction({
        hash: createHash && createHash,
        onSuccess(data) {
            toast.custom(
                (t) => (
                  <Popup productImage={null} show={true} t={t} title={` Approved !`} desc={`please complete  token transfer `}/>
                ),
                { position: "bottom-center", duration: 2000 }
              )
        },
    })
  


    return createAd


}