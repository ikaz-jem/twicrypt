import { Tab } from '@headlessui/react'
import { NavLink } from 'react-router-dom'
import { FilterData } from './FilterData'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../../app/features/MarketPlace/MarketplaceSlice'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TabFilter=({page,setSearchParams})=> {

const {chain} = useSelector(state=>state.marketPlace.nftFilter)
const dispatch = useDispatch()

const setNftFilter = (item)=> dispatch(setFilter(item))
 
    const handleChangeNftChain = (val,e) => {
      if (val.url ==1){
  e.preventDefault()
        console.log('clicked tab 1')
      }else {
        e.preventDefault()
      setSearchParams((prev) => ({
        ...prev,
        chain: val
      }));

    setNftFilter({chain:val})  }
      }
 


  return (
    <div className=" p-3 container--xxlarge container--center  mx-auto ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-white/5 p-1 flex-wrap lg:flex-nowrap md:flex-nowrap w-auto  ">
          {FilterData.map((tab,i) => (
            <NavLink
              to={`/earn/marketplace/${tab.url}`}
              key={i+'nav'}
              // onClick={()=>  handleClickTab(tab)}
              className={({ isActive }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-neutral-200  h-full',
                'ring-white ring-opacity-60 ',
                isActive
                ? 'bg-neutral-300 text-neutral-800 '
                : 'text-black hover:bg-pink-600/[0.52] hover:text-white'
                )
              }
              >
              <span key={'s-'+i} className='w-full h-full'>
              {tab.tab}
              </span>
            </NavLink>



              
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">

          { FilterData.map((tab,i)=> tab?.links && tab?.url === page && <Tab.Panel
              key={'p'+i}
              className={classNames(
                'rounded-xl bg-transparent ',
                ''
              )}
            >
              <ul>
             
                  <li
                    key={'p'+i}
                    className="relative rounded-md py-2 ">

                    <ul className="mt-1 flex gap-5 space-x-1 text-xs flex-wrap font-semibold leading-2 text-gray-500 justify-center border-b border-neutral-800 rounded-xl pb-2">
                  {  tab?.links.map((list,i)=> list!== "" &&<NavLink  
                    
                    className={({ isActive }) =>
                     classNames(
                       'w-auto rounded-lg py-2 px-5 text-xs  leading-2 text-neutral-200  h-full',
                       'ring-white ring-opacity-60 ',
                          chain === list.val
                       ? 'bg-pink-600 text-white '
                       : 'text-black hover:bg-neutral-200/[0.52] hover:text-white'
                       )
                     }
                    key={'tab-'+i} 
                   onClick={(e)=>handleChangeNftChain(list.val ,e)} >{list.title}</NavLink>
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

