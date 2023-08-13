import {useEffect ,useState} from "react";
import { useAccount } from 'wagmi'
import { useDispatch} from 'react-redux'
import { handleUserData } from "../app/features/session/sessionSlice";
import { useSignMessage } from "wagmi";
import { disconnect } from '@wagmi/core'
import UserModal from "../shared/userModal/UserModal";
import { logIn,logOut } from "../app/features/session/sessionSlice";
import { getUserSession } from "../app/features/session/sessionThunks";
import { watchAccount } from '@wagmi/core'

export const UseStartSession = (data)=>{
const [userChanged,setUserChanged]=useState(null)
const dispatch = useDispatch()

const signWalletMessage = useSignMessage({
    message: "Please Sign To Verify Your DC Profile Ownership, If You Don't Have one it will be automatically created for you",
    onError() {
      disconnect()
     dispatch(logOut())
    },
    onSuccess(data) {
      dispatch(logIn())
    }
  })




const userConnected = useAccount({
    onConnect({ address, connector, isReconnected }) {
        if (isReconnected) {
          setUserChanged(address)
          dispatch(handleUserData({ address, isReconnected, isLoggedIn:true}));
          dispatch(logIn())
          dispatch(getUserSession(address))
        }else{
          dispatch(logIn())
          setUserChanged(address)
            // signWalletMessage.signMessageAsync()
            dispatch(handleUserData({ address,isLoggedIn:true }));
            dispatch(getUserSession(address))
            }
        
    } , 
    onDisconnect() {
      dispatch(logOut())
    },
   
  
 
    
})

console.log(userChanged)

const unwatch = watchAccount((account) =>{
 return account.address === undefined || account.address === userConnected.address ? null : setUserChanged(account.address)
})



console.log(unwatch)
useEffect(()=>{
  userChanged !== null &&
  dispatch(getUserSession(userChanged))
},[userChanged])

useEffect(() => {
    var controller = new AbortController();
    // Dispatch the action to get user data
    dispatch(handleUserData({ address: userConnected.address,isDisconnected : userConnected.isDisconnected }));

    return () => {
      controller.abort();
    };

  }, []);

  return <UserModal address={userChanged} show={!data} />


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