import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//wallet provider imports walet connect

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { bsc, polygon, mainnet } from 'wagmi/chains'

// bscTestnet
// chainImages={
//   { 97: process.env.REACT_APP_BSC_LOGO }
// } 

//wallet config 
const chains = [bsc, polygon, mainnet]
const projectId = 'de4ffe006432dcdd103fde1b34b54824';

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient,
})
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const themeVariables = {
  '--w3m-font-family': 'Roboto, sans-serif',
  '--w3m-text-big-bold-font-family': 'poppins-light',
  "--w3m-text-medium-regular-size": ".8rem",
  "--w3m-wallet-icon-border-radius": "50px",
  "--w3m-wallet-icon-large-border-radius": '50px',
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <React.StrictMode>
      
      <WagmiConfig config={wagmiConfig}>
        
             <App />

             </WagmiConfig>
      <Web3Modal
      themeMode="dark"
        projectId={projectId}
        ethereumClient={ethereumClient}
     />


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
