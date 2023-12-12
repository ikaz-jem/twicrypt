
import { createSlice } from "@reduxjs/toolkit";
import { getCarouselData } from "./carouselThunks";



export const carouselSlice = createSlice({
    name :'carousel',
    initialState:{
        data:null,
        isLoading:false,
        hasError:false
    } ,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCarouselData.fulfilled,(state,action)=>{
            state.data = action.payload.slice(0,50)
            state.isLoading =false
        });
        builder.addCase(getCarouselData.rejected,(state)=>{
            state.hasError = true
            state.isLoading=false
        });
        builder.addCase(getCarouselData.pending,(state)=>{
            state.isLoading =true
        });
    }
})




export const fetchedCarouselData = state=>state.carousel