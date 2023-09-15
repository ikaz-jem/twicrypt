import { Web3Button } from "@web3modal/react"
import { BsWallet2 } from "react-icons/bs"

const ConnectWalletError = ({message,className=''})=> {

return (


    <div className="flex items-center justify-center w-full h-full flex-col ">
    <h2 className="text-neutral-400">{message ? message : 'connect wallet to continue ...'}</h2>
    <BsWallet2 className='text-9xl text-neutral-800 my-5' />

    <Web3Button icon="hide" label="Connect Wallet" balance="show" avatar="hide"/>

</div>

)



}

export default ConnectWalletError