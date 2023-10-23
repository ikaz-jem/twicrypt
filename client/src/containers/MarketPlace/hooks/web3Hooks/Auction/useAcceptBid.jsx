import { useState } from "react"
import { useContractWrite,useWaitForTransaction } from "wagmi"
import { marketplace_contract, nft_contract } from "../../../data/Addresses"
import Popup from "../../../../../shared/popup/Popup"
import toast from "react-hot-toast"
import { useSelector } from "react-redux"
import marketPlaceAbi from '../../../abi/marketPlace2.json'
import ERC271 from '../../../abi/ERC721.json'
import { app_chain_id } from "../../../../../shared/data/chains"



export const useAcceptBid = ()=> {
    const [transferHash, setTransferHash] = useState(null)

const nftDetails = useSelector(state=>state.marketPlace.auctionDetailsPageState)
const auctionData = useSelector(state=>state.marketPlace.mylistings)


const highestBidder = auctionData?.Auction?.highestBidder
const aceptIndex = auctionData?.allBids?.find((bid)=>{
  return bid?.bidder?.toLowerCase() == highestBidder?.toLowerCase()
})
const index = auctionData?.allBids?.indexOf(aceptIndex)
let tokenId = Number(auctionData?.Auction?.tokenId) 
const image = auctionData?.Auction?.image

const acceptBid = useContractWrite({
    address:  marketplace_contract && marketplace_contract,
    abi : marketPlaceAbi && marketPlaceAbi ,
    functionName:'acceptBid',
    args:[tokenId&&tokenId,index&&index],
    enabled: index && tokenId ? true : false,
    chainId: app_chain_id && app_chain_id,
    onMutate({ args, overrides }) {
         toast.custom(
         (t) => (
           <Popup productImage={image|| null} show={true} t={t} title={`Approved  🥳 !! Transfering  ${nftDetails?.metadata?.name || 'nft'} ...`} desc={`Transfering  ${nftDetails?.metadata?.name  || 'nft'} to new owner ... `}/>
         ),
         { position: "bottom-center", duration: 2000 }
       );
       
       },
       onSuccess(data, error) {
      setTransferHash(data.hash)
       },
       onError(error) {
        return toast.custom(
         (t) => (
           <Popup productImage={image|| null} show={true} t={t} title={'Error ! 🚧'} desc={`${error?.details  || 'something went wrong !'} `}/>
         ),
         { position: "bottom-center", duration: 2000 }
       );
       },

})



const waitTransferTransaction = useWaitForTransaction({
    hash: transferHash && transferHash,
    onSuccess(data) {
        return toast.custom(
            (t) => (
              <Popup productImage={image|| null} show={true} t={t} title={` ${nftDetails?.metadata?.name || 'nft'} exchange success 🥳`} desc={` ownership of ${nftDetails?.metadata?.name  || 'nft'} has been transfered and funds has been sent to your account !  `}/>
            ),
            { position: "bottom-center", duration: 2000 }
          );

    },
 
})

return { acceptBid}


}