import { Dialog, Transition } from '@headlessui/react'
import { Fragment, } from 'react'
import { useDispatch } from 'react-redux'
import { useOwnerOf } from '../hooks/useOwnerOf'
import { Link } from 'react-router-dom'

const  NftModal =({show, data ,setShow ,nftIndex})=> {

  const close = ()=>{
    setShow(!show)
  }


const {data:nftOwnerData, isLoading, hasError } = useOwnerOf(nftIndex)

const ownerWallet = `https://bscscan.com/address/${nftOwnerData}`




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
        <Dialog as="div" className="relative z-10" onClose={()=>null}>
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
                <Dialog.Panel className="w-auto h-auto max-w-5xl max-h-4xl transform overflow-hidden rounded-xl bg-black bg-opacity-50 backdrop-blur-sm py-5 px-10 text-left align-middle shadow-xl transition-all border border-gray-400">
                 <div className='flex justify-between'>

                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white p-0 m-0"
                    >
                   {data?.name}
                  </Dialog.Title>
                  <button className='text-white font-bold border rounded-full p-1 px-3 hover:bg-pink-600'onClick={close} >X</button>
                    </div>

                  <div className="mt-2  flex w-full gap-5 justify-start py-3 flex-wrap ">
                  
                    <div className=' h-full w-auto  ' >
                      <img src={data?.image} alt="" className='w-auto h-auto max-w-[400px] max-h-[400px] rounded-xl  ' />
                    </div>
                    
                    <div className=' md:w-1/2  h-full flex flex-wrap md:grow ' >
                          {
                            data?.attributes?.map((att,i)=>{
                              return (
                                <div key={i} className="flex gap-0 p-1  flex-wrap   ">
                                    <div className=" border-neutral-400 p-2 rounded-md flex flex-col w-32 grow bg-[#aaaaaa42]">
                                        <p className="p-0 m-0 text-neutral-200 font-sans font-bold">{att.trait_type}: </p>
                                        <p className="p-0 m-0 text-neutral-200 font-sans text-xs"> {att.value} </p>
                                    </div>

                                </div>)
                            })
                          }
                    </div>
                  {isLoading ? 'fetching Nft owner ...' :  <p className=' text-neutral-200 py-5 font-sans tracking-wide  bg-[#aaaaaa42] px-4 rounded-2xl '>owner : <Link className='text-neutral-200 text-xs font-bold hover:text-pink-500 transition-all' target='blank' to={ownerWallet}>{nftOwnerData}</Link> </p> }
                  
                         

                  </div>
                        <p className='font-sans text-neutral-200 text-xs'>{data?.description}</p>

                  <div className="mt-4 flex justify-end">
                    

                    <button
                      type="button"
                      className="text-white border py-2 px-4 rounded-md hover:bg-pink-500 transition-all "
                      onClick={()=>setShow(!show)}
                    >
                     close
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


export default NftModal