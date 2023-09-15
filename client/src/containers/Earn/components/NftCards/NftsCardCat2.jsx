import { bigIntToFormated } from "../../../../utils/web3Functions";
import bsc from '../../../../media/icons/bsc.svg'
const NftsCardCat2 = ({ data }) => {
  return (

    <div className=" border rounded-3xl w-100 h-auto shadow-lg shadow-black border-neutral-800 z-0 p-0 m-0 relative hover:translate-y-[-2%] transition-all cursor-pointer overflow-clip  ">


      <div className="flex  h-80 w-80 ">
        <div className=" rounded-lg overflow-hidden flex-col flex items-center jusify-center  h-full ">
          <img src={data?.image} className=" object-cover w-full h-full rounded-lg hover:scale-[120%] transition-all duration-300 overflow-hidden z-0 " />
        </div>
        <div className="absolute bottom-0 w-full h-20 hover:h-28 transition-all duration-500  m-0 p-0 z-0">
          <div className="bg-gradient-to-t from-[#000000] via-[#000000c9] to-[#00000000]  h-full w-full flex flex-col justify-center items-start p-5 m-0">
            <dd className="order-first text-2xl font-semibold tracking-tight text-gray-200 sm:text-lg">
            {data?.name || "loading ..."}
            </dd>
            <div className="flex justify-between items-center w-full">

<dt className="text-base leading-7 text-gray-600 truncate text-ellipsis overflow-hidden ">{bigIntToFormated(Number(data?.price),18) || 0+ ' '} BNB</dt>
<img src={bsc} className="w-5 h-5 opacity-40"/>
</div>          </div>
        </div>
      </div>
    </div>

  )

}

export default NftsCardCat2;