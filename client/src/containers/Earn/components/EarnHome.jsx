




const Data = [
    {
        title: 'Staking',
        desc: '   and more recently with desktop publishing software like Aldus PageMaker ',
        page: 'home',
        component:'/earn/home'
    },
    {
        title: 'AP2E',
        desc: '   and more recently with desktop publishing software like Aldus PageMaker ',
        page: 'stats',
        component:'/earn/stats'

    },
    {
        title: 'Daily Free Rewards',
        desc: '   and more recently with desktop publishing software like Aldus PageMaker ',
        page:'sectionWhy',
        component:'/earn/section-why'
    },
    {
        title: 'Gift Cards and Coupons',
        desc: '   and more recently with desktop publishing software like Aldus PageMaker ',
        link: 1
    },
    {
        title: 'Nft Leveling',
        desc: '   and more recently with desktop publishing software like Aldus PageMaker ',
        link: 1
    },
]



const EarnHome = ({ handleChangePage }) => {
    return (

        <div className=" w-full relative p-10 bg rounded-xl   color-ball ">
            <h3 className="m-0 py-2 text-[#995533]">Start Earning</h3>
            <h1 className="m-0 mb-2">Before Token and Project Launch</h1>
          


       




            <div className="flex flex-wrap justify-center w-auto h">
                {
                    Data.map((item, i) => {
                        return <div className="border border-neutral-500 hover:border-neutral-200 bg-neutral-200 bg-opacity-10  m-5 w-60 flex rounded-xl relative text-white overflow-hidden flex-wrap hover:bg-blue-500 - hover:scale-[102%]  transition-all duration-150 ease-in cursor-pointer shadow-2xl shadow-[#721533] hover:shadow-blue-600 " key={i} onClick={(e) => handleChangePage(item,e)}>

                            <div className=" flex flex-col   w-full h-auto gap-0  lg:items-center relative">
                                <img src="https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frevenue-streams.10c7bba1.png&w=750&q=75" alt="" className=" object-contain p-0 m-0  w-full  " />

                                <div className="flex flex-col items-start justify-start px-5 py-2 gap-2 ">


                                    <div className='flex flex-col  justify-center items-start relative  w-full '>

                                        <h5 className=" text-md font-bold  m-0 relative ">
                                            {item.title}
                                        </h5>
                                    </div>
                                    <div className="flex justify-start items-start gap-2   w-full">

                                        <p className=" text-white p-0 m-0 relative bg-green-500 h-2 px-5 animate-pulse rounded-full">
                                          
                                        </p>
                                        <p className=" text-white p-0 m-0 relative bg-pink-500 px-5 h-2 animate-pulse rounded-full">
                                          
                                        </p>
                                        <p className=" text-white p-0 m-0 relative bg-[#4D3C77] px-5 h-2 animate-pulse rounded-full">
                                          
                                        </p>
                                        <p className=" text-white p-0 m-0 relative bg-[#ebce29] px-5 h-2 animate-pulse rounded-full">
                                          
                                        </p>

                                    </div>


                                    <p className="text-left text-neutral-300 p-0 m-0">
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


export default EarnHome