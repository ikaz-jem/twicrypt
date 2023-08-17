
import Stats from './Stats'



const Example = () => {

    const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    return (
        <div className="  w-auto " >
            <section className="flex flex-cols  w-full  ">


                <div className="  py-5 w-full ">
                            <div className="bg-[#102C57] h-auto w-auto px-10 py-10 rounded-xl flex justify-between flex-wrap gap-5  ">
                                    <Stats/>
 
                            </div>
                    <h1 className='text-white p-0 m-0'>Earn</h1>

                    <div className="flex gap-4 flex-wrap justify-center items-center w-full  relative">

                        <div className="flex  justify-between flex-wrap gap-10 p-0 m-0   px-10 py-10 ">
                            {
                                data.map(() => {
                                    return <div className="bg-neutral-600 shadow-xl border border-neutral-500 hover:bg-neutral-500 transtition transition-all duration-200 hover:translate-y-[-3%] h-80 w-60 rounded-xl flex flex-col items-center justify-start relative ">

                                        <img src="https://picsum.photos/200" alt="" className="w-full h-auto p-2 rounded-2xl" />

                                        <p className="m-0 text-neutral-300"> description olaola</p>

                                        <span className="flex justify-around relative inset-0 w-full ">
                                            <button className="text-neutral-300 bg-neutral-700 hover:bg-neutral-400 hover:text-black py-1 px-5 transition duration-300 ease-in-out rounded-2xl ">mint</button>
                                            <button className="text-neutral-300 bg-neutral-700 hover:bg-neutral-400 hover:text-black py-1 px-5 transition duration-300 ease-in-out rounded-2xl ">button</button>

                                        </span>

                                    </div>
                                })
                            }
                        </div>



                    </div>



                </div>

            </section>

        </div>

    )

}


export default Example