
import { useSelector } from "react-redux"
import ConnectWalletError from "../../../../shared/ConnectWalletError/ConnectWalletError"
import { bigIntToFormated } from "../../../../utils/web3Functions"
import { useCancelListing } from "../../hooks/web3Hooks/Listing/useCancelListing"
import QuickListing from "../QuickListing/QuickListing"
import { formatEther } from "viem"
import { useCancelAuction } from "../../hooks/web3Hooks/Auction/useCancelAuction"
import { unixCountDown, unixCountDownDays, unixToDate } from "../../../../utils/unixToDate"
import { useEffect } from "react"
import { useState } from "react"

const OwnerViewDetails = ({isListed, data,seller,auctionData}) => {



    const metadata = useSelector(state=>state.marketPlace.nftDetailsPageState)
    // const { isListed, data } = useCheckIsListed()

    const isVisitorConnected = metadata?.isVisitorConnected
    const isOwner = metadata?.isOwner
    const nftOwner = metadata?.nftOwner

   const pageVisitor = metadata?.pageVisitor
   const sellerArrdess =seller

    const RenderDetails = () => {
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
        
   const cancelAuction = useCancelAuction()

const handleClick = (e)=> {
    e.preventDefault()
    cancelAuction.write()
}
                return (
                    <>
        {isListed && pageVisitor == sellerArrdess ? 
                        <>
                        <div className="px-5 py-5">

<div className="border w-full h-full border-neutral-700 rounded-xl p-5 my-5 mx-auto">

    <div className="flex flex-col ">
       {currentTime > startTime ? null : <p className="text-left p-0 m-0 text-xs text-neutral-400"> start time : {unixToDate(startTime)} </p>}
        <p className="text-left p-0 m-0 text-xs text-neutral-400"></p>
    </div>

    <div className="flex flex-col items-center">
        <p className="text-left p-0 m-0 text-xs text-neutral-400">time until auction ends:</p>
        <h2 className="text-left p-0 m-0  text-neutral-200  "> {currentTime>endTime ? "auction ended" : unixCountDownDays(auctionEnd)} </h2>
    </div>

</div>

                            <div className="flex justify-between items-center">
                            <div>
                                <p className="text-left p-0 m-0 text-xs text-neutral-400"> floor :</p>
                                <h4 className="text-left p-0 m-0 font-extrabold">{ Number(price) ==0 ? "no floor price" : price + ' BNB'} </h4>

                            </div>
                                    <div>

                                <p className="text-left p-0 m-0 text-xs text-neutral-200 font-bold"> highest bid :</p>
                                <h4 className="text-left p-0 m-0 font-bold text-green-500">{highestBid} BNB</h4>
                                    </div>
                            </div>
                            </div><div className="">
                                    <div className="flex w-full flex-col justify-center items-start gap-2 border-t border-neutral-800 p-5 ">
                                      {currentTime > endTime ?  <p className="text-yellow-500 text-xs p-0 m-0">auction ended ! complete auction to receive {highestBid} BNB</p> : null}
                                        <button onClick={(e)=>handleClick(e)} className="w-1/2 text-white font-bold bg-blue-500 rounded-lg h-14 hover:bg-pink-500 transition-all">{ currentTime>endTime  ? "complete auction" : "Cancel auction"}</button>
                                        <p className="text-yellow-500 text-xs p-0 m-0">Note : when auction finishes both parties can complete the transfer , canceling auction before time ends won't affect</p>
                                    </div>
                                </div></>
                    :
                    
                    <><div className="px-5 py-5">
                                         
                    <p className="text-left p-0 m-0 text-xs text-neutral-400"> not for sell !</p>
                    <h3 className="text-left p-0 m-0 font-extrabold">not Listed Yet </h3>
                </div><div className="">
                        <div className="flex w-full gap-5 border-t border-neutral-800 p-5 ">
                           <QuickListing/>
                            
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
                   <p className="text-left text-neutral-400 font-bold text-sm p-0 m-0">Owned by : { pageVisitor == sellerArrdess || isOwner   ? "you": nftOwner?.slice(0, 30)+" ..."}</p>
                </div>
                {isVisitorConnected ?
                    <div className="border border-neutral-700  mt-5  rounded-2xl bg-neutral-900 flex flex-col">
                            <RenderDetails/>
                    </div> : <ConnectWalletError/>}
            </div>
        </>
    )
}


export default OwnerViewDetails

