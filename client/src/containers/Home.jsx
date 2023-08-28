


import CallToAction from "../components/CallToAction";
import Sponsors from "../components/sponsorsSlider/Sponsors";
import SectionWhy from "../components/sectionWhy/SectionWhy";
import SectionToken from "../components/SectionToken";
// import Carousel from '../components/carousel/Carousel'
import { useEffect, lazy, Suspense, useState } from "react";

//import { getCarouselData } from "../app/features/carousel/carouselSlice"
import { getCarouselData } from "../app/features/carousel/carouselThunks";
import { useDispatch } from 'react-redux'
import Popup from "../shared/popup/Popup";
import toast from 'react-hot-toast';
import UserModal from "../shared/userModal/UserModal";

import Cta from "./Cta";
import EarnHome from "./Earn/components/EarnHome";
import NftSliderCat2 from "./Earn/components/NftSlider/NftSliderCat2";
import ButtonPrimary from "../shared/Button/ButtonPrimary";
import Nav from "../shared/Nav/Nav";
import NavItem from "../shared/NavItem/NavItem";
import { useNavigate } from "react-router-dom";

const Carousel = lazy(() => import('../components/carousel/Carousel'));


const Home = () => {

  const dispatch = useDispatch()
  const controller = new AbortController()
  const [show, setShow] = useState(true)


  const Navigate = useNavigate()

  const showPopup = () => {
    const popToast = toast.custom(
      (t) => (


        <Popup productImage={'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/bitcoin-logo-btc-crypto-mining-cryptocurrency-gift-thomas-larch.jpg'} show={show} t={t} />
      ),
      { position: "bottom-right", duration: 50000 }
    );
    console.log('popup invoked')
    return popToast
  }


  const toastP = () => {
    return toast.custom((t) => (
      <div
        className={`${t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Emilia Gates
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Sure! 8:30pm works great!
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ))
  }




  useEffect(() => {
    dispatch(getCarouselData())
    // return()=> controller.abort()


  }, [])




  return (

    <>

      <div className="index__header   ">
        <div className="space space--xlarge color-ball">
          {/* <Navbar /> */}
          <div className="hero__wrapper   ">
            <Carousel />
            {/* <UserModal show={true} /> */}
            {/*  */}

          </div>

          <Nav className="flex items-center justify-center gap-5 flex-wrap">
            <NavItem onClick={()=> Navigate('/earn/mint')}>Mint</NavItem>
            <NavItem onClick={()=>Navigate('/token-sale')} >Token Sale</NavItem>
            <NavItem onClick={() => Navigate('/preparations')}>RoadMap</NavItem>
            <NavItem onClick={() => showPopup()}>show popup</NavItem>
            <NavItem onClick={()=> Navigate('/sponsor')}>Sponsor </NavItem>
            <NavItem onClick={()=> Navigate('/documentations')}>Docs </NavItem>
          </Nav>


          <CallToAction />
        </div>
      </div>
      <div className="flex flex-col justify-start  items-center py-20">
        <div className="flex justify-between ">

          <h3 className="text-left my-5 p-0 border-b border-neutral-900 w-auto">  <span className="m-0 pl-5 text-neutral-400 text-xl">Highest Reward Nfts</span>  </h3>
        </div>


        <span className="m-0 pl-5 text-neutral-400 text-sm">Win up to 1BTC ! each NFT contains claimable cache Rewards ! enjoy 2 utilities in one Art !</span>


        <NftSliderCat2 />
        <ButtonPrimary className="w-auto">View More</ButtonPrimary>
      </div>

      <Cta />
      <EarnHome />
      <SectionWhy />
      <SectionToken />
      <Sponsors />

    </>
  )
}



export default Home