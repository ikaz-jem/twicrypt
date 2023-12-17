
import { useState } from "react"
import { toDecimals } from "../../../../utils/web3Functions"
import { formatEther, parseEther } from "viem"
import { useSelector } from "react-redux"


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


const bankData = useSelector(state=>state.mining.banks)
const banks = bankData?.result


const extractData = ()=> {
    let price = 0
    let level = 0
    let capacity = 0


    if (calculate.banklevel > 0) {
     const data = banks[Number(calculate?.banklevel)]
     price = formatEther(Number(data?.price))
     level = Number(data?.level)
     capacity = Number(data?.capacity)/(10**18)

    }


return {price,level,capacity}
}




    const calculateTotal = () => {
        let power = ((calculate?.nftCount*400000)+(calculate?.banklevel*40000)/2)
        const hours = calculate?.hours *3600
        const result = Number(power)*Number(hours)
        const total = (result/10000)
   
        return Number(total).toFixed(2)
        // .toFixed(3)
        
    }
    const totalTokens = calculateTotal()

    const calculateInvestment = ()=>{
        const {price,level,capacity}=extractData();
        let nftPrice = 0.15
        let Total = (Number(calculate?.nftCount) * nftPrice) + Number(price)
        return Total.toFixed(2)
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

            <label htmlFor='nftCount' className="text-xs text-neutral-400"> number of assets you hold :</label>
            <input className="placeholder-black m-2 text-black px-4  rounded-lg" type="number" placeholder="number of nfts" onChange={handleChange} name="nftCount" />
            <label htmlFor='hours' className="text-xs text-neutral-400">total mining hours :</label>
            <input className="placeholder-black m-2 text-black px-4 rounded-lg" type="number" placeholder="mining hours" onChange={handleChange} name="hours" />
            <label htmlFor='banklevel' className="text-xs text-neutral-400"> bank upgrade level :</label>
            <input className="placeholder-black m-2 text-black px-4 rounded-lg" type="number" placeholder="bankLevel" onChange={handleChange} name="banklevel" />

            <div className=" my-2 flex justify-start items-center">
<div className="flex flex-col items-start justify-start">
                <h5 className="p-0 m-0 font-bold text-blue-500 text-left"> estimated earnings : </h5>

                <h5 className="p-0 m-0 font-bold text-sm text-left">total in token : {totalTokens || 0 } tw tokens </h5>
                <h5 className="p-0 m-0 font-bold text-sm text-left">investment in BNB :{ calculate?.banklevel <= 5 ? calculateInvestment() + " BNB" :  " max Bank level is 5" }  </h5>
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