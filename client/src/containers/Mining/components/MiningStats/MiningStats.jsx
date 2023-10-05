

import { unixToDate } from "../../../../utils/unixToDate"
import animation from '../../../../media/animation.GIF'
import RewardCounter from "./RewardCounter"
import { useSelector } from "react-redux"
import MiningGifts from "./MiningGifts"


const MiningStats = () => {

    const data = useSelector(state => state.mining.session)
    const bankData = data?.result?.bankData || null
    const userData = data?.result?.userData || null
    const currentTime = Math.floor(new Date().getTime() / 1000);


    
    

return (
        <div className=" w-full lg:w-[52%]  h-full rounded-xl  bg-gradient-to-r from-[#0d0025] via-[#270823] to-[#0d0025] px-5 pb-5 shadow-xl shadow-blue-900">
            {/* <Contribute /> */}
            <div className="flex items-center justify-center flex-col z-max ">
              
                <RewardCounter />


                <div className="flex w-full ">
                    <div className="w-1/2 h-full text-xs ">
                        <MiningGifts bankData={bankData} />
                    </div>
                    <div className='w-1/2' >
                        <img src={animation} alt="" className="w-[83%]" />
                    </div>
                </div>


                <div className=" w-full h-full rounded  ">
                    <div className=" flex gap-5 ">
                        <div className="border rounded-lg border-neutral-900 p-2 w-1/2 bg-[#00000070] shadow-lg text-xs flex justify-between items-center">
                            {Number(userData?.lastMiningSession) > 0 ?
                                <>
                                    <div className="flex flex-col items-start" >
                                        <p className="font-bold text-md text-pink-500" >last Mining Session : </p>
                                        <p className="font-bold text-md text-yellow-500">ends at :  </p>
                                        <p className="font-bold text-md text-green-500">Next session at : </p>
                                    </div>

                                    <div className="flex flex-col items-start" >
                                        <p className="font-bold text-md text-pink-500"> {unixToDate(Number(userData?.lastMiningSession))} </p>
                                        <p className="font-bold text-md text-yellow-500">{unixToDate(Number(userData?.miningEndTime))} </p>
                                        <p className="font-bold text-md text-green-500">{currentTime >= userData?.miningStartTime ? ' you can start mining !' : unixToDate(Number(userData?.miningStartTime))} </p>
                                    </div>
                                </>

                                : <>

                                    <p className="text-xs text-yellow-500 p-0 m-0"> <span className="text-xl">⚠️</span> claim your bank and start earning for stats to show</p>
                                </>
                            }
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiningStats