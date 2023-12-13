import { PlaceholderImage } from "../../Placeholders/Placeholder";
import { useNavigate, useParams } from "react-router-dom";
import Popup from "../../popup/Popup";
import toast from "react-hot-toast";
import { nft_contract } from "../../../containers/MarketPlace/data/Addresses";
import { app_chain_id } from "../../data/chains";
import { Link } from "react-router-dom";

const CardCategory1 = ({ data ,handleClick , tokenId}) => {
const {page}= useParams()


const url = `/dashboard/marketplace/my-nfts/nft/?address=${nft_contract}&id=${Number(tokenId)}&cid=https://api.twicrypt.com/bsc/metadata/${Number(tokenId)}.json&chain=${app_chain_id}`


const showPopup = () => {
  const popToast = toast.custom(
    (t) => (


      <Popup productImage={'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/bitcoin-logo-btc-crypto-mining-cryptocurrency-gift-thomas-larch.jpg'} show={true} t={t} />
    ),
    { position: "bottom-right", duration: 3000 }
  );
  return popToast
}


// const checkTwicript = ()=>{
//   if (data?.contract?.toLowerCase()== nft_contract?.toLocaleLowerCase() ) {
// return true
//   }else {
//     return false
//   }
// }

// const isTwicrypt = checkTwicript()


const token = Number(tokenId)

const metadata = require(`../.../../../../containers/Gallery/bsc/${token}.json`)
const image = `https://api.twicrypt.com/bsc/img/thumbnails/tn_${token}.png`
console.log(image)
  return (
        <Link to={url} >
    <div  className={`border border-neutral-800 bg-[#2c2c2c3d] rounded-2xl ${!metadata?.name && 'cursor-wait'} w-60 h-auto shadow-sm  hover:shadow-lg pb-0 relative hover:translate-y-[-1%] transition-all cursor-pointer overflow-clip` }>
      <div className="flex flex-col  h-86 w-full ">
        <div className=" rounded-t-lg overflow-hidden flex-col flex items-center jusify-center relative h-full">
          <img onClick={handleClick} src={image||PlaceholderImage } className="  w-full h-full rounded-t-lg " />
        </div>
        <div className="flex justify-center items-start flex-col gap-1 mx-2 my-2 px-2 ralative  ">
          <dd className="order-first text-sm font-semibold tracking-tight text-gray-200  w-full text-left truncate text-ellipsis overflow-hidden p-0 m-0 ">
           {metadata?.name || 'loading ...'}

          </dd>
           {<p className="text-neutral-200 py-1 px-2 rounded-md bg-pink-800 text-[13px] opacity-60">twicrypt collection</p> }
          <div className="flex justify-between items-center p-0 w-full">
          <dt className="text-[12px] font-bold leading-7 text-gray-400 truncate text-ellipsis overflow-hidden py-1">token id : {token|| 0+ ' '}</dt>

{/* {   isTwicrypt &&     <button onClick={()=> showPopup()} disabled={data?.title || data?.identifier || data?.thumbnailUrl ? false:true} className=" rounded-md bg-blue-500 py-1 px-10 text-white hover:bg-white hover:text-black transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"> sell</button>
}      */}
     </div>
        </div>
      </div>
    </div>
</Link>
  )
}

export default CardCategory1;
