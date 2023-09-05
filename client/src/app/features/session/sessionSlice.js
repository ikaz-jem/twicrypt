import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAccount, getUserSession } from "./sessionThunks";




export const sessionSlice = createSlice({
    name : 'session',
    initialState:{
        address:null,
        user :[],
        accountType:'',
        isLoggedIn:false,
        hasAccount:false ,
    },
    reducers:{
        logIn:(state,action)=>{
            state.isLoggedIn = true
            state.address = action.payload
        },
        logOut:(state)=>{
        state.isLoggedIn=false
        },
        setUserData : (state,action)=>{
            state = {...state ,...action.payload}
        },
        continueAsGuest:(state)=>{
            state.accountType = 'guest'
        }

    },extraReducers:(builder)=>{
  
        builder.addCase(createAccount.fulfilled,(state,action)=>{
            state.user = action.payload 
            state.isLoggedIn = true
            state.hasAccount= true
            state.accountType = 'user'
        });
        builder.addCase(getUserSession.fulfilled,(state,action)=>{
            state.user = action.payload
            state.hasAccount = true
            state.accountType='user'
        });
        builder.addCase(getUserSession.rejected,(state)=>{
            state.hasAccount = false
        })

    }
})



export const {setUserData,logIn,logOut,continueAsGuest} = sessionSlice.actions
export const userData = state=>state.session
export const userSession = state=>state.session.isLoggedIn



