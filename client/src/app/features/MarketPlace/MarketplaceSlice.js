import { createSlice } from "@reduxjs/toolkit";








export const MarketPlaceSlice = createSlice({

    name: 'marketPlace',
    initialState: {
        marketplacePage:'all-nfts',
        nftFilter: {
        chain:'bsctestnet',
        execute: true,
        limit: 50
    }
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
            }

    }

})


export const nftFilter = state=> state.MarketPlaceSlice.nftFilter
export const marketplacePage = state=> state.marketPlace.marketplacePage

export const {setFilter,setMarketplacePage} = MarketPlaceSlice.actions
