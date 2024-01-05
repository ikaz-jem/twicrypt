import { useContractWrite, useWaitForTransaction } from "wagmi"
import { mining_contract } from "../data/addresses"
import mining_abi from '../abi/mining.json'
import { app_chain_id } from "../../../shared/data/chains"
import Popup from "../../../shared/popup/Popup"
import toast from "react-hot-toast"
import { useState } from "react"
import { useSelector } from "react-redux"

export const useUnstakeMiners = ({ids })=>{
const [hash,setHash] = useState(null);
const {address}= useSelector(state=>state.session)

const unstakeMiners = useContractWrite({
    address:mining_contract && mining_contract,
    abi : mining_abi && mining_abi,
    functionName:'unstakeMultiple',
    args:[ids && ids],
    chainId:app_chain_id&&app_chain_id,
    onMutate(data){
        toast.custom(
            (t) => (
              <Popup productImage={ null} show={true} t={t} title={`claiming your Nfts Back`} desc={` "Please complete the transaction ... "}`}/>
            ),
            { position: "bottom-center", duration: 2000 }
          ); 
    },
    
   onError(error) {
        toast.custom(
        (t) => (
          <Popup productImage={ null} show={true} t={t} title={`error ⚠️`} desc={`${error?.details || "something went wrong ... "}`}/>
        ),
        { position: "bottom-center", duration: 2000 }
      ); 
      },
      onSuccess(data){
      
        setHash(data.hash)
    }
})


    const singletransaction = useWaitForTransaction({
        hash: hash && hash,
        onSuccess(data) {
            toast.custom(
                (t) => (
                  <Popup productImage={ null} show={true} t={t} title={`Nfts Claime to your wallet !`} desc={`your selected assets has been sent to your Wallet`}/>
                ),
                { position: "bottom-center", duration: 1000 }
              )
            
        },
    })

return{ unstakeMiners}

}