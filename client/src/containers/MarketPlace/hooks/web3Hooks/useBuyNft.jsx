import { useContractWrite, useNetwork, useSwitchNetwork } from "wagmi"
import { marketplace_contract } from "../../data/Addresses"
import marketPlaceAbi from '../../abi/marketPlace2.json'
import { useSelector } from "react-redux"
import toast from "react-hot-toast"
import Popup from "../../../../shared/popup/Popup"
import { useWaitForTransaction } from "wagmi"
import { useState } from "react"
import { app_chain_id } from "../../../../shared/data/chains"

export const useBuyNft = ({price})=> {

const nftDetails = useSelector(state=>state.marketPlace.nftDetailsPageState)
const [approveHash, setApproveHash] = useState(null)



let tokenId = nftDetails?.tokenId && Number(nftDetails?.tokenId)
const buy = useContractWrite({
    address:  marketplace_contract && marketplace_contract,
    abi : marketPlaceAbi && marketPlaceAbi ,
    functionName:'buyNft',
    args:[tokenId&&tokenId],
    chainId : app_chain_id ,
    value:price&&price,
  
    onMutate({ args, overrides }) {
         toast.custom(
         (t) => (
           <Popup productImage={nftDetails?.imageLink || null} show={true} t={t} title={`Buying ${nftDetails?.metadata?.name || 'nft'} ...`} desc={`sending transaction , buy ${nftDetails?.metadata?.name  || 'nft'} in progress please complete the transaction`}/>
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
           <Popup productImage={nftDetails?.imageLink || null} show={true} t={t} title={'Error ! 🚧'} desc={`${error?.details  || 'something went wrong !'} `}/>
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
              <Popup productImage={nftDetails?.imageLink || null} show={true} t={t} title={` ${nftDetails?.metadata?.name || 'nft'} is yours 🥳`} desc={` transaction succes ! you own ${nftDetails?.metadata?.name  || 'nft'} asset is being transfered to your account`}/>
            ),
            { position: "bottom-center", duration: 3000 }
          );

    },
 
})

return buy


}