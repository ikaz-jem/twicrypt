import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { useState } from 'react'
import Popup from '../../../../../shared/popup/Popup'
import toast from 'react-hot-toast'
import { marketplace_contract } from '../../../data/Addresses'
import abi from '../../../abi/marketPlace2.json'
import { formatEther } from 'viem'
import { useSelector } from 'react-redux'
import { app_chain_id } from '../../../../../shared/data/chains'


export const useCancelBid = (bid) => {
    const [cancelHash,setCancelHash]=useState(null)
 
    const nftDetails = useSelector(state=>state.marketPlace.auctionDetailsPageState)

      const auctionData = useSelector(state=>state.marketPlace.mylistings)
      const image = auctionData?.Auction?.image


    let tokenId = Number(auctionData?.Auction?.tokenId)

    const cancelBid = useContractWrite({
        address: marketplace_contract  && marketplace_contract ,
        abi: abi&&abi,
        functionName: 'cancelBid',
        chainId: app_chain_id && app_chain_id,
        args: [tokenId && tokenId ],
        onMutate(){
            toast.custom(
                (t) => (
                  <Popup productImage={image && image || null} show={true} t={t} title={`canceling bid ...`} desc={`please complete the transaction ...`}/>
                ),
                { position: "bottom-center", duration: 2000 }
                )
        },
        onSuccess(data, error) {
            setCancelHash(data.hash)
             toast.custom(
             (t) => (
               <Popup productImage={image && image || null} show={true} t={t} title={`transfering bid amount to your account ...`} desc={`your bid amount is being transfered to your account`}/>
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