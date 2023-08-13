


import CallToAction from "../components/CallToAction";
import Sponsors from "../components/sponsorsSlider/Sponsors";
import SectionWhy from "../components/sectionWhy/SectionWhy";
// import Carousel from '../components/carousel/Carousel'
import { useEffect,lazy, Suspense} from "react";
import { HashLoader } from "react-spinners";

import { getCarouselData } from "../app/features/carousel/carouselSlice"


import { useDispatch} from 'react-redux'



const Carousel = lazy(()=> import('../components/carousel/Carousel'))


const Home = () => {
  
  const dispatch = useDispatch()

  useEffect(()=>{    
    dispatch(getCarouselData())
    
},[])

    
  return (

    <>
     
        <div className="index__header header">
            <div className="space space--xlarge">
                  {/* <Navbar /> */}
                    <div className="hero__wrapper container">
                         <Carousel/>
                     {/*  */}
                    </div>
                  <CallToAction />
            </div>
        </div>
        <SectionWhy />
        <Sponsors />
  
    </>
  )
}



export default Home