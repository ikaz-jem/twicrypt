import './carousel.css';
import { carouselData } from "./carouselData";
import { Link } from "react-router-dom";
import { HashLoader } from 'react-spinners';
import { useMount } from "../../hooks/useMount";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { fetchedCarouselData } from '../../app/features/carousel/carouselSlice';
import { Transition } from '@headlessui/react'
import CarouselTransition from '../../shared/transitions/CarouselTransition';
import { useEffect, useState } from 'react';
import logo3d from '../../media/3d2.png'
import logo from '../../media/logo.png'
import {AiFillLeftCircle,AiFillRightCircle} from 'react-icons/ai'

const SvgTitle = () => {


    return (
        <>
            <div className="container-xxxxlg flex container--center items-center justify-center ">
                <h1 className="hero_title animate-bounce text-white"> TwiCrypt</h1>
                {/* <h4 className=" heading bg-dark">1# All in one Decentralized Application ... </h4> */}
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
    const [show, setShow] = useState(false)
    useEffect(() => {
        setShow(true)

    }, [])
    const PlaceHolder = [1, 2, 3, 4]

    const storeData = useSelector(fetchedCarouselData)


    const RenderCarouselItems = () => {
        useMount()

        return (
            <>
                {storeData?.data ?
                    storeData.data.map(({ title: name, image }, i) => {
                        return (<li className="frames__item glide__slide " key={i}>
                            <div dataref="slidereveal[el] ">
                                <div className="frame " dataref="hero[el]">

                                    <div className="frame-front ">
                                        <img src={image || logo3d} alt="" className="carousel-img" />

                                        <div className="flex items-center justify-center  ">

                                            <Link to={image} target="blank" className="flex items-center justify-center gap-2 w-[80%] h-[60%]">
                                                <img src={image || logo} alt="icon" className="w-5 h-5" />
                                                <p className='text-gray-500'>{name?.slice(0, 4)|| 'Twicrypt' }</p>

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
                    }) :
                    PlaceHolder?.map((item, i) => {
                        return (<li className="frames__item glide__slide " key={i}>
                            <div dataref="slidereveal[el]">

                                <div className="frame " dataref="hero[el]">

                                    <div className="frame-front ">

                                        <div className="flex items-center justify-center">

                                            <Link target="blank" className="flex items-center justify-center gap-2 w-[80%] h-[60%]">

                                                <p className='text-gray-500'>brand name / img</p>

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
            {storeData?.data && !storeData?.data.hasError || storeData?.data == null ?

                <div className="slider slider--big glide " data-component="hero">
                    <CarouselTransition show={show}>
                        <div className="slider__arrows flex justify-between lg:pl-10 md:pl-5 sm:pl-5 pl-0 " data-glide-el="controls">
                        <button className="glide__arrow slider__arrow  glide__arrow--left  " data-glide-dir="<">
                 <AiFillLeftCircle className="text-5xl hover:text-pink-600 transition-all"/>
            </button>

            <button className="glide__arrow glide__arrow--right slider__arrow slider__arrow--next  " data-glide-dir=">">
            <AiFillRightCircle className="text-5xl hover:text-pink-600 transition-all"/>
            </button>
                        </div>
                        <div className="frames glide__track my-14 " data-component="slidereveal" data-glide-el="track">

                            <ul className="frames__list glide__slides">

                                <RenderCarouselItems />
                            </ul>


                        </div>
                    </CarouselTransition>

                    <div className="hero__heading ">
                        <Transition
                            appear
                            show={show}
                            className={"relative z-10"}
                            enter="transition-all duration-1000  ease-in z-0"
                            enterFrom="opacity-0 scale-0 z-10"
                            enterTo="opacity-100 scale-100 z-10"
                            leave="transition-all duration-1000 z-10"
                            leaveFrom="opacity-100 translate-x-0 z-10"
                            leaveTo="opacity-0 translate-x-20 z-0"
                        >
                            {<SvgTitle />}

                        </Transition>
                    </div>


                </div>
                :
                <div className='flex flex-col m-0 p-0'>
                    <Spinner data={storeData?.isLoading || true} />
                    <p className="text-white m-0 p-0">Loading Sponsors data ...</p>
                </div>
            }
        </>
    )
}

export default Carousel