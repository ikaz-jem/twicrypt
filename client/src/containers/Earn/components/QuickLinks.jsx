




const QuickLinks = ()=> {


    return (
        <div className="  w-auto relative  " >
        <section className="flex flex-cols  w-full  ">


            <div className=" mx-10 py-5 w-auto ">
                        <div className="bg-[#102C5700] h-auto w-auto px-5 py-10 rounded-xl flex justify-between flex-wrap items-around gap-5  ">



                        <table className="table  text-gray-400 border-separate  text-sm border-neutral-700 w-full flex justify-center  grow ">

<thead className=" text-gray-500  shadow-sm items-left  ">
    <tr className="text-left m-5 p-10 " >
        <th className="py-0  "></th>
        <th className="py-0 ">Name</th>
        <th className="py-0 ">Name</th>
        <th className="py-0 ">Name</th>
        <th className="py-0 ">Name</th>
        
    </tr>
    
</thead>


 
<tbody>


<tr  className=" hover:bg-gray-800 m-10 transition-all shadow-sm  ">
<td className="pl-4 py-1  ">
</td >
<td className="p-0 pl-0  ">
    
        <a to={ `./}`} >
            okporkpogkrzogokrkokpoz
        </a>

    
</td>
<td className="py-0  ">
     <span className="text-red-500">ddzdz</span>
</td>
<td className="p-0 ">
ghhhhhhhhhhh
</td>
<td className="p-0">
    <span className="bg-green-200 text-gray-500 rounded-2xl px-2">available</span>
</td>
<td className="p-0 ">
    <span className='flex justify-start gap-1'>
    
    </span>
    {/*<LikeButton productIndex={coin.uuid} className='block inline'/>*/}
</td>
<td className="p-0">
    <span className="bg-green-200 text-gray-500 rounded-2xl px-2  cursor-pointer shadow-md text-center">Upvote 1531</span>

</td >
</tr>


</tbody>


<tfoot>
    {/* <Tooltip id='Coins-tooltip' className=''

/> */}
    {/* <CoinModal
        show={showCoinModal}
        onCloseCoinModal={() => setShowCoinModal({ ...showCoinModal, true: false })}
    coinData={data[showCoinModal.index]} /> */}
</tfoot>
</table>





                        </div>
                <h1 className='text-white '>Earn</h1>

                <div className="flex gap-4 flex-wrap justify-center items-center w-full  relative">

                    <div className="flex  justify-center flex-wrap gap-5">
                      



                    </div>



                </div>



            </div>

        </section>

    </div>
    
    )
}

export default QuickLinks