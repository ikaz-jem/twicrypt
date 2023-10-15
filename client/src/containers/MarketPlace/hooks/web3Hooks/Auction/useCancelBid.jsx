import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { useState } from 'react'
import Popup from '../../../../../shared/popup/Popup'
import toast from 'react-hot-toast'
import { marketplace_contract } from '../../../data/Addresses'
import abi from '../../../abi/marketPlace2.json'
import { formatEther } from 'viem'
import { useSelector } from 'react-redux'


export const useCancelBid = (bid) => {
    const [cancelHash,setCancelHash]=useState(null)
 
    const nftDetails = useSelector(state=>state.marketPlace.auctionDetailsPageState)


    let tokenId = nftDetails?.tokenId && Number(nftDetails?.tokenId)


    const cancelBid = useContractWrite({
        address: marketplace_contract  && marketplace_contract ,
        abi: abi&&abi,
        functionName: 'cancelBid',
        chainId: 97,
        args: [tokenId && tokenId ],
        onMutate(){
            toast.custom(
                (t) => (
                  <Popup productImage={image && image || null} show={true} t={t} title={`canceling bid ...`} desc={`complete transaction ...`}/>
                ),
                { position: "bottom-center", duration: 2000 }
                )
        },
        onSuccess(data, error) {
            setCancelHash(data.hash)
             toast.custom(
             (t) => (
               <Popup productImage={image && image || null} show={true} t={t} title={`adding your bid ...`} desc={`listing in progress please wait for transaction to complete`}/>
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
                  <Popup productImage={image && image || null} show={true} t={t} title={`bid canceled !`} desc={`bid amount has been transfered to your wallet!`}/>
                ),
                { position: "bottom-center", duration: 2000 }
              )
        },
    })


    return cancelBid


}