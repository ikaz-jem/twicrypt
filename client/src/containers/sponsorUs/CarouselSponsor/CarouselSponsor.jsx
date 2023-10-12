
import './style.css'
import CarouselDemo from './demo/Demo'
import { useState } from 'react'

import CarouselSponsorForm from './CarouselSponsorForm'
import FormTransition from '../../../shared/transitions/FormTransition'
import CarouselTransition from '../../../shared/transitions/CarouselTransition'



const CarouselSponsor = ({ show, setShow }) => {


  const [ad, setAd] = useState({
    name: null,
    image: null,
    website: null,
    icon: null,
    startsAt:null,
    duration:null,
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
    <div className='  w-full h-full border border-transparent'> 

      <FormTransition show={show}>
        <CarouselSponsorForm show={show} ad={ad} setAd={setAd} />
      </FormTransition>
      </div>

      <div className="light-ball my-20 ">

        {/* 
      <div className='flex justify-center items-center border'>
    
    </div> */}
        {/* <div className="grid__column grid__column--3 space space--xlarge  " dataref="fadereveal[el]"> */}
        <div className='  flex justify-center w-full relative  bg-gradient-to-r from-indigo-900 via-purple-900 to-[#3b002173]  py-10 '>
          <div className='w-[20%] '>
          </div>
          <div className=' w-[80%]   rounded-2xl  border-opacity-30 border border-white py-5 shadow-lg'>
            <button className='button' onClick={() => setShow(show)}> Show on slider</button>
            <p className='text-neutral-200'>
              live demo
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