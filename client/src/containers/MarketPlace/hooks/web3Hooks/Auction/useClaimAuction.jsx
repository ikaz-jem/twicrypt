import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { useState } from 'react'
import Popup from '../../../../../shared/popup/Popup'
import toast from 'react-hot-toast'
import { marketplace_contract } from '../../../data/Addresses'
import abi from '../../../abi/marketPlace2.json'
import { formatEther } from 'viem'
import { useSelector } from 'react-redux'
import { app_chain_id } from '../../../../../shared/data/chains'

export const useClaimAuction = (bid) => {
    const [claim,setClaim]=useState(null)
 
    const nftDetails = useSelector(state=>state.marketPlace.nftDetailsPageState)

    let tokenId = nftDetails?.tokenId && Number(nftDetails?.tokenId)
    const image = nftDetails?.imageLink

    const claimAuction = useContractWrite({
        address: marketplace_contract  && marketplace_contract ,
        abi: abi&&abi,
        functionName: 'cancelAuction',
        chainId: app_chain_id && app_chain_id,
        args: [tokenId && tokenId ],
        onMutate(){
            toast.custom(
                (t) => (
                  <Popup productImage={image || null} show={true} t={t} title={`claiming ${ nftDetails?.metadata?.name ||'Nft'} ...`} desc={`complete transaction ...`}/>
                ),
                { position: "bottom-center", duration: 2000 }
                )
        },
        onSuccess(data, error) {
             toast.custom(
             (t) => (
               <Popup productImage={ image || null} show={true} t={t} title={`transaction sent ...`} desc={`waiting confirmation ...`}/>
             ),
             { position: "bottom-center", duration: 2000 }
             )
             setClaim(data?.hash)
           },
        onError( error) {
             toast.custom(
             (t) => (
               <Popup productImage={ image || null} show={true} t={t} title={`something went wrong ...`} desc={`${error?.details|| "uknown issue ..." } `}/>
             ),
             { position: "bottom-center", duration: 2000 }
             )
           },

    })


    const waitTransaction = useWaitForTransaction({
        hash: claim && claim,
        onSuccess(data) {
            toast.custom(
                (t) => (
                  <Popup productImage={ image || null} show={true} t={t} title={`${ nftDetails?.metadata?.name ||'Nft'}  Claimed !`} desc={`nft is transfered to your account ! all bids if exists will be refunded`}/>
                ),
                { position: "bottom-center", duration: 2000 }
              )
        },
    })


    return claimAuction


}