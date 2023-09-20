import { createSlice } from "@reduxjs/toolkit";








export const MiningSlice = createSlice({
    name:'mining',
    initialState:{
        user:null,
        data:null,
        session:null,
    },
    reducers:{
        setData:(state,action)=>{
            state.data = action.payload
        }

    }

})



export const {
    setData,
} = MiningSlice.actions