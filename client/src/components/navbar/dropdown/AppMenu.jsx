import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {RxDashboard} from 'react-icons/rx'
import {RiNftFill} from 'react-icons/ri'
import {BsWallet} from 'react-icons/bs'
import {CiShop} from 'react-icons/ci'
import {MdOutlineCardGiftcard} from 'react-icons/md'
import {BiCoinStack,BiCollection,BiSupport,BiBook,BiChevronDownCircle} from 'react-icons/bi'

const solutions = [

  {
    name: 'Mint',
    description: 'Keep track of your growth',
    href: '/dashboard/mint',
    icon: RiNftFill,
  },
  {
    name: 'Token Sale',
    description: 'Participate in Twicypt IDO',
    href: '/dashboard/token-sale',
    icon: BiCoinStack,
  },
  {
    name: 'Dashboard',
    description: 'manage yor account',
    href: '/dashboard',
    icon: RxDashboard,
  },


  {
    name: 'Wallet',
    description: 'your assets on Twicrypt',
    href: '/dashboard/stats',
    icon: BsWallet,
  },
  {
    name: 'MarketPlace',
    description: 'Buy / sell List your NFTs',
    href: '/dashboard/marketplace',
    icon: CiShop,
  },
  {
    name: 'Art Collections',
    description: 'NFT Art Gallery',
    href: '/dashboard/nfts',
    icon: BiCollection,
  },
  {
    name: 'Gift Cards',
    description: 'rewards / coupons ...',
    href: '##',
    icon: MdOutlineCardGiftcard,
  },
  {
    name: 'Documentations',
    description: 'All about Twicrypt services',
    href: '##',
    icon: BiBook,
  },
  {
    name: 'Support',
    description: 'Contact us',
    href: '/dashboard/support',
    icon: BiSupport,
  },
]

const AppMenu =()=> {


  const [show, setShow] = useState(false);
  
  const onMouseEnterMenu = (id) => {
    setShow(true);
  };

  const onMouseLeaveMenu = () => {
      setShow(false);   
  };

  const RenderMenuChildren = ()=> {


  }


  return (
    <div className="w-20  ">
      <Popover className="relative "
      
      onMouseEnter={() => onMouseEnterMenu()}
      onMouseLeave={() => onMouseLeaveMenu()}
      >
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center text-sm lg:text-[14px] font-base text-slate-300 py-1 px-3 xl:pl-4 rounded-full bg-pink-700 hover:bg-slate-100 hover:text-neutral-900 "
                `}
            >
              <span> App</span>
              <BiChevronDownCircle
                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-white transition duration-150 ease-in-out group-hover:text-opacity-80 group-hover:text-black`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              show={show}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-gradient-to-r from-pink-500 to-purple-500  rounded-2xl pt-1 left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform sm:px-0 lg:max-w-4xl ">

              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-neutral-700 flex ">
                  <div className="flex gap-8  bg-neutral-900 p-7 flex-wrap justify-between items-start w-auto relative  ">
                    {solutions.map((item) => (

                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-4 group  w-auto lg:w-1/3 flex justify-start text-left lg:grow-0 grow  flex-wrap items-center  rounded-lg p-5 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-10 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 "
                      onClick={()=>onMouseLeaveMenu()}
                     >
                        <div className="flex transition-all duration-300 shrink-0 items-center justify-center rounded-xl w-12 h-12 group-hover:bg-white text-white bg-pink-800 sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" className='text-3xl transition-all duration-300 group-hover:text-pink-500' />
                          
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-bold  text-gray-300 m-0 p-0 group-hover:text-pink-500">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500 m-0 p-0">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}

                    
                  </div>
                
                  <div className="bg-neutral-400 w-5 flex flex-col">
                    {/* <Link
                      to="##"
                      className="flow-root  rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-neutral-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-start justify-center gap-1 flex-col">
                        <span className="text-sm font-medium text-gray-900">
                          Documentation
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        Start integrating products and tools
                      </span>
                    </Link> */}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}


export default AppMenu