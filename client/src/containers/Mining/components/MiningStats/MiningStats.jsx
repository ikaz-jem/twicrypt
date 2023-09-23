

import { unixToDate } from "../../../../utils/unixToDate"
import animation from '../../../../media/animation.GIF'
import { formatEther } from "viem"
import RewardCounter from "../RewardCounter"
import { useSelector } from "react-redux"

const MiningStats = () => {

const data = useSelector(state=>state.mining.session)
const bankData = data?.bankData || null
const userData = data?.userData || null

const RenderGifts = ()=> {

return(

    <div className="w-1/2 h-full text-xs ">
    <div className="h-full w-full bg-[#00000070] rounded-lg border border-neutral-900 py-5" >
        <div className="flex items-center justify-between px-2 py-1">
            <p>mine 100 tokens</p>
          { <button disabled={ bankData && formatEther((bankData?.funds)) >= 100 ? false:true} className="px-3 py-1  rounded bg-orange-500 disabled:bg-gray-400 text-white ">claim gift</button>}
        </div>
        <div className="flex items-center justify-between px-2 py-1">
            <p>mine 500 tokens</p>
          { <button disabled={bankData && formatEther((bankData?.funds)) >= 500 ? false:true} className="px-3 py-1  rounded bg-orange-500 disabled:bg-gray-400 text-white ">claim gift</button>}
        </div>
        <div className="flex items-center justify-between px-2 py-1">
            <p>mine 1000 tokens</p>
          { <button disabled={bankData && formatEther((bankData?.funds)) >= 1000 ? false:true} className="px-3 py-1  rounded bg-orange-500 disabled:bg-gray-400 text-white ">claim gift</button>}
        </div>
        <div className="flex items-center justify-between px-2 py-1">
            <p>mine 1500 tokens</p>
          { <button disabled={bankData && formatEther((bankData?.funds)) >= 1500 ? false:true} className="px-3 py-1  rounded bg-orange-500 disabled:bg-gray-400 text-white ">claim gift</button>}
        </div>
        <div className="flex items-center justify-between px-2 py-1">
            <p>mine 2000 tokens</p>
          { <button disabled={bankData && formatEther((bankData?.funds)) >= 2000 ? false:true} className="px-3 py-1  rounded bg-orange-500 disabled:bg-gray-400 text-white ">claim gift</button>}
        </div>
        <div className="flex items-center justify-between px-2 py-1">
            <p>mine 2500 tokens</p>
          { <button disabled={bankData && formatEther((bankData?.funds)) >= 2500 ? false:true} className="px-3 py-1  rounded bg-orange-500 disabled:bg-gray-400 text-white ">claim gift</button>}
        </div>
        <div className="flex items-center justify-between px-2 py-1">
            <p>mine 3000 tokens</p>
          { <button disabled={bankData && formatEther((bankData?.funds)) >= 3000 ? false:true} className="px-3 py-1  rounded bg-orange-500 disabled:bg-gray-400 text-white ">claim gift</button>}
        </div>
    </div>
</div>
)

}



    return (
        <div className=" w-full lg:w-[52%]  h-full rounded-xl  bg-gradient-to-r from-[#0d0025] via-[#270823] to-[#0d0025] px-5 pb-5 shadow-xl shadow-blue-900">
            {/* <Contribute /> */}
            <div className="flex items-center justify-center flex-col z-max ">
                <RewardCounter />
                <div className="flex w-full ">
                        <RenderGifts/>
                    <div className='w-1/2' >
                        <img src={animation} alt="" className="w-[83%]" />
                    </div>
                </div>
                <div className=" w-full h-full rounded  ">
                    <div className=" flex gap-5 ">
                        <div className="border rounded-lg border-neutral-900 p-2 w-1/2 bg-[#00000070] shadow-lg text-xs flex justify-between items-center">
{ userData?.lastStakeTime >0 ?
 <>
                            <div className="flex flex-col items-start" >
                                <p>last Mining Session : </p>
                                <p>ended :  </p>
                                <p>Next Start : </p>
                            </div>

                            <div className="flex flex-col items-start" >
                                <p> {unixToDate(Number(userData?.lastStakeTime))} </p>
                                <p>{unixToDate(Number(userData?.miningEndTime))} </p>
                                <p>{unixToDate(Number(userData?.miningStartTime))} </p>
                            </div>
                            </>
                               
                            :  <>
                           
                          <p className="text-xs text-yellow-500 p-0 m-0"> <span className="text-xl">⚠️</span> claim your bank and start earning for stats to show</p>
                            </>
                        }
                        </div>
                       { userData?.lastStakeTime >0 ?
                        <div className="border rounded-lg border-neutral-900 p-2 w-1/2 bg-[#00000070] shadow-lg text-xs flex justify-between items-center">
                            <div className="flex flex-col items-start" >
                                <p>last Mining Session : </p>
                                <p>ended :  </p>
                                <p>Next Start : </p>
                            </div>
                            <div className="flex flex-col items-start" >

                                <p> {unixToDate(Number(userData?.lastStakeTime))} </p>
                                <p>{unixToDate(Number(userData?.miningEndTime))} </p>
                                <p>{unixToDate(Number(userData?.miningStartTime))} </p>
                            </div>
                        </div> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiningStats