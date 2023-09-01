
import { FcInvite } from "react-icons/fc";

import { Link } from "react-router-dom";






const Stats = () => {

    const data = [
        {
            title: 'Total Rewards',
            desc: 'your total unclaimed rewards : 10BNB',
            value: '10 BNB',
            icon: ''
        },
        {
            title: 'Referals',
            desc: 'your total unclaimed rewards : 10BNB',
            value: 1050
        },
        {
            title: 'My Nfts',
            desc: 'your total unclaimed rewards : 10BNB',
            value: 12
        },
        {
            title: 'Twycrypt Balance',
            desc: 'your total unclaimed rewards : 10BNB',
            value: "6542tw"
        },
        {
            title: 'Total Rewards',
            desc: 'your total unclaimed rewards : 10BNB',
            value: 10
        },
        {
            title: 'Total Rewards',
            desc: 'your total unclaimed rewards : 10BNB',
            value: 10
        },

    ]


    return (
        <>

            {/* <div className="bg-neutral-200 w-60 h-auto  rounded-xl flex overflow-hidden grow">

                <div className="bg-neutral-500 w-10 h-full">
                    fef
                </div>

                <div className="  flex p-2 shadow-lg grow relative">

                    <FcInvite className="text-3xl p-1 bg-neutral-600 rounded-full " />
                    <p className=" h-auto text-neutral-700 m-0 text-lg ">card caterogy</p>

                    <div className="flex items-center justify-between mx-5 ">

                        <div className="items-start justify-start flex flex-col gap-1 mx-5">
                            <h4 className=" h-auto text-black m-0 text-neutral-800 ">30BNB</h4>
                            <h6 className=" h-auto text-black m-0 ">descreption category</h6>
                        </div>
                    </div>
                    <button className=" h-auto text-black m-0 ">view</button>


                </div>
            </div> */}

            {

                data.map((item, i) => {

                    return (

                        <div key={'s-'+i} className=" bg-neutral-200 w-75 h-auto grow rounded-xl flex-col p-2 shadow-lg ">

                            <div className="flex items-center justify-between mx-5">

                                <p className=" h-auto text-neutral-700 m-0 text-lg ">{item.title}</p>
                                <FcInvite className="text-3xl p-1 bg-neutral-600 rounded-full " />
                            </div>
                            <div className="items-start justify-start flex flex-col gap-1 mx-5">
                                <h4 className=" h-auto text-black m-0 text-neutral-800 ">{item.value}</h4>
                                <h6 className=" h-auto text-black m-0 ">{item.desc}</h6>
                            </div>
                            <div className="justify-between flex  gap-1 mx-5">
                                <h6 className=" h-auto text-black m-0 ">some description :</h6>
                            <Link to="/" className="text-white  bg-[#F0B86E] hover:bg-neutral-400 hover:text-black py-1 px-5 transition duration-300 ease-in-out rounded-2xl">view</Link>
                            </div>

                        
                        </div>



                    )



                })

            }


        </>

    )
}

export default Stats