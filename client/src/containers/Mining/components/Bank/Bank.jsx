import { formatEther } from "viem"
import { useGetBanks } from "../../hooks/useGetBanks"
import Spinner from "../../../../shared/Spinner/Spinner"
import { useUpgradeBank } from "../../hooks/useUpgradeBank"
import { app_chain_id } from "../../../../shared/data/chains"
import { useCorrectNetwork } from "../../../../hooks/useCorrectNetwork"




const Bank = ({ data }) => {
    
    const banks = useGetBanks()
    const bankData = data?.data?.bankData || null
    const userData = data?.data?.userData || null
    console.log(banks && banks?.data[Number(bankData?.level)]?.imgUrl)

    
    const index =data && Number(bankData?.level)+1 
    const extractPrice = data && banks?.data[index&&index].price

    const upgrade = useUpgradeBank({
        price:extractPrice  && extractPrice 
    })
    
const {chain,switchNetwork} = useCorrectNetwork({
    fallback:()=>upgrade.write()
})


const handleUpgrade = (e)=> {if (chain?.id == app_chain_id){e.preventDefault(); upgrade.writeAsync()}else {e.preventDefault(); switchNetwork?.switchNetwork()}}

    const BankCard = ({ bank }) => {
        return (
            <div className={`w-full border-b border-blue-900 ${bank?.level == bankData?.level &&  'bg-blue-900 bg-opacity-60'} py-1 flex gap-5 items-center my-1 rounded `} >
                <img src={bank?.imgUrl} alt="" className="w-12 h-12" />
                <div className="flex items-center w-full text-xs  ">
                    <p className="w-1/4 ">  {formatEther(bank?.capacity)} tw</p>
                    <p className="w-1/4"> {formatEther((bank?.price))} BNB </p>
                    <p className="w-1/4"> {Number(bank?.level)} </p>
                    <p className="border border-blue-900 px-5 py-2 text-xs rounded-lg w-1/4"> +1%</p>
                </div>
            </div>
        )
    }



    return (


        <>
            {banks?.data ?
                <div className="gap-2 flex flex-col items-center justify-startp-2 h-[50vh] w-full   overflow-y-scroll z-2 ">

                    <div className="text-left w-full px-5">

                        <div className="flex justify-between items-center border border-blue-900 px-5 py-2 rounded-xl">

                            
                            <div className="flex gap-2 items-center justify-center flex-col text-xs">
                                <img src={banks && banks?.data[Number(bankData?.level)]?.imgUrl  || null} alt="" className="w-10 h-10" />
                                <p className="text-neutral-300">capacity : {formatEther(bankData?.capacity)}</p>
                                <p className="text-neutral-300">level : {Number(bankData?.level)}</p>
                            </div>
                            
                            <div className="flex flex-col items-start gap-1 justify-center ">
                                <p className="text-xs text-neutral-300">next level : {Number(bankData?.level)+1}</p>
                                <button  onClick={handleUpgrade} className="bg-orange-500 px-5 py-2 text-xs rounded"> upgrade</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col px-5 gap-2 m-0 w-full">
<div className="">
    <div className="flex items-center border border-blue-900 rounded mt-5 text-neutral-200 text-xs py-1">

<p className="w-20 text-neutral-300 font-bold">bank</p>
<p className="w-1/4 text-neutral-300 font-bold ">capacity</p>
<p className="w-1/4 text-neutral-300 font-bold">price</p>
<p className="w-1/4 text-neutral-300 font-bold">level</p>
<p className="w-1/4 text-neutral-300 font-bold">rate+</p>
    </div>


                        {
                           banks?.data &&  data && banks?.data?.map((bank, i) => {
                                
                                if (bank?.price == 0) {
                                    return null
                                } else {
                                    return <BankCard bank={bank} key={i} />
                                }
                                
                                
                                
                                
                            })
                        }
                        </div>
                    </div>
                </div>
                :
                <div className="flex items-center justify-center w-full h-[50vh]">
                    
                    <Spinner message={'loading Banks ...'} />
                </div>

            }
        </>



    )

}

export default Bank