



const EligibleNfts = () => {


    return (
        <div className="py-5 px-5 border-pink-600 rounded-3xl w-full h-full flex  justify-center border-l border-r ">
            <div className="flex  flex-col ">
                <h5 className="text-left pl-2">Select from your twicript Collection :</h5>
                <div className="flex">
                    <div className=" w-full h-full flex my-10 items-start justify-center">
                        {selectedNft && Nfts.data ?
                            <div className="">
                                <img src={selectedNft?.image_url} className="w-80 h-80 object-cover rounded-xl cursor-pointer" />
                                <h5 className="font-bold">{selectedNft?.name}</h5>
                            </div> : <div className="">
                                <div className="w-80 h-80  rounded-xl cursor-pointer border border-neutral-800 flex items-center justify-center text-neutral-800" >
                                    <p className=" text-neutral-800">                                        Select An Nft to list !
                                    </p>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="   w-1/3 flex flex-col border rounded-l-md h-[50vh] overflow-y-scroll p-2 m-0 border-neutral-800 items-start justify-start  gap-2 ">
                        {Nfts?.data && Nfts?.data?.map((nft, i) => {
                            if (nft_contract?.toLowerCase() == nft?.contract?.toLowerCase()) {
                                return <img key={i} src={nft.image_url} className={`w-26 h-26 object-cover rounded-xl cursor-pointer ${selectedNft == nft && ' outline outline-pink-600 '} `} onClick={(e) => handleSelect(nft, i, e)} />
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EligibleNfts