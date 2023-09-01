import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TabFilter=({setComponent})=> {
  let [Tabs] = useState([

    {
    tab:'All Nfts',
    url:1,
    links:[
      {
        title:'Create Listing',
        url:''
      },
      {
        title:'Create Listing',
        url:''
      },
      {
        title:'Create Listing',
        url:''
      },
    ]
    },

    {
    tab:'Listings on sale',
    url:2
    },

    {
    tab:'My listings',
    url:3
    },

    {
    tab:'My-Nfts',
    url:4
    }

  ])

  
const Navigate = useNavigate()

  const handleNavigate = (item)=> {
console.log(item)
Navigate(item)
  }

  return (
    <div className=" p-3 container--xxlarge container--center  mx-auto ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-white/5 p-1 flex-wrap lg:flex-nowrap md:flex-nowrap w-auto  ">
          {Tabs.map((tab,i) => (
            <Tab
              key={i}
              onClick={()=>  setComponent(tab.url)}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-neutral-200  h-full',
                  'ring-white ring-opacity-60 ',
                  selected
                    ? 'bg-neutral-300 text-neutral-800 '
                    : 'text-black hover:bg-pink-600/[0.52] hover:text-white'
                )
              }
            >
              <span className='w-full h-full'>

              {tab.tab}
              </span>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">

          { Tabs.map((tab,i)=> tab?.links && <Tab.Panel
              key={'p'+i}
              className={classNames(
                'rounded-xl bg-transparent ',
                ''
              )}
            >
              <ul>
             
                  <li
                    key={'p'+'i'}
                    className="relative rounded-md p-2">
                  

                    <ul className="mt-1 flex gap-5 space-x-1 text-xs  font-normal leading-4 text-gray-500 justify-start">
                  {  tab.links.map((list)=> <li className='hover:text-pink-500 cursor-pointer'>{list.title}</li>
 )}
                    </ul>                
                  </li>
          
              </ul>
            </Tab.Panel> )
       
          }  </Tab.Panels>
      </Tab.Group>
    </div>
  )
}


export default TabFilter

