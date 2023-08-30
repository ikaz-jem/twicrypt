import { Data } from "./data"


const SaleStagesCards = () => {
    return (

        <div className=" w-full relative px-10 bg rounded-xl overflow-hidden   ">
            {/* <h3 className="m-0 py-0 text-[#995533]">Events Started !!</h3>
            <h4 className="m-0 mb-2 font-bold">Be the First To join Twicrypt !!</h4> */}
          

            <div className="flex flex-wrap justify-center lg:justify-start w-auto ">
                {
                    Data.map((item, i) => {
                        return <div className="border bg-gradient-to-r from-pink-500 to-purple-500   border-neutral-900 hover:border-neutral-800  m-3 w-60 flex rounded-tl-3xl rounded-br-3xl   relative text-white overflow-hidden flex-wrap   hover:translate-y-[-2%]  transition-all duration-150 ease-in cursor-pointer  shadow-xl " key={i} onClick={(e) => console.log(item)}>
{/* <div className="bg-gradient-to-r from-red-500 to-blue-500  rounded-tl-3xl rounded-br-3xl  "> */}
                            <div className=" flex flex-col   w-full h-auto gap-0  lg:items-center relative bg-neutral-900 mt-1  rounded-tl-3xl rounded-br-2xl ">
                                {/* <img src="https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frevenue-streams.10c7bba1.png&w=750&q=75" alt="" className=" object-contain p-0 m-0  w-full  " /> */}

                                <div className="flex flex-col items-start justify-start px-2 py-2 gap-2 ">


                                    <div className='flex flex-col  justify-center items-start relative  w-full '>

                                        <h5 className=" text-md font-bold text-neutral-400  m-0 relative ">
                                            {item.title}
                                        </h5>
                                    </div>
                                    <div className="flex justify-start items-start gap-2   w-full">

                                        <p className=" text-white p-0 m-0 relative bg-green-500 h-2 px-4 animate-pulse rounded-full">
                                          
                                        </p>
                                        <p className=" text-white p-0 m-0 relative bg-pink-500 px-4 h-2 animate-pulse rounded-full">
                                          
                                        </p>
                                        <p className=" text-white p-0 m-0 relative bg-[#4D3C77] px-4 h-2 animate-pulse rounded-full">
                                          
                                        </p>
                                        <p className=" text-white p-0 m-0 relative bg-[#ebce29] px-4 h-2 animate-pulse rounded-full">
                                          
                                        </p>

                                    </div>


                                    <p className="text-left text-neutral-500 p-0 m-0 text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                            </div>
                    })
                }
            </div>
        </div>
        

    )
}

export default SaleStagesCards