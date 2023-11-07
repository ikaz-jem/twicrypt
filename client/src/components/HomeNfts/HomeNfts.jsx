import { HashLoader } from "react-spinners"
import ButtonPrimary from "../../shared/Button/ButtonPrimary"
import NftSliderCat2 from "../../containers/Earn/components/NftSlider/NftSliderCat2"
import NftSlider from "../../containers/Earn/components/NftSlider/NftSlider"
import { useSelector } from "react-redux"
import { Suspense } from "react"
import { useGetMarketListings } from "../../containers/MarketPlace/hooks/web3Hooks/Listing/useGetMarketListings"
import { Link } from "react-router-dom"
import {BsArrowRightShort} from "react-icons/bs"

const HomeNfts = () => {

    const listings = useSelector(state=>state.marketPlace.allListings)
    const marketData =useGetMarketListings()

    
    return (
        <>

            {!listings  ?

                <div className="  h-40 flex relative" >
                    <HashLoader size={50} color="#fff" style={{ text: 'center' }} />
                    <p className="text-whie">Loading data ...</p>
                </div>
                :

                <div>
                    <div className="flex justify-between overflow-visible ">
                        <h3 className="text-left my-2 p-0 border-b border-neutral-800 w-auto pb-2 text-pink-600 font-bold text-xl ">Auctions <span className="m-0 pl-5 text-neutral-400 text-base ">twicrypt auctions</span>  </h3>
                        <Link to='/dashboard/mint' className="w-auto bg-white text-black flex items-center px-4 rounded-full hover:bg-pink-500 hover:text-white">Get your chance  !</Link>
                    </div>
                    {
                        <Suspense fallback={
                            <>
                                <div className=" h-full  flex justify-center items-center " >
                                    <HashLoader size={50} color="#fff" style={{ text: 'center' }} />
                                </div>
                            </>}>
                            <NftSliderCat2 data={listings &&listings?.auction} />
                        </Suspense>
                    }
                    <div className="flex items-center justify-end">
                    <Link to='/dashboard/marketplace/all-listings' className="w-auto bg-white text-black flex items-center px-4 py-2 rounded-full hover:bg-pink-500 hover:text-white">view more <BsArrowRightShort/> </Link>
                    </div>



                    <div className="flex justify-between ">
                        <h3 className="text-left font-bold text-xl my-2 p-0 border-b border-neutral-800 w-full text-pink-600 pb-2">Nfts on sale <span className="m-0 pl-5 text-neutral-400 text-base "></span>  </h3>
                    </div>
                    {<NftSlider data={listings && listings?.listings} />}
                    <div className="flex items-center justify-end">
                    <Link to='/dashboard/marketplace/all-listings' className="w-auto bg-white text-black flex items-center px-4 py-2 rounded-full hover:bg-pink-500 hover:text-white">view more <BsArrowRightShort/> </Link>
                    </div>
                </div>
            }
        </>)
}


export default HomeNfts