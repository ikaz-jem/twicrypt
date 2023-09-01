import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiNftFill } from "react-icons/ri";
import { AiOutlineArrowDown } from 'react-icons/ai'
import { BsArrowBarLeft } from 'react-icons/bs'


import { FcDoughnutChart, FcDownLeft, FcEmptyTrash, FcPortraitMode, FcAnswers, FcElectronics, FcCurrencyExchange } from "react-icons/fc";

const NAVIGATION_DEMO_2 = [
    {

        href: "/page-collection",
        name: "Stats",
        tooltip: "Inbox",
        icon: FcDoughnutChart,
        component: '/earn/stats',
        page: 'home',

    },
    {

        href: "/inbox",
        name: "Daily rewards",
        tooltip: "Inbox",
        icon: FcCurrencyExchange,
        component: './daily-rewards',
        page: 'stats'
    },
    {

        href: "/page-collection-2",
        name: "Nfts",
        tooltip: "/earn/nfts",
        icon: FcEmptyTrash,
        component: "/earn/nfts"
    },

    {

        href: "/page-collection-2",
        name: "Community",
        tooltip: "Inbox",
        icon: FcElectronics,
        component: './community'
    },
    {

        href: "/inbox",
        name: "Withdraw",
        tooltip: "Inbox",
        icon: FcDownLeft,
        component: "./withdraw"
    },
    {

        href: "/page-collection-2",
        name: "Sponsor Us",
        tooltip: "Inbox",
        icon: FcPortraitMode,
        component: "/sponsor"
    },
    {

        href: "/page-collection-2",
        name: "Support",
        tooltip: "Inbox",
        icon: FcAnswers,
        component: "./support"
    },

];






const BottomMenu = ({
    onClickClose, show, setShowPanel, changePosition
}) => {
    const [width, setWidth] = useState({
        class: "h-20 ",
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
    const toggleMenu = () => changePosition(true)


    const BurgerButton = () => {
        return <BsArrowBarLeft
            onClick={() => toggleMenu()}
            className="text-5xl p-3 w-10 h-10 bg-neutral-300 text-black hover hover:text-white hover:bg-pink-500 transition-all rounded-full cursor-pointer"
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
        </BsArrowBarLeft>
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
                                `flex text-sm rounded-lg hover:bg-neutral-800 mt-0.5 pr-4 ${itemClass} ${isActive ? "text-secondary bg-none " : ""
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
                className={`text-white flex gap-2`}
            >
                <NavLink
                    className={({ isActive }) =>
                        `flex w-full items-center py-2.5 px-4 font-medium mx-1  tracking-wide text-sm   transition-all ease-out duration-200 hover:bg-neutral-500  rounded-lg ${isActive ? "text-primary  rounded-2xl bg-neutral-200 text-black" : "bg-neutral-900 border-b border-neutral-700"}`}
                    to={item.component}
                    data-tooltip-id="MenuTooltip"
                    data-tooltip-hidden={width.isOpen}
                    data-tooltip-content={item.tooltip}
                    data-tooltip-variant={'light'}
                    data-tooltip-offset={15}
                >
                    <span
                        className={!item.children && "flex gap-4 w-full"}
                        onClick={onClickClose}
                    >
                        {<item.icon className={"text-3xl "} />}
                        <span className={` overflow-x-hidden flex justify-center items-center text-xs`}>
                            {item.name}
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


    //   ${!width.isOpen ?"no-scrollbar " : " overflow-x-hidden " }
    return (


        <React.Fragment>


            <div className={` fixed bottom-0 overflow-hidden h-[8vh]  w-screen  border-t border-neutral-600 backdrop-blur-md  shadow-xl flex justify-center items-center  `}>


                <div className="flex items-center justify-center ">
                            <div className={`   rounded-md m-0 flex items-center justify-center gap-2 `}>
                                <BurgerButton/>
                        <RiNftFill className="text-5xl p-2  bg-neutral-800 text-white hover:bg-pink-500 transition-all rounded-full cursor-pointer " onClick={() => setShowPanel(true)} />
                            </div>

                    <ul className={`flex  items-center justify-center px-2 gap-1 space-y-1/2  overflow-y-auto   overflow-x-hidden`} >
                        {data.map(_renderItem)}
                        
                    </ul>

                </div>
                {/* <div className="flex items-center justify-between py-6 px-5 space-x-2">
   
      </div> */}
            </div>
        </React.Fragment>
    );
};

export default BottomMenu;
