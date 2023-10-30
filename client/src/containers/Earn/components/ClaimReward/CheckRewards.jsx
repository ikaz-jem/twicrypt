
import { useTelegramBotMessage } from "../../../../bot/useTelegramBotMessage";
import { nft_contract } from "../../../MarketPlace/data/Addresses";




const CheckRewards = ({ nft }) => {

    const test = 86;

    const allNfts = nft?.data;

    const winningNft = allNfts?.find((nft) => {

        return Number(nft?.identifier) == test && nft_contract?.toLowerCase() == nft?.contract?.toLowerCase()





    })

    const imageUrl = winningNft?.image_url

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
                        winningNft !== undefined ? <div className="gap-2 w-full h-full flex justify-center flex-col items-center">
                            <h2 className="p-0 m-0"> you have a winning Nft !!</h2>

                            <img src={winningNft?.image_url} alt="" className="w-40 h-40 rounded-2xl" />
                        </div>


                            : <div className=" w-full h-full"> <h1> you don't have any winning nft :ç </h1></div>
                    }

{ winningNft !== undefined &&   <button onClick={handleClick} className="bg-orange-500 px-4 py-2 hover:bg-blue-500 transition-all rounded-xl">Claim reward</button>
}                </div>
            </div>

        </div>

    )

}

export default CheckRewards