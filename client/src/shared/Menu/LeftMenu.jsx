import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiNftFill } from "react-icons/ri";
import { AiOutlineArrowDown} from 'react-icons/ai'
import { BsArrowBarDown} from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { setMenuPosition,toggleMintPanel } from "../../app/features/States/StatesSlice";
import logo from '../../media/logo.png'
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

import {  FcDoughnutChart,
  FcBusinessman,
  FcDownLeft,
  FcEmptyTrash,
  FcPortraitMode,
  FcAnswers,
  FcElectronics,
  FcCurrencyExchange,
  FcShop
  ,FcDonate,
  FcIpad,
  FcSafe,

 } from "react-icons/fc";

const  NAVIGATION_DEMO_2 = [
    {
    
    href: "/page-collection-2",
    name: "Twicrypt solutions",
    icon:false,
    image:logo,
    component:"./solutions",
    target:'_self'
   
  },

  {

    href: "/page-collection",
    name: "marketPlace",
    tooltip: "Inbox",
    icon:FcShop,
    component:'./marketplace/all-listings',
    page:'home',
    target:'_self',
   children:[
    {

      href: "/page-collection",
      name: "my nfts",
      tooltip: "Inbox",
      icon:FcIpad,
      component:'/dashboard/marketplace/my-nfts',
      page:'home',
      target:'_self'
     
    },
    {

      href: "/page-collection",
      name: "my listings",
      tooltip: "Inbox",
      icon:FcIpad,
      component:'/dashboard/marketplace/my-listings',
      page:'home',
      target:'_self',
     
    },
    {

      href: "/page-collection",
      name: "all listings",
      tooltip: "Inbox",
      icon:FcIpad,
      component:'/dashboard/marketplace/all-listings',
      page:'home',
      target:'_self'
     
    },
    {

      href: "/page-collection",
      name: "create listing",
      tooltip: "Inbox",
      icon:FcIpad,
      component:'/dashboard/marketplace/create-listing',
      page:'home',
      target:'_self'
     
    },
    {

      href: "/page-collection",
      name: "create auction",
      tooltip: "Inbox",
      icon:FcIpad,
      component:'/dashboard/marketplace/create-auction',
      page:'home',
      target:'_self'
     
    },
   ]


  },
  {
  
    href: "/page-collection",
    name: "virtual Mining (vm)",
    tooltip: "Inbox",
    icon:FcSafe,
    component:'/dashboard/auto-p2e?id=mining-session',
    page:'home',
    target:'_self'
   
  },
  // {

  //   href: "/page-collection",
  //   name: "launchpad",
  //   tooltip: "Inbox",
  //   icon:FcIpad,
  //   component:'./launchpad',
  //   page:'home',
   
  // },
  {
    name: "earn",
    tooltip: "Inbox",
    icon:FcDonate,
    component:"/dashboard/winning-nfts",
    page:'home',
    target:'_self',
    children:[
      {
        name: "mint & Win !",
        tooltip: "Inbox",
        icon:FcIpad,
        component:'/dashboard/mint',
        page:'home',
        target:'_self'
       
      },
      {
        name: "claim nft reward",
        tooltip: "Inbox",
        icon:FcIpad,
        component:'/dashboard/claim',
        page:'home',
        target:'_self'
       
      },
      {
        name: "check winning nfts",
        tooltip: "Inbox",
        icon:FcIpad,
        component:'/dashboard/winning-nfts',
        page:'home',
        target:'_self'
       
      },
  {
        name: "become partner",
        tooltip: "Inbox",
        icon:FcIpad,
        component:'/dashboard/mint',
        page:'home',
        target:'_self'
       
      },

      {
  

        name: "token staking",
        tooltip: "Inbox",
        icon:FcIpad,
        component:'',
        page:'home',
        comingSoon:true,
        
       
      },
      {
  

        name: "nft staking",
        tooltip: "Inbox",
        icon:FcIpad,
        component:'',
        page:'home',
        comingSoon:true,
       
      },
      {
  
        href: "/page-collection",
        name: "lottery",
        tooltip: "Inbox",
        icon:FcIpad,
        component:'/dashboard/lottery',
        page:'./lottery',
        comingSoon:true,
       
      },
     ]
   
  },
  {
    
    href: "/inbox",
    name: "claim rewards",
    tooltip: "Inbox",
    icon:FcCurrencyExchange,
    
    component:'/dashboard/claim',
    page:'stats',
    target:'_self'
  },
  

  
  // {
    
  //   href: "/page-collection-2",
  //   name: "Community",
  //   tooltip: "Inbox",
  //   icon:FcElectronics,
  //   component:'./community'
  // },
  // {
    
  //   href: "/inbox",
  //   name: "Withdraw",
  //   tooltip: "Inbox",
  //   icon:FcDownLeft,
  //   component:"./withdraw"
  // },


  {
    
    href: "/page-collection-2",
    name: "docs & Support",
    tooltip: "Inbox",
    icon:FcAnswers,
    component:"./support",
    target:'_self',

  },
  
];






