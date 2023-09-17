import { useSelector } from "react-redux";
import SingleAccordion from "../../../shared/Accordion/SingleAccordion";
import { bigIntToFormated } from "../../../utils/web3Functions";
import DeleteListingModal from "./DeleteListingModal";
import EditListingModal from "./EditListingModal";
import NoListings from "./NoListings";
import { MdOutlineLocalOffer } from 'react-icons/md'
import { unixToDate } from "../../../utils/unixToDate";
import { useEffect } from "react";
import Spinner from "../../../shared/Spinner/Spinner";
import { Link } from "react-router-dom";
import { nft_contract } from "../data/Addresses";
const UserListings = ()=> {

const myListings = useSelector(state=>state?.marketPlace?.mylistings)
const {address} = useSelector(state=>state.session)



useEffect(()=> {

},[address])


const checkListing =()=> {
    let lengthArray = [];
const check = myListings?.map((item,i)=>item.holder?.toLowerCase()?.includes('0x000000') ? null: lengthArray.push(item.name))
if (lengthArray?.length >0 && address ){
  return true
} else return false
}
const userHasListings =  checkListing()



const RenderMyListings = ()=> {
return(
<>
    {
        myListings?.length > 0  && userHasListings ? myListings?.map((item, i) => {

            if (item?.seller.includes('0x0000000')) {
                return null
            } else {

const price = Number(item?.price)
const tokenId = Number(item?.tokenId)

                return (
                    <div  key={i} className=" flex justify-start items-center w-full border-b border-neutral-800 py-2 pl-4 gap-5 hover:bg-neutral-800 transition-all duration-300" >
                       <img className="w-14 h-14 object-fit rounded-full" src={item?.image} />
                      

                       <div className="w-20 flex text-white">{tokenId}</div>
                        <Link to={`/earn/marketplace/my-nfts/nft/?address=${nft_contract}&id=${(item.tokenId)}&cid=${item.metadata_url}&chain=97`}  className="w-1/6 flex font-bold text-white">{item?.name}</Link >
                        <div className="w-1/6 flex  text-white ">{unixToDate(Number((item?.listedAt).toString()))}</div>
                        <div className="w-1/6 flex text-white">{item?.holder?.slice(0,5)}...</div>
                        <div className="w-1/6 flex text-white">{item?.seller?.slice(0,5)}...</div>
                        <div className="w-1/6 flex text-white">{bigIntToFormated(price, 18)} BNB</div>

                       
                        <div className="w-1/4 flex gap-2">

                        <DeleteListingModal nft={item} />
                        <EditListingModal nft={item} />
                        </div>
                    </div>
                )
            }
        })    : !userHasListings && address && <NoListings /> 
    //     || <div className="flex justify-center items-center w-full h-full">
    //     <Spinner message={'loading list ...'}/>
    //    </div>
      
    }
</>
)




}



const RenderList = ({children})=> {
return (
<SingleAccordion title={"My active Listings"} Icon={MdOutlineLocalOffer} open={true} >
<div className="border border-neutral-700  rounded-b-2xl bg-neutral-900 flex flex-col overflow-hidden ">

    <div className="flex  justify-start text-white items-center  w-full pl-4 gap-5  py-2 border-b bg-[#0003] font-bold border-neutral-800" >
        <p className="w-20 pl-4 flex">Art</p>
        <p className="w-20 flex">id</p>
        <p className="w-1/6 flex">name</p>
        <p className="w-1/6 flex">Listed At</p>
        <p className="w-1/6 flex">seller</p>
        <p className="w-1/6 flex">holder</p>
        <p className="w-1/6 flex">Price</p>
        <p className="w-1/4 flex">action</p>
    </div>
    <div className="w-full overflow-y-scroll h-[60vh]" >
        <div className=" flex w-full h-full flex-col justify-start items-start m-0 p-0" >
           

            {children}
        </div>
    </div>
</div>

</SingleAccordion >

)

}


return (
<>


<RenderList>

 {address && myListings && <RenderMyListings/>}



</RenderList>

</>
)


}


export default UserListings