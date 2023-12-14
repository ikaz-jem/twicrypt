import React, { useEffect, useId } from "react";
import Card from "../../../components/sponsorsSlider/Card";


import Glide from "@glidejs/glide";




export const CATS_DISCOVER = [
  {
    name: "twicrypt.com",
    desc: "Shop the latest <br /> from top brands",
    featuredImage: 'https://api.twicrypt.com/eth/img/thumbnails/tn_50.png',
    color: "bg-yellow-50",
  },
  {
    name: "twicrypt.com",
    desc: "Give the gift <br /> of choice",
    featuredImage: 'https://api.twicrypt.com/eth/img/thumbnails/tn_5.png',
    color: "bg-red-50",
  },
  {
    name: "twicrypt.com",
    desc: "Up to <br /> 80% off retail",
    featuredImage: 'https://api.twicrypt.com/eth/img/thumbnails/tn_68.png',
    color: "bg-blue-50",
  },
  {
    name: "twicrypt.com",
    desc: "Up to <br /> 80% off retail",
    featuredImage: 'https://api.twicrypt.com/eth/img/thumbnails/tn_27.png',
    color: "bg-green-50",
  },

];

const SliderDemo = ({data}) => {
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");

  useEffect(() => {
    // @ts-ignore
    const OPTIONS = {
      type:'slider',
      perView: 3,
      gap: 0,
    rewind:true,
      autoplay:2000,
      hoverpause:false,
      direction:'rtl',
      breakpoints: {
        1280: {
          gap: 0,
          perView: 3,
        },
        1279: {
          gap: 0,
          perView: 2,
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
    <div className={` container mx-auto  overflow-hidden  ${UNIQUE_CLASS} `}>
     
      <div className="  overflow-hidden" data-glide-el="track">
        <ul className="glide__slides">
          {CATS_DISCOVER.map((item, index) => (
            <li key={index} className={`glide__slide flex gap-5 m-0 p-0 items-center justify-center `} >
              <Card
                name={data.name || item.name}
                desc={data.name || item.desc}
                img={data.image || item.featuredImage}
                color={data.color || item.color}
                icon={data.icon || item.featuredImage}
              /> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SliderDemo;
