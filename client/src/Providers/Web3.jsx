

//wallet provider imports walet connect

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { bsc, polygon, mainnet } from 'wagmi/chains'
import { Web3Modal } from '@web3modal/react'


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


const Web3Provider = ({children})=> {

return (
<>
    <WagmiConfig config={wagmiConfig}>


    {children}
        
    </WagmiConfig>
    <Web3Modal
              themeMode="dark"
              projectId={projectId}
              ethereumClient={ethereumClient}/>
</>
)

}

export default Web3Provider