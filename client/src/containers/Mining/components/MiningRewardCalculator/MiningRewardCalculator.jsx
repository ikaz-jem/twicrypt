
import { useState } from "react"
import { toDecimals } from "../../../../utils/web3Functions"
import { formatEther, parseEther } from "viem"


const MiningRewardCalculator = () => {
    const [show, setShow] = useState(true)
    const [calculate, setCalculate] = useState({
        nftCount: 0,
        hours: 0,
        banklevel: 0,

    })
    const handleClick = () => {
        setShow(!show)
    }





    const calculateTotal = () => {
        let power = ((calculate?.nftCount*80)+(calculate?.banklevel*8)/2)


        const nftPercent = (calculate?.nftCount *80)// 0.009
        const bankPercent = (calculate?.banklevel*8)// 0.001

        const duration =  calculate?.hours
        const sub = (bankPercent+nftPercent)/2

        const total = (power*10**14)
        const result = formatEther(total*3600)
        return result
        // .toFixed(3)
        
    }

    const calculateInvestment = ()=>{
        let nftPrice = 0.1
        let bank = 0.22
        let Total = (calculate?.nftCount * nftPrice)+ (calculate?.banklevel * bank)
        return Total

    }


    const handleChange = ({ target }) => {
        const { name, value } = target;
        setCalculate((prev) => ({
            ...prev,
            [name]: value
        }))

    }

    return (
        // <SidePanel togglePanel={handleClick} show={show}>
<div className="flex flex-col lg:flex-row   w-full p-5 ">
        <div className="flex flex-col gap-1 items-start justify-center  w-full p-5 ">
            <h3 className="p-0 m-0 font-bold text-left">Profit calculator</h3>

            <label for='nftCount' className="text-xs text-neutral-400"> number of assets you hold :</label>
            <input className="placeholder-black m-2 text-black px-4  rounded-lg" type="number" placeholder="number of nfts" onChange={handleChange} name="nftCount" />
            <label for='hours' className="text-xs text-neutral-400">total mining hours :</label>
            <input className="placeholder-black m-2 text-black px-4 rounded-lg" type="number" placeholder="mining hours" onChange={handleChange} name="hours" />
            <label for='banklevel' className="text-xs text-neutral-400"> bank upgrade level :</label>
            <input className="placeholder-black m-2 text-black px-4 rounded-lg" type="number" placeholder="bankLevel" onChange={handleChange} name="banklevel" />

            <div className=" my-2 flex justify-start items-center">
<div className="flex flex-col items-start">
                <h5 className="p-0 m-0 font-bold text-blue-500"> estimated earnings : </h5>

                <h5 className="p-0 m-0 font-bold text-sm">total in token : {calculateTotal()} tw tokens </h5>
                <h5 className="p-0 m-0 font-bold text-sm">total in dollar :{(calculateTotal() * 0.1).toFixed(2)} $  </h5>
                <h5 className="p-0 m-0 font-bold text-sm">investment in BNB :{calculateInvestment() } BNB </h5>
</div>

            </div>

           
         
</div>

<div className="flex flex-col items-start">

            <h5 className="p-0 m-0 text-blue-500 font-bold ">tips 🚧 :</h5>
           <ul className="p-0 m-0 text-pink-500 flex flex-col items-start">
                <li className="text-left text-pink-500">- upgrade your mining abilities and asset holding count to get more rewards </li>
                <li className="text-left text-pink-500">- Nft holdings and Mining rate has higher profitability impact 🤫</li>
                <li className="text-left text-pink-500">- mining rate has the most impact on profitability , it increases with your token holdings or by upgrades🤫</li>
           </ul>
</div>
           
        </div>
        // </SidePanel>
    )

}




export default MiningRewardCalculator