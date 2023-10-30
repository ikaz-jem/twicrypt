
import { Link } from "react-router-dom"

const NoBalance = () => {
    return (

        <div className="container--xxxlarge container--center   h-[40vh] border border-neutral-800 rounded-xl my-5 ">
            <div className="w-full h-full flex items-center justify-center flex-col ">

                <h1 className="p-0 m-0 font-bold text-yellow-500"> you don't hold any twicrypt nfts :(</h1>
                 <h6 className="p-0 mt-10  text-pink-500"> mint twicrypt nfts and get the chance to win up to 1BTC ! also you can send them to mine tokens for you as you sleep  🥳🥳🚀🚀 </h6>

                <div className="flex gap-5 justify-center py-6 relative">
                    <Link to='/dashboard/mint' className="py-4 text-sm font-bold px-5 bg-blue-500 rounded-lg text-white hover:bg-pink-600 transition-all duration-300 ">mint nfts</Link>
                </div>


            </div>
        </div>
    )}

    export default NoBalance