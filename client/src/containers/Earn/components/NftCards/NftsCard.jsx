import { PlaceholderImage } from "../../../../shared/Placeholders/Placeholder";
import { bigIntToFormated } from "../../../../utils/web3Functions";
import bsc from '../../../../media/icons/bsc.svg'



const NftsCard = ({ data }) => {

  const price = Number(data?.price)
  
  return (
    <div className={`border rounded-2xl ${!data.name && 'cursor-wait'} w-60 h-auto shadow-sm border-neutral-800 hover:shadow-lg pb-0 relative hover:translate-y-[-4%] transition-all cursor-pointer overflow-clip` }>
      <div className="flex flex-col  h-80 w-full ">
        <div className=" rounded-lg overflow-hidden flex-col flex items-center jusify-center relative h-full">
          <img src={data?.image ||PlaceholderImage } className="pb-5 object-cover w-full h-full rounded-lg " />
        </div>
        <div className="flex justify-center items-start flex-col gap-2 mx-2 my-2 px-2 ralative  ">
          <dd className="order-first text-2xl font-semibold tracking-tight text-gray-400 sm:text-lg w-full text-left truncate text-ellipsis overflow-hidden  ">
           {data?.name || "loading ..."}
          </dd>
          <div className="flex justify-between items-center w-full">

          <dt className="text-base leading-7 text-gray-600 truncate text-ellipsis overflow-hidden ">{bigIntToFormated(price,18) || 0+ ' '} BNB</dt>
        <img src={bsc} className="w-5 h-5 opacity-40"/>
          </div>
        </div>
      </div>
    </div>
  )

}

export default NftsCard;
