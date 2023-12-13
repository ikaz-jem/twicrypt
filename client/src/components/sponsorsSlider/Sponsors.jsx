import React, { useEffect, useId } from "react";
import Card from "./Card";

import Glide from "@glidejs/glide";
import { useSelector } from "react-redux";
import logo from '../../media/logo.png'
import logo2 from '../../media/3d2.png'

const random = Math.floor(Math.random()*5000)

    const placeHolders = [1,1,1,1,1,1,1]

const Sponsors = () => {
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");

  useEffect(() => {
    // @ts-ignore
    const OPTIONS = {
      type:'slider',
      perView: 5,
      gap: 0,
      fucusAt:5,
      startAt:1,
      autoplay:2000,
      bound:true,
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

const sponsorships = useSelector(state=>state?.sponsorships)
const sliderData = sponsorships?.sponsorships?.slider



  return (
    <div className={` container mx-2  overflow-hidden w-full h-full ${UNIQUE_CLASS} `}>
      <h1 className="pl-10 m-0 text-left ">Sponsors </h1>
      <div className="  overflow-hidden " data-glide-el="track">
        <ul className="glide__slides m-0 p-0 ">
         {
sliderData?.length >0 ? sliderData?.map(({brand,image,icon,website}, index) => (
  <li key={index} className={`glide__slide flex gap-5 m-0 p-0 items-center justify-center `} >
    <Card
      name={brand}
      img={image}
      icon={icon}
          website={website}
      /> 
  </li>
))
:
placeHolders?.map((item, index) => (
  <li key={index} className={`glide__slide flex gap-0 m-0 p-0 items-center justify-center `} >
    <Card
      name={'Twicrypt.com'}
      img={"https://twicrypt.com/media/sponsor.png"}
      icon={"https://twicrypt.com/media/sponsor.png"}
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

export default Sponsors;
