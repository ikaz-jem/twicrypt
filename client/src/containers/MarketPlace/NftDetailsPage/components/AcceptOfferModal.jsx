import { Transition,Dialog } from "@headlessui/react"
import { Fragment } from "react"
import { useState } from "react"
import {IoCreateOutline} from 'react-icons/io5'
import {BsArrowsAngleExpand} from 'react-icons/bs'
import {useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useAcceptOffer } from "../../hooks/web3Hooks/Offers/useAcceptOffer"
import { mainChainId } from "../../data/chains"
import { useSwitchNetwork } from "wagmi"
import { useSwitchCorrectNetwork } from "../../hooks/web3Hooks/Network/useSwitchCorrectNetwork"
import { bigIntToFormated } from "../../../../utils/web3Functions"
const AcceptOfferModal =({offer,isListed,index,chain,isOpen,setIsOpen})=> {
    
const nftDetails = useSelector(state=>state.marketPlace.nftDetailsPageState)

const {approve,AcceptOffer} = useAcceptOffer({
  index: index && Number(index)
})

const fallbackToChoose = ()=> {
  if (isListed && isListed){
      AcceptOffer.write()
  } else {
      approve.write()
  }
}

const acceptOfferSwitch = useSwitchCorrectNetwork({
  chainId: mainChainId && mainChainId,
  fallback:()=> fallbackToChoose()
})

const handleAcceptOffer = (e) => {

  if (chain.id == mainChainId) {
      fallbackToChoose()
  } else {
      acceptOfferSwitch.switchNetwork.switchNetwork()
  }
  e.preventDefault()
}

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
      
    }




    return (
      <>
  
  
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={openModal}>
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
                      {` ${nftDetails?.metadata?.name}`}
                    </Dialog.Title>
                        </div> 

                    <div className="mt-2">
                      <p className="text-sm text-neutral-200">
                       

                      </p>
                      <img src={nftDetails?.imageLink} alt="Art image" className="rounded-2xl" />

                    </div>


  <p className="p-0 mt-1">offer price : {bigIntToFormated(Number(offer?.price),18)} BNB </p>
  user :<Link to={`/earn/account/${offer?.offerer}`} className="p-0 mt-1 text-pink-500 hover:text-blue-500"> {offer?.offerer.slice(0,20)+" ..."} </Link>

 
  
                      <p className="p-0 text-xs pt-2 ">please review before you confirm</p>
                    <div className="mt-2 flex gap-5">
                      <button
                      onClick={handleAcceptOffer}
                        type="button"
                        className="inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-blue-500 hover:bg-pink-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300"
                        >
                       <IoCreateOutline className="text-white transition-all duration-300"/> <p className="text-white">accept offer</p>
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-500 hover:text-white transition-all duration-300"
                        onClick={closeModal}
                        >
                        cancel
                      </button>
                    </div>
                     
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    )
  }

  export default AcceptOfferModal