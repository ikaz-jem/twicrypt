
import './style.css'
import CarouselDemo from './demo/Demo'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import { addSlide } from '../../../app/features/carousel/carouselThunks'
import { useDispatch, useSelector } from 'react-redux'
import { fetchedCarouselData } from '../../../app/features/carousel/carouselSlice'


const CarouselSponsor = () => {
  const { address } = useAccount()
  const [ad, setAd] = useState({
    bodyAddress: address,
    name: "solana",
    image: "https://cimg.co/news/119428/317537/solana.jpg",
    link: "https://www.solana.com",
    icon: "https://www.pngall.com/wp-content/uploads/10/Solana-Crypto-Logo-PNG-File.png",
    amount: 1
  })


  const sliderData = useSelector(fetchedCarouselData)


  const handleChange = ({ target }) => {
    const { name, value } = target
    setAd((prev) => (
      {
        ...prev,
        [name]: value
      }
    ))
  }


  const checkDuration = (num) => {
    switch (true) {
      case num >= 0.1 && num < 0.5:
        return 'sponsored us 1 week';
      case num >= 0.5 && num < 1:
        return 'sponsored us 1 month';
      case num >= 1 && num < 5:
        return 'sponsored us 2 month';
      case num >= 5 && num < 10:
        return 'sponsored us 3 month';
      case num >= 10 && num < 30:
        return 'sponsored us 6 month';
      case num >= 30:
        return 'sponsored us 1 year ';
      default:
        return '';
    }
  }

  const dispatch = useDispatch()

  const submit = (e) => {
    e.preventDefault();
    dispatch(addSlide(ad))
    console.log("submited")
    console.log(sliderData)
  }

  const SvgTitle = () => {



    return (
      <>

        <div className="container-xxxxlg ">

        
          <h4 className=" heading bg-dark">Get your Brand on the Main Slider as A sponsor  </h4>
        </div>
      </>
    )
  }


  const RenderForm = () => {


    return (
      <div className='absolute top-0 z-10 '>

        <div className='flex flex-col ml-10 mt-10  rounded-xl border-white border-opacity-10 shadow-2xl bg-black bg-opacity-60 backdrop-blur-sm  py-20 px-10  '>

          <h4 className="heading align-left"> Appear on The Home page Main Slider for 1 year : </h4>
          <p className="paragraph align-left">descriptioniojdioazjdajizjdaoizdo</p>

          <p className="text-white align-left m-0 ">website :</p>
          <input type="text" name='link' placeholder='Project website' onChange={handleChange} className='bg-transparent rounded-lg outline-none  border border-white border-opacity-10 p-2 text-sm text-white focus:bg-black  transition transition-all duration-700 ' />

          <p className="paragraph align-left">image :</p>
          <input type="text" name='image' placeholder='image link' onChange={handleChange} className='bg-transparent rounded-lg outline-none  border border-white border-opacity-10 p-2 text-sm text-white focus:bg-black  transition transition-all duration-700 ' />

          <p className="paragraph align-left">Brand Name :</p>
          <input type="text" name='name' placeholder='ex : snadbox , binance' onChange={handleChange} className='bg-transparent rounded-lg outline-none  border border-white border-opacity-10 p-2 text-sm text-white focus:bg-black  transition transition-all duration-700 ' />

          <p className="paragraph align-left">icon link:</p>
          <input type="text" name='icon' placeholder='icon link' onChange={handleChange} className='bg-transparent rounded-lg outline-none  border border-white border-opacity-10 p-2 text-sm text-white focus:bg-black  transition transition-all duration-700 ' />


          <p className="paragraph align-left">BNB amount:</p>
          <input type="text" name='amount' placeholder='2.5 BNB' onChange={handleChange} className='bg-transparent rounded-lg outline-none  border border-white border-opacity-10 p-2 text-sm text-white focus:bg-black  transition transition-all duration-700 ' />

          <button className='button button--hollow my-10' onClick={submit}> sponsor now</button>
          <p className='paragraph'> {checkDuration(ad.amount)}  </p>
        </div>
      </div>

    )
  }




  return (

    <>
    

      <div className="index__body bg-light light-ball">
        <RenderForm />

        {/* 
      <div className='flex justify-center items-center border'>


      </div> */}

        {/* <div className="grid__column grid__column--3 space space--xlarge  " dataref="fadereveal[el]"> */}


  <SvgTitle/>
        <div className='flex  items-center justify-between flex-wrap  lg:flex-nowrap  relative  flex-col '>


          <div className=' w-full flex items-center justify-center  m-1'>

          </div>

          <div className='  grid grid-cols-10  m-1 w-full'>

            <div className='col-span-4  w-[20vw]'>
            </div>
            <div className='col-span-6  w-full '>
            col carouzel description something explaine ras l9eli3a
            <CarouselDemo carouselData={ad} />
            </div>




          </div>


        </div>

      </div>
    </>
  )

}

export default CarouselSponsor