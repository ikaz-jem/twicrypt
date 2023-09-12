import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { useState } from 'react'
import { toDecimals } from '../../../../utils/web3Functions'
import Popup from '../../../../shared/popup/Popup'
import toast from 'react-hot-toast'
import { marketplace_contract } from '../../data/Addresses'
import { nft_contract } from '../../data/Addresses'

export const useCreateListing = (props) => {
    const [approveHash, setApproveHash] = useState(null)
    const [listingHash,setListingHash]=useState(null)
 

   

    const { tokenId, price, value ,image ,name} = props

    const abi = require('../../abi/marketPlace2.json');
    const erc721 = require('../../abi/ERC721.json')


   



    const toNumber = (num)=> {
        return Number(num)
    }

    const listSale = useContractWrite({
        address: marketplace_contract  && marketplace_contract ,
        abi: abi,
        functionName: 'listSale',
        chainId: 97,
        args: [tokenId && toNumber(tokenId), toDecimals(price, 18)],
        value: value && value,
        onSuccess(data, error) {
             toast.custom(
             (t) => (
               <Popup productImage={image && image || null} show={true} t={t} title={`Listing ${name&&name}...`} desc={`listing in progress please wait ${name&&name} to complete`}/>
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
        chainId: 97,
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
            listSale.write()
        },
    })
   useWaitForTransaction({
        hash: listingHash && listingHash,
        onSuccess(data) {
            toast.custom(
                (t) => (
                  <Popup productImage={image && image || null} show={true} t={t} button={{title:'view your listings',link:'earn/marketplace/my-listings'}} title={`${name&&name} Listed successfully !`} desc={`${name&&name} Has been listed for sale : ${price} BNB`}/>
                ),
                { position: "bottom-center", duration: 6000 }
              )
           
        },
    })

    return approve


}