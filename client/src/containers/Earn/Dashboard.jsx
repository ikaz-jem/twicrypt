
import './style.css';
import { useEffect } from "react";

import SectionWhy from "../../components/sectionWhy/SectionWhy";
import MetaTags from 'react-meta-tags';


import Menu from "../../shared/Menu/Menu";
import MenuTopLinks from "./components/MenuTopLink/MenuTopLinks";
import SidePanel from "./components/SidePanel/SidePanel";

//Pages components 
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
        // {
        //     title: "NFTs",
        //     link: 'nfts'
        // },
        {
            title: "Mint Nfts",
            link: 'mint'
        },
        {
            title: "auto P2E",
            link: 'auto-p2e?id=mining-session'
        },
        {
            title: "MarketPlace",
            link: 'marketplace'
        },
        {
            title: "Gallery",
            link: '/gallery'
        },
        {
            title: "Claim Reward",
            link: 'claim'
        },
        {
            title: "winning nfts",
            link: 'winning-nfts'
        },

    ]
    return (
        <>



<MetaTags>
            <title>user ffff Dashboard</title>
            <meta name="description" content="user vbvv dashboard" />
            <meta property="og:title" content="title" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>



            <div className="lg:flex bg-gradient-to-b from-[#111111] to-black bg-opacity-70 relative h-auto w-full   ">

                <div className="h-full lg:z-10 lg:sticky xl:sticky xl:top-5 lg-top-8  overflow-x-none fixed top-10  z-10  ">
                    <Menu />
                </div>
               
                <div className="flex  flex-col w-full h-full pl-20  md:pl-18 lg:pl-0">

                    <MenuTopLinks navigation={topMenuNavigation} />

                    <SidePanel show={showPanel} togglePanel={togglePanel} >
                        <QuickMint togglePanel={togglePanel} />
                    </SidePanel >

                    <div className="w-full h-auto relative lg:px-10   ">
                        <Outlet />

                    </div>


                </div>
            </div>
            {/* <SectionWhy/> */}
        </>
    )

}


export default Dashboard