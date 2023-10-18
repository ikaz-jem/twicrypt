

const AuctionCountdown = ({auctionData})=> {

    const [auctionEnd,setAuctionEnd]=useState(0)
    const price =formatEther(Number(auctionData?.Auction?.floorPrice))
    const highestBid =formatEther(Number(auctionData?.Auction?.highestBid))
    const startTime = Number(auctionData?.Auction?.startsAt)
    const endTime =  Number(auctionData?.Auction?.endsAt)
    const currentTime = Math.floor(new Date().getTime() / 1000);

    const timeLeft = endTime-currentTime
    useEffect(()=>{
       const interval =  setInterval(()=>{
            setAuctionEnd(timeLeft)
        },1000  )
        return ()=> clearInterval(interval)
    },[auctionEnd])


}