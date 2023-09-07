import { PlaceholderImage } from "../../Placeholders/Placeholder";
import { useNavigate, useParams } from "react-router-dom";
import Popup from "../../popup/Popup";
import toast from "react-hot-toast";



const CardCategory1 = ({ data ,handleClick}) => {
const {page}= useParams()

const showPopup = () => {
  const popToast = toast.custom(
    (t) => (


      <Popup productImage={'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/bitcoin-logo-btc-crypto-mining-cryptocurrency-gift-thomas-larch.jpg'} show={true} t={t} />
    ),
    { position: "bottom-right", duration: 3000 }
  );
  console.log('popup invoked')
  return popToast
}

  return (
    <div  className={`border rounded-2xl ${!data.title && 'cursor-wait'} w-60 h-auto shadow-sm border-neutral-800 hover:shadow-lg pb-0 relative hover:translate-y-[-1%] transition-all cursor-pointer overflow-clip` }>
      <div className="flex flex-col  h-80 w-full ">
        <div className=" rounded-lg overflow-hidden flex-col flex items-center jusify-center relative h-full">
          <img onClick={handleClick} src={data?.thumbnailUrl ||PlaceholderImage } className="pb-5  w-full h-full rounded-lg " />
        </div>
        <div className="flex justify-center items-start flex-col gap-2 mx-2 my-2 px-2 ralative  ">
          <dd onClick={handleClick} className="order-first text-md font-semibold tracking-tight text-gray-200  w-full text-left truncate text-ellipsis overflow-hidden  ">
           {data?.title || data?.identifier || data?.thumbnailUrl || data?.id ? data.title || "metadata Error" : 'loading ...'}
          </dd>
          <div className="flex justify-between items-center p-0 w-full">
          <dt className="text-sm leading-7 text-gray-400 truncate text-ellipsis overflow-hidden ">{data?.id || 0+ ' '}BNB</dt>

        <button onClick={()=> showPopup()} disabled={data?.title || data?.identifier || data?.thumbnailUrl ? false:true} className=" rounded-md bg-blue-500 py-1 px-10 text-white hover:bg-white hover:text-black transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"> sell</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCategory1;
