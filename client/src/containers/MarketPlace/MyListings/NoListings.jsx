
import { GiChart } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const NoListings = () => {


    return (

        <div className="flex items-center justify-center w-full h-full flex-col ">
            <h1>you have no active listings</h1>
            <GiChart className='text-9xl text-neutral-800' />
           <div className='flex gap-5'>

            <Link to='/earn/mint' className="inline-flex my-5 justify-center items-center gap-2 rounded-md border border-transparent bg-blue-500 hover:bg-pink-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300">

                <p className="text-white">Mint New Nft</p>
            </Link>
            <Link to='/earn/marketplace/create-listing' className="inline-flex my-5 justify-center items-center gap-2 rounded-md border border-transparent bg-blue-500 hover:bg-pink-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300">

                <p className="text-white">create listing</p>
            </Link>
           </div>
        </div>


    )


}

export default NoListings