import { useContractWrite, useWaitForTransaction } from "wagmi"
import { mining_contract } from "../data/addresses"
import mining_abi from '../abi/mining.json'
import { app_chain_id } from "../../../shared/data/chains"
import Popup from "../../../shared/popup/Popup"
import toast from "react-hot-toast"
import IERC721 from '../../../hooks/web3/interfaces/IERC721.json'
import { useState } from "react"
import { useSelector } from "react-redux"
import { nft_contract } from "../../MarketPlace/data/Addresses"

export const useStakeMiners = ({ids , images})=>{
const [hash,setHash] = useState(null);
const {address}= useSelector(state=>state.session)

const stakeMiners = useContractWrite({
    address:mining_contract && mining_contract,
    abi : mining_abi && mining_abi,
    functionName:'stakeMultiple',
    args:[ids && ids,images && images],
    chainId:app_chain_id&&app_chain_id,
    
    onMutate({ args, overrides }) {
        toast.custom(
        (t) => (
          <Popup productImage={ null} show={true} t={t} title={`transfering Nfts...`} desc={`please complete Nft transfer ..`}/>
        ),
        { position: "bottom-center", duration: 2000 }
      ); 
      },  onError(error) {
        toast.custom(
        (t) => (
          <Popup productImage={ null} show={true} t={t} title={`error ⚠️`} desc={`${error?.details || "something went wrong ... "}`}/>
        ),
        { position: "bottom-center", duration: 2000 }
      ); 
      },
      onSuccess(data){
        setHash(data?.hash)
      }

})

    const approve = useContractWrite({
        address:nft_contract && nft_contract,
        abi:IERC721,
        functionName:'setApprovalForAll',
        args:[mining_contract && mining_contract,true],
        onMutate({ args, overrides }) {
            toast.custom(
            (t) => (
              <Popup productImage={ null} show={true} t={t} title={`approving Nfts ...`} desc={`please complete the transaction ..`}/>
            ),
            { position: "bottom-center", duration: 2000 }
          ); 
          },  onError(error) {
            toast.custom(
            (t) => (
              <Popup productImage={ null} show={true} t={t} title={`error ⚠️`} desc={`${error?.details || "something went wrong"}`}/>
            ),
            { position: "bottom-center", duration: 2000 }
          ); 
          },
          onSuccess(data){
              setHash(data?.hash)
          }
    })
    

    const approveSingle = useContractWrite({
        address:nft_contract && nft_contract,
        abi:IERC721,
        functionName:'approve',
        args:[mining_contract && mining_contract, ids[0]],
        onMutate({ args, overrides }) {
            toast.custom(
            (t) => (
              <Popup productImage={ null} show={true} t={t} title={`approving nft ...`} desc={`please complete the transaction ..`}/>
            ),
            { position: "bottom-center", duration: 2000 }
          ); 
          },  onError(error) {
            toast.custom(
            (t) => (
              <Popup productImage={ null} show={true} t={t} title={`error ⚠️`} desc={`${error?.details || "something went wrong"}`}/>
            ),
            { position: "bottom-center", duration: 2000 }
          ); 
          },
          onSuccess(data){
              setHash(data?.hash)
          }


    })



    const transaction = useWaitForTransaction({
        hash: hash && hash,
        onSuccess(data) {
            toast.custom(
                (t) => (
                  <Popup productImage={ null} show={true} t={t} title={`Approved !`} desc={`please complet Nft workers transfer `}/>
                ),
                { position: "bottom-center", duration: 1000 }
              )
              stakeMiners.write()
        },
    })

return{ approve , approveSingle}

}