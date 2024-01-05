import { formatEther } from "viem"
import { useGetUiNftRewardStats } from "./hooks/useGetUiNftRewardStats"
import { Link } from "react-router-dom"
import { Winings } from "./data"
import { MetaTags } from "react-meta-tags"


const WiningNfts = () => {

    const { allClaimedNfts, allWinningNfts } = useGetUiNftRewardStats()

    const totalClaimedNfts = allClaimedNfts?.length
    const totalWinningNfts = allWinningNfts?.length + totalClaimedNfts
    const remaining = allWinningNfts?.length



    

    const totalRewards = allWinningNfts?.reduce((accumulator, object) => {
        return (Number(accumulator) + Number(object?.claimedReward) + Number(object?.reward))
    }, 0)
    const claimedAlredy = allClaimedNfts?.reduce((accumulator, object) => {

        return (Number(accumulator) + Number(object?.claimedReward))
    }, 0)


    const RenderStats = () => {
        const stats = [
            { id: 1, name: 'remaining rewards', value: '400 BNB' },
            { id: 2, name: 'claimed already', value: "0 BNB" },
            { id: 3, name: 'total winning Nfts ', value: '100 NFT' },
            { id: 4, name: 'remaining chances', value: '100' },
        ]
        // const stats = [
        //     { id: 1, name: 'remaining rewards', value: `${formatEther(Number(totalRewards)) + " BNB"}` },
        //     { id: 2, name: 'claimed already', value: `${formatEther(Number(claimedAlredy)) + " BNB"}` },
        //     { id: 3, name: 'total winning Nfts ', value: totalWinningNfts },
        //     { id: 4, name: 'remaining chances', value: remaining },
        // ]

        return (
            <div className="bg-neutral-800 py-5 sm:py-2 rounded-md w-full my-2 mb-5">
                <div className="  px-4 lg:px-4">
                    <dl className="flex items-start justify-evenly flex-wrap">
                        {stats?.map((stat) => (
                            <div key={stat?.id} className="mx-auto flex max-w-xs flex-col gap-y-0">
                                <dt className="text-xs  text-gray-300 font-bold">{stat?.name}</dt>
                                <dd className="order-first text-md font-semibold tracking-tight text-pink-600 ">
                                    {stat?.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        )
    }


    const Card = ({ item }) => {
        return (
            <div className={`  border w-40 h-auto rounded-lg border-neutral-800 overflow-hidden`}>
                <div className="flex flex-col ">
                    <img src={item?.image} alt="" className={` ${!item?.claimed ? "grayscale blur-sm" : ""} w-40 h-40 object-fill`} />
                    <div className="flex flex-col items-start justify-center px-2 py-4">
                            {item?.claimed && <p className="text-xs  font-bold">{'token id : ' +  Number(item?.tokenId)}  </p> }
                        <p className="text-xs font-bold text-yellow-500" > {item?.claimed ? 'claimed' : 'reward not claimed yet'}</p>
                        <p className="text-xs"> {item?.claimed ? 'claimed reward : ' + formatEther(Number(item?.claimedReward)) + " BNB" : 'prize : ' + formatEther(Number(item?.reward)) + " BNB"}</p>
                            {item?.claimed && <Link to={`/dashboard/account/${item?.claimer}`}  className="text-xs text-blue-500 hover:text-pink-500  font-bold">{'claimer : ' + item?.claimer.slice(0,10)} ...  </Link> }
                    </div>
                </div>
            </div>

        )
    }

    return (

        <>
<MetaTags>
            <title>Discover Wining Nfts and Lucky Users !</title>
            <meta name="description" content="Discover Wining Nfts and Lucky Users !" />
          </MetaTags>

            <div className="container container--xxxlarge  rounded-2xl mb-20 pb-10 ">
        
              
                <div className="container container--xxlarge container--center  rounded-xl">
                    <RenderStats />
                    <h3 className="text-left my-5 p-0 border-b border-purple-700 w-full rounded-2xl px-5 pb-2 text-yellow-500 font-bold text-xl ">All winning NFTs <span className="m-0 pl-5 text-neutral-200 text-base ">{ " remaing winning Nfts : " + '100' + " units" }  </span>  </h3>
                    {/* <h3 className="text-left my-5 p-0 border-b border-purple-700 w-full rounded-2xl px-5 pb-2 text-yellow-500 font-bold text-xl ">All winning NFTs <span className="m-0 pl-5 text-neutral-200 text-base ">{ " remaing winning Nfts : " + remaining + " units" }  </span>  </h3> */}
                    <div className="flex gap-2 flex-wrap flex-col">

                        <div className="flex gap-3 flex-wrap ">
                            {
                            //   allWinningNfts && 
                            Winings?.map((item, i) => {
                                   
                                        return <Card key={i} item={item} />
                            
                                })
                            }
                        </div>

                        <h3 className="text-left my-5 p-0 border-b border-purple-700 w-full rounded-2xl px-5 pb-2 text-yellow-500 font-bold text-xl ">claimed Nft rewards <span className="m-0 pl-5 text-neutral-200 text-base ">{"  claimed so far : " +totalClaimedNfts + ' units' }  </span>  </h3>
                        <div className="flex gap-3 flex-wrap ">

                            {
                                allClaimedNfts?.map((item, i) => {
                                    return <Card key={i} item={item} />
                                })
                            }

                        </div>
                    </div>

                </div>


            </div>
        </>


    )

}

export default WiningNfts