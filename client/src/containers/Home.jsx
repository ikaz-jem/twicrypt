


import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import CallToAction from "../components/CallToAction";
import Sponsors from "../components/sponsorsSlider/Sponsors";
import SectionWhy from "../components/sectionWhy/SectionWhy";
import Carousel from '../components/carousel/Carousel'


const Home = () => {


  return (

    <>
     
        <div className="index__header header">
            <div className="space space--xlarge">
                  {/* <Navbar /> */}
                    <div className="hero__wrapper container">
                            <Carousel />
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