
import React from "react"
import { useGetNftByContract } from "../hooks/useGetNftByContract"
import { Link } from "react-router-dom";
import Disclaimer from '../../../shared/Disclamer/Disclaimer'
//Nft contract address 
import { useDispatch, useSelector } from "react-redux";
import ListingForm from "./ListingForm";
import { setListingDetails } from "../../../app/features/MarketPlace/MarketplaceSlice";
import NftListingDetails from "./NftListingDetails";
import ConnectWalletError from "../../../shared/ConnectWalletError/ConnectWalletError";
import NftListingPreview from "./NftListingPreview";
import Spinner from "../../../shared/Spinner/Spinner";


const CreateListing = () => {
    //connected user address
    const { address } = useSelector(state => state.session)

    const myNfts = useSelector(state=>state.marketPlace.createListing)
    // calling Nfts owned from the store
    const Nfts = useSelector(state=>state.marketPlace.mynfts)
    // hook to fetch collection from contract
    useGetNftByContract()



    return (
        <React.Fragment>
            {address ? <div className="container--xxlarge container--center  mb-20 ">
                <main className="w-full h-full">

                    <div className="flex gap-5 w-auto h-auto justify-center flex-wrap lg:flex-nowrap">
                          {  myNfts?.selectedNft &&  
                        <div className="flex flex-col w-full lg:w-1/2 gap-5">
                             <NftListingDetails myNfts={myNfts} />
                                
                        <div className="h-full border-l border-neutral-900 py-5 rounded-2xl" >
                            <div className="flex items-start px-5 flex-col text-xs gap-2 text-left  "> 
                            </div>
                            {/* {Nfts?.data && myNfts?.selectedNft && RenderForm()} */}
                            {Nfts?.data && myNfts?.selectedNft && <ListingForm />}

              
                        </div>
                        </div>
                          }

                        <div className=" w-full lg:w-1/2 h-full flex flex-col items-center justify-end "  >
                            {Nfts?.isLoading ?   <Spinner message={'loading assets ...'}/> :  Nfts?.data &&  <NftListingPreview myNfts={myNfts} Nfts={Nfts}/>  }
                        </div>
                    </div>
                </main>
            </div> :
                <div className="container--xxxlarge container--center  mb-10 ">
                    <main className="w-full h-full mb-80">
                    <ConnectWalletError/>
                    </main>
                </div>
            }
        </React.Fragment>
    )
}


export default CreateListing