import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { useState } from 'react'
import { toDecimals } from '../../../../../utils/web3Functions'
import Popup from '../../../../../shared/popup/Popup'
import toast from 'react-hot-toast'
import { marketplace_contract } from '../../../data/Addresses'
import { nft_contract } from '../../../data/Addresses'
import abi from '../../../abi/marketPlace2.json'
import erc721 from '../../../abi/ERC721.json'
import { useSelector } from 'react-redux'
import { toUnix } from '../../../../../utils/unixToDate'
import { app_chain_id } from '../../../../../shared/data/chains'
import { formatEther, parseEther } from 'viem'


export const useCreateAuction = (props) => {
    const [approveHash, setApproveHash] = useState(null)
    const [listingHash,setListingHash]=useState(null)
 
const nftData = useSelector(state=>state?.marketPlace?.createListing)


let tokenId = nftData?.selectedNft?.identifier
let image = nftData?.selectedNft?.image_url
let name = nftData?.selectedNft?.name
let price = toDecimals(nftData?.floorPrice,18)
let buyNow = toDecimals(nftData?.buyNow,18)
let startTime = toUnix(nftData?.startTime)
let endTime = toUnix(nftData?.endTime)


const args = [
tokenId,
price,
image,
name,
startTime,
endTime,
buyNow,
]

    const toNumber = (num)=> {
        return Number(num)
    }

    const createAuction = useContractWrite({
        address: marketplace_contract  && marketplace_contract ,
        abi: abi&&abi,
        functionName: 'createAuction',
        chainId: app_chain_id&&app_chain_id,
        args: args && args,
        value: toDecimals(0.025,18).toString(),
        onSuccess(data, error) {
             toast.custom(
             (t) => (
               <Popup productImage={image && image || null} show={true} t={t} title={`Creating auction for ${name&&name}...`} desc={`listing in progress please wait ${name&&name} to complete`}/>
             ),
             { position: "bottom-center", duration: 2000 }
             )
             setListingHash(data.hash)
           },

    })
    const approve = useContractWrite({
        address: nft_contract && nft_contract,
        abi: erc721,
        functionName:'approve',
        chainId: app_chain_id,
        args: [marketplace_contract && marketplace_contract, tokenId && toNumber(tokenId)],
        onMutate({ args, overrides }) {
           return toast.custom(
            (t) => (
              <Popup productImage={image && image || null} show={true} t={t} title={`approving ${name&&name}`}    desc={`please approve ${name&&name} token transfer to marketplace`}/>
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
               <Popup productImage={image && image || null} show={true} t={t} title={`something went wrong 😭 `}    desc={`${error?.details} `}/>
             ),
             { position: "bottom-center", duration: 2000 }
           );
           },
    })

    const waitTransaction = useWaitForTransaction({
        hash: approveHash && approveHash,
        onSuccess(data) {
            toast.custom(
                (t) => (
                  <Popup productImage={image && image || null} show={true} t={t} title={`${name&&name} Approved !`} desc={`please complete ${name&&name} token transfer `}/>
                ),
                { position: "bottom-center", duration: 2000 }
              )
            createAuction.write()
        },
    })
   useWaitForTransaction({
        hash: listingHash && listingHash,
        onSuccess(data) {
            toast.custom(
                (t) => (
                  <Popup productImage={image && image || null} show={true} t={t} button={{title:'view your listings',link:'/dashboard/marketplace/my-listings'}} title={`${name&&name} Listed successfully !`} desc={`${name&&name} Has been listed for sale : ${formatEther(Number(price))} BNB`}/>
                ),
                { position: "bottom-center", duration: 5000 }
              )
           
        },
    })

    return approve


}