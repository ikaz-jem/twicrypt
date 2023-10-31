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
import Partners from "../containers/Partners/Partners";
import Preparations from "../containers/Preparations/Preparations";
import MyProvider from "../Providers/Web3";
import { userSession } from "../app/features/session/sessionSlice";
import { useSelector } from "react-redux";

import RoutesTransition from '../shared/transitions/RoutesTransition'
import TwiWallet from "../containers/Earn/components/TwiWallet";
import EarnHome from "../containers/Earn/components/EarnHome";
import MintPage from "../containers/Earn/components/Nfts/Mint/MintPage";
import Docs from "../containers/Docs/Docs";
import MiningHome from "../containers/Mining/MiningHome";
import Withdraw from "../containers/Withdraw/Withdraw";
import Faq from "../containers/Faq/Faq";
import DailyRewards from "../containers/DailyRewards/DailyRewards";
import Community from "../containers/Community/Community";
import MarketPlace from "../containers/MarketPlace/MarketPlace";
import NftDetailsPage from "../containers/MarketPlace/NftDetailsPage/NftDetailsPage";
import UserProfile from "../containers/Account/UserProfile/UserProfile";
import CreateListing from "../containers/MarketPlace/CreateListing/CreateListing";
import AccountPage from '../containers/Account/AccountPage'
import CreateAuction from "../containers/MarketPlace/CreateAuction/CreateAuction";
import AuctionDetailsPage from "../containers/MarketPlace/NftDetailsPage/AuctionDetailsPage";
import ClaimReward from "../containers/Earn/components/ClaimReward/ClaimReward";
import WiningNfts from "../containers/Earn/components/WinningNfts/WiningNfts";

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
        path: '/sponsor/:id',
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
        path: '/partners',
        component: Partners,
        requiresAuth: false,
    },
    {
        path: '/documentations',
        component: Docs,
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
        path: 'nfts/marketplace/listings/:id',
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
        path:'mint/:address',
        component: MintPage,
        requiresAuth: false,
    },
    {
        path:'mint',
        component: MintPage,
        requiresAuth: false,
    },
    {
        path: 'auto-p2e',
        component: MiningHome,
        requiresAuth: false,
    },
    {
        path: 'community',
        component: Community,
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
    {
        path: 'claim',
        component: ClaimReward,
        requiresAuth: false,
    },
    {
        path: 'winning-nfts',
        component: WiningNfts,
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
        path: 'create-listing/:id',
        component: CreateListing,
        requiresAuth: false,
    },
    {
        path: 'create-auction/:id',
        component: CreateAuction,
        requiresAuth: false,
    },
    {
        path:':page',
        component: MarketPlace,
        requiresAuth: false,
    },
    {
        path: 'listings/auction/:id',
        component: NftDetailsPage,
        requiresAuth: false,
    },


]

const AppRoutes = () => {

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

                        <Route path="/dashboard" element={<Dashboard />}>
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
                                    <Route path="marketplace/:page/auction" element={<AuctionDetailsPage/>}/>
                                  



                        </Route>
                    </Routes>
                    {/* <Footer/> */}
                </>

            </MyProvider>

        </BrowserRouter>


    )
}


export default AppRoutes