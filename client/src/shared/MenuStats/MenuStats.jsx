
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { MdOutlinePending, MdGeneratingTokens } from 'react-icons/md'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'

const MenuStats = () => {


    return (

        <div className={`w-full shadow-md shadow-black  h-auto border-b    bg-opacity-30 rounded-3xl mt-5 panel-1 py-2 relative flex gap-20 items-center pl-10`}>


            {/* 
{
userNft && userNft.map((nft)=>nft.image_url ? <img src={nft.image_url} key={nft.created_at} />:'' )

} */}

            <div className="flex items-center justify-start  m-0 p-0">
                <RiMoneyDollarCircleLine className="text-white text-2xl m-0" />
                <h6 className="m-0 pl-4">106587</h6>
            </div>
            <div className="flex items-center justify-start  m-0 p-0">
                <MdGeneratingTokens className="text-white text-2xl m-0" />
                <h6 className="m-0 pl-4">58486</h6>
            </div>
            <div className="flex items-center justify-start  m-0 p-0">
                <AiOutlineCheckCircle className="text-white text-2xl m-0" />
                <h6 className="m-0 pl-4">84487</h6>
            </div>
            <div className="flex items-center justify-start  m-0 p-0">
                <MdOutlinePending className="text-white text-2xl m-0" />
                <h6 className="m-0 pl-4">Pending</h6>
            </div>

            <div className="flex items-center justify-start  m-0 p-0">
                <FaUsers className="text-white text-2xl m-0" />
                <h6 className="m-0 pl-4">10</h6>
            </div>

        </div>

    )
}

export default MenuStats