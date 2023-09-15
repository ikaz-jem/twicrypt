
import { useSelector } from "react-redux"
import ConnectWalletError from "../../../../shared/ConnectWalletError/ConnectWalletError"
import { useCheckIsListed } from "../../hooks/web3Hooks/useCheckIsListed"
import { bigIntToFormated } from "../../../../utils/web3Functions"

const BuyerViewDetails = () => {


    const metadata = useSelector(state => state.marketPlace.nftDetailsPageState)
    const isVisitorConnected = metadata?.isVisitorConnected
    const isOwner = metadata?.isOwner
    const nftOwner = metadata?.nftOwner
    const { isListed, data } = useCheckIsListed()




    const RenderDetails = () => {

const price = bigIntToFormated(Number(data?.[4]),18)


        return (
            <>
{isListed ?
                <><div className="px-5 py-5">
                        <p className="text-left p-0 m-0 text-xs text-neutral-400"> current price :</p>
                        <h3 className="text-left p-0 m-0 font-extrabold">{price} BNB</h3>
                    </div><div className="">
                            <div className="flex w-full gap-5 border-t border-neutral-800 p-5 ">
                                <button className="w-1/2 text-white font-bold bg-pink-500 rounded-lg h-14">Buy Now</button>
                                <button className="w-1/2 text-black font-bold bg-neutral-300 rounded-lg h-14">Make Offer</button>
                            </div>
                        </div></>
            :
            
            <><div className="px-5 py-5">
            <p className="text-left p-0 m-0 text-xs text-neutral-400"> not for sell !</p>
            <h3 className="text-left p-0 m-0 font-extrabold">not Listed Yet </h3>
        </div><div className="">
                <div className="flex w-full gap-5 border-t border-neutral-800 p-5 ">
                    <button className="w-1/2 text-white font-bold bg-pink-500 rounded-lg h-14">send decentralized email</button>
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
                    <p className="text-left text-neutral-400 font-bold text-sm p-0 m-0">Owned by : {isOwner ? "you" : nftOwner?.slice(0, 30) + " ..."}</p>
                </div>
                {isVisitorConnected ?
                    <div className="border border-neutral-700  mt-5  rounded-2xl bg-neutral-900 flex flex-col">
                        <div className="px-5 border-b border-neutral-700">
                            {/* <p className="text-left m-0 p-0"> nft owner ? : {isOwner.toString()}</p> */}
                            <RenderDetails />
                        </div>

                    </div> : <ConnectWalletError />}
            </div>
        </>
    )
}


export default BuyerViewDetails

