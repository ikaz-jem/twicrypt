import { PlaceholderImage } from "../../../../shared/Placeholders/Placeholder";
import { bigIntToFormated } from "../../../../utils/web3Functions";
import bsc from '../../../../media/icons/bsc.svg'
import { useNavigate } from "react-router-dom";
import { nft_contract } from "../../../MarketPlace/data/Addresses";


const NftsCard = ({ data }) => {

  const price = Number(data?.price)
  
const navigate = useNavigate()

const handleClick = (e,link)=>{
  e.preventDefault();
  navigate(`/dashboard/marketplace/my-nfts/nft/?address=${nft_contract}&id=${Number(data?.tokenId)}&cid=${data?.metadata_url}&chain=97`)
  
  
  }

  return (
    <div onClick={handleClick} className={`border rounded-2xl ${!data.name && 'cursor-wait'} w-60 h-auto shadow-sm border-neutral-800 hover:shadow-lg pb-0 relative hover:translate-y-[-4%] transition-all cursor-pointer overflow-clip` }>
      <div className="flex flex-col  h-80 w-full ">
        <div className="  overflow-hidden flex-col flex items-center jusify-center relative h-full">
          <img src={data?.image ||PlaceholderImage } className=" object-cover w-full h-full  " />
        </div>
        <div className="flex justify-center items-start flex-col gap-2 mx-2 my-2 px-2 ralative  ">
          <dd className="order-first text-2xl font-semibold tracking-tight text-gray-400 sm:text-lg w-full text-left truncate text-ellipsis overflow-hidden  ">
           {data?.name || "loading ..."}
          </dd>
          <div className="flex justify-between items-center w-full">

          <dt className="text-xs font-bold leading-7 text-gray-200 truncate text-ellipsis overflow-hidden ">{ "price : "+ parseFloat(bigIntToFormated(price,18)?.toFixed(3)) || 0+ ' '} BNB</dt>
        <img src={bsc} className="w-5 h-5 opacity-40"/>
          </div>
        </div>
      </div>
    </div>
  )

}

export default NftsCard;
