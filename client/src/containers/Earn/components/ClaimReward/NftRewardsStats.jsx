import { useSelector } from "react-redux";
import SingleAccordion from "../../../../shared/Accordion/SingleAccordion";
import { bigIntToFormated } from "../../../../utils/web3Functions";

import {GiChart} from 'react-icons/gi'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { nft_contract } from "../../../MarketPlace/data/Addresses";
import { useGetClaimedRewards } from "./hooks/useGetClaimedRewards";


const NftRewardsStats = () => {

    const { address } = useSelector(state => state.session)

const {data,isLoading,isError} = useGetClaimedRewards()

console.log(data)
    useEffect(() => {
    }, [address])


    const NoClaimed = () => {
        return (
            <div className="flex items-center justify-center w-full h-full flex-col ">
                <h1>No one Claimed a reward yet</h1>
                <GiChart className='text-9xl text-neutral-800' />
               <div className='flex gap-5'>
                <Link to='/dashboard/mint' className="inline-flex my-5 justify-center items-center gap-2 rounded-md border border-transparent bg-blue-500 hover:bg-pink-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300">
                    <p className="text-white">Mint New Nft</p>
                </Link>
               </div>
            </div>
        )
    }
    



    const RenderClaimedRewards = () => {
        return (
            <>
                {
                    data?.length > 0  ? data?.map((item, i) => {
                        if (item?.claimer.includes('0x0000000')) {
                            return null
                        } else {
                            const claimedReward = Number(item?.claimedReward)
                            const tokenId = Number(item?.tokenId)
                            return (
                                <div key={i} className=" flex justify-start items-center w-full border-b border-neutral-800 py-2 pl-4 gap-5 hover:bg-neutral-800 transition-all duration-300" >
                                    <img className="w-14 h-14 object-fit rounded-full" src={item?.image} />

                                    <div className="w-20 pl-4 flex text-white">{tokenId}</div>
                                    <Link to={`../marketplace/my-nfts/nft/?address=${nft_contract}&id=${(item.tokenId)}&cid=${item.metadata}&chain=97`} className="w-1/2 flex pl-4 font-bold text-white">{item?.claimer   }</Link >
                                    {/* <div className="w-1/4 flex  text-white ">{unixToDate(Number((item?.listedAt).toString()))}</div> */}
                                    <div className="w-1/2 flex text-white pl-4">{bigIntToFormated(claimedReward, 18)} BNB</div>

                                        
                                </div>
                            )
                        }
                    }) : data?.length  == 0 && address && <NoClaimed />
                    //     || <div className="flex justify-center items-center w-full h-full">
                    //     <Spinner message={'loading list ...'}/>
                    //    </div>
                }
            </>
        )
    }


    const RenderList = ({ children }) => {
        return (
            <SingleAccordion title={"last claimed Nft Rewards"} Icon={MdOutlineLocalOffer} open={true} >
                <div className="border border-neutral-700  rounded-b-2xl bg-neutral-900 flex flex-col overflow-hidden ">
                    <div className="flex  justify-start text-white items-center  w-full pl-4 gap-5  py-2 border-b bg-[#0003] font-bold border-neutral-800" >
                        <p className="w-20 pl-4 flex">Art</p>
                        <p className="w-20 flex">id</p>
                        {/* <p className="w-1/4 flex">Listed At</p> */}
                        <p className="w-1/2 flex">claimer</p>
                        <p className="w-1/2 flex">claimed Reward</p>
                    </div>
                    <div className="w-full overflow-y-scroll h-[40vh]" >
                        <div className=" flex w-full h-full flex-col justify-start items-start m-0 p-0" >

                            {children}
                        </div>
                    </div>
                </div>
            </SingleAccordion >
        )
    }


    return (
        <>
            <RenderList>
                {address && data && <RenderClaimedRewards />}
            </RenderList>
        </>
    )
}


export default NftRewardsStats