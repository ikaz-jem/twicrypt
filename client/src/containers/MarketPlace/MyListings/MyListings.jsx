import React, { useState } from "react";

import { useSelector } from 'react-redux'

import { fetchedCarouselData } from "../../../app/features/carousel/carouselSlice";
import { useCreateListing } from "../hooks/web3Hooks/useCreateListing";
import { useGetListing } from "../hooks/web3Hooks/useGetListings";
import { useGetNftByAccount } from "../hooks/useGetNftByAccount";
import SingleAccordion from "../../../shared/Accordion/SingleAccordion";
import { MdOutlineLocalOffer } from 'react-icons/md'
import { Link } from "react-router-dom";

//contracts
import { toFormated,bigIntToFormated} from "../../../utils/web3Functions";
import DeleteListingModal from "./DeleteListingModal";
import EditListingModal from "./EditListingModal";



const MyListings = ({ className = "" }) => {
    const Nfts = useSelector(fetchedCarouselData)




const Listings = () => {

   
        useGetListing()
        const listings = useSelector(state => state?.marketPlace?.allListings)
    
        return (
            <>
                <div className="flex flex-col justify-start items-start gap-1 w-auto  ">
                    <div className=" w-full ">
                        <SingleAccordion title={"My active Listings"} Icon={MdOutlineLocalOffer} open={true} >
                            <div className="border border-neutral-700  rounded-b-2xl bg-neutral-900 flex flex-col overflow-hidden ">

                                <li className="flex  justify-start text-white items-center  w-full pl-4 gap-5  py-2 border-b bg-[#0003] font-bold border-neutral-800" >
                                    <p className="w-16 flex"></p>
                                    <p className="w-20 flex">id</p>
                                    <p className="w-1/5 flex">seller</p>
                                    <p className="w-1/5 flex">holder</p>
                                    <p className="w-1/5 flex">Price</p>
                                    <p className="w-1/5 flex">action</p>
                                </li>

                                <div className="w-full overflow-y-scroll h-[60vh]" >
                                    <ul className=" flex w-full  flex-col justify-start items-start m-0 p-0" role="table">

                                        {
                                            listings && listings?.map((item, i) => {

                                                if (item?.seller.includes('0x0000000')) {
                                                    return null
                                                } else {
                                                    return (

                                                        <li key={i} className=" flex justify-start items-center w-full border-b border-neutral-800 py-2 pl-4 gap-5" role="row">
                                                            {item?.metadata && <img className="w-12 h-12 object-fit rounded-full" src={'https://picsum.photos/200/300'} loading="lazy" />}
                                                            <p className="w-20 flex">{Number(item?.tokenId)}</p>
                                                            <p className="w-1/5 flex">{item?.holder?.slice(0, 10)}</p>
                                                            <p className="w-1/5 flex">{item?.seller?.slice(0, 10)}</p>
                                                            <p className="w-1/5 flex">{bigIntToFormated(Number(item?.price),18)} BNB</p>
                                                            <DeleteListingModal nft={item}/>
                                                            <EditListingModal nft={item}/>
                                                        </li>


                                                    )
                                                }

                                            })
                                        }

                                    </ul>

                                </div>


                            </div>

                        </SingleAccordion >
                    </div>




                </div>

            </>

        )


    }




    const MyNfts = () => {
        const [show, setShow] = useState(false)
        const [sale, setSale] = useState({
            tokenId: null,
            price: "0.1",
            nftContract: '0xc0d60e53A5048113a4C50d99cd65f3A7B0EdF105',
            marketplaceContract: "0x8a4e14aFC69a04f310E2c314c593D0A2FD3Cb4e5",
            value: "10000000000000000"
        })
        const approve = useCreateListing(sale)



        const { data } = useGetNftByAccount()

        const handleClick = async (tokenId, e) => {
            e.preventDefault()

            await setSale((prev) => ({
                ...prev,
                tokenId: tokenId
            }))

            sale.tokenId && approve.write()
        }

        const handleChange = (e) => {
            setSale((pre) => ({
                ...pre,
                price: e.target.value
            }))
        }
        console.log(sale.price)
        const contract = '0xc0d60e53A5048113a4C50d99cd65f3A7B0EdF105'

        return (
            <>

                <div className="w-full h-auto flex gap-2 justify-center items-center flex-wrap">


                    {
                        !!data && data?.map((nft, i) => {
                            if (nft?.contract) {

                                return (

                                    nft.contract.toUpperCase() == contract.toUpperCase() ?
                                        <div key={i} className="border p-2 border-neutral-800 cursor-pointer hover:bg-neutral-700 rounded-md flex flex-col w-1/5">

                                            <p    >
                                                {nft?.name}</p>
                                            {show && <input type="text" placeholder="tokenID" name='tokenId' onChange={handleChange} />

                                            }
                                            <div className="flex gap-2 w-full">
                                                <button onClick={(e) => handleClick(nft.identifier, e)} className="border w-1/2">list</button>
                                                <button onClick={() => setShow(!show)} className="border w-1/2">set Price</button>
                                            </div>
                                        </div>

                                        : ""

                                )
                            } else {
                                return null
                            }

                        })
                    }

                </div>


            </>


        )


    }





    return (
        <div className="container  flex justify-center items-center  relative  w-full h-full mb-20">
            <main>
                {/* FILTER */}
                <div className="flex gap-5 justify-start py-4 relative">

                    <Link to='my-nfts' className="py-2 text-xs px-3 bg-blue-500 rounded-lg text-white hover:bg-pink-600 transition-all duration-300 ">my nfts</Link >
                    <Link to='create-listing' className="py-2 text-xs px-3 bg-blue-500 rounded-lg text-white hover:bg-pink-600 transition-all duration-300 ">create new listing</Link >
                    <Link to='/earn/mint' className="py-2 text-xs px-3 bg-blue-500 rounded-lg text-white hover:bg-pink-600 transition-all duration-300 ">mint nfts</Link>
                </div>



                {/* <MyNfts/> */}

                {/* <hr className=" mt-5 mb-5 border-slate-700 " /> */}
                {/* <Sliders /> */}


                {/* <CreateListing /> */}
                <Listings />


                {/* <RenderCards /> */}
                {/* PAGINATION */}
                <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
                    {/* <Pagination />
            <ButtonPrimary loading>Show me more</ButtonPrimary> */}
                </div>
            </main>
        </div>
    );
};

export default MyListings;