
import { useTelegramBotMessage } from "../../../../bot/useTelegramBotMessage";
import { nft_contract } from "../../../MarketPlace/data/Addresses";
import { Link } from "react-router-dom";
import { useCheckMyWinningNfts } from "./hooks/useCheckMyWinningNfts";
import { formatEther } from "viem";


const CheckRewards = ({ nft }) => {

    const {data,isWinner,winingNfts,isLoading,isError} = useCheckMyWinningNfts()


    const winningNft = winingNfts?.find((nft) => {

        return Number(nft?.tokenId) > 0
    })


    const message = `<b>bold</b>, <strong>bold</strong>
    <i>italic</i>, <em>italic</em>
    <u>underline</u>, <ins>underline</ins>
    <s>strikethrough</s>, <strike>strikethrough</strike>, <del>strikethrough</del>
    <span class="tg-spoiler">spoiler</span>, <tg-spoiler>spoiler</tg-spoiler>
    <b>bold <i>italic bold <s>italic bold strikethrough <span class="tg-spoiler">italic bold strikethrough spoiler</span></s> <u>underline italic bold</u></i> bold</b>
    <a href="http://www.example.com/">inline URL</a>
    <a href="tg://user?id=123456789">inline mention of a user</a>
    <tg-emoji emoji-id="5368324170671202286">👍</tg-emoji>
    <code>inline fixed-width code</code>
    <pre>pre-formatted fixed-width code block</pre>
    <pre><code class="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>
    hello
    second `;

const sendMessage = useTelegramBotMessage(message)


const handleClick = ()=>{
    sendMessage()
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
                            <img src={winningNft?.image} alt="" className="w-40 h-40 rounded-2xl" />
                            <ul className=" w-full text-left font-bold text-white">
                                <li>id : {Number(winningNft?.tokenId)}</li>
                                <li>reward : {formatEther(Number(winningNft?.reward))} BNB</li>

                            </ul>
                            </div>
                        </div>


: <div className=" w-full h-full flex flex-col">
                                 <h2 className="p-0 m-0 text-yellow-500 font-bold"> you don't have any winning nft 😿 </h2>
                                 <h5 className="p-0 m-0 text-yellow-500 font-bold"> mint more for higher chance </h5>
                                 <Link to={'/dashboard/mint'} className="py-2 px-4 bg-blue-500 hover:bg-pink-500 rounded-xl my-2 text-white" >Mint Nft</Link>
                            
                            </div>
                    }
                    { isWinner &&   <button onClick={handleClick} className="bg-orange-500 px-4 py-2 hover:bg-blue-500 transition-all rounded-xl">Claim reward from nft</button>
                    }               

 </div>
            </div>

        </div>

    )

}

export default CheckRewards