import { Tab } from '@headlessui/react'
import { NavLink, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../../../app/features/MarketPlace/MarketplaceSlice'
import { useEffect, useState } from 'react'
import { setMiningPage } from '../../../../app/features/mining/MiningSlice'
export const  FilterData = ([

  
  
  {
    tab:'Mining Session',
    url:"#",
    params:'mining-session'
    
  },
  {
    tab:'My Bank',
    url:'',
        params:'my-bank'

    
  },
  {
    tab:'My-Nfts',
    url:'',
        params:'my-nft'

  },
  {
    tab:'profit calculator',
    url:'',
        params:'profit-calculator'

  }
  
])

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const MiningMenu=({page})=> {
  
  let [searchParams, setSearchParams] = useSearchParams();
useEffect(()=>{
setSearchParams({id:'mining-session'})
},[])




  const activeTab = searchParams.get('id')

const dispatch = useDispatch()
const setComponent = (data)=>dispatch(setMiningPage(data))


const setNftFilter = (item)=> dispatch(setFilter(item))
 
    const handleSelect = (item,e)=>{
      e.preventDefault()
setSearchParams({id:item})
setComponent(item)

    }


  return (
    <div className="  container--xxlarge container--center  mx-auto ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-white/5 py-1 flex-wrap lg:flex-nowrap md:flex-nowrap w-auto  ">
          {FilterData.map((tab,i) => (
            <NavLink
            onClick={(e)=>handleSelect(tab?.params ,e)}
              to={`${tab.url}`}
              key={i+'nav'}
              // onClick={()=>  handleClickTab(tab)}
              className={({ isActive }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-neutral-200  h-full',
                'ring-white ring-opacity-60 ',
               activeTab == tab.params 
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
      
      </Tab.Group>
    </div>
  )
}


export default MiningMenu

