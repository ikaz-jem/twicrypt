import React, { useEffect, useId } from "react";
import { Controls } from '@glidejs/glide/dist/glide.modular.esm'
import {AiFillLeftCircle ,AiFillRightCircle} from 'react-icons/ai'
import NftsCardCat2 from "../NftCards/NftsCardCat2";
import Glide from "@glidejs/glide";


const NftSliderCat2 = ({data=[]}) => {
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");


  

const Nfts = [
 ...data ,
{
name: 'Twicrypt Demo',
tokenId:7102,
floorPrice:500000000000000000,
buyNow:30000000000000000000,
image:'https://api.twicrypt.com/eth/img/7102.png',
metadata_url:'https://api.twicrypt.com/eth/metadata/7102.json'

},
{
name: 'Twicrypt Demo',
tokenId:7480,
floorPrice:1000000000000000000,
buyNow:80000000000000000000,
image:'https://api.twicrypt.com/eth/img/7480.png',
metadata_url:'https://api.twicrypt.com/eth/metadata/7480.json'

},
{
name: 'Twicrypt Demo',
tokenId:6988,
floorPrice:5000000000000000000,
buyNow:35000000000000000000,
image:'https://api.twicrypt.com/eth/img/6988.png',
metadata_url:'https://api.twicrypt.com/eth/metadata/6988.json'

},
{
name: 'Twicrypt Demo',
tokenId:7434,
floorPrice:2000000000000000000,
buyNow:8400000000000000000,
image:'https://api.twicrypt.com/eth/img/7434.png',
metadata_url:'https://api.twicrypt.com/eth/metadata/7434.json'

},
{
name: 'Twicrypt Demo',
tokenId:7003,
floorPrice:750000000000000000,
buyNow:22000000000000000000,
image:'https://api.twicrypt.com/eth/img/7003.png',
metadata_url:'https://api.twicrypt.com/eth/metadata/7003.json'
}

]


const exctractItems = ()=>{

return (

<>
{Nfts?.map((item, index) => (
            <li key={index} className={`flex justify-center items-center glide__slide py-8 m-0  `} >
              <NftsCardCat2 data={item}
              /> 
            </li>
          ))}

</>

)


}


  useEffect(() => {
    // @ts-ignore
    const OPTIONS = {
      type:'slider',
      perView: 4,
      gap: 10,
      startAt:2,
      animationDuration: 1000,
      focusAt:'center',
      autoplay:3000,
      hoverpause:false,
      direction:'ltr',
      bound:true,
      animationDuration:2000,
      breakpoints: {
        1280: {
          gap: 10,
          perView: 3,
        },
        1279: {
          gap: 10,
          perView: 3,
        },
        1023: {
          gap: 10,
          perView: 2,
        },
        768: {
          gap: 10,
          perView: 1,
        },
        500: {
          gap: 10,
          perView: 1,
        },
      },
      
    };

    let slider = new Glide(`.${UNIQUE_CLASS}`, OPTIONS);
     slider.mount();
    return () => {
      slider.destroy();
    };
  }, [UNIQUE_CLASS]);

  return (
    <div className={` container-xxlarge  group  overflow-hidden w-[80vw]    ${UNIQUE_CLASS} `}>

<div className="glide group w-full h-full relative">
         
         
<div className="absolute shadow-lg group-hover:opacity-100 transition-all opacity-0 p-0 flex items-center justify-center duration-500  top-[40%] left-0 z-10 bg-white rounded-full " data-glide-el="controls">
            <button className="glide__arrow glide__arrow--left text-neutral-900" data-glide-dir="<">
                 <AiFillLeftCircle className="text-5xl hover:text-blue-600 transition-all"/>
            </button>
            </div>
            <div className="absolute shadow-lg group-hover:opacity-100 transition-all opacity-0 p-0 flex items-center justify-center  duration-500 top-[40%] right-0 z-10 bg-white rounded-full" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--right text-neutral-900" data-glide-dir=">">
            <AiFillRightCircle className="text-5xl hover:text-blue-600 transition-all"/>
            </button>
            </div>
        <div className="glide__track" data-glide-el="track">
     

        <ul className="glide__slides m-0 p-0">
          { exctractItems()}
        </ul>
     
        </div>

      </div>
   

    </div>
  );
};

export default NftSliderCat2;
