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



const SvgTitle = () => {


    return (
        <>
            <div className="container-xxxxlg ">
                <h1 className="hero_title animate-bounce ">TwiCrypt</h1>
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
const [show,setShow]=useState(false)
useEffect(()=>{
setShow(true)

},[])
const PlaceHolder = [1,2,3,4]

    const storeData = useSelector(fetchedCarouselData)


    const RenderCarouselItems = () => {
        useMount()

        return (
            <>
                {storeData.data!==null ?
                    storeData.data.map(({ title:name, image}, i) => {
                        return (<li className="frames__item glide__slide " key={i}>
                            <div dataref="slidereveal[el] ">
                                <div className="frame " dataref="hero[el]">

                                    <div className="frame-front ">
                                        <img src={image} alt="" className="carousel-img" />

                                        <div className="flex items-center justify-center  ">

                                            <Link to={image} target="blank" className="flex items-center justify-center gap-2 w-[80%] h-[60%]">
                                                <img src={image} alt="icon" className="w-5 h-5" />
                                                <p className='text-gray-500'>{name.slice(0,4)}</p>

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
                    }): 
                    PlaceHolder.map((item, i) => {
                        return (<li className="frames__item glide__slide " key={i}>
                            <div dataref="slidereveal[el]">
                                            
                                <div className="frame " dataref="hero[el]">

                                    <div className="frame-front ">

                                        <div className="flex items-center justify-center">

                                            <Link  target="blank" className="flex items-center justify-center gap-2 w-[80%] h-[60%]">
                                              
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
                    }) }
            </>
             )
    }


    return (
        <>
        {/* {hero mapping carouzel items } */}
        {storeData.data && !storeData.data.hasError || storeData.data==null ?

            <div className="slider slider--big glide " data-component="hero">
                <CarouselTransition show={show}>
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
            <Spinner data={storeData.isLoading} />
        }
    </>
    )
}

export default Carousel