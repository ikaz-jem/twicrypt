import { Link } from "react-router-dom";
//contracts
import { useGetUserListing } from "../hooks/web3Hooks/Listing/useGetUserListings";
import UserListings from "./UserListings";
import ConnectWalletError from "../../../shared/ConnectWalletError/ConnectWalletError";
import { useSelector } from "react-redux";
const MyListings = () => {
const {address} = useSelector(state=>state.session)


    const Listings = () => {
        useGetUserListing()
        return (
            <>
                <div className="flex flex-col justify-start items-start gap-1 w-auto  ">
                    <div className=" w-full ">
                          <UserListings /> 
                    </div>
                </div>
            </>
        )
    }



    return (
        <div className="container  flex justify-center items-center  relative  w-full h-full mb-20">
           { address ? <main>
                <div className="flex gap-5 justify-start py-4 relative">
                    <Link to='my-nfts' className="py-2 text-xs px-3 bg-blue-500 rounded-lg text-white hover:bg-pink-600 transition-all duration-300 ">my nfts</Link >
                    <Link to='create-listing' className="py-2 text-xs px-3 bg-blue-500 rounded-lg text-white hover:bg-pink-600 transition-all duration-300 ">create new listing</Link >
                    <Link to='/earn/mint' className="py-2 text-xs px-3 bg-blue-500 rounded-lg text-white hover:bg-pink-600 transition-all duration-300 ">mint nfts</Link>
                </div>

                <Listings />
                
                <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
                </div>
            </main> :  
            <div className="w-full h-[50vh] flex items-center justify-center">
                <ConnectWalletError/>
            </div> 
                }
        </div>
    );
};

export default MyListings;