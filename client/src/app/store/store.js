import symbolObservable from 'symbol-observable';
import { carouselSlice } from '../features/carousel/carouselSlice';

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'


//slices imports 

//coins slice for CRUD coin operations and Data
import { sessionSlice } from '../features/session/sessionSlice';


//marketplace
import { MarketPlaceSlice } from '../features/MarketPlace/MarketplaceSlice';








if (!Symbol.observable) {
    Symbol.observable = symbolObservable;
  }


const rootReducer = combineReducers({
[sessionSlice.name]:sessionSlice.reducer,
[carouselSlice.name]: carouselSlice.reducer,
[MarketPlaceSlice.name]:MarketPlaceSlice.reducer
})

const middleware = [ thunk];

const composeEnhancers =
  process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  enhancers: [applyMiddleware(thunk)],
  devTools: process.env.NODE_ENV !== 'production',
  compose: composeEnhancers,
});
