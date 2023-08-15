


import CallToAction from "../components/CallToAction";
import Sponsors from "../components/sponsorsSlider/Sponsors";
import SectionWhy from "../components/sectionWhy/SectionWhy";
// import Carousel from '../components/carousel/Carousel'
import { useEffect,lazy, Suspense} from "react";

//import { getCarouselData } from "../app/features/carousel/carouselSlice"
import { getCarouselData } from "../app/features/carousel/carouselThunks";
import { useDispatch} from 'react-redux'
import Popup from "../shared/popup/Popup";
import toast from 'react-hot-toast';
import UserModal from "../shared/userModal/UserModal";

const Carousel = lazy(()=> import('../components/carousel/Carousel'))




const Home = () => {
  
  const dispatch = useDispatch()
const controller = new AbortController()
  

useEffect(()=>{    
    dispatch(getCarouselData())
    toast.custom(
      (t) => (
        <Popup image={'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/bitcoin-logo-btc-crypto-mining-cryptocurrency-gift-thomas-larch.jpg'} uint256={0} show={true} message={"show.description"} title={"show.title"} showSpinner={true} hash={"transaction is indexing ..."}/>
      ),
      { position: "bottom-right", id: "nc-product-notify", duration: 30000 }
    ); 
    return()=> controller.abort()
},[])


    
  return (

    <>
     
<div className="index__header header ">
            <div className="space space--xlarge ">
                  {/* <Navbar /> */}
                    <div className="hero__wrapper container  ">
                         <Carousel/>
                         {/* <UserModal show={true} /> */}
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