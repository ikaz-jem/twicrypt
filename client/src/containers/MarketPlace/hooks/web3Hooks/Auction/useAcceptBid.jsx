import { useState } from "react"
import { useContractWrite,useWaitForTransaction } from "wagmi"
import { marketplace_contract, nft_contract } from "../../../data/Addresses"
import Popup from "../../../../../shared/popup/Popup"
import toast from "react-hot-toast"
import { useSelector } from "react-redux"
import marketPlaceAbi from '../../../abi/marketPlace2.json'
import ERC271 from '../../../abi/ERC721.json'
import { app_chain_id } from "../../../../../shared/data/chains"



export const useAcceptBid = ({index})=> {
    const [approveHash, setApproveHash] = useState(null)
    const [transferHash, setTransferHash] = useState(null)

const nftDetails = useSelector(state=>state.marketPlace.auctionDetailsPageState)

let tokenId = nftDetails?.tokenId && Number(nftDetails?.tokenId)

const approve = useContractWrite({
  address: nft_contract && nft_contract,
  abi: ERC271,
  functionName:'approve',
  chainId: app_chain_id && app_chain_id,
  args: [marketplace_contract && marketplace_contract, tokenId && tokenId],
  onMutate({ args, overrides }) {
     return toast.custom(
      (t) => (
        <Popup productImage={nftDetails?.imageLink} show={true} t={t} title={`approving ${nftDetails?.metadata?.name || 'Nft'}`}    desc={`please approve ${nftDetails?.metadata?.name || 'Nft'} in Order to complete the exchange ...`}/>
      ),
      { position: "bottom-center", duration: 2000 }
    );
  },
  
  onSuccess(data, error) {
      setApproveHash(data.hash)
    

  },
  onError(error) {
      return toast.custom(
       (t) => (
         <Popup productImage={ null} show={true} t={t} title={`something went wrong 😭 `}    desc={`${error?.details} `}/>
       ),
       { position: "bottom-center", duration: 2000 }
     );
     },
})

const acceptBid = useContractWrite({
    address:  marketplace_contract && marketplace_contract,
    abi : marketPlaceAbi && marketPlaceAbi ,
    functionName:'acceptBid',
    args:[tokenId&&tokenId,index&&index],
    enabled: index && tokenId ? true : false,
    onMutate({ args, overrides }) {
         toast.custom(
         (t) => (
           <Popup productImage={nftDetails?.imageLink || null} show={true} t={t} title={`Approved  🥳 !! Transfering  ${nftDetails?.metadata?.name || 'nft'} ...`} desc={`Transfering  ${nftDetails?.metadata?.name  || 'nft'} to new owner ... `}/>
         ),
         { position: "bottom-center", duration: 3000 }
       );
       
       },
       onSuccess(data, error) {
      setTransferHash(data.hash)
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
          acceptBid.write()
    },
 
})
const waitTransferTransaction = useWaitForTransaction({
    hash: transferHash && transferHash,
    onSuccess(data) {
        return toast.custom(
            (t) => (
              <Popup productImage={nftDetails?.imageLink || null} show={true} t={t} title={` ${nftDetails?.metadata?.name || 'nft'} exchange success 🥳`} desc={` ownership of ${nftDetails?.metadata?.name  || 'nft'} has been transfered and funds has been sent to your account !  `}/>
            ),
            { position: "bottom-center", duration: 3000 }
          );

    },
 
})

return {approve , acceptBid}


}