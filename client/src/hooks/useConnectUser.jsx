import {useEffect } from "react";
import { useAccount } from 'wagmi'
import { useDispatch} from 'react-redux'
import { handleUserData } from "../app/features/session/sessionSlice";
import { useSignMessage } from "wagmi";
import { disconnect } from '@wagmi/core'




/*

connect => sign => login




*/



export const UseStartSession = ()=>{

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
          dispatch(handleUserData({ address, isReconnected, isLoggedIn:true}));

        }else{
            // signWalletMessage.signMessageAsync()
            dispatch(handleUserData({ address,isLoggedIn:true }));
            }
        
    } , 
    onDisconnect() {
      dispatch(handleUserData({
        isDisconnected : true ,
         isLoggedIn:false}))
    },
 
    
})





useEffect(() => {
    var controller = new AbortController();
    // Dispatch the action to get user data
    dispatch(handleUserData({ address: userConnected.address,isDisconnected : userConnected.isDisconnected }));

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