import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { useState } from 'react'
import Popup from '../../../../../shared/popup/Popup'
import toast from 'react-hot-toast'
import { marketplace_contract } from '../../../data/Addresses'
import abi from '../../../abi/marketPlace2.json'
import { formatEther } from 'viem'
import { app_chain_id } from '../../../../../shared/data/chains'
import { useSelector } from 'react-redux'
import { toDecimals } from '../../../../../utils/web3Functions'


export const useAddBid = (bid) => {
    const [successHash,setSuccessHash]=useState(null)
 
const {price,value}=bid
const msgValue = toDecimals(value,18)
const bidPrice = toDecimals(price,18)

const auctionData = useSelector(state=>state.marketPlace.mylistings)
const tokenId = auctionData?.Auction?.tokenId
const image = auctionData?.Auction?.image


    const createBid = useContractWrite({
        address: marketplace_contract  && marketplace_contract ,
        abi: abi&&abi,
        functionName: 'addBid',
        chainId: app_chain_id && app_chain_id,
        args: [ Number(tokenId) , bidPrice],
        value:msgValue?.toString(),
        onMutate(data, error) {
             toast.custom(
             (t) => (
               <Popup productImage={image || null} show={true} t={t} title={`adding your bid ...`} desc={`creating your bid`}/>
             ),
             { position: "bottom-center", duration: 2000 }
             )
           },
           onSuccess(data){
            setSuccessHash(data.hash)

           }, onError(error) {
            return toast.custom(
             (t) => (
               <Popup productImage={image|| null} show={true} t={t} title={'Error ! 🚧'} desc={`${error?.details  || 'something went wrong !'} `}/>
             ),
             { position: "bottom-center", duration: 2000 }
           );
           },
    

    })


    const waitTransaction = useWaitForTransaction({
        hash: successHash && successHash,
        onSuccess(data) {
            toast.custom(
                (t) => (
                  <Popup productImage={image || null} show={true} t={t} title={`bid added !`} desc={`you can cancel your bid anytime , nft will be automatically transfered upon owner bid approval !`}/>
                ),
                { position: "bottom-center", duration: 2000 }
              )
        },
    })


    return createBid


}