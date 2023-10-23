import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { useState } from 'react'
import Popup from '../../../../../shared/popup/Popup'
import toast from 'react-hot-toast'
import { marketplace_contract } from '../../../data/Addresses'
import abi from '../../../abi/marketPlace2.json'
import { formatEther } from 'viem'
import { useSelector } from 'react-redux'
import { app_chain_id } from '../../../../../shared/data/chains'

export const useCompleteAuction = (bid) => {
    const [completeHash,setCompleteHash]=useState(null)



 
    const nftDetails = useSelector(state=>state.marketPlace.nftDetailsPageState)

    let tokenId = nftDetails?.tokenId && Number(nftDetails?.tokenId)
    const image = nftDetails?.imageLink


    const completeAuction = useContractWrite({
        address: marketplace_contract  && marketplace_contract ,
        abi: abi&&abi,
        functionName: 'cancelAuction',
        chainId: app_chain_id && app_chain_id,
        args: [tokenId && tokenId ],
        onMutate(){
            toast.custom(
                (t) => (
                  <Popup productImage={image || null} show={true} t={t} title={`finalizing auction ...`} desc={`complete transaction ...`}/>
                ),
                { position: "bottom-center", duration: 1500 }
                )
        },
        onSuccess(data, error) {
          setCompleteHash(data?.hash)
             toast.custom(
             (t) => (
               <Popup productImage={ image || null} show={true} t={t} title={`transaction sent ...`} desc={`waiting confirmation ...`}/>
             ),
             { position: "bottom-center", duration: 1500 }
             )
           },
           onError( error) {
            toast.custom(
            (t) => (
              <Popup productImage={ image || null} show={true} t={t} title={`something went wrong ...`} desc={`${error?.details|| "uknown issue ..." } `}/>
            ),
            { position: "bottom-center", duration: 1500 }
            )
          },


    })


    const waitTransaction = useWaitForTransaction({
        hash: completeHash && completeHash,
        onSuccess(data) {

            toast.custom(
                (t) => (
                  <Popup productImage={ image || null} show={true} t={t} title={`auction completed  !`} desc={`the highest bid has been sent to your account !`}/>
                ),
                { position: "bottom-center", duration: 1500 }
              )
        },
    })


    return completeAuction


}