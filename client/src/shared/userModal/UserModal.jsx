import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { createAccount,getUserSession } from '../../app/features/session/sessionThunks'
import { useDispatch } from 'react-redux'
import { continueAsGuest } from '../../app/features/session/sessionSlice'

const  UserModal =({show, address})=> {

  const userLoginModal = {
    show :true
  }

useEffect(()=>{
localStorage.clear('userLoginModal')

  
},[])

  const dispatch=useDispatch()



const guest = ()=> dispatch(continueAsGuest())
 
const signUp = ()=> dispatch(createAccount(address))






  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bottom-0 bg-black bg-opacity-0 backdrop-blur-sm" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-black bg-opacity-50 backdrop-blur-sm p-10 text-left align-middle shadow-xl transition-all border border-gray-400">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white"
                  >
                    Yo don't have an account !
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-200">
                      you need an account to get access to all features and services 
                      
                    </p>
                         

                  </div>

                  <div className="mt-4 flex justify-between">
                    <button
                      type="button"
                      className="button  text-sm"
                      onClick={signUp}
                    >
                     one Click account
                    </button>

                    <button
                      type="button"
                      className="button button--hollow"
                      onClick={guest}
                    >
                     continue as guest
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


export default UserModal