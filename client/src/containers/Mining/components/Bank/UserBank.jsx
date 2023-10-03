import { formatEther } from "viem"



const UserBank = ({bankData,handleUpgrade,banks})=>{
    const imgUrl = banks[Number(bankData?.level)]?.imageUrl || null
    let capacity = bankData?.capacity?.toString()
    const myBankCapacity = capacity && formatEther(capacity) || null
    const myBankLevel = Number(bankData?.level) || null
    const nextLevel = myBankLevel && myBankLevel+1 || null
        return (
    
            <div className="flex justify-between items-center border border-blue-900 px-5 py-2 rounded-xl">
    
                                
            <div className="flex gap-2 items-center justify-center flex-col text-xs">
           { imgUrl !="" &&  <img src={ imgUrl } alt="" className="w-10 h-10" /> }
                <p className="text-neutral-300">capacity : { myBankCapacity + ' tw' || '...'}</p>
                <p className="text-neutral-300">level : {myBankLevel || '...'}</p>
            </div>
            
            <div className="flex flex-col items-start gap-1 justify-center ">
                <p className="text-xs text-neutral-300">next level : {nextLevel || '...'}</p>
                <button  onClick={handleUpgrade} className="bg-orange-500 px-5 py-2 text-xs rounded"> upgrade</button>
            </div>
        </div>
        )
    }
    


    export default UserBank