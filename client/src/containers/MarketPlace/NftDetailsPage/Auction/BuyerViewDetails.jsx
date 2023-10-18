
import { useSelector } from "react-redux"
import ConnectWalletError from "../../../../shared/ConnectWalletError/ConnectWalletError"
import { useCheckIsListed } from "../../hooks/web3Hooks/Listing/useCheckIsListed"
import { bigIntToFormated } from "../../../../utils/web3Functions"
import { Link } from "react-router-dom"
import { useBuyNft } from "../../hooks/web3Hooks/useBuyNft"
import { useSwitchCorrectNetwork } from "../../hooks/web3Hooks/Network/useSwitchCorrectNetwork"
import MakeBid from "./MakeBid"
import { useState,useEffect } from "react"
import { formatEther } from "viem"
import { unixToDate ,unixCountDownDays} from "../../../../utils/unixToDate"



const BuyerViewDetails = ({auctionData,isListed,data,seller}) => {

    const [auctionEnd,setAuctionEnd]=useState(0)
    const price =formatEther(Number(auctionData?.Auction?.floorPrice))
    const highestBid =formatEther(Number(auctionData?.Auction?.highestBid))
    const startTime = Number(auctionData?.Auction?.startsAt)
    const endTime =  Number(auctionData?.Auction?.endsAt)
    const currentTime = Math.floor(new Date().getTime() / 1000);

    const timeLeft = endTime-currentTime
    useEffect(()=>{
       const interval =  setInterval(()=>{
            setAuctionEnd(timeLeft)
        },1000  )
        return ()=> clearInterval(interval)
    },[auctionEnd])


    const metadata = useSelector(state => state.marketPlace.nftDetailsPageState)
    const isVisitorConnected = metadata?.isVisitorConnected


    const nftOwner = metadata?.nftOwner

    const pageVisitor = metadata?.pageVisitor
    const sellerArrdess = seller
   
    const RenderDetails = () => {
        const price = formatEther(Number(auctionData?.Auction?.floorPrice))
        const buyNow = formatEther(Number(auctionData?.Auction?.buyNow))
        const buy = useBuyNft({price:data?.[4]})

// hoook to change network 
        const {chain,switchNetwork}=useSwitchCorrectNetwork({
            fallback: ()=> buy.write()
        })
        const handleBuyNft =  (e) => {
            e.preventDefault()
            if (chain?.id == 97){
                e.preventDefault()
                buy.write();
            } else {
                e.preventDefault()
                switchNetwork.switchNetwork()
               
            }
        }




        return (
            <>
                {isVisitorConnected && isListed && pageVisitor != sellerArrdess ?<>
                    <div className="border w-auto h-full border-neutral-700 rounded-xl p-5 m-5 ">

                            <div className="flex flex-col ">
                            {currentTime > startTime ? null : <p className="text-left p-0 m-0 text-xs text-neutral-400"> start time : {unixToDate(startTime)} </p>}
                                <p className="text-left p-0 m-0 text-xs text-neutral-400"></p>
                            </div>

                            <div className="flex flex-col items-center">
                                <p className="text-left p-0 m-0 text-xs text-neutral-400">time until auction ends:</p>
                                <h2 className="text-left p-0 m-0  text-neutral-200  "> {currentTime>endTime ? "auction ended" : unixCountDownDays(auctionEnd)} </h2>
                            </div>

                            </div>
                <div className="px-5 py-5">
                        <p className="text-left p-0 m-0 text-xs text-neutral-400"> current price :</p>
                        <h3 className="text-left p-0 m-0 font-extrabold">{price} BNB</h3>
                    </div><div className="">
                           { currentTime >= endTime ? null : <div className="flex w-full gap-5 border-t border-neutral-800 p-5 ">
                                <button onClick={(e)=>handleBuyNft(e)} className="w-1/2 text-white font-bold bg-blue-500 hover:bg-neutral-300 hover:text-black transition-all duration-300 rounded-lg h-14">Buy Now {buyNow + "BNB"}</button>
                                <div className="w-1/2 h-14">
                                    <MakeBid/>
                                    </div>
                            </div>}
                         {currentTime >= endTime &&   <button onClick={(e)=>handleBuyNft(e)} className="w-1/2 text-white font-bold bg-blue-500 hover:bg-neutral-300 hover:text-black transition-all duration-300 rounded-lg h-14">claim Nft</button>}

                        </div></>
                    :
                    <><div className="px-5 py-5">
                        <p className="text-left p-0 m-0 text-xs text-neutral-400"> not for sell !</p>
                        <h3 className="text-left p-0 m-0 font-extrabold">not Listed Yet </h3>
                    </div><div className="">
                            <div className="flex w-full gap-5 border-t border-neutral-800 p-5 ">
                                <button className="w-1/2 text-white font-bold bg-blue-500 hover:bg-neutral-300 hover:text-black transition-all duration-300 rounded-lg h-14">cancel auction</button>
                               
                                <div className="w-1/2 h-14">

                                <MakeBid/>
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
                    <p className="text-left text-neutral-400 font-bold text-sm p-0 m-0">Owned by : {pageVisitor == sellerArrdess ? "you" : <Link to={`/dashboard/account/${nftOwner}`} className="text-pink-500 hover:text-blue-500 font-bold">{nftOwner}</Link>}</p>
                </div>
                {isVisitorConnected ?
                    <div className="border border-neutral-700  mt-5  rounded-2xl bg-neutral-900 flex flex-col">
                     
                            {/* <p className="text-left m-0 p-0"> nft owner ? : {isOwner.toString()}</p> */}
                            <RenderDetails/>
          
                    </div> : <ConnectWalletError />}
            </div>
        </>
    )
}


export default BuyerViewDetails

