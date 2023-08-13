import './carousel.css';
import { carouselData } from "./carouselData";
import { Link } from "react-router-dom";
import { HashLoader } from 'react-spinners';
import { useMount } from "../../hooks/useMount";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { fetchedCarouselData } from '../../app/features/carousel/carouselSlice';
import { Transition } from '@headlessui/react'
import { useState } from 'react';



const SvgTitle = () => {


    return (
        <>
            <div className="container-xxxxlg ">
                <h1 className="hero_title">TwiCrypt</h1>
                <h4 className=" heading bg-dark">1# All in one Decentralized Application ... </h4>
            </div>
        </>
    )
}



const Spinner = ({ data }) => {

    return (
        <div className='container w-screen h-[50vh] '>
            <Transition show={data}
                enter="transition-opacity duration-700"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-700"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <HashLoader size={100} color="#ffff" style={{ text: 'center' }} />
            </Transition>


        </div>
    )


}


const Carousel = () => {


    const storeData = useSelector(fetchedCarouselData)

    const RenderCarouselItems = () => {
        useMount()

        return (
            <>


                {storeData.data &&
                    storeData.data.map(({ name, image, link, icon }, i) => {
                        return (<li className="frames__item glide__slide" key={i}>
                            <div dataref="slidereveal[el]">
                                <div className="frame" dataref="hero[el]">

                                    <div className="frame-front">
                                        <img src={image} alt="" className="carousel-img" />

                                        <div className="flex items-center justify-center">

                                            <Link to={link} target="blank" className="flex items-center justify-center gap-2 w-[80%] h-[60%]">
                                                <img src={icon} alt="icon" className="w-5 h-5" />
                                                <p className='text-gray-500'>{name}</p>

                                            </Link>
                                        </div>
                                    </div>

                                    {/* right side */}
                                    <div> </div>
                                    {/* left side */}
                                    <div> </div>

                                </div>
                            </div>
                        </li>)
                    })}


            </>
        )


    }


    return (
        <>

            {/* {hero mapping carouzel items } */}
            {storeData.data && !storeData.data.hasError ?


                <div className="slider slider--big glide " data-component="hero">
                    <div className="slider__arrows" data-glide-el="controls">
                        <button className="slider__arrow slider__arrow--prev glide__arrow glide__arrow--prev" dataref="fadereveal[el]" data-glide-dir="<">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z" />
                            </svg>
                        </button>

                        <button className="slider__arrow slider__arrow--next glide__arrow glide__arrow--next " dataref="fadereveal[el]" data-glide-dir=">">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='flex items-center justify-center'>
                                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                            </svg>
                        </button>
                    </div>
                    <div className="frames glide__track my-14 " data-component="slidereveal" data-glide-el="track">
                        <ul className="frames__list glide__slides   ">

                            <RenderCarouselItems />

                        </ul>



                        <div className="hero__heading">
                            {<SvgTitle />}
                        </div>

                    </div>
                </div>


                :

                <Spinner data={storeData.isLoading} />
            }






        </>
    )
}

export default Carousel