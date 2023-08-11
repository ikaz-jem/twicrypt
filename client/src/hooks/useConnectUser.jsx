import {useEffect } from "react";
import { useAccount } from 'wagmi'
import { useDispatch} from 'react-redux'
import { getUser } from "../app/features/session/sessionSlice";
import { useSignMessage } from "wagmi";
import { disconnect } from '@wagmi/core'




/*

connect => sign => login




*/



export const UseStartSession = ()=>{
let isLoggedIn = false

const dispatch = useDispatch()


const signWalletMessage = useSignMessage({
    message: "Please Sign To Verify Your DC Profile Ownership, If You Don't Have one it will be automatically created for you",
    onError() {
      disconnect()
     console.log('couldnt sign message')
    },
    onSuccess(data) {
     console.log('message signed')
     console.log(data)
    }
  })




const userConnected = useAccount({
    onConnect({ address, connector, isReconnected }) {
        if (isReconnected) {
            isLoggedIn = true
            console.log('reconected')
        }else{
            // signWalletMessage.signMessageAsync()
             console.log('user connected'); 

             isLoggedIn = true
            }
        
    } , 
 
    
})

const disconnect = useAccount({
    onDisconnect() {
        console.log('Disconnected')
     },
})

console.log(disconnect)


useEffect(() => {
    var controller = new AbortController();
    // Dispatch the action to get user data
    dispatch(getUser({ ...userConnected.address, ...userConnected.isConnecting ,...userConnected.isDisconnected }));

    return () => {
      controller.abort();
    };

  }, []);



}


/*






const signWalletMessage = useSignMessage({
    message: "Please Sign To Verify Your DC Profile Ownership, If You Don't Have one it will be automatically created for you",
    onError() {
      disconnect()
      popup({
        show:true,
        title:"Erron",
        msg:"Please Sign The Message To Log In "
      })
      setWalletData((prev: any) => ({
        ...prev,
        signature: 'revoqued',
        walletAddress: address
      }))
    },
    onSuccess(data) {
      setWalletData((prev: any) => ({
        ...prev
      }));
      popup({
        show:true,
        title:"Connected Successfully",
        msg: "Successfully Logged In To Your Account"
      })
      useEmit('userConnect', walletData,"emit")
      dispatch(logIn(process.env.REACT_APP_AUTH_LOGIN))
    }
  })



*/