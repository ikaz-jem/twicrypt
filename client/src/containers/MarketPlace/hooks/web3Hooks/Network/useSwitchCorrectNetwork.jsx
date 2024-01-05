import { useNetwork, useSwitchNetwork } from "wagmi"
import Popup from "../../../../../shared/popup/Popup";
import toast from "react-hot-toast";
import { mainChainId } from "../../../data/chains";
import { app_chain_id } from "../../../../../shared/data/chains";

export const useSwitchCorrectNetwork =  ({fallback})=> {


const {chain={}} = useNetwork()

const switchNetwork = useSwitchNetwork({
    chainId:app_chain_id ,
    onMutate({args}){
        toast.custom(
            (t) => (
              <Popup  show={true} t={t} title={`Switching   work  ...`} desc={`you are connected to ${chain?.network || 'uknown network'} switching to binance smart chain`}/>
            ),
            { position: "bottom-center", duration: 2000 }
          );
    
    },
    onSuccess(){
        fallback()
    },onError(error){
        toast.custom(
            (t) => (
              <Popup  show={true} t={t} title={`something went Wrong  ...`} desc={` ${error?.details  || 'cannot change network'} `}/>
            ),
            { position: "bottom-center", duration: 2000 }
          );
    }
})

return {switchNetwork,chain}

}