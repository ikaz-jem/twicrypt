import { setListingDetails } from "../../../../app/features/MarketPlace/MarketplaceSlice";
import { useDispatch } from "react-redux";

import { nft_contract } from "../../../MarketPlace/data/Addresses";


const NftRewardsPreview = ({myNfts,Nfts})=> {
    
    const dispatch = useDispatch()
    const selectNft =(data)=> dispatch(setListingDetails(data))

    const handleSelect = (nft, i, e) => {
        e.preventDefault()
        selectNft({selectedNft:nft})
    };

return (
            <div className="py-5 px-5 border-pink-600 rounded-3xl w-full h-full flex  justify-center border-l border-r ">
                <div className="flex  flex-col  ">
                    <h5 className="text-left pl-2">your twicrypt Nfts :</h5>
                    <div className="flex flex-col">
                       

                        <div className="   w-full flex  border rounded-xl h-full flex-wrap p-2 m-0 border-neutral-600 items-start justify-start  gap-2 ">
                            {Nfts?.data && Nfts?.data?.map((nft, i) => {
                                if (nft_contract?.toLowerCase() == nft?.contract?.toLowerCase()) {
                                    return <img key={i} src={nft.image_url} className={`w-10 h-10 object-cover rounded-xl cursor-pointer ${myNfts?.selectedNft == nft && ' outline outline-pink-600 '} `} onClick={(e) => handleSelect(nft, i, e)} />
                                }
                            })}
                        </div>
                        <div className=" w-full h-full flex my-10 items-start justify-center">
                        


                        {/* {myNfts?.selectedNft && myNfts ?
                            <div className="">
                                <img src={myNfts?.selectedNft?.image_url} className="w-80 h-80 object-cover rounded-xl cursor-pointer" />
                                <h5 className="font-bold">{myNfts?.selectedNft?.name}</h5>
                            </div> : <div className="">
                                <div className="w-80 h-80  rounded-xl cursor-pointer border border-neutral-800 flex items-center justify-center text-neutral-800" >
                                    <p className=" text-neutral-800">                                        Select An Nft to preview !
                                    </p>
                                </div>
                            </div>
                        } */}
                    </div>
                    </div>
                </div>
            </div>
)


}

export default NftRewardsPreview