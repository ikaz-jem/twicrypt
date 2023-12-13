
import { useState } from "react"
import {useSelector} from 'react-redux'


const FilterCard = ({ Nft }) => {


    return (
      <div className="flex items-center justify-center flex-col cursor-pointer">


        <img src={Nft?.image} alt="" className="w-60 h-60 rounded-xl shadow-md hover:scale-[102%] transition-all duration-200 " />
        <p className="text-neutral-200 text-sm font-sans my-5">{Nft?.name}</p>
      </div>

    )

  }
  export default FilterCard