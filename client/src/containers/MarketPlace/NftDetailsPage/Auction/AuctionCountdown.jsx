import { useSelector } from "react-redux"
import { useState,useEffect } from "react"
import { formatEther } from "viem"
import { unixCountDownDays } from "../../../../utils/unixToDate"

const AuctionCountdown = ()=> {

    const [timer,setTimer]=useState(0)

    const auctionData = useSelector(state=>state.marketPlace.mylistings)

    const startTime = Number(auctionData?.Auction?.startsAt)
    const endTime =  Number(auctionData?.Auction?.endsAt)
    const currentTime = Math.floor(new Date().getTime() / 1000);

    const timeLeft = startTime - currentTime
    const remaining = endTime - currentTime


    useEffect(() => {
        const interval = setInterval(() => {
            currentTime < startTime ? setTimer(timeLeft) : setTimer(remaining)
        }, 1000)
        return () => clearInterval(interval)
    }, [timer])


  

        const counter = () => {
            if (currentTime > endTime) {
                return <h2 className="text-left p-0 m-0  text-neutral-200  "> auction ended </h2>
            } else if (currentTime > startTime && currentTime < endTime) {
                return (<>
                    <p className="text-left p-0 m-0 text-xs text-neutral-400">time until auction ends:</p>
                    <h2 className="text-left p-0 m-0  text-neutral-200  "> {timer > 0 ? unixCountDownDays(timer) : 'loading ...'} </h2>
                </>
                )
            } else {
                return (<>
                    <p className="text-left p-0 m-0 text-xs text-neutral-400">time until auction starts:</p>
                    <h2 className="text-left p-0 m-0  text-neutral-200  "> {timer > 0 ? unixCountDownDays(timer) : "loading ..."} </h2>
                </>)
            }
        }
        return (
            <>
                {counter()}
            </>
        )


    

 


}


export default AuctionCountdown