import { createSlice } from "@reduxjs/toolkit";




export const MarketPlaceSlice = createSlice({

    name: 'marketPlace',
    initialState: {
        marketplacePage:'all-nfts',
        nftFilter: {
                    chain:'bsctestnet',
                    execute: true,
                    limit: 50,
                    },
          allListings:null,
          mylistings:null,  
          createListing:null ,
          mynfts:null,
          nftDetailsPageState:{
            metadata:null
          },          
    },
    reducers: {
            setFilter:(state,action)=>{
                state.nftFilter = {
                    ...state.nftFilter,
                    ...action.payload
                }
            }  ,
            setMarketplacePage:(state,action)=>{
                state.marketplacePage = action.payload
            },
            setListings:(state,action)=>{
                state.allListings = action.payload
            },
            setMyListings:(state,action)=> {
                state.mylistings = action.payload
            },
            setListingDetails:(state,action)=>{
                state.createListing={
                    ...state.createListing,
                    ...action.payload
                }
            },
            setMyNfts:(state,action)=>{
                state.mynfts = {
                    ...state.mynfts,
                    ...action.payload
                }
            },
            setNftDetailsPageState:(state,action)=>{

                state.nftDetailsPageState = {
                    ...state.nftDetailsPageState,
                    ...action.payload,
                }
            }

    }

})



//actions
export const {
    setFilter,
    setMarketplacePage,
    setListings,
    setMyListings,
    setListingDetails,
    setMyNfts,
    setNftDetailsPageState
} = MarketPlaceSlice.actions
