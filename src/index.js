import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThirdwebProvider, coinbaseWallet, localWallet, metamaskWallet, walletConnect } from "@thirdweb-dev/react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      
      <ThirdwebProvider 
  authConfig={{
    domain:'http://localhost:3000/',
    authUrl:'authUrl'
  }
  }
      activeChain={56}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        localWallet(),
      ]}
      clientId='53bb4982a2a237a5c46ce00c0e3eb94d'
      secretKey='87wMTlEkIsIsUnNNyaukEU3W0NjvQrdrbLRw0AyttkKimOQGKAOmOsbByNmc6M-zru29Sq9FfiKaJCUIzoyhtQ'
      >
        
             <App />



      </ThirdwebProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
