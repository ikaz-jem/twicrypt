import { setListingDetails } from "../../../app/features/MarketPlace/MarketplaceSlice";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../../../shared/popup/Popup";
import toast from "react-hot-toast";
import { useCreateListing } from "../hooks/web3Hooks/useCreateListing";
import { toDecimals } from "../../../utils/web3Functions";




const ListingForm = () => {


    const dispatch = useDispatch()
    const setDetails = (data) => dispatch(setListingDetails(data))
    const handleChangePrice = (e) => setDetails({ price: Number(e.target.value) })

    const listingDetails = useSelector(state => state?.marketPlace?.createListing)

    const approve = useCreateListing({
        tokenId: listingDetails?.selectedNft && listingDetails?.selectedNft?.identifier,
        price: listingDetails?.price && listingDetails?.price || '0',
        value: toDecimals(0.025, 18).toString(),
        image: listingDetails?.selectedNft?.image_url || (''),
        name: listingDetails?.selectedNft?.name || ''

    })

    const testValidity = (e) => {
        const regex = /^(0(\.\d{1,3})?|100000(\.0{1,3})?|\d{1,5}(\.\d{1,3})?)$/;
        e.preventDefault();
        if (regex.test(Number(listingDetails?.price))) {
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
                <h3 className="m-0 p-0 font-bold mb-5">create listing:</h3>
                <form className="p-0 m-0 w-full text-left" onSubmit={(e) => handleSubmit(e)}>
                    <input onChange={handleChangePrice} type="text" className="w-1/3 text-black rounded-lg px-5 py-2" placeholder="Price in BNB" required />
                    <p className="text-left text-neutral-500 font-bold text-xs my-2">Set Selling Price</p>
                    <button type="submit" className="w-1/3 h-12 bg-blue-500 hover:bg-pink-600 text-white transition-all rounded-lg my-2">Create Listing</button>
                </form>
            </div>
        </div>
    )
}

export default ListingForm