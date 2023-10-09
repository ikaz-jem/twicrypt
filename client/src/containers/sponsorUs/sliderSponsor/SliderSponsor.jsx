
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
    bodyAddress: address,
    name: null,
    image: null,
    link: null,
    icon: null,
    amount: 0
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

<FormTransition show={show}>
      <SliderSponsorForm show={show} ad={ad} setAd={setAd} />
</FormTransition>

      <div className=" bg-light light-ball   ">

        {
//index__body bg-light light-ball 
            
            
        }


        {/* 
      <div className='flex justify-center items-center border'>
      
      
    </div> */}

        {/* <div className="grid__column grid__column--3 space space--xlarge  " dataref="fadereveal[el]"> */}



    

          <div className='  flex justify-center w-full relative aa py-10  '>

            <div className='w-[30%] '>
                                                      
             </div>

            <div className=' w-[50%]   rounded-2xl  border-opacity-30 border border-white py-5 shadow-lg '>

    <button className='button' onClick={() => setShow(!show)}> Main Cazousel</button>
                <p className='text-gray-400'>Sponsor us and get on twicrypt for long periods even lifetime ! ... </p>
              
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