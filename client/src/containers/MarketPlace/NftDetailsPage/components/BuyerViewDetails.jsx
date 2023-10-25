
import { useSelector } from "react-redux"
import ConnectWalletError from "../../../../shared/ConnectWalletError/ConnectWalletError"
import { useCheckIsListed } from "../../hooks/web3Hooks/Listing/useCheckIsListed"
import { bigIntToFormated } from "../../../../utils/web3Functions"
import { Link } from "react-router-dom"
import { useBuyNft } from "../../hooks/web3Hooks/useBuyNft"
import { useSwitchCorrectNetwork } from "../../hooks/web3Hooks/Network/useSwitchCorrectNetwork"
import MakeOffer from "./makeOffer"
import { app_chain_id } from "../../../../shared/data/chains"
import { formatEther } from "viem"

const BuyerViewDetails = () => {


    const metadata = useSelector(state => state.marketPlace.nftDetailsPageState)
    const isVisitorConnected = metadata?.isVisitorConnected


    const nftOwner = metadata?.nftOwner
    const { isListed, data, seller } = useCheckIsListed()

    const pageVisitor = metadata?.pageVisitor
    const sellerArrdess = seller
   
    
    const RenderDetails = () => {
        
        const price = data && formatEther(Number(data?.price))
        const buy = useBuyNft({price:data?.price})

// hoook to change network 
        const {chain,switchNetwork}=useSwitchCorrectNetwork({
            fallback: ()=> buy.write()
        })
        const handleBuyNft =  (e) => {
            e.preventDefault()
            if (chain?.id == app_chain_id){
                e.preventDefault()
                buy.write();
            } else {
                e.preventDefault()
                switchNetwork.switchNetwork()
               
            }
        }


const handleMakeOffer = ()=> {




}

        return (
            <>
                {isVisitorConnected && isListed && pageVisitor != sellerArrdess ?
                    <><div className="px-5 py-5">
                        <p className="text-left p-0 m-0 text-xs text-neutral-400"> current price :</p>
                        <h3 className="text-left p-0 m-0 font-extrabold">{price} BNB</h3>
                    </div><div className="">
                            <div className="flex w-full gap-5 border-t border-neutral-800 p-5 ">
                                <button onClick={(e)=>handleBuyNft(e)} className="w-1/2 text-white font-bold bg-blue-500 hover:bg-neutral-300 hover:text-black transition-all duration-300 rounded-lg h-14">Buy Now</button>
                                <div className="w-1/2 h-14">
                                    <MakeOffer/>
                                    </div>
                            </div>
                        </div></>
                    :
                    <><div className="px-5 py-5">
                        <p className="text-left p-0 m-0 text-xs text-neutral-400"> not for sell !</p>
                        <h3 className="text-left p-0 m-0 font-extrabold">not Listed Yet </h3>
                    </div><div className="">
                            <div className="flex w-full gap-5 border-t border-neutral-800 p-5 ">
                                <button className="w-1/2 text-white font-bold bg-blue-500 hover:bg-neutral-300 hover:text-black transition-all duration-300 rounded-lg h-14">send decentralized email</button>
                               
                                <div className="w-1/2 h-14">

                                <MakeOffer/>
                                </div>

                            </div>
                        </div></>
                }
            </>
        )
    }

    return (
        <>
            <div className="my-5 px-5 rounded-2xl ">
                <div className="  rounded-xl w-full flex flex-col items-start justify-center">
                    <h2 className="m-0 p-0 font-extrabold">{metadata?.metadata?.name}</h2>
                    <p className="text-left text-neutral-400 font-bold text-sm p-0 m-0">Owned by : {pageVisitor == sellerArrdess ? "you" : <Link to={`/dashboard/account/${sellerArrdess}`} className="text-pink-500 hover:text-blue-500 font-bold">{sellerArrdess}</Link>}</p>
                </div>
                {isVisitorConnected ?
                    <div className="border border-neutral-700  mt-5  rounded-2xl bg-neutral-900 flex flex-col">
                     
                            {/* <p className="text-left m-0 p-0"> nft owner ? : {isOwner.toString()}</p> */}
                            <RenderDetails />
          
                    </div> : <ConnectWalletError />}
            </div>
        </>
    )
}


export default BuyerViewDetails

