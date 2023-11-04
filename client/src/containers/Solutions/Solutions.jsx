

import { Fragment } from 'react'
import { BsRocketTakeoff, BsGift, BsReverseListColumnsReverse,BsShop } from 'react-icons/bs'
import { PiIdentificationBadgeThin } from 'react-icons/pi'
import { GiMining } from 'react-icons/gi'
import { AiOutlineDropbox, AiOutlineAudit ,AiOutlineMail} from 'react-icons/ai'
import { RiNftFill } from 'react-icons/ri'
import { PiTicket } from 'react-icons/pi'
import { FaPeopleRobbery } from 'react-icons/fa6'
import { MdGeneratingTokens ,MdOutlineChangeCircle} from 'react-icons/md'
import { FaPeopleArrows } from 'react-icons/fa'
import { IoAppsOutline } from 'react-icons/io5'
import { GoSponsorTiers } from 'react-icons/go'
import { FcOrganization,FcDataConfiguration } from 'react-icons/fc'

import {FcDonate} from 'react-icons/fc'
import Disclamer from '../../shared/Disclamer/Disclaimer'

import { Link } from 'react-router-dom'


const services = [
    {
        title: 'sponsorship',
        commingsoon:false,
        desc: 'become a sponsor and get viewed on twicrypt main page',
        link:'/sponsor',
        icon: GoSponsorTiers
    },
    {
        title: 'audit',
        commingsoon:true,
        desc: 'quality and transparent audit service',
        link:'',
        icon: PiIdentificationBadgeThin
    },
    {
        title: 'kyc',
        commingsoon:true,
        desc: 'trusted kyc verification ',
        link:'',
        icon: AiOutlineAudit
    },
    {
        title: 'listing',
        commingsoon:true,
        desc: 'token listings / idos and token performance',
        link:'',
        icon: BsReverseListColumnsReverse
    },

    {
        title: 'decentralized email',
        commingsoon:true,
        desc: 'your address is your email ,own your mails !',
        link:'',
        icon: AiOutlineMail
    },

]

const earn = [
    {
        title: 'Nft',
        commingsoon:false,
        desc: 'up to 1BTC in one nft ,instant cash, send your nfts to work for you',
        link:'/dashboard/mint',
        icon: RiNftFill
    },
    {
        title: 'mining',
        commingsoon:false,
        desc: 'mine tokens / create mining for your project',
        link:'/dashboard/auto-p2e?id=mining-session',
        icon: GiMining
    },
    {
        title: 'partnerships',
        commingsoon:false,
        desc: 'become a partner and get reasonable commisions',
        link:'/dashboard/mint',
        icon: FaPeopleArrows
    },
    {
        title: 'affiliate system',
        commingsoon:false,
        desc: 'become twicrypt affiliate and get reasonable commisions',
        link:'/dashboard/mint',
        icon: FaPeopleRobbery
    },
    {
        title: 'Nft staking',
        commingsoon:true,
        desc: 'stake your twicrypt assets for flexible rates',
        link:'',
        icon: RiNftFill
    },
    {
        title: 'drops',
        commingsoon:true,
        desc: 'airdrops and holder rewards',
        link:'',
        icon: AiOutlineDropbox
    },
    {
        title: 'gift box',
        commingsoon:true,
        desc: 'gift cards coupons and discounts',
        link:'',
        icon: BsGift
    },
    {
        title: 'lotterty',
        commingsoon:true,
        desc: 'periodic lottery with interesting rewards',
        link:'',
        icon: PiTicket
    },
    {
        title: 'token staking',
        commingsoon:true,
        desc: 'stake twi tokens for flexible rates and various rewards',
        link:'',
        icon: MdGeneratingTokens
    },


]
const web3Solutions = [

    {
        title: 'marketPlace',
        commingsoon:false,
        desc: 'buy / sell and organize auctions',
        link:'/dashboard/marketplace/all-listings',
        icon: BsShop
    },
    {
        title: 'token swap',
        commingsoon:true,
        desc: 'swap tokens across multiple chains',
        link:'',
        icon: MdOutlineChangeCircle
    },
    {
        title: 'Dapp generator',
        commingsoon:true,
        desc: 'marketplaces , staking , drop contracts and UI ... ',
        link:'',
        icon: IoAppsOutline
    },
    {
        title: 'ERC20/Erc721 generator',
        commingsoon:true,
        desc: 'pre-audited and secured contracts',
        link:'',
        icon: RiNftFill
    },
    {
        title: 'launchpad',
        commingsoon:true,
        desc: 'organize presales / fairlaunches and multiple advanced Idos  ',
        link:'',
        icon: BsRocketTakeoff
    },
    {
        title: 'decentralized email',
        commingsoon:true,
        desc: 'your address is your email ,own your mails !',
        link:'',
        icon: AiOutlineMail
    },


]


const Solutions = () => {
    const Card = ({ sol }) => {
        return (
            <div className={`w-40 h-40 border rounded-lg border-neutral-900 p-2 ${!sol?.commingsoon ? 'cursor-pointer ' : 'grayscale'}  hover:bg-neutral-900 hover:border-neutral-800 relative`}>
               <Link to={sol?.link} >
                <div className='flex items-center justify-center p-auto py-2'>
                    <sol.icon className='text-5xl text-yellow-500' />
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>

                <p className='text-xs font-bold text-neutral-300'>{sol?.title}</p>
                <p className='text-xs font-bold text-neutral-600 '>{sol?.desc}</p>

                </div>
                </Link>
                { sol?.commingsoon && <p className='text-xs font-bold text-black absolute top-1 bg-yellow-500  rounded-xl px-2 animate-pulse'> soon</p>

 }

            </div>
        )
    }

    return (
        <Fragment>
            <div className='container container--xxxlarge container--center mb-20 border rounded-xl border-neutral-900 p-5 shadow'>
                <div className='opacity-40 text-center flex justify-center'>
<div className=''>

<Disclamer message={'new features are live now and more to come !'}/>
</div>
                </div>
        
                <h4 className='text-left border-b rounded-xl pl-5 py-2 my-5 border-yellow-950 flex  items-center gap-5 text-yellow-500 font-bold'>  Twicrypt Earn <FcDonate className='text-2xl'/></h4>
                <div className='flex items-center justify-start flex-wrap gap-4'>
                    {
                        earn?.map((sol, i) => <Card sol={sol} />)
                    }
                </div>
                <h4 className='text-left border-b rounded-xl pl-5 py-2 my-5 border-yellow-950  flex  items-center gap-5 text-yellow-500 font-bold'>  web3 solutions <FcDataConfiguration className='text-2xl'/></h4>
                <div className='flex items-center justify-start flex-wrap gap-4'>
                    {
                        web3Solutions?.map((sol, i) => <Card sol={sol} />)
                    }
                </div>

                <h4 className='text-left border-b rounded-xl pl-5 py-2 my-5 border-yellow-950  flex  items-center gap-5 text-yellow-500 font-bold'>  Twicrypt services <FcOrganization className='text-2xl'/></h4>
                <div className='flex items-center justify-start flex-wrap gap-4'>
                    {
                        services?.map((sol, i) => <Card sol={sol} />)
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Solutions