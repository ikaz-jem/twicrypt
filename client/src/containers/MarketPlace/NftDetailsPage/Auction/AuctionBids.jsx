import SingleAccordion from "../../../../shared/Accordion/SingleAccordion"
import { MdOutlineLocalOffer } from 'react-icons/md'
import { useSelector } from "react-redux"
import Spinner from "../../../../shared/Spinner/Spinner"
import { unixToDate } from "../../../../utils/unixToDate"
import { bigIntToFormated } from "../../../../utils/web3Functions";
import { useSwitchCorrectNetwork } from "../../hooks/web3Hooks/Network/useSwitchCorrectNetwork"
import { mainChainId } from "../../data/chains"
import { useState } from "react"
import AcceptBidModal from "./AcceptBidModal"
import { formatEther } from "viem"


const AuctionBids = ({ isSeller, isOwner , isListed }) => {
const [offerToAccept,setOfferToAccept]=useState(null)
let [isOpen, setIsOpen] = useState(false)

    const nftOffers = useSelector(state => state?.marketPlace?.nftOffers)
    const pageVisitor = useSelector(state => state?.session?.address)

    const auctionData = useSelector(state=>state.marketPlace.mylistings)
    const bids = auctionData?.allBids


    const highestBidder = auctionData?.Auction?.highestBidder
    const highestBid = formatEther(Number(auctionData?.Auction?.highestBid))
    const auctionHasBids = bids?.length > 0 ? true : false



    

    const isBidder = bids?.some((item) => item?.bidder?.toLowerCase() == pageVisitor?.toLowerCase())


    const bidderIndex = bids?.find((bid, index) => {
        return bid?.bidder?.toLowerCase() == pageVisitor?.toLowerCase()

    })



    const { switchNetwork, chain } = useSwitchCorrectNetwork({
        chainId: mainChainId && mainChainId,
        fallback: () => ''
    })

    const bidToAccept = offerToAccept && nftOffers?.data?.indexOf(offerToAccept)

    const handleCancelOffer = (e) => {
        if (chain.id == mainChainId) {
            e.preventDefault()
            // cancelOffer.write()
        } else {
            e.preventDefault()
            switchNetwork.switchNetwork()
        }
    }

    const handleClick = (offer)=>{
        setOfferToAccept(offer)
        setIsOpen(!isOpen)
    }

    const RenderBids = () => {
        return (
            <>
                {isBidder && <li className=" flex justify-start items-center w-full border-b border-neutral-800 py-3 pl-3 bg-green-900" role="row" >
                    <p className="w-1/4 flex">{'your bid'}</p>
                    <p className="w-1/4 flex">{unixToDate(Number(bidderIndex?.bidsAt).toString())}</p>
                    <p className="w-1/4 flex">{bigIntToFormated(Number(bidderIndex?.price), 18)} BNB</p>
                    <p className="w-auto mr-3 flex">{Number(bidderIndex?.tokenId)}</p>
                    {isBidder && <button onClick={(e) => handleCancelOffer(e)} className=" mx-auto px-2 lg:px-3 xl:px-4 text-xs flex justify-center rounded-xl h-8 items-center bg-blue-500 hover:bg-pink-600 transition-all duration-300">{"Cancel bid"}</button>}
                </li>}
                {bids?.length >0 ? bids?.map((bid, i) => {

                    if (bid?.bidder?.includes('0x0000000')) {
                        return null
                    } else if (bid == bidderIndex) {
                        return null
                    } else {
                        return (

                            <li className=" flex justify-start items-center w-full border-b border-neutral-800 rounded-3xl py-3 pl-3" role="row" key={i}>
                                <p className="w-1/4 flex">{bid?.bidder.slice(0, 10)}</p>
                                <p className="w-1/4 flex">{unixToDate(Number(bid?.biddedAt).toString())}</p>
                                <p className="w-1/4 flex">{bigIntToFormated(Number(bid?.price), 18)} BNB</p>
                                <p className="w-auto flex">{Number(bid?.tokenId)}</p>
                            
                                {/* {isSeller || isOwner ?  <button onClick={()=>handleClick(bid)} className=" mx-auto px-2 lg:px-3 xl:px-4 text-xs flex justify-center rounded-xl h-8 items-center bg-blue-500 hover:bg-pink-600 transition-all duration-300">accept</button> : null} */}
                              
                                {/* <AcceptBidModal  offer={offerToAccept} index={bidToAccept} isListed={isListed} isOpen={isOpen} setIsOpen={setIsOpen} chain={chain} onChange={()=>console.log('clicked')} /> */}
                                {/* { isBidder && i == bidderIndex ? <button className=" px-5 text-xs flex justify-center rounded-xl h-8 items-center bg-blue-500 hover:bg-pink-600 transition-all duration-300">{"Cancel offer"}</button> : null} */}
                            </li>


                        )
                    }


                }) :
                    <h1>somethings went wrong !</h1>
                }
            </>
        )
    }
    const RenderNoBids = () => {
        return (
            <>

                <div className="flex flex-col items-center justify-center w-full h-full py-10">

                    <h1 className="text-neutral-800 p-0 m-0">This Asset has no bids yet ...</h1>
                    <MdOutlineLocalOffer className="text-6xl text-neutral-800" />
                </div>

            </>
        )
    }



    return (
        <>
            <div className=" p-5 ">
                <SingleAccordion title={"Bids"} Icon={MdOutlineLocalOffer} open={true} >
                    {
                       !auctionData?.allBids ?
                       <div className="border border-neutral-700  rounded-b-2xl bg-neutral-900 flex flex-col overflow-hidden w-full h-full">
                         <Spinner message={'loading bids'} />
                       </div>
                            :
                            <div className="border border-neutral-700  rounded-b-2xl bg-neutral-900 flex flex-col overflow-hidden ">
                                <li className="flex  justify-start text-white items-center mx-auto px-auto w-full pl-3  py-2 border-b bg-[#0003] font-bold border-neutral-800" >
                                    <p className="w-1/4 flex">user</p>
                                    <p className="w-1/4 flex">time</p>
                                    <p className="w-1/4 flex">bid</p>
                                    <p className="w-1/4 flex">id</p>
                                </li>
                                <div className="w-full overflow-y-scroll h-auto " >
                                    <ul className=" flex w-full  flex-col justify-start items-start m-0 p-0  h-full" role="table">
                                        {auctionHasBids ? <RenderBids /> : <RenderNoBids />}
                                    </ul>
                                </div>
                            </div>
                    }
                </SingleAccordion >
            </div>
        </>
    )
}


export default AuctionBids