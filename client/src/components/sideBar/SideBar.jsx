import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { FcInvite } from "react-icons/fc";
import { AiOutlineArrowDown} from 'react-icons/ai'


import {  FcDoughnutChart, FcDownLeft, FcEmptyTrash, FcPortraitMode } from "react-icons/fc";



const  NAVIGATION_DEMO_2 = [
  {

    href: "/inbox",
    name: "Dashboard",
    tooltip: "Inbox",
    icon:FcDownLeft
  },
  {

    href: "/page-collection",
    name: "Women",
    tooltip: "Inbox",
    icon:FcDoughnutChart
  },
  {

    href: "/page-collection-2",
    name: "Beauty",
    tooltip: "Inbox",
    icon:FcEmptyTrash
  },

  {

    href: "/page-collection-2",
    name: "Sport",
    tooltip: "Inbox",
    icon:FcPortraitMode
  },
  
];






const SideBar= ({
  onClickClose,
}) => {
  const [width,setWidth]=useState({
    class: "w-20 ",
    isOpen: false
  })



  const data = NAVIGATION_DEMO_2
  
  const toggleMenu = ()=>{
    width.class == "w-20" ? setWidth({isOpen: true,class:'w-[30vh] '}) : setWidth({isOpen: false,class:'w-20'})
  }
const burgerButton = ()=>{
return  <button
 onClick={()=> toggleMenu()}
  className="p-2.5  rounded-lg text-neutral-300 focus:outline-none flex items-center justify-center"
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
                  isActive ? "text-secondary " : ""
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
            `flex w-full items-center justify-center py-2.5 px-4 z-max font-medium  uppercase tracking-wide text-sm  transition transition-all ease-out duration-200 hover:bg-slate-700 rounded-lg ${isActive ? "text-primary  rounded-2xl bg-neutral-200 text-black"  : "bg-slate-800"
}`
          }
          to={{
            pathname: item.href || undefined,
          }}
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
            <span className={` opacity-100 transition delay-200 duration-100 ${width.isOpen ? "opacity-100 overflow-x-hidden" : "opacity-0 overflow-x-hidden"}`}>
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
    <div className={`overflow-x-hidden ${width.class} ${!width.isOpen ?"no-scrollbar" : "overflow-y-none overflow-x-hidden " } h-[99vh] py-2  backdrop-blur-md   transform shadow-r-xl  divide-y-2 divide-neutral-800 transition transition-all ease-in-out duration-400 delay-100 `}>
   
      <div className="py-6 px-5 ">
       {/* { width.isOpen && <Logo className="w-20 h-20"/>} */}
        <div className="flex flex-col mt-5 text-slate-300 text-sm">
          <span>
          <div className={"" }>
        <FcInvite className="text-3xl"/>   {   width.isOpen && 'Compose' }
        {/* </ButtonPrimary> */}
      </div>
          </span>

          <div className="flex justify-between items-center mt-4">
          </div>
        </div>
        <span className="absolute right-2 top-2 p-1 hover:bg-slate-500 transition rounded-md ">
         {burgerButton()}
        </span>

      </div>
      <ul className={`flex flex-col content-center align-center py-6 px-2 space-y-1 transition overflow-y-auto transition-opacity  transform  delay-40  duration-400  ${!width.isOpen ? "opacity-80 overflow-x-hidden" :"opacity-100 overflow-x-hidden"}`} >
        {  data.map(_renderItem)}
       
      </ul>
      <div className="flex items-center justify-between py-6 px-5 space-x-2">
   
      </div>
    </div>
  );
};

export default SideBar;
