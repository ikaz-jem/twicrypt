import SingleAccordion from "../../../../shared/Accordion/SingleAccordion"
import {BsListColumnsReverse,BsListTask} from 'react-icons/bs'
import {MdLabelOutline} from 'react-icons/md'
import { useSelector } from "react-redux"
import bsc from '../../../../media/icons/bsc.svg'
import { Link } from "react-router-dom"
import { unixToDate } from "../../../../utils/unixToDate"


const NftTraits = () => {

const metadata = useSelector(state=>state.marketPlace.nftDetailsPageState)
console.log(metadata)

    return (
        <>
            <div className=" my-5 w-full bg-neutral-900 border border-neutral-700">
                <SingleAccordion title={"description"} Icon={BsListColumnsReverse} className={"rounded-none "} open={true}>
                
                        <div className=" w-auto  bg-neutral-900 flex flex-wrap p-2 ">
                                    {
                                        
                                                <div  className="flex gap-0 p-1  flex-wrap relative w-full">
                                                    <div className="border border-neutral-700 p-2 rounded-md flex flex-col w-40 grow bg-[#aaa1]">
                                                    <p className="text-left m-0 p-0">{metadata?.metadata?.description || 'getting informations ...'}</p>
                                                   
                                                    </div>

                                                </div>
                                        
                                    }
                        </div> 

                </SingleAccordion >
                <SingleAccordion title={"Traits"} Icon={MdLabelOutline} className={"rounded-none "} open={false}>
                
                        <div className=" w-auto  bg-neutral-900 flex flex-wrap p-2 ">
                                    {
                                        metadata?.metadata?.attributes?.map((att, i) => {
                                            return (
                                                <div key={i} className="flex gap-0 p-1  flex-wrap relative w-1/3">
                                                    <div className="border border-neutral-700 p-2 rounded-md flex flex-col w-40 grow bg-[#aaa1]">
                                                        <p className="p-0 m-0 text-neutral-200 font-bold">{att.trait_type}: </p>
                                                        <p className="p-0 m-0 text-neutral-200 text-xs"> {att.value} </p>
                                                    </div>

                                                </div>)
                                        })
                                    }
                        </div> 

                </SingleAccordion >
                <SingleAccordion title={"Details"} Icon={BsListTask} className={"rounded-none "} open={false}>
                
                        <div className=" w-auto  bg-neutral-900 flex flex-wrap p-2  ">
                                      
                                      <div className="w-full flex  items-start justify-between text-neutral-200">
                                            <ul className="text-left">
                                                <li className="py-1 m-0 font-sans font-bold text-xs text-neutral-200">contract address</li>
                                                <li className="py-1 m-0 font-sans font-bold text-xs text-neutral-200">chain</li>
                                                <li className="py-1 m-0 font-sans font-bold text-xs text-neutral-200">token Id </li>
                                                <li className="py-1 m-0 font-sans font-bold text-xs text-neutral-200">owner </li>
                                                <li className="py-1 m-0 font-sans font-bold text-xs text-neutral-200">created at </li>
                                            </ul>

                                            <ul className="text-right">
                                            <li className="py-1 m-0 font-sans font-bold text-xs text-neutral-200"> <Link className="text-blue-500 hover:text-pink-500" to={`https://bscscan.com/address/${metadata?.contractAddress}`} target="blank" >{metadata?.contractAddress} </Link></li>
                                            <li className="py-1 m-0 font-sans font-bold text-xs text-neutral-200 text-right">binance smart chain</li>
                                            <li className="py-1 m-0 font-sans font-bold text-xs text-neutral-200">{metadata?.tokenId}</li>
                                            <li className="py-1 m-0 font-sans font-bold text-xs text-neutral-200">  <Link className="text-blue-500 hover:text-pink-500" to={`https://bscscan.com/address/${metadata?.nftOwner}`}>{metadata?.nftOwner}</Link></li>
                                            <li className="py-1 m-0 font-sans font-bold text-xs text-neutral-200">  {unixToDate(metadata?.metadata?.date)}</li>
                                            </ul>



                            
                                      </div>

                        </div> 

                </SingleAccordion >



                
            </div>

        </>
    )
}


export default NftTraits