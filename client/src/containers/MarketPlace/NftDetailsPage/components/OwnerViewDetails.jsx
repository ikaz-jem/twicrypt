
import { useSelector } from "react-redux"
import ConnectWalletError from "../../../../shared/ConnectWalletError/ConnectWalletError"
import { bigIntToFormated } from "../../../../utils/web3Functions"
import { useCancelListing } from "../../hooks/web3Hooks/Listing/useCancelListing"
import QuickListing from "../QuickListing/QuickListing"


const OwnerViewDetails = ({isListed, data,seller}) => {


    const metadata = useSelector(state=>state.marketPlace.nftDetailsPageState)
    // const { isListed, data } = useCheckIsListed()


    const isVisitorConnected = metadata?.isVisitorConnected
    const isOwner = metadata?.isOwner
    const nftOwner = metadata?.nftOwner

   const pageVisitor = metadata?.pageVisitor
   const sellerArrdess =seller

    const RenderDetails = () => {
        const price = bigIntToFormated(Number(data?.[4]),18)
        
      const {cancelListing} = useCancelListing({
        tokenId:metadata?.tokenId && metadata?.tokenId,
        image:metadata?.imageLink && metadata?.imageLink,
        name:metadata?.metadata?.name && metadata?.metadata?.name
      })

const handleClick = (e)=> {
    e.preventDefault()
cancelListing.write()
}
                return (
                    <>
        {isListed && pageVisitor == sellerArrdess ? 
                        <><div className="px-5 py-5">
                                <h1>owner listed</h1>
                                <p className="text-left p-0 m-0 text-xs text-neutral-400"> current price :</p>
                                <h3 className="text-left p-0 m-0 font-extrabold">{price} BNB</h3>
                                <p className="text-left p-0 m-0 text-xs text-neutral-400">{}</p>
                            </div><div className="">
                                    <div className="flex w-full gap-5 border-t border-neutral-800 p-5 ">
                                        <button onClick={(e)=>handleClick(e)} className="w-1/2 text-white font-bold bg-blue-500 rounded-lg h-14 hover:bg-pink-500 transition-all">Cancel sale</button>
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

