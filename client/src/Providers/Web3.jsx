

//wallet provider imports walet connect

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { bsc, polygon, mainnet ,bscTestnet , goerli,localhost } from 'wagmi/chains';
import { Web3Modal } from '@web3modal/react';


//wallet config 
const chains = [bsc, polygon, mainnet ,bscTestnet,goerli,localhost]
const projectId = 'de4ffe006432dcdd103fde1b34b54824';

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  enableNetworkView: true,
  connectors: [...w3mConnectors({ projectId, version: 1, chains }),
  ],
  publicClient,
})
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const themeVariables = {
  '--w3m-font-family': 'Roboto, sans-serif',
  '--w3m-text-big-bold-font-family': 'poppins-light',
  "--w3m-text-medium-regular-size": ".8rem",
  "--w3m-logo-image-url":"https://c1.wallpaperflare.com/preview/899/972/45/bitcoin-cryptocurrency-blockchain-money.jpg",
  "--w3m-background-image-url":"https://c1.wallpaperflare.com/preview/899/972/45/bitcoin-cryptocurrency-blockchain-money.jpg",
  "--w3m-overlay-backdrop-filter" : "blur(5px)",
  
  

}


const MyProvider = ({children})=> {

return (
<>
    <WagmiConfig config={wagmiConfig}>


    {children}
        
    </WagmiConfig>
    <Web3Modal
              themeVariables={themeVariables}
              projectId={projectId}
              ethereumClient={ethereumClient}
              themeMode='dark'
              />
</>
)

}

export default MyProvider