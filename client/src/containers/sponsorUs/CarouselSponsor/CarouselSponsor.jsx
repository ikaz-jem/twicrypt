
import './style.css'
import CarouselDemo from './demo/Demo'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { addSlide } from '../../../app/features/carousel/carouselThunks'
import { useDispatch, useSelector } from 'react-redux'
import { fetchedCarouselData } from '../../../app/features/carousel/carouselSlice'
import { Transition } from '@headlessui/react'
import SponsorForm from './SponsorForm'
import FormTransition from '../../../shared/transitions/FormTransition'
import CarouselTransition from '../../../shared/transitions/CarouselTransition'



const CarouselSponsor = ({show,setShow}) => {


  const { address } = useAccount()
  const [ad, setAd] = useState({
    bodyAddress: address,
    name: null,
    image: null,
    link: null,
    icon: null,
    amount: 0
  })
  

  // useEffect(() => {
  //   setShow(true)
  // }, [])

  const SvgTitle = () => {


    return (
      <>
        <div className="container-xxxxlg  ">
          <h4 className=" heading bg-dark">Get your Brand on the Main Slider as A sponsor  </h4>
        </div>
      </>
    )
  }






  return (

    <>

<FormTransition show={show}>
      <SponsorForm show={show} ad={ad} setAd={setAd} />
</FormTransition>

      <div className=" bg-light light-ball hero">

        {

          
          
        }


        {/* 
      <div className='flex justify-center items-center border'>
      
      
    </div> */}

        {/* <div className="grid__column grid__column--3 space space--xlarge  " dataref="fadereveal[el]"> */}


<div className='  flex justify-center w-full relative  aa py-10 '>

        <div className='w-[20%] '>
          </div>

            <div className=' w-[80%]   rounded-2xl  border-opacity-30 border border-white py-5 shadow-lg'>

            
    <button className='button' onClick={() => setShow(show)}> Show on slider</button>
            <p className='text-gray-400'>
              col carouzel description something explaine ras l9eli3a
            </p>
            <div className='w-full'>

              <CarouselTransition show={show}>
                <CarouselDemo carouselData={ad} />
              </CarouselTransition>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default CarouselSponsor