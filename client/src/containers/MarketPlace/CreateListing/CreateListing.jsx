
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
import { useNftBalanceOf } from "../../../hooks/web3/useNftBalanceOf";




const RenderNobalance = () => {
    return (

        <div className="container--xxxlarge container--center  mb-10  h-[60vh] border border-neutral-800 rounded-xl ">
            <div className="w-full h-full flex items-center justify-center flex-col ">

                <h1 className="p-0 m-0 font-bold text-yellow-500"> you don't hold any twicrypt nfts :(</h1>
                 <h6 className="p-0 mt-10  text-pink-500"> mint twicrypt nfts and get the chance to win up to 1BTC ! also you can send them to mine tokens for you as you sleep  🥳🥳🚀🚀 </h6>

                <div className="flex gap-5 justify-center py-6 relative">
                    <Link to='/dashboard/mint' className="py-4 text-sm font-bold px-5 bg-blue-500 rounded-lg text-white hover:bg-pink-600 transition-all duration-300 ">mint nfts</Link>
                </div>


            </div>
        </div>
    )
}





const RenderData = () => {
    const myNfts = useSelector(state => state.marketPlace.createListing)
    // calling Nfts owned from the store
    const Nfts = useSelector(state => state.marketPlace.mynfts)
    // hook to fetch collection from contract
    useGetNftByContract()
    const { address } = useSelector(state => state.session)
    return (
        <>
            {address ? <div className="container--xxlarge container--center  mb-20 ">
                <main className="w-full h-full">
                    <div className="flex gap-5 w-auto h-auto justify-center flex-wrap lg:flex-nowrap">
                        {myNfts?.selectedNft &&
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
                            {Nfts?.isLoading ? <Spinner message={'loading assets ...'} /> : Nfts?.data && <NftListingPreview myNfts={myNfts} Nfts={Nfts} />}
                        </div>
                    </div>
                </main>
            </div> :
                <div className="container--xxxlarge container--center  mb-10 ">
                    <main className="w-full h-full mb-80">
                        <ConnectWalletError />
                    </main>
                </div>
            }
        </>
    )
}




const CreateListing = () => {
    //connected user address
    const nftBalance = useNftBalanceOf()
    return (
        <React.Fragment>
            {nftBalance && nftBalance?.data > 0 ? <RenderData /> : <RenderNobalance />}
        </React.Fragment>
    )
}


export default CreateListing