import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";






export const sessionSlice = createSlice({
    name : 'session',
    initialState:{
      
    },
    reducers:{
        setUserData : (state,action)=>{
            state = {...state ,...action.payload}
        }

    },extraReducers:(builder)=>{
        return builder.addCase (
            getUser.fulfilled, (state,action)=>{
                return state = {...state ,...action.payload}
            }
        )
    }
})


export const getUser = createAsyncThunk(
    'session/setUser',
    async (address)=>{
    
        const res = await address
        return res
    }
)

export const {setUserData} = sessionSlice.actions
export const userData = state=>state.session