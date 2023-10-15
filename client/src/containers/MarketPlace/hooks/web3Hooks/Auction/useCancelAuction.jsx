import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { useState } from 'react'
import Popup from '../../../../../shared/popup/Popup'
import toast from 'react-hot-toast'
import { marketplace_contract } from '../../../data/Addresses'
import abi from '../../../abi/marketPlace2.json'
import { formatEther } from 'viem'
import { useSelector } from 'react-redux'
import { app_chain_id } from '../../../../../shared/data/chains'

export const useCancelAuction = (bid) => {
    const [cancelHash,setCancelHash]=useState(null)
 
    const nftDetails = useSelector(state=>state.marketPlace.nftDetailsPageState)

    let tokenId = nftDetails?.tokenId && Number(nftDetails?.tokenId)


    const cancelAuction = useContractWrite({
        address: marketplace_contract  && marketplace_contract ,
        abi: abi&&abi,
        functionName: 'cancelAuction',
        chainId: app_chain_id && app_chain_id,
        args: [tokenId && tokenId ],
        onMutate(){
            toast.custom(
                (t) => (
                  <Popup productImage={ null} show={true} t={t} title={`canceling bid ...`} desc={`complete transaction ...`}/>
                ),
                { position: "bottom-center", duration: 2000 }
                )
        },
        onSuccess(data, error) {
            setCancelHash(data.hash)
             toast.custom(
             (t) => (
               <Popup productImage={ null} show={true} t={t} title={`adding your bid ...`} desc={`listing in progress please wait for transaction to complete`}/>
             ),
             { position: "bottom-center", duration: 2000 }
             )
             setCancelHash(data?.hash)
           },

    })


    const waitTransaction = useWaitForTransaction({
        hash: cancelHash && cancelHash,
        onSuccess(data) {
            toast.custom(
                (t) => (
                  <Popup productImage={ null} show={true} t={t} title={`bid canceled !`} desc={`bid amount has been transfered to your wallet!`}/>
                ),
                { position: "bottom-center", duration: 2000 }
              )
        },
    })


    return cancelAuction


}