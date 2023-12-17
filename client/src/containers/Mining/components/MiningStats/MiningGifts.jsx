import { formatEther } from "viem"
import { useSelector } from "react-redux"
import { useClaimGift } from "../../hooks/useClaimGift"


const MiningGifts = ()=> {

  const data = useSelector(state => state.mining.session)


const bankData = data?.result?.bankData || null
const userData = data?.result?.userData || null


const claimGift = useClaimGift()
const handleClick = ()=> {
    claimGift.write()
}

const isDisabled = (count,capacity)=> bankData &&  userData?.giftCount ==count && formatEther((bankData?.funds))  >= capacity ? false:true
const claimed = "bg-yellow-300"


return(
    // giftcount
    
        <div className="h-full w-full bg-[#00000070] rounded-lg border border-neutral-900 py-5" >




                <p className=" text-xs text-yellow-500">you can only claim gifts one by one</p>
            <div className="flex items-center justify-between px-2 py-1 text-xs">
                <p className="text-neutral-200 text-[12px]">mine 100K Tokens & get 10K tw gift</p>
              { <button onClick={handleClick} disabled={isDisabled('1',100000)} className={`px-3 py-1  rounded ${bankData &&  userData?.giftCount >'1' ? ' disabled:bg-black' :'bg-orange-500 disabled:bg-gray-400' } disabled:bg-gray-400 text-neutral-200 text-[12px]` }>{ bankData &&  userData?.giftCount >'1' ?  'gift claimed' : 'claim gift'}</button>}
            </div>
            <div className="flex items-center justify-between px-2 py-1 text-xs">
                <p>mine 1M Tokens & get 100K tw gift</p>
              { <button onClick={handleClick} disabled={isDisabled('2',1000000)} className="px-3 py-1  rounded bg-orange-500 hover:bg-green-500 transition-all disabled:bg-gray-400 text-neutral-200 text-[12px] ">{ bankData &&  userData?.giftCount >'2' ?  'gift claimed' : 'claim gift'}</button>}
            </div>
            <div className="flex items-center justify-between px-2 py-1 text-xs">
                <p>mine 5M Tokens & get 500k tw gift</p>
              { <button onClick={handleClick} disabled={isDisabled('3',5000000)} className="px-3 py-1  rounded bg-orange-500 disabled:bg-gray-400 text-neutral-200 text-[12px] ">{ bankData &&  userData?.giftCount >'3' ?  'gift claimed' : 'claim gift'}</button>}
            </div>
            <div className="flex items-center justify-between px-2 py-1 text-xs">
                <p>mine 10M Tokens & get 1M tw gift</p>
              { <button onClick={handleClick} disabled={isDisabled('4',10000000)} className="px-3 py-1  rounded bg-orange-500 disabled:bg-gray-400 text-neutral-200 text-[12px] ">{ bankData &&  userData?.giftCount >'4' ?  'gift claimed' : 'claim gift'}</button>}
            </div>
            <div className="flex items-center justify-between px-2 py-1 text-xs">
                <p>mine 20M Tokens & get 2M tw gift</p>
              { <button onClick={handleClick} disabled={isDisabled('5',20000000)} className="px-3 py-1  rounded bg-orange-500 disabled:bg-gray-400 text-neutral-200 text-[12px] ">{ bankData &&  userData?.giftCount >'5' ?  'gift claimed' : 'claim gift'}</button>}
            </div>
            <div className="flex items-center justify-between px-2 py-1 text-xs">
                <p>mine 50M Tokens & get 5M tw gift</p>
              { <button onClick={handleClick} disabled={isDisabled('6',50000000)} className="px-3 py-1  rounded bg-orange-500 disabled:bg-gray-400 text-neutral-200 text-[12px] ">{ bankData &&  userData?.giftCount >'6' ?  'gift claimed' : 'claim gift'}</button>}
            </div>
            <div className="flex items-center justify-between px-2 py-1 text-xs">
                <p>mine 100M Tokens & get 10M tw gift</p>
              { <button onClick={handleClick} disabled={isDisabled('7',1000000000)} className="px-3 py-1  rounded bg-orange-500 disabled:bg-gray-400 text-neutral-200 text-[12px] ">{ bankData &&  userData?.giftCount >'7' ?  'gift claimed' : 'claim gift'}</button>}
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