import { useState } from "react"
import { useDispatch } from "react-redux"
import { useAccount } from "wagmi"
import { addSlide } from "../../../app/features/carousel/carouselThunks"
import { Transition } from "@headlessui/react"
import {TbWorldWww} from 'react-icons/tb'




const SponsorForm = ({show , ad, setAd}) => {
    const dispatch = useDispatch()



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
          dispatch(addSlide(ad))
        
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
          <Transition
      appear
      show={show}
      className={"relative z-10"}
      enter="transition-all duration-700 z-0"
      enterFrom="opacity-0 translate-x-40 z-10"
      enterTo="opacity-100 translate-x-0 z-10"
      leave="transition-all duration-700 z-10"
      leaveFrom="opacity-100 translate-x-0 z-10"
      leaveTo="opacity-0 translate-x-20 z-0"
    >

    
          <div className='absolute top-0 z-10 '>
    
            <div className='flex flex-col ml-10 mt-10  rounded-xl border-white border-opacity-10 shadow-2xl bg-black bg-opacity-60 backdrop-blur-sm  py-20 px-10 '>
    

    
    
              <h4 className="heading align-left"> Appear on The Home page Main Slider for 1 year : </h4>
              <p className="text-white text-sm p-0 m-1 align-left">descriptioniojdioazjdajizjdaoizdo</p>
    
       
          <p className="text-white text-sm p-0 m-1 align-left m-0 ">website :</p>
         <div className="my-1 flex">
          <span className="inline-flex items-center px-1.5 rounded-l-2xl  bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
          <TbWorldWww/>
          </span>
          <input
            type='text'
            className="w-full bg-transparent rounded-r-lg outline-none  border border-white border-opacity-30 p-2 text-sm text-white focus:bg-black  transition transition-all duration-700 '"
            placeholder='Project website'
            name='link' 
            onChange={handleChange}
            />

        </div>
       

          <p className="text-white text-sm p-0 m-1 align-left m-0 ">image :</p>
         <div className="my-1 flex">
          <span className="inline-flex items-center px-1.5 rounded-l-2xl  bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
          <TbWorldWww/>
          </span>
          <input
            type='text'
            className="w-full bg-transparent rounded-r-lg outline-none  border border-white border-opacity-30 p-2 text-sm text-white focus:bg-black  transition transition-all duration-700 '"
            placeholder='image link'
            name='image' 
            onChange={handleChange}
            />

        </div>
       
       

          <p className="text-white text-sm p-0 m-1 align-left m-0 ">Brand Name :</p>
         <div className="my-1 flex">
          <span className="inline-flex items-center px-1.5 rounded-l-2xl  bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
          <TbWorldWww/>
          </span>
          <input
            type='text'
            className="w-full bg-transparent rounded-r-lg outline-none  border border-white border-opacity-30 p-2 text-sm text-white focus:bg-black  transition transition-all duration-700 '"
            placeholder='Project name or brand name'
            name='name' 
            onChange={handleChange}
            />

        </div>
       
       
       

          <p className="text-white text-sm p-0 m-1 align-left m-0 ">icon link:</p>
         <div className="my-1 flex">
          <span className="inline-flex items-center px-1.5 rounded-l-2xl  bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
          <TbWorldWww/>
          </span>
          <input
            type='text'
            className="w-full bg-transparent rounded-r-lg outline-none  border border-white border-opacity-30 p-2 text-sm text-white focus:bg-black  transition transition-all duration-700 '"
            placeholder='link to icon or logo'
            name='icon' 
            onChange={handleChange}
            />

        </div>
       
       
       

          <p className="text-white text-sm p-0 m-1 align-left m-0 ">BNB amount:</p>
         <div className="my-1 flex">
          <span className="inline-flex items-center px-1.5 rounded-l-2xl  bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
          <TbWorldWww/>
          </span>
          <input
            type='text'
            className="w-full bg-transparent rounded-r-lg outline-none  border border-white border-opacity-30 p-2 text-sm text-white focus:bg-black  transition transition-all duration-700 '"
            placeholder='amount '
            name='amount' 
            onChange={handleChange}
            />

        </div>
       
       
       
              
              
              
              
              
         
              <button className='button button--hollow my-10' onClick={submit}> sponsor now</button>
              <p className='text-white text-sm p-0 m-1'> {checkDuration(ad.amount)}  </p>
            </div>
          </div>
          </Transition>
    </>    )
      }
    

      export default SponsorForm