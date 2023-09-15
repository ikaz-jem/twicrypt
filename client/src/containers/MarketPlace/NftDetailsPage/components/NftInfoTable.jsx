import BuyerViewDetails from "./BuyerViewDetails"
import NoNftOwner from "./NoNftOwner"
import OwnerViewDetails from "./OwnerViewDetails"
import { useSelector } from "react-redux"

const NftInfoTable = () => {

const user = useSelector(state=>state.marketPlace.nftDetailsPageState)


const isOwner = user?.isOwner
const nftOwner = user?.nftOwner

const RenderSidBar = ()=> {

if (isOwner && nftOwner!==undefined || nftOwner) {
    return <OwnerViewDetails/>
} else if (nftOwner===undefined){
    return <NoNftOwner/>
} else return <BuyerViewDetails/>

}

return (
        <>
<RenderSidBar/>
        </>
    )
}


export default NftInfoTable

