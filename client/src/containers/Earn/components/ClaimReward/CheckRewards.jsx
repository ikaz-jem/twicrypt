
import { useTelegramBotMessage } from "../../../../bot/useTelegramBotMessage";
import { nft_contract } from "../../../MarketPlace/data/Addresses";
import { Link } from "react-router-dom";
import { useCheckMyWinningNfts } from "./hooks/useCheckMyWinningNfts";
import { formatEther } from "viem";
import { useClaimNftReward } from "./hooks/useClaimNftReward";
import { useSelector } from "react-redux";


const CheckRewards = ({ nft }) => {

    const {data,isWinner,winingNfts,isLoading,isError} = useCheckMyWinningNfts()

    const winningNft = winingNfts?.find((nft) => {
        const found = Number(nft?.tokenId) > 0 && nft?.hasReward == true
        return found
    })

    
    const claim = useClaimNftReward(winningNft)
    


const handleClick = ()=>{
    claim?.write();
}


return (
    <div className="py-5 px-5 border-neutral-700 shadow-md rounded-3xl w-full h-full flex flex-col justify-center  border-l border-r ">
        {isLoading && <h5 className="p-0 m-0 font-bold text-yellow-500"> checking rewards eligibility</h5>}
        <div className="w-full  h-full  p-0 m-0">
            <div className="  flex items-center flex-col justify-center gap-2 h-full">
                {
                    isWinner ? <div className="gap-5 w-full h-full flex justify-center flex-col items-center">
                        <h2 className="p-0 m-0 text-yellow-500  text-4xl font-sans"> you have a winning Nft 🥳 </h2>
                        <div className="flex w-full items-center justify-center h-full ">
                            <div className="flex items-center justify-center flex-col   w-full gap-5 ">

                                <img src={winningNft?.image} alt="" className="w-40 h-40 rounded-2xl" />
                                <ul className="   font-bold text-white md:text-left">
                                    <li>id : {Number(winningNft?.tokenId)}</li>
                                    <li>reward : {formatEther(Number(winningNft?.reward))} BNB</li>

                                </ul>

                            {isWinner &&
                                <div className="flex items-center md:justify-start justify-center ">

                                    <button onClick={handleClick} className=" border border-neutral-700 hover:text-neutral-800 px-4 py-2 hover:bg-neutral-200 transition-all rounded-xl text-sm text-neutral-200">Claim reward from nft</button>
                                </div>

                            }
                            </div>
                        </div>
                    </div>


                        :
                        <div className=" w-full h-full flex flex-col items-center justify-center gap-5 ">
                            <h1 className="p-0 m-0 text-yellow-500  text-4xl font-sans"> you don't have any winning nft 😿 </h1>
                            <h5 className="p-0 m-0 text-neutral-200 font-bold"> you can mint more for higher chance </h5>
                            <Link to={'/dashboard/mint'} className="py-2 px-4 bg-blue-500 hover:bg-pink-500 rounded-xl my-2 text-white" >Mint Twicrypt Nft</Link>

                        </div>
                }

            </div>
        </div>

    </div>

)

}

export default CheckRewards

/*


import { Link } from "react-router-dom";
import { useCheckMyWinningNfts } from "./hooks/useCheckMyWinningNfts";
import { formatEther } from "viem";
import { useClaimNftReward } from "./hooks/useClaimNftReward";


const CheckRewards = ({ nft }) => {

    const { data, isWinner, winingNfts, isLoading, isError } = useCheckMyWinningNfts()

    const winningNft = winingNfts?.find((nft) => {
        const found = Number(nft?.tokenId) > 0 && nft?.hasReward == true
        return found
    })


    const claim = useClaimNftReward(winningNft)



    const handleClick = () => {
        claim?.write();
    }


   

}

export default CheckRewards
*/