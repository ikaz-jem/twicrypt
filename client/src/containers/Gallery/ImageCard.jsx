
import { useState } from "react"
import {useSelector} from 'react-redux'
import NftModal from './NftModal/NftModal'



const ImageCard = ({ nftIndex }) => {
const [show,setShow] = useState(false)

  const basUrl = 'https://api.twicrypt.com/'
    // console.log(`${collection?.basUrl}${collection?.network}/metadata/${data}.json`)
    const metadata = require(`./eth/${nftIndex}.json`)
    const image = `${basUrl}eth/img/thumbnails/tn_${nftIndex}.png`

    return (
      <div className="flex items-center justify-center flex-col cursor-pointer" onClick={()=>setShow(true)} >
    <NftModal show={show}  data={metadata} setShow={setShow} nftIndex={nftIndex} />

        <img src={image} alt="" className="w-60 h-60 rounded-xl shadow-md hover:scale-[102%] transition-all duration-200 " />
        <p className="text-neutral-200 text-sm font-sans my-5">{metadata?.name}</p>
      </div>

    )

  }
  export default ImageCard