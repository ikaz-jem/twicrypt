import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiNftFill } from "react-icons/ri";
import { AiOutlineArrowDown} from 'react-icons/ai'
import { BsArrowBarDown} from 'react-icons/bs'


import {  FcDoughnutChart, FcDownLeft, FcEmptyTrash, FcPortraitMode,FcAnswers,FcElectronics,FcCurrencyExchange } from "react-icons/fc";

const  NAVIGATION_DEMO_2 = [
  {

    href: "/page-collection",
    name: "Stats",
    tooltip: "Inbox",
    icon:FcDoughnutChart,
    component:'/earn/stats',
    page:'home',
   
  },
  {
    
    href: "/inbox",
    name: "Daily rewards",
    tooltip: "Inbox",
    icon:FcCurrencyExchange,
    component:'./daily-rewards',
    page:'stats'
  },
  {
    
    href: "/page-collection-2",
    name: "Nfts",
    tooltip: "/earn/nfts",
    icon:FcEmptyTrash,
    component:"/earn/nfts"
  },
  
  {
    
    href: "/page-collection-2",
    name: "Community",
    tooltip: "Inbox",
    icon:FcElectronics,
    component:'./community'
  },
  {
    
    href: "/inbox",
    name: "Withdraw",
    tooltip: "Inbox",
    icon:FcDownLeft,
    component:"./withdraw"
  },
  {
    
    href: "/page-collection-2",
    name: "Sponsor Us",
    tooltip: "Inbox",
    icon:FcPortraitMode,
    component:"/sponsor"
  },
  {
    
    href: "/page-collection-2",
    name: "Support",
    tooltip: "Inbox",
    icon:FcAnswers,
    component:"./support"
  },
  
];






const LeftMenu= ({
  onClickClose,show ,setShowPanel ,changePosition
}) => {
  const [width,setWidth]=useState({
    class: "w-20 ",
    isOpen: false
  })

const navigate = useNavigate()


// const handleChangePage = async (item,e)=> {
// e.preventDefault()

// if(component == item.page) {
//   return null 
// } else 
//  await setShow(false)
//  setTimeout(()=>{
//  setComponent(item.page)
//  setShow(true)
//  navigate(item.component)

//  },500)


// }




  const data = NAVIGATION_DEMO_2
  
  const toggleMenu = ()=>{
    width.class == "w-20" ? setWidth({isOpen: true,class:'w-[50vw] md:w-[30vw] sm:w-[25vw] lg:w-[25vw] xl:w-[15vw]'}) : setWidth({isOpen: false,class:'w-20'})
  }

const ChangePosition =()=> changePosition(false)

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
      <ul className="nav-mobile-sub-menu pl-6 pb-1 text-base">
        {item.children?.map((i, index) => (
          <Disclosure key={i.href + index} as="li">
            <NavLink
              to={{
                pathname: i.href || undefined,
              }}
              className={({ isActive }) =>
                `flex text-sm rounded-lg hover:bg-neutral-800 mt-0.5 pr-4 ${itemClass} ${
                  isActive ? "text-secondary bg-none " : ""
                }`
              }
            >
              <span
                className={`py-2.5 ${!i.children ? "block w-full" : ""}`}
                onClick={onClickClose}
              >
                {i.name}
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
                      className="ml-2 h-4 w-4 text-slate-500"
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
          to={item.component}
          data-tooltip-id="MenuTooltip"
          data-tooltip-hidden={width.isOpen}
          data-tooltip-content={item.tooltip}
          data-tooltip-variant={ 'light' }
          data-tooltip-offset={15}
        >
          <span
            className={!item.children && width.isOpen ? "flex gap-4 w-full" : "flex gap-2 "}
            onClick={onClickClose}
          >
            {<item.icon className={"text-3xl "}/>}
            <span className={` opacity-100 transition delay-200 duration-100 ${width.isOpen ? "opacity-100 overflow-x-hidden flex justify-center items-center text-xs" : "opacity-0 overflow-x-hidden"}`}>
         {   width.isOpen && item.name}
            </span>
          </span>
          {item.children && (
            <span
              className="block flex-grow"
              onClick={(e) => e.preventDefault()}
            >
              <Disclosure.Button
                as="span"
                className="flex justify-end flex-grow"
              >
                <AiOutlineArrowDown
                  className="ml-2 h-4 w-4 text-neutral-500"
                  aria-hidden="true"
                />
              </Disclosure.Button>
            </span>
          )}
        </NavLink>
        {item.children && (
          <Disclosure.Panel>{_renderMenuChild(item)}</Disclosure.Panel>
        )}
      </Disclosure>
    );
  };


 
  return (
    <div className={` overflow-x-none ${width.class} ${!width.isOpen ?"no-scrollbar " : " overflow-x-hidden " } h-[99vh] py-2 border-r border-neutral-700 border-opacity-40 backdrop-blur-md   transform shadow-r-xl  divide-y-2 divide-neutral-800  transition-all ease-in-out duration-400 delay-100 `}>
   <button onClick={ChangePosition}>change</button>
      <div className="py-2 px-5 mt-5 ">
       {/* { width.isOpen && <Logo className="w-20 h-20"/>} */}
          <div className= { ` ${!width.isOpen ? " flex justify-between items-center  transition-all" : "flex justify-end items-center  transition-all"} `}>
        <div className=  { `  "  hover:bg-pink-800  transition rounded-full "} `}>
         {burgerButton()}
        </div>
          </div>
        <div className={`flex ${width.isOpen && "flex-row"}  mt-5 text-slate-300 text-sm items-center justify-center`}>
          <span>
          <div className={`flex ${!width.isOpen && "flex-col"} gap-2 mt-5 text-slate-300 text-sm items-center justify-center`}>
        <RiNftFill className="text-5xl p-2 bg-neutral-800 hover:bg-pink-600 transition-all rounded-full cursor-pointer " onClick={()=>setShowPanel(true)}/> 
     

        {/* </ButtonPrimary> */}
        <BsArrowBarDown className="text-5xl p-3 w-10 h-10 bg-neutral-300 text-black hover hover:text-white hover:bg-pink-600 transition-all rounded-full cursor-pointer" onClick={ChangePosition}/> 
      </div>
          </span>

        </div>

      </div>
      <ul className={`flex flex-col bordercontent-center align-center py-6 px-2 gap-1 space-y-1  overflow-y-auto transition-opacity  transform  delay-40  duration-400  ${!width.isOpen ? "opacity-60 overflow-x-hidden" :"opacity-100 overflow-x-hidden"}`} >
        {  data.map(_renderItem)}
       
      </ul>
      <div className="flex items-center justify-between py-6 px-5 space-x-2">
   
      </div>
    </div>
  );
};

export default LeftMenu;
