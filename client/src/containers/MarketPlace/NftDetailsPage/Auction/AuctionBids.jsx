import SingleAccordion from "../../../../shared/Accordion/SingleAccordion"
import { MdOutlineLocalOffer } from 'react-icons/md'
import { useSelector } from "react-redux"
import Spinner from "../../../../shared/Spinner/Spinner"
import { unixToDate } from "../../../../utils/unixToDate"
import { bigIntToFormated } from "../../../../utils/web3Functions";
import { useSwitchCorrectNetwork } from "../../hooks/web3Hooks/Network/useSwitchCorrectNetwork"
import { mainChainId } from "../../data/chains"
import { useCancelOffer } from "../../hooks/web3Hooks/Offers/useCancelOffer"
import { useAcceptOffer } from "../../hooks/web3Hooks/Offers/useAcceptOffer"
import { useState } from "react"
import AcceptBidModal from "./AcceptBidModal"
import { useGetAuctionData } from "../../hooks/web3Hooks/Auction/useGetAuctionData"

const AuctionBids = ({ isSeller, isOwner , isListed }) => {
const [offerToAccept,setOfferToAccept]=useState(null)
let [isOpen, setIsOpen] = useState(false)

    const nftOffers = useSelector(state => state.marketPlace.nftOffers)
    const pageVisitor = useSelector(state => state.session.address)

const auctionData = useSelector(state=>state.marketPlace.mylistings)
console.log(auctionData)


    
    const CheckOffers = () => {
        let lengthArray = [];
        const check = nftOffers?.data?.map((item, i) => item.offerer?.toLowerCase()?.includes('0x000000') ? null : lengthArray.push(item.name))
        if (lengthArray?.length > 0) {
            return true
        } else return false
    }
    const NftHasOffers = CheckOffers()

    const isOffrer = nftOffers?.data?.some((item) => item?.offerer == pageVisitor)
    const offrerIndex = nftOffers?.data?.find((item, index) => {
        return item?.offerer == pageVisitor

    })



    const { switchNetwork, chain } = useSwitchCorrectNetwork({
        chainId: mainChainId && mainChainId,
        fallback: () => cancelOffer.write()
    })

    const cancelOffer = useCancelOffer()
    const offerToAcceptIndex = offerToAccept && nftOffers?.data?.indexOf(offerToAccept)

    const handleCancelOffer = (e) => {
        if (chain.id == mainChainId) {
            e.preventDefault()
            cancelOffer.write()
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
                {isOffrer && <li className=" flex justify-start items-center w-full border-b border-neutral-800 py-3 pl-3 bg-green-900" role="row" >
                    <p className="w-1/4 flex">{'your bid'}</p>
                    <p className="w-1/4 flex">{unixToDate(Number(offrerIndex?.offeredAt).toString())}</p>
                    <p className="w-1/4 flex">{bigIntToFormated(Number(offrerIndex?.price), 18)} BNB</p>
                    <p className="w-auto mr-3 flex">{Number(offrerIndex?.tokenId)}</p>
                    {isOffrer && <button onClick={(e) => handleCancelOffer(e)} className=" mx-auto px-2 lg:px-3 xl:px-4 text-xs flex justify-center rounded-xl h-8 items-center bg-blue-500 hover:bg-pink-600 transition-all duration-300">{"Cancel bid"}</button>}
                </li>}
                {!nftOffers?.isError ? nftOffers?.data?.map((offer, i) => {

                    if (offer?.offerer?.includes('0x0000000')) {
                        return null
                    } else if (offer == offrerIndex) {
                        return null
                    } else {
                        return (

                            <li className=" flex justify-start items-center w-full border-b border-neutral-800 rounded-3xl py-3 pl-3" role="row" key={i}>
                                <p className="w-1/4 flex">{offer?.offerer.slice(0, 10)}</p>
                                <p className="w-1/4 flex">{unixToDate(Number(offer?.offeredAt).toString())}</p>
                                <p className="w-1/4 flex">{bigIntToFormated(Number(offer?.price), 18)} BNB</p>
                                <p className="w-auto flex">{Number(offer?.tokenId)}</p>
                                {isSeller || isOwner ? <button onClick={()=>handleClick(offer)} className=" mx-auto px-2 lg:px-3 xl:px-4 text-xs flex justify-center rounded-xl h-8 items-center bg-blue-500 hover:bg-pink-600 transition-all duration-300">accept</button> : null}
                              
                                <AcceptBidModal  offer={offerToAccept} index={offerToAcceptIndex} isListed={isListed} isOpen={isOpen} setIsOpen={setIsOpen} chain={chain} onChange={()=>console.log('clicked')} />
                                {/* { isOffrer && i == offrerIndex ? <button className=" px-5 text-xs flex justify-center rounded-xl h-8 items-center bg-blue-500 hover:bg-pink-600 transition-all duration-300">{"Cancel offer"}</button> : null} */}
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
                        nftOffers?.data?.isLoading ? <Spinner message={'loading offers'} /> :
                            <div className="border border-neutral-700  rounded-b-2xl bg-neutral-900 flex flex-col overflow-hidden ">
                                <li className="flex  justify-start text-white items-center mx-auto px-auto w-full pl-3  py-2 border-b bg-[#0003] font-bold border-neutral-800" >
                                    <p className="w-1/4 flex">user</p>
                                    <p className="w-1/4 flex">time</p>
                                    <p className="w-1/4 flex">bid</p>
                                    <p className="w-1/4 flex">id</p>
                                </li>
                                <div className="w-full overflow-y-scroll h-auto " >
                                    <ul className=" flex w-full  flex-col justify-start items-start m-0 p-0  h-full" role="table">
                                        {NftHasOffers ? <RenderBids /> : <RenderNoBids />}
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