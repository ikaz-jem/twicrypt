import { nft_contract } from "../../data/Addresses";
import abi from '../../abi/Erc7212.json'

import toast from "react-hot-toast";
import Popup from "../../../../shared/popup/Popup";

import { useDispatch, useSelector } from "react-redux";
import { setMintNft } from "../../../../app/features/States/StatesSlice";


import { useContractWrite } from "wagmi";
import { useWaitForTransaction } from "wagmi";
import { toDecimals } from "../../../../utils/web3Functions";
import { app_chain_id } from "../../../../shared/data/chains";

export const useMintNft = ()=> {
    const dispatch = useDispatch()
 

const nftMintDetails= useSelector(state=>state?.states?.mint)

const setNft =(data)=> dispatch(setMintNft(data))


let price = 0.2 * Number(nftMintDetails?.nftCount)


let totalPrice = toDecimals(price,18)

    const toNumber = (num)=> {
        return Number(num)
    }

    const mintNft = useContractWrite({
        address: nft_contract  && nft_contract ,
        abi: abi&&abi,
        functionName: 'mint',
        chainId: app_chain_id && app_chain_id,
        args: [nftMintDetails?.nftCount && toNumber(nftMintDetails?.nftCount) ],
        value: totalPrice&& totalPrice.toString(),
        onMutate(){
          toast.custom(
            (t) => (
              <Popup productImage={null} show={true} t={t} title={`Minting Nft...`} desc={`minting ... , Please complete the transaction`}/>
            ),
            { position: "bottom-center", duration: 2000 }
            )
        },
        onSuccess(data, error) {
             setNft({hash:data.hash})
           },
           onError(error) {
            toast.custom(
            (t) => (
                <Popup productImage={ null} show={true} t={t} title={` error !`} desc={`${error?.details || 'something went wrong'}`}/>
              ),
              { position: "bottom-center", duration: 2000 }
            )
            setNft({hash:null})
          },

    })
   


   useWaitForTransaction({
        hash: nftMintDetails?.hash && nftMintDetails?.hash,
        onSuccess(data) {
            toast.custom(
                (t) => (
                  <Popup productImage={ null} show={true} t={t} button={{title:'view your Nfts',link:'dashboard/marketplace/my-nfts'}} title={`Nft Minted successfully !`} desc={`  Minted successfully a total of ${Number(nftMintDetails?.nftCount).toFixed(2) || 'uknown number'} nfts for ${price || 'uknown price '} BNB`}/>
                ),
                { position: "bottom-center", duration: 2000 }
              )
              setNft({hash:null})

        },
        onError(error) {
            toast.custom(
            (t) => (
                <Popup productImage={ null} show={true} t={t} title={` error !`} desc={`${error?.details ||'something went wrong'}`}/>
              ),
              { position: "bottom-center", duration: 2000 }
            )
            setNft({hash:null})
          },


    })

return mintNft

}


