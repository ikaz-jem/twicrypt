import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux'
import {store} from './app/store/store'


import Web3Provider from './Providers/Web3';


// bscTestnet
// chainImages={
//   { 97: process.env.REACT_APP_BSC_LOGO }
// } 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
            <Provider store={store} >
                 <Web3Provider >
                        <App />
                 </Web3Provider>
              </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
