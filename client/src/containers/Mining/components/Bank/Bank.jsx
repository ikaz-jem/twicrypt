import { formatEther } from "viem"
import { useGetBanks } from "../../hooks/useGetBanks"
import Spinner from "../../../../shared/Spinner/Spinner"
import { useUpgradeBank } from "../../hooks/useUpgradeBank"
import { app_chain_id } from "../../../../shared/data/chains"
import { useCorrectNetwork } from "../../../../hooks/useCorrectNetwork"
import { useNftBalanceOf } from "../../../../hooks/web3/useNftBalanceOf"
import { useSelector } from "react-redux"
import BankCard from "./BankCard"
import UserBank from "./UserBank"
import Disclamer from "../../../../shared/Disclamer/Disclaimer"


const Bank = ({ nftWarning }) => {

    const allBanks = useSelector(state => state.mining.banks)
    const sessionData = useSelector(state => state.mining.session)

    let data = sessionData?.result
    let banks = allBanks?.result



    const nftBalance = useNftBalanceOf()
    const minBalance = 1


    // const banks = useGetBanks()
    const bankData = data?.bankData || null
    const userData = data?.userData || null
    
  
  

    const extractIndex = () => {
        const currentLevel = Number(bankData?.level )
        if ( currentLevel>=1) {
            return currentLevel + 1
        } else return 0;
    }   
    const extractPrice = () => {
        const index = extractIndex()
        if (banks?.length >0  && index >0) {
            return banks[index && index]?.price
        }
    }


   

    const price = extractPrice();

    const upgrade = useUpgradeBank({
        price: data ? price : 0
    })

    const { chain, switchNetwork } = useCorrectNetwork({
        fallback: () => upgrade.write()
    })


    const handleUpgrade = (e) => {
        if (chain?.id == app_chain_id && minBalance != 0) {
            e.preventDefault();
            upgrade.writeAsync()
        } else if (chain?.id !== app_chain_id && minBalance != 0) {
            e.preventDefault(); switchNetwork?.switchNetwork()
        } else {
            nftWarning()
        }
    }


    return (


        <>
            {banks?.length > 0 ?
                <div className="gap-2 flex flex-col items-center justify-startp-2 h-[50vh] w-full   overflow-y-scroll z-2 ">
                    <div className="text-left w-full px-5">
                        {bankData?.level == 0 ?
                            <div className="flex items-center justify-center">
                                <Disclamer message={"you need to claim your free bank first in order to upgrade"} />
                            </div>
                            :
                            <UserBank banks={banks} bankData={bankData} handleUpgrade={handleUpgrade} />}
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
                                banks && data && banks?.map((bank, i) => {

                                    if (bank?.imageUrl == '') {
                                        return null
                                    } else {
                                        return <BankCard bank={bank} bankData={bankData} key={i} />
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