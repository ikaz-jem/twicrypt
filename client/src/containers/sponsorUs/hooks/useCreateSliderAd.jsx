import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { useState } from 'react'
import Popup from '../../../shared/popup/Popup'
import toast from 'react-hot-toast'
import sponsorAbi from '../abi/sponsor.json'
import { app_chain_id } from '../../../shared/data/chains'

import { sliderFees, sponsor_contract } from '../data'
import { useSelector } from 'react-redux'
import { toUnix } from '../../../utils/unixTimestamp'
import { parseEther } from 'viem'
import { toDecimals } from '../../../utils/web3Functions'
import { useParams } from 'react-router-dom'


export const useCreateSliderAd = (ad) => {
const [createHash,setCreateHash]=useState(null)
 
const {name,image,website,icon,startsAt,duration} = ad;
 
const startTime = toUnix(startsAt)


const {id} = useParams()
const getAffiliate= ()=>{
  const affiliate =  id == undefined || isNaN(id) ? 0 :  Number(id)
return affiliate
}
const affiliate = getAffiliate()

const args = [
  image && image,
  icon && icon ,
  name && name ,
  website && website,
  startTime,
  duration && Number(duration),
  affiliate

]

const fees = 0.49 * Number(duration)
// const fees = sliderFees * Number(duration)

      const createAd = useContractWrite({
        address: sponsor_contract  && sponsor_contract ,
        abi: sponsorAbi&&sponsorAbi,
        functionName: 'create_slider_ad',
        chainId: app_chain_id && app_chain_id,
        args: args && args,
        value: toDecimals(fees,18)?.toString(),
        onSuccess(data, error) {
             toast.custom(
             (t) => (
               <Popup productImage={image && image} show={true} t={t} title={`creating ${name ? name : null} sponsorship ...`} desc={`Submitting sponsorship complete the transaction`}/>
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
                  <Popup productImage={null} show={true} t={t} title={`thank you !`} desc={`you sponsored us for ${duration && duration} days ! your brand and infos will appear on the main page 🥳🥳🥳🥳🥳 `}/>
                ),
                { position: "bottom-center", duration: 2000 }
              )
        },
    })
  


    return createAd


}