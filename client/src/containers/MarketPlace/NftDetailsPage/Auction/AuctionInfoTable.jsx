import BuyerViewDetails from "./BuyerViewDetails"
import NoNftOwner from "./NoNftOwner"
import OwnerViewDetails from "./OwnerViewDetails"
import { useSelector } from "react-redux"
import { marketplace_contract } from "../../data/Addresses"
import Spinner from "../../../../shared/Spinner/Spinner"
import { useGetAuctionData } from "../../hooks/web3Hooks/Auction/useGetAuctionData"


const AuctionInfoTable = ({isListed, data,seller,isSeller }) => {


    
const nftDetails = useSelector(state=>state.marketPlace.nftDetailsPageState)
const{address}= useSelector(state=>state.session)

const auctionData = useGetAuctionData()
const nftOwner = nftDetails?.nftOwner


const pageVisitor = address
// const sellerAddress =seller
// const isSeller = pageVisitor?.toLowerCase() === sellerAddress?.toLowerCase() ? true :false


const RenderSidBar = ()=> {

//  nftOwner ||  pageVisitor ===sellerAddress
if (nftOwner !==marketplace_contract && nftOwner===pageVisitor || isSeller) {
    return  ( <OwnerViewDetails  seller={seller}  data={data} isListed={isListed} auctionData={auctionData}  />)
} else if (nftOwner===undefined ){
    return  <NoNftOwner  seller={seller}  data={data} isListed={isListed} auctionData={auctionData} />
} else if (!isSeller ){ return <BuyerViewDetails/> }

}

return (
        <>
{ nftDetails?.metadata ?  <RenderSidBar  /> : <Spinner message={'loading ...'}/>  }
        </>
    )
}


export default AuctionInfoTable

