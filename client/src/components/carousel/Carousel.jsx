import { useCallback, useEffect } from "react"
import './carousel.css';
import { carouselData } from "./carouselData";
import { Link } from "react-router-dom";
import { HashLoader } from 'react-spinners';
import { useMount } from "../../hooks/useMount";

import { fetchedCarouselData } from "../../app/features/carousel/carouselSlice";
import { getCarouselData } from "../../app/features/carousel/carouselThunks";

import { useDispatch, useSelector} from 'react-redux'
import { useStoreData } from "./useStoreData";


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




const Carousel = () => {
    
    const dispatch = useDispatch()
    useEffect(()=>{    
        dispatch(getCarouselData()) ///1 
        
    },[])
    
    const {data,isLoading ,hasError}= useSelector(fetchedCarouselData) //2
    console.log(data)
    
    
    useMount()

   


const RenderCarouselItems = ()=>{

if (hasError==true){
return <h1>error</h1>
}else if (data){
    return<>
     {carouselData.map((item,i) => {
        return (<li className="frames__item glide__slide" key={i}>
            <div dataref="slidereveal[el]">
                <div className="frame" dataref="hero[el]">

                    <div className="frame-front">
                        <img src={item.image} alt="" className="carousel-img" />

                <div className="flex items-center justify-center">

                        <Link to={item.link} target="blank" className="flex items-center justify-center gap-2 w-[80%] h-[60%]">
                                <img src={item.icon} alt="icon"className="w-5 h-5" />
                                <p>{item.name}</p>

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
}else {
    <HashLoader size={100} color="#ffff" style={{text:'center'}}/> 
}

 
}

    

    return (
        <>
      

            <div className="slider slider--big glide " data-component="hero">
                <div className="slider__arrows" data-glide-el="controls">
                    <button className="slider__arrow slider__arrow--prev glide__arrow glide__arrow--prev  text-white flex items-center  justify-center" dataref="fadereveal[el]" data-glide-dir="<">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z" />
                        </svg>
                    </button>

                    <button className="slider__arrow slider__arrow--next glide__arrow glide__arrow--next text-white flex items-center  justify-center" dataref="fadereveal[el]" data-glide-dir=">">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                        </svg>
                    </button>
                </div>
                <div className="frames glide__track my-14 " data-component="slidereveal" data-glide-el="track">

                    {/* {hero mapping carouzel items } */}
                    <ul className="frames__list glide__slides">
                        <RenderCarouselItems/>
                    </ul>

                </div>
            </div>

            
            <div className="hero__heading">
                {<SvgTitle />}
            </div>




        </>
    )
}

export default Carousel