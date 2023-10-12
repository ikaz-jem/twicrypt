import { useDispatch } from "react-redux"

import { useCreateCarouselAd } from "../hooks/useCreateCarouselAd"


import { BsCalendarDay } from 'react-icons/bs'
import { BiTime } from 'react-icons/bi'
import { AiOutlineLink } from 'react-icons/ai'
import { MdBusinessCenter } from 'react-icons/md'

import { carouselFees } from "../data"


const CarouselSponsorForm
 = ({ show, ad, setAd }) => {
  const dispatch = useDispatch()

  const createAd = useCreateCarouselAd(ad)


  
  const handleChange = ({ target }) => {
    const { name, value } = target
    setAd((prev) => (
      {
        ...prev,
        [name]: value
      }
      ))
    }
    
    const submit = (e) => {
      e.preventDefault();
      // dispatch(addSlide(ad))
      createAd.write()
    }
    
    const fees = carouselFees * Number(ad?.duration)
    const isFieldEmpty = () => {
    
      const {name,image,website,icon,startsAt,duration} = ad;
         const check =  [name,image,website,icon,startsAt,duration];
        let isEmpty = check.includes(null) || check.includes('') ? true : false
        return isEmpty
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


  return (
    <>


    <div className='absolute top-0 z-10  '>

      <div className='flex flex-col ml-5 mt-10  rounded-xl border border-white border-opacity-10 shadow-2xl bg-black bg-opacity-60 backdrop-blur-sm  py-10 px-10 '>




        <h4 className=" align-left py-2 m-0 text-pink-500"> get featured on Home page : </h4>
        <p className="text-white text-sm p-0 m-1 align-left">sponsor twicrypt and get featured on twicrypt home page</p>


        <p className="text-white text-sm p-0 m-1 align-left  ">Brand Name :</p>
        <div className="my-1 flex">
          <span className="inline-flex items-center px-1.5 rounded-l-2xl  bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
            <MdBusinessCenter className="text-black text-lg" />
          </span>
          <input
            type='text'
            className="w-full bg-transparent placeholder:text-purple-300 rounded-r-lg outline-none  border border-white border-opacity-30 p-2 text-sm text-white focus:bg-black  transition-all duration-700 '"
            placeholder='Project name or brand name'
            name='name'
            onChange={handleChange}
          />

        </div>

        <p className="text-white text-sm p-0 m-1 align-left  ">website :</p>
        <div className="my-1 flex">
          <span className="inline-flex items-center px-1.5 rounded-l-2xl  bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
            <AiOutlineLink  className="text-black text-lg" />
          </span>
          <input
            type='text'
            className="w-full bg-transparent placeholder:text-purple-300 rounded-r-lg outline-none  border border-white border-opacity-30 p-2 text-sm text-white focus:bg-black  transition-all duration-700 '"
            placeholder='Project website'
            name='website'
            onChange={handleChange}
          />

        </div>


        <p className="text-white text-sm p-0 m-1 align-left  ">image :</p>
        <div className="my-1 flex">
          <span className="inline-flex items-center px-1.5 rounded-l-2xl  bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
            <AiOutlineLink  className="text-black text-lg" />
          </span>
          <input
            type='text'
            className="w-full bg-transparent placeholder:text-purple-300 rounded-r-lg outline-none  border border-white border-opacity-30 p-2 text-sm text-white focus:bg-black  transition-all duration-700 '"
            placeholder='image link'
            name='image'
            onChange={handleChange}
          />

        </div>






        <p className="text-white text-sm p-0 m-1 align-left ">icon link:</p>
        <div className="my-1 flex">
          <span className="inline-flex items-center px-1.5 rounded-l-2xl  bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
            <AiOutlineLink  className="text-black text-lg"  />
          </span>
          <input
            type='text'
            className="w-full bg-transparent placeholder:text-purple-300 rounded-r-lg outline-none  border border-white border-opacity-30 p-2 text-sm text-white focus:bg-black  transition-all duration-700 '"
            placeholder='link to icon or logo'
            name='icon'
            onChange={handleChange}
          />

        </div>


        <p className="text-white text-sm p-0 m-1 align-left  ">Start time:</p>
        <div className="my-1 flex">
          <span className="inline-flex items-center px-1.5 rounded-l-2xl  bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
            <BsCalendarDay  className="text-black text-lg" />
          </span>
          <input
            type='dateTime-local'
            className="w-full bg-transparent placeholder:text-purple-300 rounded-r-lg outline-none  border border-white border-opacity-30 p-2 text-sm text-purple-300 focus:bg-black  transition-all duration-700 '"
            placeholder='amount '
            name='startsAt'
            onChange={handleChange}
          />
        </div>


        <p className="text-white text-sm p-0 m-1 align-left  ">sponsorship duration / days:</p>
        <div className="my-1 flex">
          <span className="inline-flex items-center px-1.5 rounded-l-2xl  bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
            <BiTime  className="text-black text-lg" />
          </span>
          <input
            type='text'
            className="w-full bg-transparent placeholder:text-purple-300 rounded-r-lg outline-none  border border-white border-opacity-30 p-2 text-sm text-white focus:bg-black transition-all duration-700 '"
            placeholder='days'
            name='duration'
            onChange={handleChange}
          />

        </div>


        <button disabled={ isFieldEmpty()} className='my-5 py-3 bg-blue-500 hover:bg-pink-500 transition-all rounded-xl  disabled:bg-neutral-500 disabled:text-black' onClick={submit}> sponsor now</button>
       {fees < carouselFees && <p className='text-yellow-500  p-0 m-1 text-xs '>sponsor fees : {carouselFees } BNB / 24 hrs</p>}
        <p className='text-white text-sm p-0 m-1'>{fees >0 && "total : "+ fees.toFixed(2) + " BNB" } </p>
      </div>
    </div>
  </>
    )
}


export default CarouselSponsorForm
