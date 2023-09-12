import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { useState } from 'react'
import { toDecimals } from '../../../../utils/web3Functions'
import Popup from '../../../../shared/popup/Popup'
import toast from 'react-hot-toast'
import { marketplace_contract } from '../../data/Addresses'

export const useCancelListing = (props) => {
    const [approveHash, setApproveHash] = useState(null)
    
    const { tokenId ,image ,name} = props
    const abi = require('../../abi/marketPlace2.json');

    const toNumber = (num)=> {
        return Number(num)
    }

    const canselListing = useContractWrite({
        address: marketplace_contract && marketplace_contract,
        abi: abi,
        functionName: 'cancelListing',
        chainId: 97,
        args: [tokenId && toNumber(tokenId)],
        onMutate({ args, overrides }) {
            return toast.custom(
             (t) => (
               <Popup productImage={image && image || null} show={true} t={t} title={`delisting ${name&&name || 'nft'} ...`} desc={`canceling ${name&&name || 'nft'} sale please complete the transaction`}/>
             ),
             { position: "bottom-center", duration: 3000 }
           );
           },
         onSuccess(data, error) {
             setApproveHash(data.hash)
 
         },
        onError(error) {
             toast.custom(
             (t) => (
               <Popup productImage={image && image || null} show={true} t={t} title={` ${'error'} ...`} desc={` ${error?.details ||  "something went wrong , recheck token ownership ... " }`}/>
             ),
             { position: "bottom-center", duration: 3000 }
           );
           console.log(error)
           },
    
    })


    const waitTransaction = useWaitForTransaction({
        hash: approveHash && approveHash,
        onSuccess(data) {
            toast.custom(
                (t) => (
                  <Popup productImage={image && image || null} show={true} t={t} title={`${name&&name || 'nft'} delisted !`} desc={`
                  ${name&&name || 'nft'} has been canceled and delisted , asset is transfered to your account !`}/>
                ),
                { position: "bottom-center", duration: 5000 }
              )
        },
    })
  

    return canselListing


}