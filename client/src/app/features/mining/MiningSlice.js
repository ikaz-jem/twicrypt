import { createSlice } from "@reduxjs/toolkit";








export const MiningSlice = createSlice({
    name:'mining',
    initialState:{
        user:null,
        data:null,
        session:null,
        page:'',
        transaction:null
    },
    reducers:{
        setData:(state,action)=>{
            state.data = action.payload
        },
        setMiningPage:(state,action)=>{
            state.page = action.payload
        },
        setMiningSession:(state,action)=> {
            state.session = action.payload
        },
        setTransaction:(state,action)=> {
            state.transaction=action.payload    
            }

    }

})



export const {
    setData,
    setMiningPage,
    setMiningSession,
    setTransaction
} = MiningSlice.actions