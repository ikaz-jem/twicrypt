
import { useGetNftByAccount } from "../hooks/useGetNftByAccount";
import React, { useEffect, useState } from "react";
import CardCategory1 from "../../../shared/Cards/NftCards/NftsCard";
import Spinner from "../../../shared/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { userData } from "../../../app/features/session/sessionSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ConnectWalletError from "../../../shared/ConnectWalletError/ConnectWalletError";
import { nft_contract } from "../data/Addresses";
import { useWalletOfOwner } from "../../Earn/components/ClaimReward/hooks/useWalletOfOwner";
import { Link } from "react-router-dom";

const MyNfts = () => {
    const Navigate = useNavigate()
    const { address } = useSelector(userData)
    // const { data, isLoading, hasError } = useGetNftByAccount()
    const { chain } = useSelector(state => state.marketPlace.nftFilter)

const ownerNftIds = useWalletOfOwner()



    // const extractCid = (uri) => {
    //     const isIpfs = uri.includes('ipfs://')
    //     if (isIpfs) {
    //         const Cid = uri?.slice(7, uri?.length);
    //         return Cid
    //     } else {
    //         return uri
    //     }
    // }

    const getChainId = () => {
        if (chain == "ethereum") {
            return 1
        } else if (chain == "bsc") {
            return 56
        } else if (chain == "goerli") {
            return 5
        } else if (chain == 'bsctestnet') {
            return 97
        } else return null

    }

    //click to go to preview page
    // const handleClick = (e, meta) => {
    //     e.preventDefault()
    //     Navigate({ pathname: `my-nfts/nft/`, search: `?address=${meta.contract}&id=${meta.identifier}&cid=${extractCid(meta.metadata_url)}&chain=${getChainId()}` })
    // }


    // const RenderNotEligible = () => {
    //     let show = false;
    //     const erroredNfts = !!data && !isLoading && !hasError && data.map((nft, i) => {
    //         if (!nft?.name && !nft?.image) {
    //             show = true
    //             return <CardCategory1 key={i} data={{ title: nft.name, thumbnailUrl: nft.image_url, id: nft.identifier, contract: nft.contract }} />

    //         } else {
    //             return null
    //         }
    //     })

    //     return (
    //         <>
    //             <div className="flex flex-col w-[80vw]">
    //                 {!!show && <h5 className="text-left font-bold py-4">Assets not eligble for listing</h5>}
    //                 <div className="flex gap-5 flex-wrap">
    //                     {
    //                         erroredNfts
    //                     }
    //                 </div>
    //             </div>
    //         </>
    //     )
    // }

    // const RenderAllMyNfts = () => {

    //     if (address == undefined) {
    //         return ( <ConnectWalletError message={'Please connect wallet to view your assets'}/>)
    //     }
    //     else if (data == '') { return (<> <p className="text-bas text-white font-semibold h-[60vh]"> You have No assets on this Network !!</p></>) }
    //     else if (hasError) { return (<> <p className="text-bas text-white font-semibold h-[60vh]">   something went Wrong ! </p></>) }

    //     return (
    //         <>
    //             {
    //                 !!data && !isLoading && !hasError ? ownerNftIds?.map((nft, i) => {
    //                     if (!nft?.name && !nft?.image || nft?.name == 'Ether' || nft?.name == 'BNB') {
    //                         return null
    //                     }
    //                     return (
    //                         <CardCategory1 handleClick={(e) => handleClick(e, nft)} key={i} data={{ title: nft.name, thumbnailUrl: nft.image_url, id: nft.identifier, contract: nft.contract }} />
    //                     )

    //                 }) :
    //                     <div className="flex flex-col gap-5">
    //                         <Spinner message={'loading Nfts ...'} />
    //                     </div>
    //             }
    //         </>)
    // }


    const NoBalance = () => {
        return (
    
            <div className="container--xxxlarge container--center   h-[40vh] border border-neutral-800 rounded-xl my-5 ">
                <div className="w-full h-full flex items-center justify-center flex-col p-20">
    
                    <h3 className="p-0 m-0 font-bold text-yellow-500"> you don't hold any twicrypt nfts :(</h3>
                     <h6 className="p-0 mt-10  text-pink-500"> mint twicrypt nfts and get the chance to win up to 100 BNB +   🥳🥳🚀🚀 </h6>
    
                    <div className="flex gap-5 justify-center py-6 relative">
                        <Link to='/dashboard/mint' className="py-4 text-sm font-bold px-5 bg-blue-500 rounded-lg text-white hover:bg-pink-600 transition-all duration-300 ">mint nfts</Link>
                    </div>
    
    
                </div>
            </div>
        )}


    const RenderMyTwicryptNfts = () => {
        console.log(ownerNftIds)
        return (
            <>
                {
                    ownerNftIds?.data?.length > 0 && ownerNftIds?.data?.map((nft,i) => {
                       
                            return  <CardCategory1 key={i} tokenId={nft} />

                     
                    }) 

                        // <div className="flex flex-col gap-5">
                        //     <Spinner message={'loading Nfts ...'} />
                        // </div>
                }
            </>)
    }


const RenderMyNfts= ()=>{
    return(
        <div className="container--xxxlarge flex justify-center items-center flex-col mb-20 ">
        <div className="w-[70vw] flex justify-start items-center gap-0 flex-col ">
{chain  && <h3 className="text-left my-2 p-0 border-b border-neutral-800 w-full rounded-2xl pl-5 pb-2 text-pink-600 font-bold text-sm ">total owned assets : <span className="m-0 pl-2 text-neutral-400 text-xs ">{ownerNftIds?.length  && ownerNftIds?.length || 0} Nft on this Chain </span>  </h3>
}
            <p className="text-left my-2 p-0 rounded-2xl pl-5 pb-2 text-yellow-600 font-bold text-xs ">⚠️ : Note that listed Nfts or/and nfts on work are not included in this list, you can see them on the corresponding tab  </p>
        </div>
        <main>
            <div className="flex flex-col  gap-10  w-auto h-auto items-center justify-start   ">
                <div className="grid gap-5 place-content-center place-items-center h-full">
                  {/* {chain == "twicrypt" ? <RenderMyTwicryptNfts/> : <RenderAllMyNfts />  } */}
                  {  ownerNftIds?.data?.length > 0 ? <RenderMyTwicryptNfts/> : <NoBalance/> }
                </div>
            </div>
            {/* PAGINATION */}
            <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
                {/* <Pagination />
    <ButtonPrimary loading>Show me more</ButtonPrimary> */}
            </div>
        </main>
{/* {        chain == "twicrypt" ? null :   <RenderNotEligible />
}                <hr className="border-slate-200 dark:border-slate-700" /> */}
    </div>
    )
}

    return (
        <React.Fragment>
           {address ? <RenderMyNfts/> : <ConnectWalletError message={'connect your wallet to check your assets'}/> }
        </React.Fragment>
    )

}


export default MyNfts