import React, { useEffect, useId } from "react";
import NftsCard from "../NftCards/NftsCard";
import { Controls } from '@glidejs/glide/dist/glide.modular.esm'
import {AiFillLeftCircle ,AiFillRightCircle} from 'react-icons/ai'


import Glide from "@glidejs/glide";

export const CATS_DISCOVER = [
  {
    title: "Explore new arrivals",
    desc: "Shop the latest <br /> from top brands",
    thumbnailUrl: 'https://picsum.photos/204',
    price: "bg-yellow-50",
  },
  {
    title: "Digital gift cards",
    desc: "Give the gift <br /> of choice",
    thumbnailUrl: 'https://picsum.photos/201',
    price: "bg-red-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnailUrl: 'https://picsum.photos/500',
    price: "bg-blue-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnailUrl: 'https://picsum.photos/300',
    price: "bg-green-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnailUrl: 'https://picsum.photos/210',
    price: "bg-green-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnailUrl: 'https://picsum.photos/290',
    price: "bg-green-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnailUrl: 'https://picsum.photos/230',
    price: "bg-green-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnailUrl: 'https://picsum.photos/240',
    price: "bg-green-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnailUrl: 'https://picsum.photos/260',
    price: "bg-green-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnailUrl: 'https://picsum.photos/210',
    price: "bg-green-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnailUrl: 'https://picsum.photos/320',
    price: "bg-green-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnailUrl: 'https://picsum.photos/120',
    price: "bg-green-50",
  },
];

const NftSlider = ({data}) => {
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");

  useEffect(() => {
    // @ts-ignore
    const OPTIONS = {
      type:'carousel',
      perView: 5,
      gap: 10,
      animationDuration: 1000,
      
      autoplay:2500,
      hoverpause:true,
      direction:'ltr',
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
    <div className={` container-xxlarge  group  overflow-hidden w-[80vw]   ${UNIQUE_CLASS} `}>

<div className="glide group w-full h-full relative">
         
         
            <div className="absolute shadow-lg group-hover:opacity-100 transition-all opacity-0 p-0 flex items-center justify-center duration-500  top-1/3 left-0 z-10 bg-white rounded-full " data-glide-el="controls">
            <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                 <AiFillLeftCircle className="text-5xl hover:text-blue-600 transition-all"/>
            </button>
            </div>
            <div className="absolute shadow-lg group-hover:opacity-100 transition-all opacity-0 p-0 flex items-center justify-center  duration-500 top-1/3 right-0 z-10 bg-white rounded-full" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
            <AiFillRightCircle className="text-5xl hover:text-blue-600 transition-all"/>
            </button>
            </div>
        <div className="glide__track" data-glide-el="track">
     

        <ul className="glide__slides m-0 p-0">
          {CATS_DISCOVER.map((item, index) => (
            <li key={index} className={`flex justify-center items-center glide__slide py-8 m-0  `} >
              <NftsCard data={item}
              /> 
            </li>
          ))}
        </ul>
     
        </div>

      </div>
   

    </div>
  );
};

export default NftSlider;
