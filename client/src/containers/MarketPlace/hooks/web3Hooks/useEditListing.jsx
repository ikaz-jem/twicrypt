import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { useState } from 'react'
import { toDecimals } from '../../../../utils/web3Functions'
import Popup from '../../../../shared/popup/Popup'
import toast from 'react-hot-toast'
import { marketplace_contract } from '../../data/Addresses'
import abi from '../../abi/marketPlace2.json'
export const useEditListing = (props) => {
    const [approveHash, setApproveHash] = useState(null)
    
    const { tokenId ,image ,name ,price} = props

    const toNumber = (num)=> {
        return Number(num)
    }

    const canselListing = useContractWrite({
        address: marketplace_contract && marketplace_contract,
        abi: abi&&abi,
        functionName: 'editListing',
        chainId: 97,
        args: [price && toDecimals(price,18) ,tokenId && toNumber(tokenId)],
        onMutate({ args, overrides }) {
            return toast.custom(
             (t) => (
               <Popup productImage={image && image || null} show={true} t={t} title={`Updating ${name&&name || 'nft'} Price ...`} desc={`wait for transaction to complete .. `}/>
             ),
             { position: "bottom-center", duration: 3000 }
           );
           },
         onSuccess(data, error) {
             setApproveHash(data.hash)
 
         },
        onError(error) {
            return toast.custom(
             (t) => (
               <Popup productImage={image && image || null} show={true} t={t} title={` ${'error'} ...`} desc={` ${error?.details || "something went wrong ... " }`}/>
             ),
             { position: "bottom-center", duration: 3000 }
           );
           },
    
    })


    const waitTransaction = useWaitForTransaction({
        hash: approveHash && approveHash,
        onSuccess(data) {
            toast.custom(
                (t) => (
                  <Popup productImage={image && image || null} show={true} t={t} title={`${name&&name || 'nft'} price has been updated !`} desc={`
                  ${name&&name || 'nft'} price has been updated to ${price || 'uknown'} BNB !`}/>
                ),
                { position: "bottom-center", duration: 5000 }
              )
        },
    })
  

    return canselListing


}