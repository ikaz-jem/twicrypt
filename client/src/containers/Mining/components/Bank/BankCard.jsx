import { formatEther } from "viem";


const BankCard = ({ bank ,bankData}) => {
    let capacity = bank?.capacity;
    return (
        <div className={`w-full border-b border-blue-900 ${bank?.level == bankData?.level &&  'bg-blue-900 bg-opacity-60'} py-1 flex gap-5 items-center my-1 rounded `} >
            <img src={bank?.imageUrl} alt="" className="w-12 h-12" />
            <div className="flex items-center w-full text-xs  ">
                <p className="w-1/4 ">  {formatEther(capacity)} tw</p>
                <p className="w-1/4"> {formatEther(Number(bank?.price))} BNB </p>
                <p className="w-1/4"> {Number(bank?.level)} </p>
                <p className="border border-blue-900 px-5 py-2 text-xs rounded-lg w-1/4"> +1%</p>
            </div>
        </div>
    )
}

export default BankCard