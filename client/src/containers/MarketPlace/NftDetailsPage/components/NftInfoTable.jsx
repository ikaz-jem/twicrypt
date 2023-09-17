import BuyerViewDetails from "./BuyerViewDetails"
import NoNftOwner from "./NoNftOwner"
import OwnerViewDetails from "./OwnerViewDetails"
import { useSelector } from "react-redux"
import { marketplace_contract } from "../../data/Addresses"
import Spinner from "../../../../shared/Spinner/Spinner"
import { useCheckIsListed } from "../../hooks/web3Hooks/Listing/useCheckIsListed"

const NftInfoTable = () => {

const nftDetails = useSelector(state=>state.marketPlace.nftDetailsPageState)
const{address}= useSelector(state=>state.session)

const { isListed, data,seller } = useCheckIsListed()

const nftOwner = nftDetails?.nftOwner

const pageVisitor = address
const sellerAddress =seller
const isSller = pageVisitor?.toLowerCase() === sellerAddress?.toLowerCase() ? true :false


const RenderSidBar = ()=> {

//  nftOwner ||  pageVisitor ===sellerAddress
if (nftOwner !==marketplace_contract && nftOwner===pageVisitor || isSller) {
    return  ( <OwnerViewDetails seller={seller}  data={data} isListed={isListed} />)
} else if (nftOwner===undefined ){
    return  <NoNftOwner seller={seller}  data={data} isListed={isListed} metadata={nftDetails} />
} else if (!isSller ){ return <BuyerViewDetails/> }

}

return (
        <>
{ nftDetails?.metadata ? <RenderSidBar/> : <Spinner message={'loading ...'}/>  }
        </>
    )
}


export default NftInfoTable

