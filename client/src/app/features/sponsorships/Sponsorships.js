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
          
          state.sponsorships = {slider:action.payload.slider,carousel:action.payload.carousel}
          state.isLoading = action.payload.isLoading
          state.isError = action.payload.isError
        
        }
    
    }

})



export const {setSponsorshipData} = Sponsorships.actions