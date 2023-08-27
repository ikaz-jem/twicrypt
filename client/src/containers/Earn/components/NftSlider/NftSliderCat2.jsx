import React, { useEffect, useId } from "react";
import { Controls } from '@glidejs/glide/dist/glide.modular.esm'
import {AiFillLeftCircle ,AiFillRightCircle} from 'react-icons/ai'
import NftsCardCat2 from "../NftCards/NftsCardCat2";
import Glide from "@glidejs/glide";

export const CATS_DISCOVER = [
  {
    title: "Explore new arrivals",
    desc: "Shop the latest <br /> from top brands",
    thumbnail: 'https://i.seadn.io/gcs/files/0da3d5f1064df601ebc1c4bbf6729fb0.png?auto=format&dpr=1&w=1000',
    price: "bg-yellow-50",
  },
  {
    title: "Digital gift cards",
    desc: "Give the gift <br /> of choice",
    thumbnail: 'https://i.seadn.io/gcs/files/52fcbc397f4852173b1967b91d67caa6.png?auto=format&dpr=1&w=1000',
    price: "bg-red-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnail: 'https://i.seadn.io/gcs/files/52bc7eba3d245924e992ac683a969766.png?auto=format&dpr=1&w=1000',
    price: "bg-blue-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnail: 'https://i.seadn.io/gcs/files/f507c506dfe7e6d056c3b23a98052726.png?auto=format&dpr=1&w=1000',
    price: "bg-green-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnail: 'https://i.seadn.io/gcs/files/f507c506dfe7e6d056c3b23a98052726.png?auto=format&dpr=1&w=1000',
    price: "bg-green-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnail: 'https://i.seadn.io/s/primary-drops/0x0752652ba2c5ef1757dcb2a65499129df0707619/29447111:about:preview_media:b3f45ff0-e131-4201-9e72-4621b479bdad.png?auto=format&dpr=1&w=1920',
    price: "bg-green-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnail: 'https://i.seadn.io/gae/Z2_pyv1CQQe1BB9eRNhCZJ3X1YoetfmsN3JKMkh0h27S74sazMuJNX5RMiGc6ciUpo34mIiIJU9eXdVW_P2DWueJFRB_Yk8HOjp_?auto=format&dpr=1&w=1000',
    price: "bg-green-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnail: 'https://i.seadn.io/gae/Z2_pyv1CQQe1BB9eRNhCZJ3X1YoetfmsN3JKMkh0h27S74sazMuJNX5RMiGc6ciUpo34mIiIJU9eXdVW_P2DWueJFRB_Yk8HOjp_?auto=format&dpr=1&w=1000',
    price: "bg-green-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnail: 'https://i.seadn.io/gae/MQXSv9tSJIl7S92av0rYVRz0DfIto2SD7EoWf52sYDPKQ3pwA_cVBlz7SdqNu18MQokavlTJ6oHXd4l0nWWZGs3cFmvWjgtTiX9_Zw?auto=format&dpr=1&w=1000',
    price: "bg-green-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnail: 'https://i.seadn.io/gae/ip3fJQWrGtNDzSB9IEXKlfaMbg3lzzZLBUT9aVLYp2WPHVI8qgjxLmDwyMu_k2xqz8lripEFGXf6aquMtDbGi1O3DbRD28m662S61w?auto=format&dpr=1&w=1000',
    price: "bg-green-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnail: 'https://i.seadn.io/gcs/files/3d0224c06c2d23364ba214124bc1519b.png?auto=format&dpr=1&w=1000',
    price: "bg-green-50",
  },
  {
    title: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    thumbnail: 'https://i.seadn.io/gcs/files/384f8ad93fcbe1f981ae86a7560e10b8.png?auto=format&dpr=1&w=1000',
    price: "bg-green-50",
  },
];

const NftSliderCat2 = () => {
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");

  useEffect(() => {
    // @ts-ignore
    const OPTIONS = {
      type:'carousel',
      perView: 4,
      gap: 10,
      animationDuration: 1000,
      
      autoplay:3000,
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
    <div className={` container-xxlarge  group  overflow-hidden w-[80vw]    ${UNIQUE_CLASS} `}>

<div className="glide group w-full h-full relative">
         
         
            <div className="absolute shadow-lg group-hover:opacity-100 transition-all opacity-0 p-0 flex items-center justify-center duration-500  top-[40%] left-0 z-10 bg-white rounded-full " data-glide-el="controls">
            <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                 <AiFillLeftCircle className="text-5xl hover:text-blue-600 transition-all"/>
            </button>
            </div>
            <div className="absolute shadow-lg group-hover:opacity-100 transition-all opacity-0 p-0 flex items-center justify-center  duration-500 top-[40%] right-0 z-10 bg-white rounded-full" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
            <AiFillRightCircle className="text-5xl hover:text-blue-600 transition-all"/>
            </button>
            </div>
        <div className="glide__track" data-glide-el="track">
     

        <ul className="glide__slides m-0 p-0">
          {CATS_DISCOVER.map((item, index) => (
            <li key={index} className={`flex justify-center items-center glide__slide py-8 m-0  `} >
              <NftsCardCat2 data={item}
              /> 
            </li>
          ))}
        </ul>
     
        </div>

      </div>
   

    </div>
  );
};

export default NftSliderCat2;
