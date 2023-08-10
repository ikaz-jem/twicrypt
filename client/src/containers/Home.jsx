


import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import CallToAction from "../components/CallToAction";
import Sponsors from "../components/Sponsors";
import SectionWhy from "../components/sectionWhy/SectionWhy";
import Carousel from '../components/carousel/Carousel'


const Home = () => {


  return (

    <>
     
        <div className="index__header header">
          <div className="space space--xlarge">
            <div className="hero" data-component="fadereveal">
              <Navbar />
              <div className="hero__wrapper container">

              <div>
                   <Carousel />
              </div>
                

              </div>
              <CallToAction />
            </div>
          </div>
        </div>
        <SectionWhy />
        <Sponsors />
        <Footer />
  
    </>
  )
}


export default Home