
import { useSelector } from "react-redux"
import ConnectWalletError from "../../../../shared/ConnectWalletError/ConnectWalletError"
import { useCheckIsListed } from "../../hooks/web3Hooks/Listing/useCheckIsListed"
import { bigIntToFormated } from "../../../../utils/web3Functions"
import { Link } from "react-router-dom"
import { useBuyNft } from "../../hooks/web3Hooks/useBuyNft"
import { useSwitchCorrectNetwork } from "../../hooks/web3Hooks/Network/useSwitchCorrectNetwork"
import MakeBid from "./MakeBid"
import { useState, useEffect } from "react"
import { formatEther } from "viem"
import { unixToDate, unixCountDownDays } from "../../../../utils/unixToDate"
import AuctionCountdown from "./AuctionCountdown"
import { useBuyAuction } from "../../hooks/web3Hooks/Auction/useBuyAuction"



const BuyerViewDetails = ({ auctionData, isListed, data, seller }) => {

    const { address } = useSelector(state => state.session)

    const price = formatEther(Number(auctionData?.Auction?.floorPrice))
    const buyNow = formatEther(Number(auctionData?.Auction?.buyNow))
    const highestBid = formatEther(Number(auctionData?.Auction?.highestBid))
    const startTime = Number(auctionData?.Auction?.startsAt)
    const endTime = Number(auctionData?.Auction?.endsAt)
    const currentTime = Math.floor(new Date().getTime() / 1000);
    const highestBidder = auctionData?.Auction?.highestBidder
    const isAuctionWinner = highestBidder?.toLowerCase() === address?.toLowerCase() ? true : false
    const auctionHasWinner = !highestBidder?.toLowerCase().includes('0x0000000')

    const durationInterval = (endTime - startTime) / 3

    const classnameChange = () => {
        const int1 = startTime + durationInterval
        const int2 = startTime + (durationInterval * 2)
        const int3 = startTime + (durationInterval * 3)

        if (currentTime >= startTime && currentTime < int1) {
            return 'bg-green-800 animate-pulse'
        } else if (currentTime >= int1 && currentTime < int2) {
            return 'bg-yellow-800 animate-pulse'
        } else if (currentTime >= int2 && currentTime < int3) {
            return 'bg-red-800 animate-pulse'
        } else {
            return 'bg-transparent'
        }
    }



    const metadata = useSelector(state => state.marketPlace.nftDetailsPageState)
    const isVisitorConnected = metadata?.isVisitorConnected


    const buy = useBuyAuction()



    const pageVisitor = metadata?.pageVisitor
    const sellerArrdess = seller

    const RenderDetails = () => {

        const price = formatEther(Number(auctionData?.Auction?.floorPrice))
        const buyNow = formatEther(Number(auctionData?.Auction?.buyNow))
        
        // hoook to change network 
        const { chain, switchNetwork } = useSwitchCorrectNetwork({
            fallback: () => buy.write()
        })
        const handleBuyNft = (e) => {
            e.preventDefault()
            if (chain?.id == 97) {
                e.preventDefault()
                buy.write();
            } else {
                e.preventDefault()
                switchNetwork.switchNetwork()

            }
        }







        return (
            <>
                {isVisitorConnected && isListed && pageVisitor != sellerArrdess&& <>
                    <div className={`border w-auto ${classnameChange()} h-full border-neutral-700 rounded-xl p-5 m-5`}>

                        <div className="flex flex-col ">
                            {currentTime > startTime ? null : <p className="text-left p-0 m-0 text-xs text-neutral-400"> start time : {unixToDate(startTime)} </p>}
                            <p className="text-left p-0 m-0 text-xs text-neutral-400"></p>
                        </div>

                        <div className="flex flex-col items-center">
                            <AuctionCountdown />
                        </div>

                    </div>

                    <div className="px-5 py-5 flex flex-col justify-between">


                        <div className="border rounded-md border-neutral-800 p-2 mb-5 ">
                        <div className="flex justify-between items-center">

                        <p className="text-left p-0 m-0 text-sm text-neutral-200 font-bold"> starting price :</p>
                        <h4 className="text-left p-0 m-0 font-extrabold">{Number(price) == 0 ? "no floor price" : Number(price)?.toFixed(2) + ' BNB'} </h4>
                        </div>
                        <div className="flex justify-between items-center">

                        <p className="text-left p-0 m-0 text-sm text-neutral-200 font-bold"> buy Now price :</p>
                        <h4 className="text-left p-0 m-0 font-extrabold">{Number(price) == 0 ? "no direct buy price" : Number(buyNow)?.toFixed(2) + ' BNB'} </h4>
                        </div>

                        </div>
                        <div className="px-2 flex flex-col justify-between">
                     


                            <div className="flex justify-between items-center">
                                <p className="text-left p-0 m-0 text-sm text-neutral-200 font-bold"> {endTime < currentTime ? 'auction winner :' : 'highest bidder'}</p>
                                <p className="text-left text-neutral-400 font-bold text-sm p-0 m-0"> <Link to={auctionHasWinner ? `/dashboard/account/${highestBidder}` : './'} className="text-pink-500 hover:text-blue-500 font-bold">{auctionHasWinner ? highestBidder : "no bidders yet"}</Link></p>
                            </div>
                            <div>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-left p-0 m-0 text-sm text-neutral-200 font-bold"> highest bid :</p>
                                <h4 className="text-left p-0 m-0 font-bold text-green-500">{auctionHasWinner ? Number(highestBid)?.toFixed(3) + " BNB" : "no bid yet"} </h4>
                            </div>

                            <p className="text-yellow-500 text-xs text-left p-0 m-0">Note : when auction finishes both parties can complete the transfer , canceling auction before time ends won't affect</p>
                            <div className="flex w-full flex-col justify-center items-start gap-2 border-t border-neutral-800 p-5 ">
                                {currentTime > endTime && auctionHasWinner && isAuctionWinner ? <p className="text-yellow-500 text-xs p-0 m-0">auction ended ! complete auction to receive your Nft</p> : ''}
                            </div>

                        </div>



                    </div>
                    <div className="">

                        <div className="flex w-full gap-5 border-t border-neutral-800 p-5 ">

                            {currentTime < endTime && currentTime >= startTime ? <>
                                <button onClick={(e) => handleBuyNft(e)} className="w-1/2 text-white font-bold bg-blue-500 hover:bg-neutral-300 hover:text-black transition-all duration-300 rounded-lg h-14">Buy Now ({buyNow + " BNB"})</button>
                                <div className="w-1/2 h-14">
                                    <MakeBid />
                                </div>
                            </> : null

                            }
                            {currentTime >= endTime && isAuctionWinner && <button onClick={(e) => handleBuyNft(e)} className="w-1/2 text-white font-bold bg-blue-500 hover:bg-neutral-300 hover:text-black transition-all duration-300 rounded-lg h-14">claim Nft</button>}
                        </div>

                    </div>





                </>
                    
                }
            </>
        )
    }

    return (
        <>
            <div className="my-5 px-5 rounded-2xl ">
                <div className="  rounded-xl w-full flex flex-col items-start justify-center">
                    <h2 className="m-0 p-0 font-extrabold">{metadata?.metadata?.name}</h2>
                    <p className="text-left text-neutral-400 font-bold text-sm p-0 m-0">Owned by : {pageVisitor == sellerArrdess ? "you" : <Link to={`/dashboard/account/${seller}`} className="text-pink-500 hover:text-blue-500 font-bold">{seller}</Link>}</p>
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

