import { Transition,Dialog } from "@headlessui/react"
import { Fragment } from "react"
import { useState } from "react"
import {MdOutlineLocalOffer} from 'react-icons/md'
import { toDecimals } from "../../../../utils/web3Functions"
import { useDispatch, useSelector } from "react-redux"
import { useMakeOffer } from "../../hooks/web3Hooks/Offers/useMakeOffer"
import { useSwitchCorrectNetwork } from "../../hooks/web3Hooks/Network/useSwitchCorrectNetwork"
import { useAddBid } from "../../hooks/web3Hooks/Auction/useAddBid"
import { formatEther } from "viem"



const MakeBid =({nft})=> {

    let [isOpen, setIsOpen] = useState(false)
    let [newPrice, setNewPrice] = useState({
      price:0,
      value:0
    })
    
const nftDetails = useSelector(state=>state.marketPlace.nftDetailsPageState)

const {address} = useSelector(state=>state.session)

const auctionData = useSelector(state=>state.marketPlace.mylistings)
const bids = auctionData?.allBids

const bidderIndex = bids?.find((bid, index) => {
  return bid?.bidder?.toLowerCase() == address?.toLowerCase()
  
})

const prevBidPrice = formatEther(Number(bidderIndex?.price))

//hook to create bid
const addBid = useAddBid(newPrice)


function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

  // hook to create new offer

const {switchNetwork,chain} = useSwitchCorrectNetwork({
    fallback:()=> addBid.write()
})

   
    const createBid =(e) => {

  
  const regex = /^(0(\.\d{1,3})?|100000(\.0{1,3})?|\d{1,5}(\.\d{1,3})?)$/;
  
  if (regex.test(newPrice?.price)) {
    e.preventDefault()
    // approve.write()
    addBid.write()
    closeModal()
    e.target[0].setCustomValidity('')
  }else {
    // e.chidlren.setCustomValidity('Please enter a valid fezfezf number.'); // Set a custom validity message
    e.target[0].setCustomValidity('Please enter a valid price from 0.0001 BNB .')
    e.preventDefault()
    
  
}

      
    };

    const handleChangePrice =(e)=> {
if (prevBidPrice>0){

  setNewPrice((prev)=>({
    price: Number(e.target.value ),
    value: Number(e.target.value - prevBidPrice)
  }))
}else{
  setNewPrice((prev)=>({
    price: Number(e.target.value ),
    value: Number(e.target.value )
  }))

}
        e.target.setCustomValidity('')
    }


    return (
      <>
        <div className=" inset-0 flex items-center justify-center w-full">
            
          <button
            type="button"
            onClick={openModal}
            className="p-2 px-3 h-14 w-full bg-neutral-800 group rounded-lg flex items-center justify-center gap-2 text-white hover:bg-pink-600 hover:shadow-lg font-bold transition-all duration-300 "
          >
           <p className="text-sm text-neutral-200">make bid</p>  <MdOutlineLocalOffer className="text-blue-500 group-hover:text-white transition-all duration-300"/>
          </button>
        </div>
  
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
            </Transition.Child>
  
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-neutral-800 px-6 pb-6 text-left align-middle shadow-xl transition-all border border-neutral-700">
                  <div className="flex items-center justify-between">
                     <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-neutral-300"
                      >
                      {`bid on ${nftDetails?.metadata?.name}  `}
                    </Dialog.Title>
                        </div> 

                    <div className="mt-2">
                      <p className="text-sm text-neutral-200">
                       

                      </p>
                      <img src={nftDetails?.imageLink} alt="Art image" className="rounded-2xl" />

                    </div>
<form  onSubmit={(e)=> createBid(e)}>

  <p className="p-0 mt-3">{prevBidPrice >0 ? "update bid :" : "make new bid"}</p>
  <input  required className='rounded-md mt-2 px-5 outline-none border text-neutral-900 ' type="text" placeholder="bid amount" onChange={handleChangePrice}/>
  
                      {/* <p className="p-0 text-xs pt-2 ">listing fees: 0.02BNB</p> */}
                    <div className="mt-2 flex gap-5">
                      <button
                        type="submit"
                        className="inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-blue-500 hover:bg-pink-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300"
                        >
                       <MdOutlineLocalOffer className="text-white transition-all duration-300"/> <p className="text-white">{prevBidPrice >0 ? "update bid " : "make bid"}</p>
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-500 hover:text-white transition-all duration-300"
                        onClick={closeModal}
                        >
                        close
                      </button>
                    </div>

                    { prevBidPrice >0 ?  <div className="flex flex-col w-full justify-center items-start">
                      <ul className="text-base text-white font-bold p-0 m-0 my-2">
                        <li className="text-neutral-200">
                          your previous bid : 
                          <span className="text-red-500 font-bold">
                          {" " + prevBidPrice+ ' BNB'} 
                          </span>
                          </li>
                        <li className="text-neutral-200">   
                        amount to be added : 
                        <span className="text-green-500 font-bold" >
                            {" "}
                        { newPrice.price && " " +  (newPrice?.price - prevBidPrice )?.toFixed(3) + " BNB"}
                        </span>
                        
                        </li>
                  

                      </ul>

                      </div> : null}

                      <p className="text-xs text-orange-500 py-2">Note : if you have an existing bid , the new bid will ovewrite it , only the price diffrence between old bid and the new one will be deducted from your account </p>
                        </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    )
  }

  export default MakeBid