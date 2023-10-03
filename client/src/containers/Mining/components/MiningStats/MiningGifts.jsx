import { formatEther } from "viem"
import { useSelector } from "react-redux"



const MiningGifts = ()=> {

  const data = useSelector(state => state.mining.session)


const bankData = data?.result?.bankData || null
const userData = data?.result?.userData || null


    return(
    // giftcount
    
        <div className="h-full w-full bg-[#00000070] rounded-lg border border-neutral-900 py-5" >




                <p className=" text-xs text-yellow-500">you can only claim gifts one by one</p>
            <div className="flex items-center justify-between px-2 py-1">
                <p className="text-white">mine 100 tokens</p>
              { <button disabled={ bankData &&  userData?.giftCount =='1' && formatEther((bankData?.funds))  >= 100 ? false:true} className="px-3 py-1  rounded bg-orange-500 disabled:bg-gray-400 text-white ">{ bankData &&  userData?.giftCount =='1' && formatEther((bankData?.funds))  >= 100 ? 'claim gift': 'gift claimed'}</button>}
            </div>
            <div className="flex items-center justify-between px-2 py-1">
                <p>mine 500 tokens</p>
              { <button disabled={bankData &&  userData?.giftCount =='2' && formatEther((bankData?.funds)) >= 120 ? false:true} className="px-3 py-1  rounded bg-orange-500 disabled:bg-gray-400 text-white ">claim gift</button>}
            </div>
            <div className="flex items-center justify-between px-2 py-1">
                <p>mine 1000 tokens</p>
              { <button disabled={bankData &&  userData?.giftCount =='3' && formatEther((bankData?.funds)) >= 140 ? false:true} className="px-3 py-1  rounded bg-orange-500 disabled:bg-gray-400 text-white ">claim gift</button>}
            </div>
            <div className="flex items-center justify-between px-2 py-1">
                <p>mine 1500 tokens</p>
              { <button disabled={bankData &&  userData?.giftCount =='4' && formatEther((bankData?.funds)) >= 150 ? false:true} className="px-3 py-1  rounded bg-orange-500 disabled:bg-gray-400 text-white ">claim gift</button>}
            </div>
            <div className="flex items-center justify-between px-2 py-1">
                <p>mine 2000 tokens</p>
              { <button disabled={bankData &&  userData?.giftCount =='5' && formatEther((bankData?.funds)) >= 2000 ? false:true} className="px-3 py-1  rounded bg-orange-500 disabled:bg-gray-400 text-white ">claim gift</button>}
            </div>
            <div className="flex items-center justify-between px-2 py-1">
                <p>mine 2500 tokens</p>
              { <button disabled={bankData &&  userData?.giftCount =='6' && formatEther((bankData?.funds)) >= 2500 ? false:true} className="px-3 py-1  rounded bg-orange-500 disabled:bg-gray-400 text-white ">claim gift</button>}
            </div>
            <div className="flex items-center justify-between px-2 py-1">
                <p>mine 3000 tokens</p>
              { <button disabled={bankData &&  userData?.giftCount =='7' && formatEther((bankData?.funds)) >= 3000 ? false:true} className="px-3 py-1  rounded bg-orange-500 disabled:bg-gray-400 text-white ">claim gift</button>}
            </div>
        </div>
    )
    
    }


    export default MiningGifts


    /*
      boostTime  = 24hr 
      boost price = 30tw  / 6 sessions; / session 1nft 30 tw * 6 = 180 - 30 = 150

      1 single nft = stake time;
      multiple nfts = stake time loop


      mapping(address=> uint256) powerStarTime ;
      mapping (address=>bool) autoRecharge;




claimBank {
  sessionFees[msg.sender]= block.timeStamp  + boostTime
}


start session {
  if (autoRecharge[msg.sender]){
    if (powerStarTime[msg.sender] >= block.timstamp) {
Banks[msg.sender].funds -= boostPrice
    }else {
      uint256 diffrence = powerStarTime[msg.sender] - block.timestamp;
      uint256 total =( boostPrice / 3600 )* diffrence;
      Banks[msg.sender].funds -= total

    }

  } 
  if (sessionData[msg.sender].sessionCount>0) {
    require(powerStarTime[msg.sender] <= block.timestamp , " recharge your power")
  
  }
 

....

}


stake (tokenId) {

bool old = iseOld[tokenId]
     old && NftLife[stakedtokenId] == 0 ;  "no power"
     !old && NftLife[stakedtokenId] == 100


}


    1-  session start 

     stakedtokenId = stakedNfts[msg.sender].tokenId
     NftLife[stakedtokenId] 
  
 
    
 5 nfts {

1 , 2 , 3 , 4 , 5 



 }

 5 * fees ;






1- set boost manually 
2- set boost from msg.sender
3- boosts data





    */