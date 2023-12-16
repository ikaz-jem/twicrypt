
import { useState } from "react"
import {useSelector} from 'react-redux'
import NftModal from './NftModal/NftModal'



const ImageCard = ({ nftIndex }) => {
const [show,setShow] = useState(false)

  const basUrl = 'https://api.twicrypt.com/'
    // console.log(`${collection?.basUrl}${collection?.network}/metadata/${data}.json`)
    const metadata = require(`./bsc/${nftIndex}.json`)
    const image = `${basUrl}bsc/img/thumbnails/tn_${nftIndex}.png`
    const token = nftIndex
    return (
    //   <div className="flex items-center justify-center flex-col cursor-pointer" onClick={()=>setShow(true)} >
    
    //     <img src={image} alt="" className="w-60 h-60 rounded-xl shadow-md hover:scale-[102%] transition-all duration-200 " />
    //     <p className="text-neutral-200 text-sm font-sans my-5">{metadata?.name}</p>
    //   </div>
    <div onClick={()=>setShow(true)}  className={`border border-neutral-800 bg-[#2c2c2c3d] rounded-2xl ${!metadata?.name && 'cursor-wait'} w-60 h-auto shadow-sm  hover:shadow-lg pb-0 relative hover:translate-y-[-1%] transition-all cursor-pointer overflow-clip bg-neutral-900` }>
      <NftModal show={show}  data={metadata} setShow={setShow} nftIndex={nftIndex} />
    <div className="flex flex-col  h-86 w-full ">
      <div className=" rounded-t-lg overflow-hidden flex-col flex items-center jusify-center relative h-full">
        <img  src={image } className="  w-full h-full rounded-t-lg " />
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

    )

  }
  export default ImageCard