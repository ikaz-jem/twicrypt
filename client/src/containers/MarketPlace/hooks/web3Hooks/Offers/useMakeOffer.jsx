import { useState } from "react"
import { useContractWrite,useWaitForTransaction } from "wagmi"
import { marketplace_contract } from "../../../data/Addresses"
import toast from "react-hot-toast"
import Popup from "../../../../../shared/popup/Popup"
import { useSelector } from "react-redux"
import marketPlaceAbi from '../../../abi/marketPlace2.json'
import { toDecimals } from "../../../../../utils/web3Functions"
import { app_chain_id } from "../../../../../shared/data/chains"

export const useMakeOffer = ({price})=> {
    const [approveHash, setApproveHash] = useState(null)

const nftDetails = useSelector(state=>state.marketPlace.nftDetailsPageState)

let tokenId = nftDetails?.tokenId && Number(nftDetails?.tokenId)

const createOffer = useContractWrite({
    address:  marketplace_contract && marketplace_contract,
    abi : marketPlaceAbi && marketPlaceAbi ,
    functionName:'makeOffer',
    chainId:app_chain_id&& app_chain_id,
    args:[tokenId&&tokenId,price&&toDecimals(price,18)],
    value:`${toDecimals(price,18)}`,
    onMutate({ args, overrides }) {
        return toast.custom(
         (t) => (
           <Popup productImage={nftDetails?.imageLink || null} show={true} t={t} title={`Making offer .. `} desc={`sending offer  in progress please complete the transaction, offered ${price} BNB`}/>
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
           <Popup productImage={nftDetails?.imageLink || null} show={true} t={t} title={'Error ! 🚧'} desc={`${error?.details || 'you may have Already made an offer , only one offer is allowed , to make new one cancel the current offer !'} `}/>
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
              <Popup productImage={nftDetails?.imageLink || null} show={true} t={t} title={`you have made an offer to ${nftDetails?.metadata?.name || 'nft'}  🥳`} desc={` transaction succes ! you offered ${price || '0x0'} BNB to ${nftDetails?.metadata?.name  || 'nft'} you can cancel offer anytime and funds will be transfered to your account again`}/>
            ),
            { position: "bottom-center", duration: 3000 }
          );

    },
 
})

return createOffer


}