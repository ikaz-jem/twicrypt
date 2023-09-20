import CardCategory1 from "../../shared/Cards/NftCards/NftsCard";
import InfoCard from "../../shared/infoCard/InfoCard";
import { useGetMintedNfts } from "./hooks/useGetMintedNfts";
import { nft_contract } from "../MarketPlace/data/Addresses";
import MiningRewardCalculator from "./components/MiningRewardCalculator/MiningRewardCalculator";
import RewardCounter from "./components/RewardCounter";
import { AiOutlineBank } from 'react-icons/ai'
import { BsPiggyBank, BsSpeedometer2 } from 'react-icons/bs'
import MiningMenu from "./components/Menu/MiningMenu";
import Spinner from "../../shared/Spinner/Spinner";

import anime from '../../media/3d2.png'
import animation from '../../media/animation.GIF'



const MiningHome = () => {

    const Nfts = useGetMintedNfts({
        chain: 'bsctestnet'
    })
    const handleClick = () => {

    }

    const Card = ({ data }) => {
        return (
            <>
                <div className=" border  h-20 w-20 rounded-lg overflow-hidden ">
                    <img alt="art nft" src={data.image_url} />
                </div>
            </>
        )
    }


    const RenderMiningSession = () => {

        return (

            <div className=" w-full lg:w-[52%] border border-neutral-700 h-auto rounded-xl ">
                {/* <Contribute /> */}
                <h1 className="m-0 p-0">start mining session now !</h1>
                <img src={animation} alt="" className="w-[50%]" />

            </div>


        )


    }



    const RenderLeftMenu = () => {

        return (
            <div className="w-full lg:w-[45%] h-full  border border-neutral-700 rounded-xl overflow-hidden shadow-xl ">
                <div className=" h-suto w-full">
                    <MiningMenu />
                </div>
                <div className="w-full flex justify-center items-center overflow-clip relative gap-10  ">
                </div>

                <div className="flex items-center justify-center overflow-y-scroll h-[50vh] pt-20 ">
                    <div className="overflow-none gap-2 flex items-center justify-start  p-2  flex-wrap w-auto h-auto mx-auto ">
                        {Nfts.data ?                            Nfts && Nfts?.data?.map((nft, i) => {
                                if (nft.contract === nft_contract) {

                                    return <Card handleClick={(e) => handleClick(e, nft)} key={i} data={nft} />
                                } else {
                                    return null
                                }
                            })
                       : <Spinner message={'getting your Nfts ...'}/> }
                    </div>
                </div>

                <div className="m-0 p-0 flex flex-col gap-1 border">
                    <h1>empty</h1>
                </div>

            </div>


        )

    }



    return (
        <div className=" w-auto container--xxxlarge p-0 container--center  bg-neutral-900 rounded overflow-hidden mb-40 px-5">
            {/* 
<div className="flex items-center">

<InfoCard title={'Start mining session !'}  desc={'start mining session to mine tokens , session expires in certain time'}/>
<InfoCard title={'save funds to bank !'}  desc={'save your funds to your bank after session ends'}/>
<InfoCard title={'claim!'}  desc={'claim your rewards and withdraw to your account'}/>
</div> */}

            <div className="flex rounded-xl m-5">
                <ul className="flex justify-start gap-5 py-1 wrap my-2  w-full border-b border-neutral-700 rounded-xl text-sm text-white font-bold">
                    <AiOutlineBank className="text-white" /> <li>  Bank capacity : 0</li>
                    <BsPiggyBank className="text-white" />  <li>Total Earnings: 0</li>
                    <AiOutlineBank className="text-white" /> <li>next Session: 23</li>
                    <BsSpeedometer2 className="text-white" />   <li>mining speed: 23</li>
                </ul>
            </div>

            <div className="grid grid-cols-2 gap-2  w-auto container--xxxlarge px-10 py-2  container--center  place-items-start place-content-start relative  bg-neutral-800 ">
                <RenderLeftMenu />
                <RenderMiningSession />
            </div>
        </div>
    )


}


export default MiningHome