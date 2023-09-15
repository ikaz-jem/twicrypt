import { Disclosure } from '@headlessui/react'
import { BsArrowDownCircle } from 'react-icons/bs'


const panelData = [


{

    title: 'What is your refund policy?',
    desc:' If youre unhappy with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked.',
    ul:[

        {
        
            title: 'What is your refund policy?',
            desc:' If youre unhappy with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked.',
            ul:null
        },
        {
        
            title: 'What is your refund policy?',
            desc:' If youre unhappy <h1>bobo<h1/> with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked.',
            ul:null
        },
        {
        
            title: 'What is your refund policy?',
            desc:' If youre unhappy with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked.',
            ul:['item','item','item','item','item','item','item',]
        }
        
        ]
}

]



const AccordionTabs =(props)=> {
  return (
    <div className="w-full pt-5">
      <div className="mx-auto w-full max-w-3xl rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 pt-1">
<div className='bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-xl p-3   w-auto  relative'>

{
    
    props.data?.map((item , index)=>{
        
        return   <Disclosure key={index} defaultOpen={props?.defaultOpen || index<1} >
    {({ open }) => (
        <>
        <Disclosure.Button   className="flex w-full max-x-2xl relative justify-between rounded-lg bg-neutral-700 px-4 py-2 my-1  text-left text-sm font-medium text-neutral-200 hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
          <span className='font-bold opacity-80'  >{item.title}</span>
          <BsArrowDownCircle
            className={`${
                open ? 'rotate-180 transform' : ''
            } h-5 w-5 text-purple-400`}
          />
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-neutral-400 text-left" >
          {item.desc
          }

          {
              item.ul ? 
              <ul className='text-neutral-300' key={index}>

           { item?.ul?.map((li,i)=>{
           return <li className='' key={i}>{li}</li>    
        })}
            </ul> : ''
          }
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>


})

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


export default AccordionTabs
