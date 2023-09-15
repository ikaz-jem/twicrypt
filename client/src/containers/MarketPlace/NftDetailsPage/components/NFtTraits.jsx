import SingleAccordion from "../../../../shared/Accordion/SingleAccordion"
import {BsListColumnsReverse,BsListTask} from 'react-icons/bs'
import {MdLabelOutline} from 'react-icons/md'
import { useSelector } from "react-redux"



const NftTraits = () => {

const metadata = useSelector(state=>state.marketPlace.nftDetailsPageState)

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
                                                        <p className="p-0 m-0">{att.trait_type}: </p>
                                                        <p className="p-0 m-0"> {att.value} </p>
                                                    </div>

                                                </div>)
                                        })
                                    }
                        </div> 

                </SingleAccordion >
                <SingleAccordion title={"Details"} Icon={BsListTask} className={"rounded-none "} open={false}>
                
                        <div className=" w-auto  bg-neutral-900 flex flex-wrap p-2 ">
                                    {
                                        metadata?.metadata?.attributes?.map((att, i) => {
                                            return (
                                                <div key={i} className="flex gap-0 p-1  flex-wrap relative w-1/3">
                                                    <div className="border border-neutral-700 p-2 rounded-md flex flex-col w-40 grow bg-[#aaa1]">
                                                        <p className="p-0 m-0">{att.trait_type}: </p>
                                                        <p className="p-0 m-0"> {att.value} </p>
                                                    </div>

                                                </div>)
                                        })
                                    }
                        </div> 

                </SingleAccordion >



                
            </div>

        </>
    )
}


export default NftTraits