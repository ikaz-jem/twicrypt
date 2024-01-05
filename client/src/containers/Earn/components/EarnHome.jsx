import { useNavigate } from "react-router-dom"
import available from '../../../media/available.png'




const Data = [
    {
        comingSoon:false,
        title: 'Nft',
        desc: ' Handmade Art developed with prizes ranging from 1k$ to 3k$ with various utilities',
        page: 'home',
        component:'/dashboard/mint',
        img:"https://twicrypt.com/media/features/nfts.jpg"    },
    {
        comingSoon:false,
        title: 'AP2E',
        desc: 'Vm (Virtual mining) or Auto-P2E, make your NFT work for you',
        page: 'stats',
        component:'/dashboard/auto-p2e?id=mining-session',
        img:"https://twicrypt.com/media/features/mining.png"

    },
    {
        comingSoon:true,
        title: 'User Profile',
        desc: 'DC user profiles, follow users, view their stats, and share content',
        page:'sectionWhy',
        component:'/dashboard/section-why',
        img:"https://twicrypt.com/media/features/profile.png"
    },
    {
        comingSoon:true,
        title: 'Gift Cards and Coupons',
        desc: 'Gift cards, coupons, and discounts for Twicrypt users and NFT holders exclusively',
        link: 1,
        img:"https://twicrypt.com/media/features/gift-cards.png"
    },
    {
        comingSoon:false,
        title: 'NFT Marketplace',
        desc: 'Buy/Sell Twicrypt NFTs, organize auctions, create sales',
        link: 1,
        component:'/dashboard/marketplace/all-listings',
        img:"https://twicrypt.com/media/features/marketplace.png"
    },
    {
        comingSoon:false,
        title: 'Sponsorship System',
        desc: 'Automated Web3 sponsorship system, sponsor Twicrypt and appear on our main page',
        link: 1,
        img:"https://twicrypt.com/media/features/sponsorship.png"
    },
    {
        comingSoon:true,
        title: 'Token Staking',
        desc: 'Staking Twicrypt tokens for a wide range of tokens with customizable and fixed staking packages',
        link: 1,
        img:"https://api.twicrypt.com/eth/img/15.png"
    },
    {
        comingSoon:false,
        title: 'Affiliate System',
        desc: 'Become an affiliate or partner and earn up to 20% or more from each sale',
        link: 1,
        img:"https://twicrypt.com/media/features/affiliate.png"

    },
    {
        comingSoon:true,
        title: 'Lottery',
        desc: 'Different lotteries with different unique mechanics up to $1 million! Yes, this is real!',
        link: 1,
        img:"https://api.twicrypt.com/eth/img/15.png"
    },
    {
        comingSoon:true,
        title: 'Launchpad',
        desc: 'Create different types of sales for your project! Exclusive discounts and free membership for Twicrypt users',
        link: 1,
        img:"https://twicrypt.com/media/features/launchpad.png"
    },
    {
        comingSoon:false,
        title: 'Twibot',
        desc: 'Twibot is a smart telegram bot that informs users about all actions on the website',
        link: 1,
        img:"https://twicrypt.com/media/features/twibot.png"
    },
]



const EarnHome = () => {

    const navigate = useNavigate();

    const handleChangePage = (item,e)=>{
        if (!item?.comingSoon){
            e.preventDefault();
            navigate(item?.component)
        }

    }


    return (

        <div className=" w-full relative p-10 bg rounded-xl   color-ball ">
            <h3 className="m-0 py-2 text-[#995533]">Start Earning</h3>
            <h1 className="m-0 mb-2 font-bold">Trimester Mini-Roadmap</h1>
          


       




            <div className="flex flex-wrap justify-center w-auto h">
                {
                    Data?.map((item, i) => {
                        return <div className={`${item?.comingSoon ? "grayscale " : " cursor-pointer"} border border-neutral-500 hover:border-neutral-200 bg-neutral-200 bg-opacity-10  m-5 w-52 flex rounded-xl relative text-white overflow-hidden flex-wrap hover:bg-blue-500 - hover:scale-[102%]  transition-all duration-150 ease-in shadow-2xl shadow-[#721533] hover:shadow-blue-600 grow md:grow-0`} key={i} onClick={(e) => handleChangePage(item,e)}>

                            <div className=" flex flex-col   w-full h-auto gap-0  lg:items-center relative">
                                <img src={item?.img} alt="" className=" object-contain p-0 m-0  w-full  " />

                                <div className="flex flex-col items-start justify-start px-2 py-2 gap-2 ">


                                    <div className='flex flex-col  justify-center items-start relative  w-full '>

                                        <h5 className=" text-sm text-left font-bold  m-0 relative ">
                                            {item?.title}
                                        </h5>
                                    </div>
                                    <div className="flex justify-start items-start gap-2   w-full">

                                        <p className=" text-white p-0 m-0 relative bg-green-500 h-2 px-4 animate-pulse rounded-full">
                                          
                                        </p>
                                        <p className=" text-white p-0 m-0 relative bg-pink-500 px-4 h-2 animate-pulse rounded-full">
                                          
                                        </p>
                                        <p className=" text-white p-0 m-0 relative bg-[#4D3C77] px-4 h-2 animate-pulse rounded-full">
                                          
                                        </p>
                                        <p className=" text-white p-0 m-0 relative bg-[#ebce29] px-4 h-2 animate-pulse rounded-full">
                                          
                                        </p>

                                    </div>


                                    <p className="text-left text-neutral-300 p-0 m-0 text-xs">
                                        {item?.desc}
                                    </p>

                                   
                       </div>
                            </div>
{item?.comingSoon ? <img src="https://clipart-library.com/images_k/coming-soon-transparent-background/coming-soon-transparent-background-3.png" alt="" className="absolute top-0 w-40" /> :  <img src={available} alt="" className="absolute top-0 w-40 rotate-16" />
}

                        </div>
                    })
                }
            </div>
        </div>

    )
}


export default EarnHome