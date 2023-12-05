
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
        <div className="py-5 px-5 border-pink-600 rounded-3xl w-full h-full flex flex-col justify-center border-l border-r ">
            <h5 className="p-0 m-0 font-bold text-yellow-500"> checking rewards eligibility</h5>
            <div className="w-full  h-full  p-0 m-0">
                <div className="  flex items-center flex-col justify-center gap-2">
                    {
                        isWinner ? <div className="gap-2 w-full h-full flex justify-center flex-col items-center">
                            <h2 className="p-0 m-0 text-yellow-500 font-bold"> you have a winning Nft 🥳🥳!!</h2>
                            <div className="flex w-full items-center justify-start ">
                           <div className="flex items-center justify-center flex-col md:flex-row  w-full">

                            <img src={winningNft?.image} alt="" className="w-40 h-40 rounded-2xl" />
                            <ul className=" w-full  font-bold text-white md:text-left">
                                <li>id : {Number(winningNft?.tokenId)}</li>
                                <li>reward : {formatEther(Number(winningNft?.reward))} BNB</li>

                            </ul>
                           </div>
                            </div>
                            { isWinner &&   
                            
                            <div className="flex items-center md:justify-start justify-center w-full">

                            <button onClick={handleClick} className="bg-blue-500 px-4 py-2 hover:bg-pink-500 transition-all rounded-xl text-sm">Claim reward from nft</button>
                            </div>
                            }               
                        </div>


: <div className=" w-full h-full flex flex-col">
                                 <h2 className="p-0 m-0 text-yellow-500 font-bold"> you don't have any winning nft 😿 </h2>
                                 <h5 className="p-0 m-0 text-yellow-500 font-bold"> mint more for higher chance </h5>
                                 <Link to={'/dashboard/mint'} className="py-2 px-4 bg-blue-500 hover:bg-pink-500 rounded-xl my-2 text-white" >Mint Nft</Link>
                            
                            </div>
                    }

 </div>
            </div>

        </div>

    )

}

export default CheckRewards