import { useState } from "react"
import { useContractWrite,useWaitForTransaction } from "wagmi"
import { marketplace_contract } from "../../../data/Addresses"
import toast from "react-hot-toast"
import Popup from "../../../../../shared/popup/Popup"
import { useSelector } from "react-redux"
import marketPlaceAbi from '../../../abi/marketPlace2.json'
import { toDecimals } from "../../../../../utils/web3Functions"

export const useCancelOffer = ()=> {
    const [approveHash, setApproveHash] = useState(null)

const nftDetails = useSelector(state=>state.marketPlace.nftDetailsPageState)

let tokenId = nftDetails?.tokenId && Number(nftDetails?.tokenId)
const cancelOffer = useContractWrite({
    address:  marketplace_contract && marketplace_contract,
    abi : marketPlaceAbi && marketPlaceAbi ,
    functionName:'deletOffer',
    args:[tokenId&&tokenId],
    enabled: tokenId ? true : false,
    onMutate({ args, overrides }) {
        return toast.custom(
         (t) => (
           <Popup productImage={nftDetails?.imageLink || null} show={true} t={t} title={`canceling your offer .. `} desc={`please complete the transaction,your offered amount will be transfered to your account`}/>
         ),
         { position: "bottom-center", duration: 3000 }
       );
       },
       onSuccess(data, error) {
        setApproveHash(data.hash)
       },
       onError(error) {
        console.log(error)
         toast.custom(
         (t) => (
           <Popup productImage={nftDetails?.imageLink || null} show={true} t={t} title={'Error ! 🚧'} desc={`${error?.details || 'something went wrong!'} `}/>
         ),
         { position: "bottom-center", duration: 3000 }
       );
       },

})



const waitTransaction = useWaitForTransaction({
    hash: approveHash && approveHash,
    onSuccess(data) {
        
        return toast.custom(
            (t) => (
              <Popup productImage={nftDetails?.imageLink || null} show={true} t={t} title={`offer canceled  🥳`} desc={` transaction succes ! offer amount is being transfered to your account`}/>
            ),
            { position: "bottom-center", duration: 3000 }
          );

    },
 
})

return cancelOffer


}