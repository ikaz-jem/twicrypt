
import { useGetNftByAccount } from "../hooks/useGetNftByAccount"
import React from "react"
import CardCategory1 from "../../../shared/Cards/NftCards/NftsCard"
import Spinner from "../../../shared/Spinner/Spinner"
import { useNavigate } from "react-router-dom"

const MyNfts = ({ nftFilter }) => {

    const { data, isLoading, hasError } = useGetNftByAccount(nftFilter)



    const RenderAllMyNfts = () => {
        if (hasError) {
            return (
                <>  something went Wrong !</>
            )
        } else if (data ==''){
            return (
                <> You have No assets on this Network !!</>
            )
        }

        return (
            <>
                {
                    !!data && !isLoading ? data.map((nft,i) => {
                        return (

                            <CardCategory1 key={i} data={{ title: nft.name, thumbnailUrl: nft.image_url, id: nft.identifier }}  />
                        )
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
            <div className="container--xxxlarge flex justify-center items-center flex-col  ">
                <main>
                    <div className="flex flex-col  gap-10  w-auto h-auto items-center justify-center   ">
                        <div className="grid gap-5 place-content-center place-items-center">
                            <RenderAllMyNfts />
                        </div>
                    </div>
                    {/* PAGINATION */}
                    <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
                        {/* <Pagination />
            <ButtonPrimary loading>Show me more</ButtonPrimary> */}
                    </div>
                </main>
                <hr className="border-slate-200 dark:border-slate-700" />
            </div>
        </React.Fragment>
    )

}


export default MyNfts