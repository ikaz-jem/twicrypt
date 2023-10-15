import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { useState } from 'react'
import Popup from '../../../../../shared/popup/Popup'
import toast from 'react-hot-toast'
import { marketplace_contract } from '../../../data/Addresses'
import abi from '../../../abi/marketPlace2.json'
import { formatEther } from 'viem'


export const useAddBid = (bid) => {
    const [successHash,setSuccessHash]=useState(null)
 

const bidPrice = formatEther((bid?.price).toString())
const tokenId = bid?.tokenId



    const createBid = useContractWrite({
        address: marketplace_contract  && marketplace_contract ,
        abi: abi&&abi,
        functionName: 'addBid',
        chainId: 97,
        args: [tokenId && tokenId , bidPrice && bidPrice],
        value:bidPrice && bidPrice,
        onMutate(data, error) {
             toast.custom(
             (t) => (
               <Popup productImage={image && image || null} show={true} t={t} title={`adding your bid ...`} desc={`listing in progress please wait for transaction to complete`}/>
             ),
             { position: "bottom-center", duration: 2000 }
             )
           },
           onSuccess(data){
            setSuccessHash(data.hash)

           }

    })


    const waitTransaction = useWaitForTransaction({
        hash: successHash && successHash,
        onSuccess(data) {
            toast.custom(
                (t) => (
                  <Popup productImage={image && image || null} show={true} t={t} title={`bid added !`} desc={`you can cancel your bid anytime , nft will be automatically transfered upon owner bid approval !`}/>
                ),
                { position: "bottom-center", duration: 2000 }
              )
        },
    })


    return createBid


}