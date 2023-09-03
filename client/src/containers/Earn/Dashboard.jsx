
import CarouselTransition from "../../shared/transitions/CarouselTransition";
import './style.css';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
import { Outlet } from "react-router-dom";
import QuickMint from "./components/Nfts/QuickMint";

const Dashboard = () => {

    const [show, setShow] = useState(false)
    const [component, setComponent] = useState('home')
    const [userNft, setUserNft] = useState()
    const [showPanel, setShowPanel] = useState(false)

    useEffect(() => {

        // const fetchNFT = async() =>{
        //     const endpoint = 'https://api.opensea.io/v2/chain/ethereum/account/0x21111b0C84E33D2c3aF2EA3E4D851186b9F204C0/nfts?limit=50'
        //     const key = "96522280541248628ae1852268fb8dab"
        // const  headers = {
        //     'accept': 'application/json' ,
        //   'X-API-KEY': key
        // }


        //   const response = await axios.get(endpoint , {headers}).then((res)=> res.data.nfts)
        // console.log(response)
        // setUserNft(response)
        // }


        // fetchNFT()
    }, [])


    // const {id} = useParams();
    const location = useLocation()


    useEffect(() => {
        // location.pathname == '/earn/home' && setComponent('home')
        // location.pathname == '/earn/stats' && setComponent('stats')
        // location.pathname == '/earn/nfts' && setComponent('nfts')

        setShow(false)

        setTimeout(() => {

            setShow(true)

        }, 1000)
        //    id!= undefined && setComponent(id)
    }, [component, location.pathname])


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
            title: "Last News",
            link: 'last-news'
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
            <div className="lg:flex bg-gradient-to-b from-[#111111] to-black bg-opacity-70 relative h-auto w-full  ">

                <div className="h-full lg:z-10 lg:sticky xl:sticky xl:top-22 lg-top-20 overflow-x-none fixed top-0  z-10  ">
                    <Menu show={show}setShowPanel={setShowPanel} />
                </div>
                {/*                         
        <a className="link" onClick={showIndex}> showIndex</a >
    <a className="link" onClick={showTable}> showTable</a > */}
                <div className="flex flex-col gap-0  w-full relative  h-full   container--xxxlarge px-10 pl-28 sm:pl-25 md:pl-24 lg:pl-5  container--center ">
                    {/* {RenderMenu()} */}


                    <MenuTopLinks navigation={topMenuNavigation} />
                    {/* <RenderStats /> */}

                    <SidePanel show={showPanel} setShow={setShowPanel} >
                        <QuickMint setShowPanel={setShowPanel} />
                    </SidePanel >

                    {/* <MenuTransition show={show}> */}

                    <div className="w-full h-auto relative   ">
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