
import './style.css'
import CarouselDemo from './demo/Demo'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { addSlide } from '../../../app/features/carousel/carouselThunks'
import { useDispatch, useSelector } from 'react-redux'
import { fetchedCarouselData } from '../../../app/features/carousel/carouselSlice'
import { Transition } from '@headlessui/react'
import SponsorForm from './SponsorForm'


const CarouselSponsor = () => {

  const [show, setShow] = useState(false)
  const { address } = useAccount()
  const [ad, setAd] = useState({
    bodyAddress: address,
    name: null,
    image: null,
    link: null,
    icon: null,
    amount: 0
  })
  

  useEffect(() => {
    setShow(true)
  }, [])

  const SvgTitle = () => {


    return (
      <>

        <div className="container-xxxxlg ">


          <h4 className=" heading bg-dark">Get your Brand on the Main Slider as A sponsor  </h4>
        </div>
      </>
    )
  }






  return (

    <>


      <SponsorForm show={show} ad={ad} setAd={setAd} />
      <div className="index__body bg-light light-ball">

        {

          <button className='button' onClick={() => setShow(!show)}> toggle form</button>


        }


        {/* 
      <div className='flex justify-center items-center border'>


      </div> */}

        {/* <div className="grid__column grid__column--3 space space--xlarge  " dataref="fadereveal[el]"> */}


        <SvgTitle />
        <div className='flex  items-center justify-between flex-wrap  lg:flex-nowrap  relative  flex-col '>


          <div className=' w-full flex items-center justify-center  m-1'>

          </div>

          <div className='  grid grid-cols-10  m-1 w-full'>

            <div className='col-span-4  w-[20vw]'>
            </div>
            <div className='col-span-6  w-full '>
              col carouzel description something explaine ras l9eli3a
              <Transition
                appear
                className="z-0 "
                show={show}
                enter="transition-all duration-700 z-0"
                enterFrom="opacity-0 translate-y-60 z-0"
                enterTo="opacity-100 translate-y-0 z-0"
                leave="transition-all duration-150 z-0"
                leaveFrom="opacity-100 translate-x-0 z-0"
                leaveTo="opacity-0 translate-x-20 z-0"
              >
                <CarouselDemo carouselData={ad} />
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default CarouselSponsor