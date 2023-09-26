import { formatEther } from "viem"




const MiningGifts = ({bankData})=> {




    return(
    // giftcount
    
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
    )
    
    }


    export default MiningGifts