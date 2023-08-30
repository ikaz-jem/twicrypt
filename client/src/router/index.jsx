import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";


import '../App.css';

import {Toaster} from 'react-hot-toast';

import Home from '../containers/Home'
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Dashboard from "../containers/Dashboard/Dashboard";
import SponsorUs from "../containers/sponsorUs/SponsorUs";
import NftsPage from "../containers/Earn/components/Nfts/NftsPage";
import Nfts from "../containers/Earn/components/Nfts/Nfts";

import Earn from "../containers/Earn/Earn";
import About from "../containers/About";
import Preparations from "../containers/Preparations";
import MyProvider from "../Providers/Web3";
import { userSession } from "../app/features/session/sessionSlice";
import { useSelector } from "react-redux";

import RoutesTransition from '../shared/transitions/RoutesTransition'
import TwiWallet from "../containers/Earn/components/TwiWallet";
import EarnHome from "../containers/Earn/components/EarnHome";
import MintPage from "../containers/Earn/components/Nfts/MintPage";
import Docs from "../containers/Docs/Docs";
import TokenSale from "../containers/TokenSale/TokenSale";
import Blog from "../containers/Blog/Blog";
import Withdraw from "../containers/Withdraw/Withdraw";
import Faq from "../containers/Faq/Faq";
import DailyRewards from "../containers/DailyRewards/DailyRewards";
import Community from "../containers/Community/Community";

const routes = [
    {
        path: '/',
        component: Home,
        requiresAuth: false,
    },
    {
        path: '/sponsor',
        component: SponsorUs,
        requiresAuth: false,
    },
    {
        path: '/preparations',
        component: Preparations,
        requiresAuth: false,
    },
    {
        path: '/dashboard',
        component: Dashboard,
        requiresAuth: true,
    },

    {
        path: '/about',
        component: About,
        requiresAuth: false,
    },
    {
        path: '/documentations',
        component: Docs,
        requiresAuth: false,
    },
    {
        path: '/token-sale',
        component: TokenSale,
        requiresAuth: false,
    },


]

const NestedRoutes = [


    {
        path: 'nfts',
        component: NftsPage,
        requiresAuth: false,
    },
    {
        path: 'stats',
        component: TwiWallet,
        requiresAuth: false,
    },
    {
        path: 'nfts/my-collection',
        component: EarnHome,
        requiresAuth: false,
    },
    {
        path: 'nfts/:id',
        component: Nfts,
        requiresAuth: false,
    },
    {
        path: 'withdraw',
        component: Withdraw,
        requiresAuth: false,
    },
    {
        path: 'support',
        component: Faq,
        requiresAuth: false,
    },
    {
        path: 'daily-rewards',
        component: DailyRewards,
        requiresAuth: false,
    },
    {
        path: 'mint',
        component: MintPage,
        requiresAuth: false,
    },
    {
        path: 'last-news',
        component: Blog,
        requiresAuth: false,
    },
    {
        path: 'community',
        component: Community,
        requiresAuth: false,
    },
    {
        path: 'token-sale',
        component: TokenSale,
        requiresAuth: false,
    },


]


const AppRoutes = () => {

    const isLogedIn = useSelector(userSession)

    return (

        <BrowserRouter>
                <Toaster />
            <MyProvider>
                <>
                    <Navbar />
                    <Routes>
                        {routes.map(({ component: Component, path, requiresAuth }, index) => {

                            return requiresAuth && !isLogedIn ? null
                                :

                                <Route key={index} path={path} element={<Component />} />

                        })}

                        <Route path="/earn" element={<Earn />}>

                            <Route index element={<EarnHome />} />

                            {NestedRoutes.map(({ component: Component, path, requiresAuth }, index) => {

                                return requiresAuth && !isLogedIn ? null
                                    :

                                    <Route key={index} path={path} element={<Component />} />

                            })}
                        </Route>
                    </Routes>
                    {/* <Footer/> */}
                </>

            </MyProvider>

        </BrowserRouter>


    )
}


export default AppRoutes