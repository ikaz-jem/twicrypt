import { createSlice } from "@reduxjs/toolkit";


export const StatesSlice = createSlice({
    name:'states',
    initialState:{
        menuposition:true,
        showMintPanel:false,
        mint:null,
        mining:{
            counter:0,
        }
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