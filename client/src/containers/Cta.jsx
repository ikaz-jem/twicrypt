import { AiOutlineUserAdd } from 'react-icons/ai'
import logo from '../media/3d23.png'
import { Link } from 'react-router-dom'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AiOutlineUserAdd,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: AiOutlineUserAdd,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: AiOutlineUserAdd,
  },
]

const Cta = () => {
  return (
    <div className=" h-auto   w-auto relative  ">




      <div className="mx-auto max-w-[90%] py-5 sm:px-6 sm:py-5 lg:px-8 h-auto">
        <div className="relative isolate overflow-hidden bg-black px-6 pt-16  sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity=".4" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#ff23b6" />
                <stop offset={1} stopColor="#2395ff" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why Twicrypt ?
              <br />
              Worth It ?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Twicrypt DC app has the first ever combined NFT utilities in one single Asset !
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover a world beyond simple NFT projects with - where innovation meets limitless possibilities.            </p>
            <div className='grid grid-cols-2 w-auto gap-5 text-left'>
              <ul className='text-neutral-200 text-xs'>
                <h4 className='py-1 m-0'>Twicrypt NFTs :</h4>
                <li>First interaction-based mining</li>
                <li>Pioneered NFT self-estimation of value</li>
                <li>Stackable uniqueness</li>
                <li>Autoplay to Earn (AP2E)</li>
                <li> Attached assets with value up to 100 BNB</li>
                <li>Twicrypt Platform Combined use Cases</li>
                <li>much more ... </li>
              </ul>
              <ul className='text-neutral-200 text-xs text-left'>
                <h4 className='py-1 m-0'>Twicrypt Platform:</h4>
                <li>Launchpad for projects</li>
                <li>Decentralized Email</li>
                <li>Decentralized social media platform
</li>
                <li>Web3 Automation</li>
                <li>Listing Service</li>
                <li>KYC Audit Provider</li>
                <li> Sponsor Exchange System</li>
              </ul>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                to="https://docs.twicrypt.com/"
                target='blank'
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-pink-600 hover:text-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Discover more
              </Link>
              <Link
                target='blank'
                to="https://docs.twicrypt.com/twicrypt-nft-collection/bsc-collection/utilities"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-500">
                NFT utilities <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
            <img
              className="absolute right-0 z-[-1] top-[20%] max-w-md  w-auto rounded-md"
              src={logo}
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          <div className="relative mt-16 h-80 lg:mt-8">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta