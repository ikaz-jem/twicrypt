
import CarouselTransition from "../../shared/transitions/CarouselTransition";
import './style.css';
import { useEffect } from "react";

import SectionWhy from "../../components/sectionWhy/SectionWhy";

import Menu from "../../shared/Menu/Menu";
import MenuTransition from "../../shared/transitions/MenuTransition";
import MenuTopLinks from "./components/MenuTopLink/MenuTopLinks";
import SidePanel from "./components/SidePanel/SidePanel";

//Pages components 
import EarnHome from "./components/EarnHome";
import QuickLinks from "./components/QuickLinks";
import TwiWallet from "./components/TwiWallet";
import Link2 from "./components/Link2";
import Nfts from "./components/Nfts/NftDetailPage";
import { Outlet, useLocation } from "react-router-dom";
import QuickMint from "./components/Nfts/QuickMint";
import { useDispatch, useSelector } from "react-redux";
import { setMenuPosition, toggleMintPanel } from "../../app/features/States/StatesSlice";

const Dashboard = () => {

    const dispatch = useDispatch()
    const menuPosition = (data) => dispatch(setMenuPosition(data))
    const togglePanel = () => dispatch(toggleMintPanel())
    
    const showPanel = useSelector(state => state.states.showMintPanel)
    const width = window.innerWidth
const location = useLocation()


    useEffect(() => {
        width <= 1250 && menuPosition(true)
    }, [width, location.pathname])


    const topMenuNavigation = [
        {
            title: "NFTs",
            link: 'nfts'
        },
        {
            title: "Token Sale",
            link: 'token-sale'
        },
        {
            title: "Mint Nfts",
            link: 'mint'
        },
        {
            title: "My Wallet",
            link: 'stats'
        },
        {
            title: "auto P2E",
            link: 'auto-p2e'
        },
        {
            title: "MarketPlace",
            link: 'marketplace'
        },

    ]

    const RenderStats = () => {
        const stats = [
            { id: 1, name: 'Up to 1BTC in Random Nfts', value: '300k$+ Rewards' },
            { id: 2, name: 'Assets under holding', value: '$119 trillion' },
            { id: 3, name: 'New users annually', value: '46,000' },
            { id: 3, name: 'New users annually', value: '46,000' },
        ]
        return (
            <div className="bg-slate-300 py-5 sm:py-2 rounded-md">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-5 gap-y-5 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-0">
                                <dt className="text-base  text-gray-600">{stat.name}</dt>
                                <dd className="order-first text-lg font-semibold tracking-tight text-gray-900 sm:text-lg">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        )
    }




    const Components = {
        'home': <EarnHome />,
        'stats': <TwiWallet />,
        2: <QuickLinks />,
        3: <Link2 />,
        'sectionWhy': <SectionWhy />,
        'nfts': <Nfts />
    }


    return (
        <>
            <div className="lg:flex bg-gradient-to-b from-[#111111] to-black bg-opacity-70 relative h-auto w-full   ">

                <div className="h-full lg:z-10 lg:sticky xl:sticky xl:top-22 lg-top-20 overflow-x-none fixed top-0  z-10  ">
                    <Menu />
                </div>
                {/*                         
        <a className="link" onClick={showIndex}> showIndex</a >
    <a className="link" onClick={showTable}> showTable</a > */}
                <div className="flex  flex-col w-full h-full pl-20  md:pl-18 lg:pl-0">
                    {/* {RenderMenu()} */}


                    <MenuTopLinks navigation={topMenuNavigation} />
                    {/* <RenderStats /> */}

                    <SidePanel show={showPanel} togglePanel={togglePanel} >
                        <QuickMint togglePanel={togglePanel} />
                    </SidePanel >

                    {/* <MenuTransition show={show}> */}
                    {/* flex flex-col gap-0  w-full relative  h-full   container--xxxlarge px-10 pl-28 sm:pl-25 md:pl-24 lg:pl-5  container--center  */}
                    <div className="w-full h-auto relative lg:px-10   ">
                        <Outlet />
                        {/* {Components[component]} */}
                        {/* <Routes>

                                <Route  path={'/5'} element={<EarnHome setComponent={setComponent} />} />
                                <Route  path={'./'} element={<TwiWallet />} />
                                </Routes> */}
                        {/* {Component} */}
                    </div>

                    {/* </MenuTransition> */}

                </div>
            </div>
            {/* <SectionWhy/> */}
        </>
    )

}


export default Dashboard