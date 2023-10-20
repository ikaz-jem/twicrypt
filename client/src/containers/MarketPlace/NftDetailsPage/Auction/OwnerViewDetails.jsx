
import { useSelector } from "react-redux"
import ConnectWalletError from "../../../../shared/ConnectWalletError/ConnectWalletError"
import QuickListing from "../QuickListing/QuickListing"
import { formatEther } from "viem"
import { useCancelAuction } from "../../hooks/web3Hooks/Auction/useCancelAuction"
import { unixToDate } from "../../../../utils/unixToDate"
import AuctionCountdown from "./AuctionCountdown"
import { Link } from "react-router-dom"
import { useAcceptBid } from "../../hooks/web3Hooks/Auction/useAcceptBid"

const OwnerViewDetails = ({ isListed, seller }) => {

    const { address } = useSelector(state => state.session)

    const metadata = useSelector(state => state.marketPlace.nftDetailsPageState)
    // const { isListed, data } = useCheckIsListed()
    const auctionData = useSelector(state => state.marketPlace.mylistings)

    const isVisitorConnected = metadata?.isVisitorConnected
    const isOwner = metadata?.isOwner
    const nftOwner = metadata?.nftOwner

    const pageVisitor = metadata?.pageVisitor
    const sellerArrdess = seller

    const RenderDetails = () => {

        const price = formatEther(Number(auctionData?.Auction?.floorPrice))
        const buyNow = formatEther(Number(auctionData?.Auction?.buyNow))
        const highestBid = formatEther(Number(auctionData?.Auction?.highestBid))
        const startTime = Number(auctionData?.Auction?.startsAt)
        const endTime = Number(auctionData?.Auction?.endsAt)
        const currentTime = Math.floor(new Date().getTime() / 1000);
   

        const highestBidder = auctionData?.Auction?.highestBidder
        const isAuctionWinner = highestBidder?.toLowerCase() === address?.toLowerCase() ? true : false
        const auctionHasWinner = !highestBidder?.toLowerCase().includes('0x0000000')


        const aceptIndex = auctionData?.allBids?.find((bid)=>{
            return bid?.bidder?.toLowerCase() == highestBidder?.toLowerCase()
        })
        const index = auctionData?.allBids?.indexOf(aceptIndex)


        const {acceptBid} = useAcceptBid(index)




        const cancelAuction = useCancelAuction()

        const handleClick = (e) => {
            e.preventDefault()
            cancelAuction.write()
        }
        const handleAccept = (e) => {
            e.preventDefault()
            acceptBid.write()
        }




        return (
            <>
                {isListed && pageVisitor == sellerArrdess ?
                    <>
                        <div className="px-5 py-5">
                            <div className="border w-full h-full border-neutral-700 rounded-xl p-5 my-5 mx-auto">
                                <div className="flex flex-col ">
                                    {currentTime > startTime ? <p className="text-left p-0 m-0 text-xs text-neutral-400"> {startTime > 0 ? 'end time :' + unixToDate(endTime) : 'loading ...'}</p> : <p className="text-left p-0 m-0 text-xs text-neutral-400"> {startTime > 0 ? 'start time :' + unixToDate(startTime) : 'loading ...'}</p>}
                                    <p className="text-left p-0 m-0 text-xs text-neutral-400"></p>
                                </div>

                                <div className="flex flex-col items-center">
                                    {<AuctionCountdown />}
                                </div>

                            </div>




                            <div className="border rounded-md border-neutral-800 p-2 mb-5 mx-4 ">
<div className="flex justify-between items-center">

<p className="text-left p-0 m-0 text-sm text-neutral-200 font-bold"> starting price :</p>
<h4 className="text-left p-0 m-0 font-extrabold">{Number(price) == 0 ? "no floor price" : Number(price)?.toFixed(2) + ' BNB'} </h4>
</div>
<div className="flex justify-between items-center">

<p className="text-left p-0 m-0 text-sm text-neutral-200 font-bold"> buy Now price :</p>
<h4 className="text-left p-0 m-0 font-extrabold">{Number(price) == 0 ? "no direct buy price" : Number(buyNow)?.toFixed(2) + ' BNB'} </h4>
</div>

</div>


                            <div className="px-5 py-5 flex flex-col justify-between">
                               



                                {
                                    <>
                                        <div className="flex justify-between items-center">
                                            <p className="text-left p-0 m-0 text-xs text-neutral-200 font-bold"> {endTime < currentTime ? 'auction winner :' : 'highest bidder'}</p>
                                            <p className="text-left text-neutral-400 font-bold text-sm p-0 m-0"> <Link to={auctionHasWinner ? `/dashboard/account/${highestBidder}` : './'} className="text-pink-500 hover:text-blue-500 font-bold">{auctionHasWinner ? highestBidder : "no bidders yet"}</Link></p>
                                        </div>
                                        <div>
                                        </div>
                                        <div className="flex justify-between items-center">

                                            <p className="text-left p-0 m-0 text-xs text-neutral-200 font-bold"> highest bid :</p>
                                            <h4 className="text-left p-0 m-0 font-bold text-green-500">{auctionHasWinner ? Number(highestBid)?.toFixed(2) + " BNB" : "no bid yet"} </h4>
                                        </div>

                                        {currentTime < endTime && auctionHasWinner && <>
                                            <button onClick={handleAccept} className="text-white mt-5 border border-neutral-700 bg-neutral-800 w-auto rounded-md py-2 hover:bg-pink-700 font-bold transition-all duration-300">accept highest Bid ({Number(highestBid)?.toFixed(2) + " BNB"})</button>
                                            <p className="text-left py-1 text-neutral-500 text-xs p-0 m-0">tip  : you can accept the current highest bid and end auction immediately </p>
                                        </>
                                        }

                                        <p className="text-yellow-500 text-xs text-left p-0 m-0">Note : when auction finishes both parties can complete the transfer , canceling auction before time ends won't affect</p>
                                    </>

                                }

                            </div>



                            <div className="flex w-full flex-col justify-center items-start gap-2 border-t border-neutral-800 p-5 ">
                                <button onClick={(e) => handleClick(e)} className="w-1/5 text-white font-bold bg-blue-500 rounded-lg h-10 hover:bg-pink-500 transition-all">{currentTime > endTime ? "complete auction" : "Cancel auction"}</button>
                                {currentTime > endTime && highestBid > 0 && <p className="text-yellow-500 text-xs p-0 m-0">auction ended ! complete auction to receive {highestBid} BNB</p>}
                                {currentTime > endTime && highestBid == 0 && <p className="text-red-500 text-xs font-bold  p-0 m-0">auction failed , click complete  to get your nft back</p>}

                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="px-5 py-5">
                            <p className="text-left p-0 m-0 text-xs text-neutral-400"> not for sell !</p>
                            <h3 className="text-left p-0 m-0 font-extrabold">not Listed Yet </h3>
                        </div>
                        <div className="">
                            <div className="flex w-full gap-5 border-t border-neutral-800 p-5 ">
                                <QuickListing />
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
                    <p className="text-left text-neutral-400 font-bold text-sm p-0 m-0">Owned by : {pageVisitor == sellerArrdess || isOwner ? "you" : nftOwner?.slice(0, 30) + " ..."}</p>
                </div>
                {isVisitorConnected ?
                    <div className="border border-neutral-700  mt-5  rounded-2xl bg-neutral-900 flex flex-col">
                        <RenderDetails />
                    </div> : <ConnectWalletError />}
            </div>
        </>
    )
}


export default OwnerViewDetails

