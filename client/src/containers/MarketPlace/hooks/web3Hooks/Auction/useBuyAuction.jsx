import { useContractWrite, useNetwork, useSwitchNetwork } from "wagmi"
import { useSelector } from "react-redux"
import toast from "react-hot-toast"
import Popup from "../../../../../shared/popup/Popup"
import { useWaitForTransaction } from "wagmi"
import { useState } from "react"
import { toDecimals } from "../../../../../utils/web3Functions"
import { marketplace_contract } from "../../../data/Addresses"
import marketPlaceAbi from '../../../abi/marketPlace2.json'
import { app_chain_id } from "../../../../../shared/data/chains"

export const useBuyAuction = ()=> {

const nftDetails = useSelector(state=>state.marketPlace.auctionDetailsPageState)
const [approveHash, setApproveHash] = useState(null)

const auctionData = useSelector(state=>state.marketPlace.mylistings)
const price = Number(auctionData?.Auction?.buyNow)
const hb = Number(auctionData?.Auction?.highestBid)
const tokenId= Number(auctionData?.Auction?.tokenId)

const extractBuyPrice = ()=> (price + hb+(1*10**16))?.toString()


const buy = useContractWrite({
    address:  marketplace_contract && marketplace_contract,
    abi : marketPlaceAbi && marketPlaceAbi ,
    functionName:'buyNowAuction',
    args:[tokenId&&tokenId],
    chainId:app_chain_id,
    value:extractBuyPrice() ,
    onMutate({ args, overrides }) {
         toast.custom(
         (t) => (
           <Popup productImage={nftDetails?.imageLink || null} show={true} t={t} title={`Buying ${nftDetails?.metadata?.name || 'nft'} ...`} desc={`sending transaction , buy ${nftDetails?.metadata?.name  || 'nft'} in progress please complete the transaction`}/>
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
           <Popup productImage={nftDetails?.imageLink || null} show={true} t={t} title={'Error ! 🚧'} desc={`${error?.details  || 'something went wrong !'} `}/>
         ),
         { position: "bottom-center", duration: 2000 }
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
            { position: "bottom-center", duration: 2000 }
          );

    },
 
})

return buy


}