




const Lottery = ()=> {

const lotteries = [

    {
        title : '100.000$ lottery',
        desc:'win up to 1000000',
        started:false,
        min:'',
        max:'',
        duration:'',
        img:'https://api.twicrypt.com/eth/img/42.png'

    },
    {
        title : '100.000$ lottery',
        desc:'win up to 1000000',
        started:false,
        min:'',
        max:'',
        duration:'',
        img:'https://api.twicrypt.com/eth/img/42.png'

    },

    {
        title : '1M dollar lottery',
        desc:'win up to 1000000',
        started:false,
        min:'',
        max:'',
        duration:'',
        img:'https://api.twicrypt.com/eth/img/65.png'

    },
]




const LotteryCard = ({item})=> {

return (
    <div className="bg-neutral-900 rounded-lg overflow-hidden h-40 w-full hover:bg-neutral-800 transition-all hover:scale-[101%] cursor-pointer">
        <div className=" flex gap-2">
        <img src={item?.img} alt="" className="w-40 h-40 rounded-l-lg"/>
            <div className="flex justify-between w-full">
            <div className="p-2 flex flex-col justify-start items-start ">
                <h3 className="p-0 m-0 font-extrabold">{item?.title}</h3>
                <p className=" truncate text-sm">win up to 1000000</p>
            </div>           
                <div className="p-5 w-auto h-full flex flex-col justify-center items-center bg-neutral-800 rounded-l-full">
                <p>coming soon</p>
                </div>
            </div>
        </div>
    </div>
)


}


return (
    <>

    <h2 className="font-extrabold">Twicrypt lotteries and sweepstakes</h2>
<div className="container container--xxlarge border container--center p-5 rounded border-neutral-800">
<div className="flex flex-col gap-5">

{
    lotteries?.map((lott,i)=> <LotteryCard  item={lott} /> )
}
</div>
</div>
    </>
)

}




export default Lottery