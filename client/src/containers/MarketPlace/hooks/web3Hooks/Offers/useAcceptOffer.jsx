import { useState } from "react"
import { useContractWrite,useWaitForTransaction } from "wagmi"
import { marketplace_contract } from "../../../data/Addresses"

export const useAcceptOffer = ({index})=> {
    const [approveHash, setApproveHash] = useState(null)

const nftDetails = useSelector(state=>state.marketPlace.nftDetailsPageState)

let tokenId = nftDetails?.tokenId && Number(nftDetails?.tokenId)
const buy = useContractWrite({
    address:  marketplace_contract && marketplace_contract,
    abi : marketPlaceAbi && marketPlaceAbi ,
    functionName:'acceptOffer',
    args:[tokenId&&tokenId,index&&index],
    enabled: index && tokenId ? true : false,
    onMutate({ args, overrides }) {
        return toast.custom(
         (t) => (
           <Popup productImage={nftDetails?.imageLink || null} show={true} t={t} title={`Checking  ${nftDetails?.metadata?.name || 'nft'} ...`} desc={`sending transaction , buy ${nftDetails?.metadata?.name  || 'nft'} in progress please complete the transaction`}/>
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