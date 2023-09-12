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
          myListings:null,               
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
                state.myListings = action.payload
            }

    }

})




//actions
export const {setFilter,setMarketplacePage,setListings,setMyListings} = MarketPlaceSlice.actions
