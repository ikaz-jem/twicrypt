import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { useState } from 'react'
import { toDecimals } from '../../../../../utils/web3Functions'
import Popup from '../../../../../shared/popup/Popup'
import toast from 'react-hot-toast'
import sponsorAbi from '../abi/sponsor.json'
import { app_chain_id } from '../../../shared/data/chains'

import { sponsor_contract } from '../data'

export const useEditCarouselAd = (props) => {
    const [createHash,setCreateHash]=useState(null)
 
    const { tokenId, price, value ,image ,name} = props

    const toNumber = (num)=> {
        return Number(num)
    }

    const createAd = useContractWrite({
        address: sponsor_contract  && sponsor_contract ,
        abi: sponsorAbi&&sponsorAbi,
        functionName: 'edit_carousel_ads',
        chainId: app_chain_id && app_chain_id,
        args: [tokenId && toNumber(tokenId), toDecimals(price, 18),image&&image,name&&name],
        value: value && value,
        onSuccess(data, error) {
             toast.custom(
             (t) => (
               <Popup productImage={image && image || null} show={true} t={t} title={`Listing ${name&&name}...`} desc={`listing in progress please wait ${name&&name} to complete`}/>
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
                  <Popup productImage={image && image || null} show={true} t={t} title={`${name&&name} Approved !`} desc={`please complete ${name&&name} token transfer `}/>
                ),
                { position: "bottom-center", duration: 2000 }
              )
        },
    })
  


    return createAd


}