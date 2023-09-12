import { Transition,Dialog } from "@headlessui/react"
import { Fragment } from "react"
import { useState } from "react"
import { useCancelListing } from "../hooks/web3Hooks/useCancelListing";
import {AiOutlineDelete} from 'react-icons/ai'


const DeleteListingModal =({nft})=> {
    let [isOpen, setIsOpen] = useState(false)
  
    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
  

    const cancelListing = useCancelListing({
        tokenId:nft.tokenId && nft.tokenId,
    })


    const delist =(e) => {
      e.preventDefault()
     cancelListing.write()
     closeModal()
      };



    return (
      <>
        <div className=" inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={openModal}
            className="p-2 px-3 bg-neutral-800 group rounded-lg text-white hover:bg-pink-600 hover:shadow-lg transition-all duration-300 w-full flex items-center justify-center gap-2"
          >
          <p className="text-xs text-neutral-200">cancel listing</p>  <i><AiOutlineDelete className="text-red-500  group-hover:text-white transition-all duration-300"/></i>
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
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-neutral-800 border border-neutral-700 px-6 pb-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-neutral-200"
                    >
                      {`you are about to delete ${nft.tokenId}`}
                    </Dialog.Title>
                    <div className="mt-2">
                    <p className="text-sm text-neutral-200">
                       {`are you sur you want to delist nft : ${nft.name || nft.tokenId }`}
                      </p>
                    </div>
  
                    <div className="mt-4 flex gap-5">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white "
                        onClick={delist}
                      >
                        yes Remove
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        change my mind
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

  export default DeleteListingModal