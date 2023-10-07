import { setListingDetails } from "../../../app/features/MarketPlace/MarketplaceSlice";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../../../shared/popup/Popup";
import toast from "react-hot-toast";
import { useCreateListing } from "../hooks/web3Hooks/Listing/useCreateListing";
import { toDecimals } from "../../../utils/web3Functions";
import { parseEther } from "viem";
import { useCreateAuction } from "../hooks/web3Hooks/Auction/useCreateAuction";




const AuctionForm = () => {


    const dispatch = useDispatch()
    const setDetails = (data) => dispatch(setListingDetails(data))
    const handleChange = ({target}) =>{
        const {name,value} = target
        
        setDetails({[name]:value})
        
        }

    const listingDetails = useSelector(state => state?.marketPlace?.createListing)

const auction = useCreateAuction();
    const approve = useCreateListing({
        tokenId: listingDetails?.selectedNft && listingDetails?.selectedNft?.identifier,
        price: listingDetails?.price && listingDetails?.price || '0',
        image: listingDetails?.selectedNft?.image_url || (''),
        name: listingDetails?.selectedNft?.name || '',
        startTime:'',
        endTime:'',
        buyPrice:'',
        value: parseEther('0.025'),

    })

    const testValidity = (e) => {
        const regex = /^(0(\.\d{1,3})?|100000(\.0{1,3})?|\d{1,5}(\.\d{1,3})?)$/;
        e.preventDefault();
        if (regex.test(Number(listingDetails?.price)) && listingDetails?.price >0 ) {
            e.target[0].setCustomValidity('')
            return true

        } else {
            e.target[0].setCustomValidity('')
            return false
        }
    }

    const handleSubmit = (e) => {
        let isValid = testValidity(e)
        if (isValid) {
            approve.write()
        } else {
            toast.custom(
                (t) => (
                    <Popup productImage={null} show={true} t={t} title={`⚠️ price Error `} desc={`Nft price must be a valid number , minimum of 0.0001 BNB/ether`} />
                ),
                { position: "bottom-center", duration: 2000 }
            )

        }
        e.preventDefault();
    }


    return (
        <div className="my-5 px-5 rounded-2xl w-full">
            <div className="  rounded-xl w-full flex flex-col items-start justify-center">
                <h3 className="m-0 p-0 font-bold mb-5">create auction :</h3>
                <form className="p-0 m-0 w-full text-left flex flex-col gap-2" onSubmit={(e) => handleSubmit(e)}>
                    
                    
                    
                    <p className="text-left text-neutral-500 font-bold text-xs ">floor price</p>
                    <input onChange={handleChange} type="text" className="w-1/3 text-black rounded-lg px-5 py-2" placeholder="floor price" required name='floorPrice'/>
                    <p className="text-left text-neutral-500 font-bold text-xs ">buy now price</p>
                    <input onChange={handleChange} type="text" className="w-1/3 text-black rounded-lg px-5 py-2" placeholder="buy now price" required name='buyNow' />
                    
                    <p className="text-left text-neutral-500 font-bold text-xs ">auction start time</p>
                    <input type="datetime-local" onChange={handleChange} className="w-1/3 text-black rounded-lg px-5 py-2" name='startTime'/>
                    <p className="text-left text-neutral-500 font-bold text-xs ">auction end time</p>
                    <input type="datetime-local" onChange={handleChange} className="w-1/3 text-black rounded-lg px-5 py-2" name='endTime' />


                    <button type="submit" className="w-1/3 h-12 bg-blue-500 hover:bg-pink-600 text-white transition-all rounded-lg my-2">Create Auction</button>
                </form>
            </div>
        </div>
    )
}

export default AuctionForm