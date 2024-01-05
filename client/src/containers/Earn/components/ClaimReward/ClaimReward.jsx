import { useSelector } from "react-redux"
import { useGetNftByContract } from "../../../MarketPlace/hooks/useGetNftByContract"
import { useNftBalanceOf } from "../../../../hooks/web3/useNftBalanceOf"
import Spinner from "../../../../shared/Spinner/Spinner"
import ConnectWalletError from "../../../../shared/ConnectWalletError/ConnectWalletError"
import React from "react"
import CheckRewards from "./CheckRewards"
import NftRewardsStats from "./NftRewardsStats"
import NftRewardsPreview from "./NftRewardsPreview"
import NoBalance from "./NoBalance"
import { useWalletOfOwner } from "./hooks/useWalletOfOwner"
import PreviewCard from "./PreviewCard"
import MetaTags from 'react-meta-tags'

const ClaimReward = ()=>{
    const { address } = useSelector(state => state.session)
    const RenderData = () => {
        const myNfts = useSelector(state => state.marketPlace.createListing)
        // calling Nfts owned from the store
        const Nfts = useSelector(state => state.marketPlace.mynfts)
        // hook to fetch collection from contract
        useGetNftByContract()
        const { address } = useSelector(state => state.session)
        const nftBalance = useNftBalanceOf()
        const nftIds = useWalletOfOwner()


        return (
            <>
                {address && nftBalance?.data >0? <div className="container--xxlarge container--center  mb-20  rounded-2xl p-5 border border-neutral-800">
                    <main className="w-full h-full">
                            <div className="flex gap-5 w-auto h-auto justify-center flex-wrap lg:flex-nowrap">
                                    <div className="flex flex-col w-full lg:w-1/2 gap-5">
                                        {Nfts?.isLoading ? <Spinner message={'loading assets ...'} /> : <CheckRewards nft={Nfts} />}
                                       
                                    </div>
                                <div className=" w-full lg:w-1/2 h-full flex flex-col items-start justify-start "  >
                                    {Nfts?.isLoading ? <Spinner message={'loading assets ...'} /> : Nfts?.data && <PreviewCard ids={nftIds?.data} />}
                                </div>
                            </div>
                      
                 </main>
                </div> 
                :
                    <div className="container--xxxlarge container--center   ">
                        <main className="w-full h-full ">   
                            <NoBalance />
                        </main>
                    </div>
                }
            </>
        )
    }

 

    return (
        <React.Fragment>
<MetaTags>
            <title>Claim and Check rewards inside your Nfts</title>
            <meta name="description" content="Claim and Check rewards inside your Nfts" />
          </MetaTags>


            <div className="container--xxxlarge container--center  mb-20">
            <div className="my-5">

            {address ? <RenderData /> : <ConnectWalletError />}
            </div>
          {address &&  <NftRewardsStats/>}
            </div>
        </React.Fragment>
    )

}

export default ClaimReward