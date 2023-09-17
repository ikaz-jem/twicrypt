import SingleAccordion from "../../../../shared/Accordion/SingleAccordion"
import { MdOutlineLocalOffer } from 'react-icons/md'
import { useGetOffers } from "../../hooks/web3Hooks/Offers/useGetOffers"
import { useSelector } from "react-redux"
import Spinner from "../../../../shared/Spinner/Spinner"
import { unixToDate } from "../../../../utils/unixToDate"
import { bigIntToFormated } from "../../../../utils/web3Functions";


const NftOffers = () => {

    const nftOffers = useSelector(state => state.marketPlace.nftOffers)

    const CheckOffers =()=> {
        let lengthArray = [];
    const check = nftOffers?.data?.map((item,i)=>item.offerer?.toLowerCase()?.includes('0x000000') ? null: lengthArray.push(item.name))
    if (lengthArray?.length >0  ){
      return true
    } else return false
    }
    const userHasOffers =  CheckOffers()


    const RenderOffers = () => {
        return (
            <>
                {!nftOffers?.isError ? nftOffers?.data?.map((offer, i) => {

                    if (offer.offerer.includes('0x0000000')){
                        return null
                    } else {
                        return <li className=" flex justify-start items-center w-full border-b border-neutral-800 py-3 pl-3" role="row" key={i}>
                        <p className="w-1/5 flex">{offer?.offerer.slice(0, 10)}</p>
                        <p className="w-1/5 flex">{unixToDate(Number(offer?.offeredAt).toString())}</p>
                        <p className="w-1/5 flex">{bigIntToFormated(Number(offer?.price), 18)} BNB</p>
                        <p className="w-1/5 flex">{Number(offer?.tokenId)}</p>
                        <button className=" px-5 text-xs flex justify-center rounded-xl h-8 items-center bg-blue-500 hover:bg-pink-600 transition-all duration-300">{"accept offer"}</button>
                    </li>
                    }
                    
                }) : 
                <h1>somethings went wrong !</h1>
                }
            </>
        )
    }
    const RenderNoOffers= () => {
        return (
            <>
              
                      <div className="flex flex-col items-center justify-center w-full h-full py-10">

                <h1 className="text-neutral-800 p-0 m-0">This Asset has no offers ...</h1>
                <MdOutlineLocalOffer className="text-6xl text-neutral-800"/>
                      </div>
               
            </>
        )
    }



    return (
        <>
            <div className=" p-5 ">
                <SingleAccordion title={"offers"} Icon={MdOutlineLocalOffer} open={true} >
                    {
                        nftOffers?.data?.isLoading ? <Spinner message={'loading offers'} /> :
                            <div className="border border-neutral-700  rounded-b-2xl bg-neutral-900 flex flex-col overflow-hidden ">
                                <li className="flex  justify-start text-white items-center mx-auto px-auto w-full pl-3  py-2 border-b bg-[#0003] font-bold border-neutral-800" >
                                    <p className="w-1/5 flex">user</p>
                                    <p className="w-1/5 flex">time</p>
                                    <p className="w-1/5 flex">price</p>
                                    <p className="w-1/5 flex">id</p>
                                </li>
                                <div className="w-full overflow-y-scroll h-auto " >
                                    <ul className=" flex w-full  flex-col justify-start items-start m-0 p-0  h-full" role="table">
                                        {userHasOffers ? <RenderOffers /> : <RenderNoOffers/>}
                                    </ul>
                                </div>
                            </div>
                    }
                </SingleAccordion >
            </div>
        </>
    )
}


export default NftOffers