
import './style.css'
import { useAccount } from 'wagmi'
import { addSlide } from '../../../app/features/carousel/carouselThunks'
import { useDispatch, useSelector } from 'react-redux'
import { fetchedCarouselData } from '../../../app/features/carousel/carouselSlice'
import { Transition } from '@headlessui/react'
import FormTransition from '../../../shared/transitions/FormTransition'
import CarouselTransition from '../../../shared/transitions/CarouselTransition'
import SliderDemo from './SliderDemo'
import SliderSponsorForm from '../CarouselSponsor/SliderSponsorForm'
import CarouselDemo from '../CarouselSponsor/demo/Demo'
import { useState } from 'react'

const SliderSponsor = ({show,setShow}) => {

  const { address } = useAccount()
  const [ad, setAd] = useState({
    name: null,
    image: null,
    website: null,
    icon: null,
    startsAt:null,
    duration:null,
  })

//   useEffect(() => {
//     setShow(true)
//   }, [])

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
      <SliderSponsorForm show={show} ad={ad} setAd={setAd} />
</FormTransition>
</div>

      <div className=" light-ball my-20  ">

        {
//index__body bg-light light-ball 
            
            
        }


        {/* 
      <div className='flex justify-center items-center border'>
      
      
    </div> */}

        {/* <div className="grid__column grid__column--3 space space--xlarge  " dataref="fadereveal[el]"> */}



    

          <div className='  flex justify-center w-full relative bg-gradient-to-r from-indigo-900 via-purple-900 to-[#3b002173]  py-10  '>

            <div className='w-[30%] '>
                                                      
             </div>

            <div className=' w-[50%]   rounded-2xl  border-opacity-30 border border-white py-5 shadow-lg '>

    <button className='button' onClick={() => setShow(!show)}> Main Cazousel</button>
                <p className='text-neutral-200 z-50'>Sponsor us and get viewed on twicrypt !  </p>
              
              <CarouselTransition show={show}>
                <SliderDemo data={ad} />
              </CarouselTransition>
            </div>
          </div>
        </div>
    </>
  )

}

export default SliderSponsor