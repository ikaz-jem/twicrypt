import React, { useEffect, useId } from "react";
import Card from "./Card";

import Glide from "@glidejs/glide";

export const CATS_DISCOVER = [
  {
    name: "Explore new arrivals",
    desc: "Shop the latest <br /> from top brands",
    featuredImage: 'https://picsum.photos/200',
    color: "bg-yellow-50",
  },
  {
    name: "Digital gift cards",
    desc: "Give the gift <br /> of choice",
    featuredImage: 'https://picsum.photos/200',
    color: "bg-red-50",
  },
  {
    name: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    featuredImage: 'https://picsum.photos/200',
    color: "bg-blue-50",
  },
  {
    name: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    featuredImage: 'https://picsum.photos/200',
    color: "bg-green-50",
  },
  {
    name: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    featuredImage: 'https://picsum.photos/200',
    color: "bg-green-50",
  },
  {
    name: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    featuredImage: 'https://picsum.photos/200',
    color: "bg-green-50",
  },
  {
    name: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    featuredImage: 'https://picsum.photos/200',
    color: "bg-green-50",
  },
  {
    name: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    featuredImage: 'https://picsum.photos/200',
    color: "bg-green-50",
  },
  {
    name: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    featuredImage: 'https://picsum.photos/200',
    color: "bg-green-50",
  },
  {
    name: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    featuredImage: 'https://picsum.photos/200',
    color: "bg-green-50",
  },
  {
    name: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    featuredImage: 'https://picsum.photos/200',
    color: "bg-green-50",
  },
  {
    name: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    featuredImage: 'https://picsum.photos/200',
    color: "bg-green-50",
  },
];

const Sponsors = () => {
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");

  useEffect(() => {
    // @ts-ignore
    const OPTIONS = {
      type:'carouzel',
      perView: 5,
      gap: 0,
      
      autoplay:2000,
      hoverpause:true,
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
    <div className={` container mx-auto  overflow-hidden   ${UNIQUE_CLASS} `}>
      <h1>Sponsors </h1>
      <div className="  overflow-hidden " data-glide-el="track">
        <ul className="glide__slides ">
          {CATS_DISCOVER.map((item, index) => (
            <li key={index} className={`glide__slide flex gap-5 m-0 p-0 items-center justify-center `} >
              <Card
                name={item.name}
                desc={item.desc}
                img={item.featuredImage}
                color={item.color}
              /> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sponsors;
