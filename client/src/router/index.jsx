import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";


import '../App.css';

import { Toaster } from 'react-hot-toast';

import Navbar from "../components/navbar/Navbar";
import Home from '../containers/Home';
import Footer from "../components/Footer";
import Dashboard2 from "../containers/Dashboard2/Dashboard2";
import SponsorUs from "../containers/sponsorUs/SponsorUs";
import NftsPage from "../containers/Earn/components/Nfts/NftsPage";
import Dashboard from "../containers/Earn/Dashboard";
import About from "../containers/About";
import Preparations from "../containers/Preparations/Preparations";
import MyProvider from "../Providers/Web3";
import { userSession } from "../app/features/session/sessionSlice";
import { useSelector } from "react-redux";

import RoutesTransition from '../shared/transitions/RoutesTransition'
import TwiWallet from "../containers/Earn/components/TwiWallet";
import EarnHome from "../containers/Earn/components/EarnHome";
import MintPage from "../containers/Earn/components/Nfts/Mint/MintPage";
import Docs from "../containers/Docs/Docs";
import TokenSale from "../containers/TokenSale/TokenSale";
import Blog from "../containers/Blog/Blog";
import Withdraw from "../containers/Withdraw/Withdraw";
import Faq from "../containers/Faq/Faq";
import DailyRewards from "../containers/DailyRewards/DailyRewards";
import Community from "../containers/Community/Community";
import MarketPlace from "../containers/MarketPlace/MarketPlace";
import NftDetailsPage from "../containers/MarketPlace/NftDetailsPage/NftDetailsPage";
import UserProfile from "../containers/Account/UserProfile/UserProfile";
import CreateListing from "../containers/MarketPlace/CreateListing/CreateListing";
import AccountPage from '../containers/Account/AccountPage'

const Pages = [
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
        path: '/earn',
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
    {
        path: 'marketplace',
        component: MarketPlace,
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
        component: NftDetailsPage,
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
        path:'mint',
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
    {
        path: 'account',
        component: AccountPage,
        requiresAuth: false,
    },
    {
        path: 'account/:address',
        component: UserProfile,
        requiresAuth: false,
    },

]

const marketPlaceRoutes = [
    {
        path: 'nfts',
        component: NftsPage,
        requiresAuth: false,
    },
    {
        path: ':page',
        component: MarketPlace,
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
                        {Pages.map(({ component: Component, path, requiresAuth }, index) => {
                            return requiresAuth  ? null
                                :
                                <Route key={index} path={path} element={<Component />} />
                        })}

                        <Route path="/earn" element={<Dashboard />}>
                            <Route index element={<EarnHome />} />
                            {NestedRoutes.map(({ component: Component, path, requiresAuth }, index) => {
                                return requiresAuth  ? null
                                    :
                                    <Route key={index} path={path} element={<Component />} />
                            })}

                            <Route path="marketplace" element={<MarketPlace />}>
                                <Route index element={<NftsPage />} />
                                {marketPlaceRoutes.map(({ component: Component, path, requiresAuth }, index) => {
                                    return requiresAuth  ? null
                                        :
                                        <Route key={index} path={path} element={<Component />} />
                                    })}
                            </Route>



                                    <Route path="marketplace/:page/nft" element={<NftDetailsPage />}/>



                        </Route>
                    </Routes>
                    {/* <Footer/> */}
                </>

            </MyProvider>

        </BrowserRouter>


    )
}


export default AppRoutes