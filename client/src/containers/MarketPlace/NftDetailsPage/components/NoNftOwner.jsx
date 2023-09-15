
import { useSelector } from "react-redux"
import ConnectWalletError from "../../../../shared/ConnectWalletError/ConnectWalletError"
import { Link } from "react-router-dom"
const NoNftOwner = () => {


    const metadata = useSelector(state=>state.marketPlace.nftDetailsPageState)
    const isVisitorConnected = metadata?.isVisitorConnected
  


    return (
        <>
            <div className="my-5 px-5 rounded-2xl ">
                <div className="  rounded-xl w-full flex flex-col items-start justify-center">
                    <h2 className="m-0 p-0 font-extrabold">{metadata?.metadata?.name}</h2>
                    <p className="text-left text-neutral-400 font-bold text-sm p-0 m-0">Owned by : Not Owner Yet 😕</p>
                </div>
                {isVisitorConnected ?
                    <div className="border border-neutral-700  mt-5  rounded-2xl bg-neutral-900 flex flex-col">
                        <div className="px-5 border-b border-neutral-700">
                            
                            <h3>This Nft has Not been Minted Yet !</h3>
                        <p className=" text-neutral-400 font-bold text-sm p-0 m-0">Mint random Nft and take your change to win more than 1BTC  🥳</p>
                        </div>
                       
                        <div className="" >
                            <div className="flex w-full gap-5 border-t border-neutral-800 p-5 ">
                                <Link  to='/earn/mint' className="w-1/2 text-white font-bold bg-pink-500 rounded-lg h-14 flex items-center justify-center">Mint Nft</Link>
                                <Link to='/earn/marketplace/all-nfts' className="w-1/2 text-black font-bold bg-neutral-300 rounded-lg h-14 flex items-center justify-center">View All Nft Types</Link>
                            </div>
                        </div>
                    </div> : <ConnectWalletError/>}
            </div>
        </>
    )
}


export default NoNftOwner

