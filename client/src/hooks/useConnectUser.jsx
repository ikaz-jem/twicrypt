import {useEffect ,useState} from "react";
import { useAccount } from 'wagmi'
import { useDispatch} from 'react-redux'
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

// const getSession = async ()=> dispatch(getUserSession(userChanged));
const signIn = (address)=> dispatch(logIn(address))
const signOut = ()=> dispatch(logOut())





const userConnected = useAccount({
    onConnect({ address, connector, isReconnected }) {
        if (isReconnected) {
          setUserChanged(address)
          signIn(address)
          console.log('get session from is reconected')
        }else{
          // signWalletMessage.signMessageAsync()
          // setUserChanged(address)
          console.log('get session from first connect')
       
        
          signIn(address)
            }
        
    } , 
    onDisconnect() {
      signOut()
    },
   
  
 
    
})


// const unwatch = watchAccount((account) =>{
//  return account.address === undefined || account.address === userConnected.address ? null : setUserChanged(account.address)
// })


useEffect(()=>{
  // userChanged !== null && getSession()
      var controller = new AbortController();

  const unwatch = watchAccount((account) =>{
    signIn(account.address)
   return account.address  && setUserChanged(account.address) 
  })
  
  
  console.log('get session from is useEffect watch account')

  
  return () => {
    controller.abort();
  };

},[userChanged])

// useEffect(() => {
//     var controller = new AbortController();
//     // Dispatch the action to get user data
//     dispatch(handleUserData({ address: userConnected.address,isDisconnected : userConnected.isDisconnected }));

//     return () => {
//       controller.abort();
//     };

//   }, []);

  return {userChanged}


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