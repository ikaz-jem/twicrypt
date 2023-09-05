
import { useGetNftByAccount } from "../hooks/useGetNftByAccount";
import React, { useEffect, useState } from "react";
import CardCategory1 from "../../../shared/Cards/NftCards/NftsCard";
import Spinner from "../../../shared/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { userData } from "../../../app/features/session/sessionSlice";
import NftErorCard from "../../../shared/Cards/NftErrorCard";
import { useSelector } from "react-redux/es/hooks/useSelector";


const MyNfts = () => {
    const Navigate = useNavigate()
    const { address } = useSelector(userData)
    const { data, isLoading, hasError } = useGetNftByAccount()
    const [notEligble, setNotEligible] = useState([null])

    const extractCid = (uri) => {
        const isIpfs = uri.includes('ipfs://')
        const isJson = uri.includes('.json')
        if (isIpfs) {
            const Cid = uri?.slice(7, uri?.length);
            return Cid
        } else if (isJson) {
            let length = uri?.length - 5
            const Cid = uri?.slice(0, length);
            return Cid
        } else {
            return uri
        }
    }


    const handleClick = (e, meta) => {
        e.preventDefault()
        Navigate({ pathname: `my-nfts/nft/`, search: `?address=${meta.contract}&id=${meta.identifier}&cid=${extractCid(meta.metadata_url)}` })
    }


    const RenderNotEligible = () => {

        return (
            <>
                <div className="flex flex-col w-[80vw]">
                    <h5 className="text-left font-bold py-4">Assets not eligble for listing</h5>
                    <div className="flex gap-5 flex-wrap">
                        {
                            !!data && !isLoading && !hasError && data.map((nft, i) => {
                                if (!nft?.name && !nft?.image) {
                                    return <CardCategory1 key={i} data={{ title: nft.name, thumbnailUrl: nft.image_url, id: nft.identifier, contract: nft.contract }} />

                                } else {
                                    return null
                                }
                            })
                        }
                    </div>
                </div>
            </>


        )

    }

    const RenderAllMyNfts = () => {

        if (address == undefined) {
            return (<> <p className="text-bas text-white font-semibold h-[60vh]">Please connect wallet to view your assets !!</p> </>)
        }
        else if (data == '') { return (<> <p className="text-bas text-white font-semibold h-[60vh]"> You have No assets on this Network !!</p></>) }
        else if (hasError) { return (<> <p className="text-bas text-white font-semibold h-[60vh]">   something went Wrong ! </p></>) }

        return (
            <>
                {
                    !!data && !isLoading && !hasError ? data.map((nft, i) => {
                        if (!nft?.name && !nft?.image) {
                            return null
                        }
                        return <div key={i} onClick={(e) => handleClick(e, nft)} className="">
                            <CardCategory1 key={i} data={{ title: nft.name, thumbnailUrl: nft.image_url, id: nft.identifier, contract: nft.contract }} />
                        </div>

                    }) :
                        <div className="flex flex-col gap-5">
                            <Spinner message={'loading Nfts ...'} />
                        </div>
                }
            </>)
    }

    const RenderMyTwicryptNfts = () => {
        return (
            <>
                {
                    !!data && !hasError && !isLoading ? data.map((nft) => {
                        return (
                            <CardCategory1 data={{ title: nft.name, thumbnailUrl: nft.image_url, id: nft.identifier }} />
                        )
                    }) :
                        <div className="flex flex-col gap-5">
                            <Spinner message={'loading Nfts ...'} />
                        </div>
                }
            </>)
    }

    return (
        <React.Fragment>
            <div className="container--xxxlarge flex justify-center items-center flex-col mb-20 ">
                <div className="w-[70vw] flex justify-start items-center gap-5 ">
                    <p className="text-neutral-500 text-sm font-semibold m-0 py-2">total owned assets : {data?.length || 0}</p>
                    <p className="text-neutral-500 text-sm font-semibold m-0 py-2">errored assets : {"notEligble" || 0}</p>

                </div>
                <main>
                    <div className="flex flex-col  gap-10  w-auto h-auto items-center justify-start   ">
                        <div className="grid gap-5 place-content-center place-items-center h-full">
                            <RenderAllMyNfts />
                        </div>
                    </div>
                    {/* PAGINATION */}
                    <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
                        {/* <Pagination />
            <ButtonPrimary loading>Show me more</ButtonPrimary> */}
                    </div>
                </main>
                <RenderNotEligible />
                <hr className="border-slate-200 dark:border-slate-700" />
            </div>
        </React.Fragment>
    )

}


export default MyNfts