const LeftMenu= ({
  onClickClose  
}) => {
  const [width,setWidth]=useState({
    class: "w-20 ",
    isOpen: false
  })

const dispatch = useDispatch()
const {address}= useSelector(state=>state.session)
  const data = NAVIGATION_DEMO_2
  
  const toggleMenu = ()=>{
    width.class == "w-20" ? setWidth({isOpen: true,class:'w-[50vw] md:w-[30vw] sm:w-[25vw] lg:w-[25vw] xl:w-[15vw]'}) : setWidth({isOpen: false,class:'w-20'})
  }

const ChangePosition =()=>dispatch(setMenuPosition(false))
const toggleMint =()=>dispatch(toggleMintPanel())

const burgerButton = ()=>{
return  <button
 onClick={()=> toggleMenu()}
  className="p-2.5  rounded-lg text-pink-600 hover:text-white focus:outline-none flex items-center justify-center"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
</button>
}


  const _renderMenuChild = (
    item,
    itemClass = " pl-3 text-neutral-200 font-medium "
  ) => {
    return (
      <ul className="nav-mobile-sub-menu pl-6 pb-1 text-base text-left">
        {item.children?.map((i, index) => (
          <Disclosure key={i.href + index} as="li">
            <NavLink
              to={{
                pathname: i.component || undefined,
              }}
              target={i.target}
              className={({ isActive }) =>
                `flex text-xs font-bold rounded-lg hover:bg-neutral-800 mt-0.5 pr-4  border-b border-neutral-900${itemClass} ${
                  isActive ? "text-secondary bg-none " : ""
                }`
              }
            >
              <span
                className={`py-2.5 ${!i.children ? " w-full flex justify-between" : ""}`}
                onClick={onClickClose}
              >
                {i.name }
                {i.comingSoon && <span className="bg-yellow-500 rounded-full text-xs  px-2 text-black ">coming soon</span>}
              </span>
              {i.children && (
                <span
                  className="flex items-center flex-grow"
                  onClick={(e) => e.preventDefault()}
                >
                  <Disclosure.Button
                    as="span"
                    className="flex justify-end flex-grow"
                  >
                    <AiOutlineArrowDown
                      className="ml-2 h-4 w-4 text-pink-800 "
                      aria-hidden="true"
                    />
                   
                  </Disclosure.Button>
                </span>
              )}
            </NavLink>
            {i.children && (
              <Disclosure.Panel>
                {_renderMenuChild(
                  i,
                  "pl-3 text-slate-400 "
                )}
              </Disclosure.Panel>
            )}
          </Disclosure>
        ))}
      </ul>
    );
  };

  const _renderItem = (item, index) => {
    return (
       <Disclosure
        key={index}
        as="li"
        className={`text-white `}
      >
        <NavLink
          className={({ isActive }) =>
            `flex w-full items-center py-2.5 px-4 font-medium   tracking-wide text-sm   transition-all ease-out duration-200 hover:bg-neutral-500  rounded-lg ${isActive ? "text-primary  rounded-2xl bg-neutral-200 text-black"  : "bg-neutral-900 border-b border-neutral-700"}`}
          to={item?.component}
          
          data-tooltip-id="MenuTooltip"
          data-tooltip-hidden={width.isOpen}
          data-tooltip-content={item.tooltip}
          data-tooltip-variant={ 'light' }
          data-tooltip-offset={15}
        >
          <span
            className={!item?.children && width.isOpen ? "flex gap-4 w-full" : "flex gap-2 "}
            onClick={onClickClose}
          >
            {item.icon ? <item.icon className={"text-3xl "}/> : <img src={item?.image} className="w-6 h-6"/>  }
            <span className={` opacity-100 transition delay-200 duration-100 ${width?.isOpen ? "opacity-100 overflow-x-hidden flex justify-center items-center text-xs" : "opacity-0 overflow-x-hidden"}`}>
         {   width?.isOpen && item?.name}
            </span>
          </span>
          {item?.children && width.isOpen && (
            <span
              className="block flex-grow"
              onClick={(e) => e.preventDefault()}
            >
              <Disclosure.Button
                as="span"
                className="flex justify-end flex-grow"
              >
                <AiOutlineArrowDown
                  className="ml-2 h-6 w-6 text-pink-500 p-1 bg-neutral-800 rounded-full "
                  aria-hidden="true"
                />
                
              </Disclosure.Button>
            </span>
          )}
        </NavLink>
        {item?.children && width?.isOpen&& (
          <Disclosure.Panel>{_renderMenuChild(item)}</Disclosure.Panel>
        )}
      </Disclosure>
    );
  };


 
  return (
    <div className={` overflow-x-none ${width?.class} ${!width.isOpen ?"no-scrollbar " : " overflow-x-hidden " } h-[99vh] py-2 border-r border-neutral-700 border-opacity-40 backdrop-blur-md   transform shadow-r-xl  divide-y-2 divide-neutral-800  transition-all ease-in-out duration-400 delay-100  `}>
      <div className="py-2 px-5 mt-5 ">
       {/* { width.isOpen && <Logo className="w-20 h-20"/>} */}
          <div className= { ` ${!width?.isOpen ? " flex justify-between items-center  transition-all" : "flex justify-end items-center  transition-all"} `}>
        <div className=  { `  "  hover:bg-pink-800  transition rounded-full "} `}>
         {burgerButton()}
        </div>
          </div>
        <div className={`flex ${width?.isOpen && "flex-row"}  mt-5 text-slate-300 text-sm items-center justify-center`}>
          <span>
          <div className={`flex ${!width?.isOpen && "flex-col"} gap-2 mt-5 text-slate-300 text-sm items-center justify-center`}>
<Link to={`/dashboard/account/${address}`} >
        <FcBusinessman className="text-5xl p-2 bg-neutral-800 hover:bg-pink-600 transition-all rounded-full cursor-pointer " /> 
        
</Link>
     

        {/* </ButtonPrimary> */}
        <BsArrowBarDown className="text-5xl p-3 w-10 h-10 bg-neutral-300 text-black hover hover:text-white hover:bg-pink-600 transition-all rounded-full cursor-pointer" onClick={ChangePosition}/> 
      </div>
          </span>

        </div>

      </div>
      <ul className={`flex flex-col bordercontent-center align-center py-6 px-2 gap-1 space-y-1  overflow-y-auto transition-opacity  transform  delay-40  duration-400  ${!width.isOpen ? "opacity-60 overflow-x-hidden" :"opacity-100 overflow-x-hidden"}`} >
        {  data.map(_renderItem)}
       
      </ul>
      <div className={`flex items-center justify-center py-1 px-5 gap-2  ${!width?.isOpen && "flex-col"} py-2 ` }>
        <Link to={'https://x.com/twicrypt'} target="blank">
      <BsTwitterX className="text-2xl hover:text-white text-neutral-700 transition-all cursor-pointer"/>
        </Link>
        <Link to={'https://t.me/twicrypt'} target="blank">
      <FaTelegramPlane className="text-3xl hover:text-white transition-all text-neutral-700 cursor-pointer "/>
        </Link>

      </div>
    </div>
  );
};

export default LeftMenu;
