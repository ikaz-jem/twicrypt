import { useNetwork, useSwitchNetwork } from "wagmi"
import Popup from "../../../../../shared/popup/Popup";
import toast from "react-hot-toast";
import { mainChainId } from "../../../data/chains";

export const useSwitchCorrectNetwork =  ({fallback})=> {


const {chain={}} = useNetwork()

const switchNetwork = useSwitchNetwork({
    chainId:97 ,
    onMutate({args}){
        toast.custom(
            (t) => (
              <Popup  show={true} t={t} title={`Switching Network  ...`} desc={`you are connected to ${chain?.network || 'uknown network'} switching to binance smart chain`}/>
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