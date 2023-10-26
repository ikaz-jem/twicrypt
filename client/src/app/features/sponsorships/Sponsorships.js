import { createSlice } from "@reduxjs/toolkit";







export const Sponsorships = createSlice({
    name:'sponsorships',
    initialState:{
        sponsorships:{
            slider:false,
            carousel:false
        },
        isLoading:false,
        isError:false
    },
    reducers:{

        setSponsorshipData:(state,action)=>{
          
          state.sponsorships = {slider:action.payload.slider_data,carousel:action.payload.carousel_data}
          state.isLoading = action.payload.isLoading
          state.isError = action.payload.isError
        
        }
    
    }

})



export const {setSponsorshipData} = Sponsorships.actions