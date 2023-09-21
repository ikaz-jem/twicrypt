





const Bank = () => {

    const BankCard = ({bank}) => {

        return (

            <div className="w-full border-b border-neutral-800 py-1 flex gap-5 items-end ">
                <img src="https://icons.iconarchive.com/icons/graphicloads/100-flat/256/bank-icon.png" alt="" className="w-12 h-12" />
                <div className="flex justify-between w-full">

            <p>capacity : {bank}</p>
            <p>price : {(bank/30).toFixed(2)} </p>
            <p>level : {bank/100} </p>
            <button className="bg-orange-500 px-5 py-2 text-xs rounded"> upgrade</button>

                </div>
            </div>

        )
    }

    const banks = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,1100,1200,1300,1400,1500]

    return (
        <div className="gap-2 flex flex-col items-center justify-start bg-neutral-900 p-2 h-[50vh] w-full   overflow-y-scroll  ">
           
            <div className="text-left w-full px-5">
             
<p>   my bank: </p>

                <div className="flex justify-between items-center border border-neutral-700 px-5 py-2 rounded-xl">
                    <div className="flex gap-2 items-center justify-center flex-col">
<img src="https://cdn-icons-png.flaticon.com/512/2910/2910254.png" alt="" className="w-10 h-10" />
<p>capacity : 100</p>
                    </div>
                    <div className="flex flex-col items-start gap-1 justify-center">
                        <p className="text-xs text-neutral-300">+100 capacity</p>
                        <p className="text-xs text-neutral-300">0.05 bnb</p>
                        <button className="bg-orange-500 px-5 py-2 text-xs rounded"> upgrade</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col px-5 gap-2 m-0 w-full">
                {
                    banks.map((bank,i) => {
                        return (
    <BankCard bank={bank} key={i}/>

                        )

                    })
                }
            </div>
        </div>
    )

}

export default Bank