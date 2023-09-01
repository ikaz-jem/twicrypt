import Accordion from "../../../../shared/Accordion/Accordion"
import SingleAccordion from "../../../../shared/Accordion/SingleAccordion"
import ButtonPrimary from "../../../../shared/Button/ButtonPrimary"
import ButtonSecondary from "../../../../shared/Button/ButtonSecondary"
import { Table } from "../../../../shared/Table"

const NftDetailsPage = () => {


    return (


        <div className="m-0  shadow-lg  border-t   border-[#353d284b] h-auto relative flex rounded-xl overflow-hidden  flex-wrap mb-10">


            <div className="flex h-full w-full m-5 flex-wrap lg:flex-nowrap gap-5 lg:gap-5  ">

                <div className=" flex flex-col gap-5 w-full   lg:w-1/2 ">
                    <div className="flex flex-col justify-start items-center  rounded-xl  bg-[#00000050] w-auto h-auto overflow-hidden border border-neutral-900 ">
                        {/* <div className="bg-[#4b005575] w-full h-10 "> hell</div> */}
                        <img src="https://dl.openseauserdata.com/cache/originImage/files/d744f8d0efa5ca742637606cdf95170b.png" className="  object-contain w-80 relative rounded-b-md" />
                    </div>
                    <div className="">
                        <Accordion />
                    </div>
                </div>


                <div className="  w-full lg:w-[70%] md:w-[46%] h-100 m-0  rounded-md">


                    <div className=" w-auto h-full rounded-md flex flex-col mx-5 relative ">

                        <div className=" flex justify-between  ">

                            <div className="p-0 m-0">
                                <h5 className="p-0 m-0">Item Name</h5>
                            </div>
                            <div className="">
                                <h5 className="p-0 m-0">something here maybe buttons</h5>
                            </div>
                        </div>
                        <div className="">
                            {/* <Table/> */}


                            <div className=" rounded-md  py-10 w-auto h-100 ">
                            <SingleAccordion title={'title accordion'} desc={"some description"} />
                                <div className="flex justify-center items-center m-10 ">

                                    <img className='w-60 h-60' src="https://2.bp.blogspot.com/-0I51uHN8NTk/VzCMR8AuAAI/AAAAAAAAND0/HHu8ZKnTn2cUXgbSRrF2OPzQF08QDmhBACLcB/s1600/present-150291_1280.png" alt="" />
                                </div>
                                <div className="flex justify-around">

                                    <ButtonSecondary> ButtonSecondaryon test</ButtonSecondary>
                                    <ButtonPrimary> button buttun</ButtonPrimary>
                                    
                                </div>
                            </div>

                        </div>



                    </div>

                </div>
            </div>

        </div>
    )
}


export default NftDetailsPage


/*






[
    {

data,
data2,
data3,

    }
]


*/

