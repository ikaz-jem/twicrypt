import { Disclosure } from '@headlessui/react'
import { BsArrowDownCircle } from 'react-icons/bs'




const SingleAccordionTab =(props)=> {
  return (
    <div className="w-full pt-5">
      <div className="mx-auto w-full  rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 pt-1">
<div className='bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-xl p-3   w-auto  relative'>

{
    
 
        
           <Disclosure  defaultOpen={props?.open || false} >
    {({ open }) => (
        <>
        <Disclosure.Button   className="flex w-full max-x-2xl relative justify-between rounded-lg bg-neutral-700 px-4 py-2   text-left text-sm font-medium text-neutral-200 hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
        <div className='flex justify-between w-full pr-5'>
          <span className='font-bold opacity-80 text-white'  >{props?.title}</span>
          <span className='font-bold opacity-80'  >{props?.rightTitle}</span>
        </div>
        
          <BsArrowDownCircle
            className={`${
              open ? 'rotate-180 transform' : ''
            } h-5 w-5 text-purple-400`}
          />
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-neutral-400 text-left" >
          {props?.desc}
{props?.children}
         
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>



}
</div>


        {/* <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <BsArrowDownCircle
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure> */}
      </div>
    </div>
  )
}


export default SingleAccordionTab
