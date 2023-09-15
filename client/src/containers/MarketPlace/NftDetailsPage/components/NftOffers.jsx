import SingleAccordion from "../../../../shared/Accordion/SingleAccordion"
import {MdOutlineLocalOffer} from 'react-icons/md'

const NftOffers = () => {

    return (
        <>
            <div className=" p-5 ">
                <SingleAccordion title={"offers"} Icon={MdOutlineLocalOffer} open={true} >
                        <div className="border border-neutral-700  rounded-b-2xl bg-neutral-900 flex flex-col overflow-hidden ">
                            <li className="flex  justify-center text-white items-center mx-auto px-auto w-full pl-3  py-2 border-b bg-[#0003] font-bold border-neutral-800" >
                                <p className="w-1/4 flex">item</p>
                                <p className="w-1/4 flex">item</p>
                                <p className="w-1/4 flex">item</p>
                                <p className="w-1/4 flex">item</p>
                            </li>
                            <div className="w-full overflow-y-scroll h-60" >
                                <ul className=" flex w-full  flex-col justify-start items-start m-0 p-0" role="table">
                                    <li className=" flex justify-start items-start w-full border-b border-neutral-800 py-3 pl-3 " role="row">
                                        <p className="w-1/4 flex">item</p>
                                        <p className="w-1/4 flex">item</p>
                                        <p className="w-1/4 flex">item</p>
                                        <p className="w-1/4 flex">item</p>
                                    </li>
                                    <li className=" flex justify-start items-start w-full border-b border-neutral-800 py-3 pl-3" role="row">
                                        <p className="w-1/4 flex">item</p>
                                        <p className="w-1/4 flex">item</p>
                                        <p className="w-1/4 flex">item</p>
                                        <p className="w-1/4 flex">item</p>
                                    </li>
                                </ul>
                            </div>
                        </div> 

                </SingleAccordion >
            </div>

        </>
    )
}


export default NftOffers