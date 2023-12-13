import React, { useEffect, useId } from "react";
import Card from "./Card";

import Glide from "@glidejs/glide";
import { useSelector } from "react-redux";


const random = Math.floor(Math.random()*200)

    const placeHolders = [
        `https://api.twicrypt.com/eth/img/${random}.png`,
        `https://api.twicrypt.com/eth/img/${random+326}.png`,
        `https://api.twicrypt.com/eth/img/${random+782}.png`,
        `https://api.twicrypt.com/eth/img/${random+2}.png`,
        `https://api.twicrypt.com/eth/img/${random+169}.png`,
    ]

const HomeSlider = () => {
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");

  useEffect(() => {
  
    const OPTIONS = {
      type:'carousel',
      perView: 4,
      gap: 0,
      bound:true,
      startAt:1,
      focusAt:5,
      autoplay:2000,
      hoverpause:false,
      direction:'ltr',
      breakpoints: {
        1280: {
          gap: 0,
          perView: 3,
        },
        1279: {
          gap: 0,
          perView: 3,
        },
        1023: {
          gap: 0,
          perView: 2,
        },
        768: {
          gap: 0,
          perView: 1,
        },
        500: {
          gap: 0,
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
    <div className={` container mx-2  overflow-hidden w-full h-screen  ${UNIQUE_CLASS} `}>
      <div className="  overflow-hidden  items-center flex justify-center h-full" data-glide-el="track">
        <ul className="w-full h-full flex items-center justify-center ">
      <h1 className=" m-0 text-left font-extrabold  ">Quality Art </h1>
         {


placeHolders?.map((item, index) => (
  <li key={index} className='glide__slide flex gap-0 m-0 p-0 items-center justify-center w-full h-full' >
    <Card
      name={'twicrypt'}
      img={item}
      icon={item}
      website={'/'}
    /> 
  </li>
))  

         }
        </ul>
      </div>
    </div>
  );
};

export default HomeSlider;
