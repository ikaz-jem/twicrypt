import { createSlice } from "@reduxjs/toolkit";









export const StatesSlice = createSlice({
    name:'states',
    initialState:{
        menuposition:false,
        showMintPanel:false,
        mint:null
    },
    reducers:{
        setMenuPosition:(state,action)=>{
            state.menuposition = action.payload
        },
        toggleMintPanel:(state)=>{
            state.showMintPanel = !state.showMintPanel
        },
        setMintNft:(state,action)=> {
            state.mint = {
                ...state.mint,
                ...action.payload
            }
        }
    },
}) 


export const {setMenuPosition,toggleMintPanel,setMintNft} = StatesSlice.actions;