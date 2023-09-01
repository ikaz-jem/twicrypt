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

const marketPlaceRoutes = [
    {
        path: 'nfts',
        component: NftsPage,
        requiresAuth: false,
    },
    {
        path: 'nfts/my-collection',
        component: EarnHome,
        requiresAuth: false,
    },
    {
        path: 'nfts/on-sale',
        component: Withdraw,
        requiresAuth: false,
    },
    {
        path: 'nfts/my-listings',
        component: Withdraw,
        requiresAuth: false,
    },
]



export {routes,NestedRoutes,marketPlaceRoutes}