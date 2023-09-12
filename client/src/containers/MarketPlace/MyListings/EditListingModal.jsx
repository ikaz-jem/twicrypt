import { Transition,Dialog } from "@headlessui/react"
import { Fragment } from "react"
import { useState } from "react"
import { useEditListing } from "../hooks/web3Hooks/useEditListing";
import {BiEdit} from 'react-icons/bi'

const EditListingModal =({nft})=> {
    let [isOpen, setIsOpen] = useState(false)
    let [newPrice, setNewPrice] = useState(0)
    


    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
  

    const EditListing = useEditListing({
        tokenId:nft.tokenId && nft.tokenId,
        price:newPrice && newPrice
    })

    const editListing =(e) => {
      const regex = /^(0(\.\d{1,3})?|100000(\.0{1,3})?|\d{1,5}(\.\d{1,3})?)$/;
      
      if (regex.test(newPrice)) {
        e.preventDefault()
        EditListing.write()
        closeModal()
        e.target[0].setCustomValidity('')
      }else {
        // e.chidlren.setCustomValidity('Please enter a valid fezfezf number.'); // Set a custom validity message
        e.target[0].setCustomValidity('Please enter a valid number from 0.0001 BNB .')
        e.preventDefault()
        
      }

      
    };
    console.log(newPrice)
    const handleChangePrice =(e)=> {
        setNewPrice(Number(e.target.value))
        e.target.setCustomValidity('')
    }
    console.log(newPrice)

    return (
      <>
        <div className=" inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={openModal}
            className="p-2 px-3 bg-neutral-800 group rounded-lg flex items-center justify-center gap-2 text-white hover:bg-pink-600 hover:shadow-lg transition-all duration-300 w-full"
          >
           <p className="text-xs text-neutral-200">edit listing</p>  <BiEdit className="text-blue-500 group-hover:text-white transition-all duration-300"/>
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
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-neutral-300"
                    >
                      {`Edit  ${nft.tokenId}`}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-neutral-200">
                       {`change price for : ${nft.name || nft.tokenId }`}

                      </p>

                    </div>
<form  onSubmit={(e)=> editListing(e)}>
  <input  required className='rounded-md mt-5 px-5 outline-none border text-neutral-900 ' type="text" placeholder="new price" onChange={handleChangePrice}/>
  
                    <div className="mt-4 flex gap-5">
                      <button
                        type="submit"
                        className="inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-blue-500 hover:bg-pink-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300"
                        >
                       <BiEdit className="text-white transition-all duration-300"/> <p className="text-white">edit listing</p>
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-500 hover:text-white transition-all duration-300"
                        onClick={closeModal}
                        >
                        close
                      </button>
                    </div>
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

  export default EditListingModal