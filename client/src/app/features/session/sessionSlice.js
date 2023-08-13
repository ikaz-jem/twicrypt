import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAccount, getUserSession } from "./sessionThunks";




export const sessionSlice = createSlice({
    name : 'session',
    initialState:{
        user :[],
        isLogedIn:false,
        hasAccount:true ,
    },
    reducers:{
        logIn:(state)=>{
            state.isLogedIn = true
        },
        logOut:(state)=>{
        state.isLogedIn=false
        },
        setUserData : (state,action)=>{
            state = {...state ,...action.payload}
        }

    },extraReducers:(builder)=>{
         builder.addCase (
            handleUserData.fulfilled, (state,action)=>{
                return state = {...state ,...action.payload}
            }
        );
        builder.addCase(createAccount.fulfilled,(state,action)=>{
            state.user = action.payload 
            state.isLogedIn = true
            state.hasAccount= true
        });
        builder.addCase(getUserSession.fulfilled,(state,action)=>{
            state.user = action.payload
            state.hasAccount = true
        });
        builder.addCase(getUserSession.rejected,(state)=>{
            state.hasAccount = false
        })

    }
})


export const handleUserData = createAsyncThunk(
    'session/setUser',
    async (data)=>{
    
        const res = await data
        return res
    }
)

export const {setUserData,logIn,logOut} = sessionSlice.actions
export const userData = state=>state.session
export const userSession = state=>state.session.isLogedIn



