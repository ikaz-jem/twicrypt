import { useSelector } from "react-redux"
import { formatEther } from "viem"
import { useWithdrawReferralProfits } from "../../hooks/useWithdrawReferralProfits"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import {BsClipboardCheck} from 'react-icons/bs'




const Referrals = ({ data }) => {
const {address} = useSelector(state=>state.session)

const location = useLocation()
const affiliateLink = `https://twicrypt.com/dashboard/mint/${address}`


const reffStats = data && data || null
const withdraw = useWithdrawReferralProfits()
const isReferrer =reffStats&& reffStats?.isReferrer || null
const isPartner = reffStats && reffStats?.isPartner|| null

const handleClick = (e)=>{
e.preventDefault()
withdraw.write();
}

const CopyText = ()=>{
    const [copySuccess, setCopySuccess] = useState(false);
  
    const copyToClipboard = () => {
        navigator.clipboard.writeText(affiliateLink)
          .then(() => {
            setCopySuccess(true);
          })
          .catch(err => {
            console.error('Failed to copy to clipboard: ', err);
          });
      };
return (


    <>
    <div className="w-full h-full py-5">
        <p className="text-white font-bold p-0 m-0 text-left text-sm "> your affiliate Link :</p>
    <div className="border border-neutral-400 p-2 flex items-center justify-between rounded-xl">
      <p className="text-xs ">{affiliateLink}</p>
      <button onClick={copyToClipboard}><BsClipboardCheck className="text-xl hover:text-pink-500  transition-all"/></button>
      
    </div>
      {copySuccess && <p className="text-xs text-right ">link copied to clipboard !</p>}
    </div>

    </>
)

}

    const RenderReferrals = () => {
        const referrals = reffStats?.referrals || []

        return (
            <div className=" w-full h-full bg-[#00000083] border rounded-xl border-pink-800 p-5  shadow-xl">

                <div className="flex flex-col items-start justify-center">
                    <p className="p-0 m-0 text-base font-bold">referred users :</p>

               {referrals?.length >0 ? 
               <>
                    <ul className="text-xs p-0 m-0">
                        {referrals && referrals.length > 0 && reffStats?.referrals?.map((ref, i) => {
                            return <li className='text-left text-orange-500'  key={i}>{ref}</li>
                        })}
                    </ul>
                </> : 
                <p className="p-0 m-0 text-yellow-500 text-sm">no one yet ! start by sharing your affiliate link !</p>
                    }
                    </div>
            </div>
        )
    }

    const RenderStats = () => {
        const totalReferrals = Number(reffStats?.reffCount) || 0
        const totalRewards = formatEther(Number(reffStats?.totalReward)) || 0
        const rewardpercent = Number(reffStats?.nftBalance)|| 0
        return (

            <div className="w-full h-full bg-[#00000083] rounded-xl border border-pink-800 flex flex-col p-5 gap-2 shadow-xl">

                <div className="flex justify-between items-start ">

                    <ul className="flex items-start justify-center flex-col text-xs text-white p-0">
                        <li>referral count</li>
                        <li>total rewards</li>
                        <li>reward percent</li>

                    </ul>
                    <ul className="flex items-start justify-center flex-col text-xs text-white">
                        <li>{totalReferrals}</li>
                        <li>{totalRewards} BNB</li>
                        <li>{rewardpercent}% </li>
                    </ul>
                </div>
                <div className="flex items-center justify-start ">

                    <button  disabled={totalRewards<0.01 ? true : false} onClick={(e)=>handleClick(e)} className="py-2 bg-orange-500 w-auto px-4 rounded text-xs hover:bg-pink-500 transition-all disabled:cursor-not-allowed disabled:bg-neutral-400 "> withdraw earnings</button>
                </div>
                <CopyText/>
            </div>

        )
    }



const RenderNotEligible = ()=>{


  
   


return (

    <div className="w-full h-full bg-[#00000083] rounded-xl border border-pink-800 flex flex-col p-5 gap-2 shadow-xl">

    <div className="flex justify-start items-start flex-col">

       <p className="text-neutral-300 font-bold">⚠️ you are not eligble to participate in affiliate program ! :( </p>

       <p className="text-neutral-200 text-base">how to participate in affiliate program ? </p>
    </div>
       <ul className="flex items-start justify-center flex-col text-xs text-white">
                        <li className=" text-xs text-white">🔸 you need at least to hold 1 Nft to participate</li>
                        <li className=" text-xs text-white">🔸 you can win up  to 10% from each sale</li>
                        <li className=" text-xs text-white">🔸 holding more Nfts increases affiliate percentage !</li>
                        <li className=" text-xs text-white">🔸 each Nft has a reward rate of 1%  !</li>
                        <li className=" text-xs text-white">🔸 max rate is 10% </li>
                        <li className=" text-xs text-white">🔸 profits can be withrawn instantly with no limits or conditions</li>
                        <li className=" text-xs text-white">🔸 real time stats and performance will be displayed in the same page</li>
                    </ul>
    
    <div className="flex items-center justify-start ">
       <p className=" text-xs text-yellow-500">⚠️ Note : if you meet affiliate conditions the stats and affiliate link will appear automatically</p>
    </div>
<div className="w-full h-full flex flex-col items-start justify-start gap-2">

    <p  className=" text-base text-pink-500 font-bold">wanna participate as a partner ? </p> 
    <ul className="flex items-start justify-start flex-col text-xs text-white w-full">
                        <li className=" text-xs text-white">benifits :</li>
                        <li className=" text-xs text-white">🔸 flexible percentage</li>
                        <li className=" text-xs text-white">🔸 instant withdraw </li>
                        <li className=" text-xs text-white">🔸 no need to hold nfts</li>
                        <li className=" text-xs text-white">🔸 max rate is 10% </li>
                        <li className=" text-xs text-white">🔸 priority support</li>
                    </ul>
    <button className="py-2 bg-blue-500 w-auto px-4 rounded text-xs hover:bg-pink-500 transition-all ">submit partner request</button>
</div>

   
</div>


)


}


    
    return (

        <div className="w-full h-full flex flex-col gap-2 ">
            
            { !isPartner == "false" || !isReferrer?
                <>
                <RenderNotEligible/>
                </>
                    :
                    
                    <>
                    <RenderStats />
          
            <div className="flex items-center justify-start">
              <RenderReferrals /> 
            </div>
                </>
            }

        </div>
    )
}


export default Referrals