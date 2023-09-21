
import { useState } from "react"
import SidePanel from "../../../Earn/components/SidePanel/SidePanel"


const MiningRewardCalculator = () => {
    const [show, setShow] = useState(true)
    const [calculate, setCalculate] = useState({
        nftCount: 0,
        hours: 0,
        banklevel: 0,
        rate: 0,

    })
    const handleClick = () => {
        setShow(!show)
    }

    const calculateTotal = () => {
        const percent = (calculate?.nftCount * 40) / 100
        const rate = (calculate?.rate * calculate?.hours) * 3600
        const rate2 = (calculate?.banklevel * 10) / 100
        const total = (rate * percent) * rate2
        return total.toFixed(3)
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
<div className="flex flex-col lg:flex-row  bg-neutral-900 w-full p-5 ">
        <div className="flex flex-col gap-1 items-start justify-center  w-full p-5 ">
            <h2 className="p-0 m-0 font-bold">Profit calculator</h2>

            <label for='nftCount' className="text-xs text-neutral-400"> number of assets you hold :</label>
            <input className="placeholder-black m-2 text-black px-4  rounded-lg" type="number" placeholder="number of nfts" onChange={handleChange} name="nftCount" />
            <label for='rate' className="text-xs text-neutral-400"> your mining rate :</label>
            <input className="placeholder-black m-2 text-black px-4 rounded-lg" type="number" placeholder="rate" onChange={handleChange} name="rate" />
            <label for='hours' className="text-xs text-neutral-400">total mining hours :</label>
            <input className="placeholder-black m-2 text-black px-4 rounded-lg" type="number" placeholder="mining hours" onChange={handleChange} name="hours" />
            <label for='banklevel' className="text-xs text-neutral-400"> bank upgrade level :</label>
            <input className="placeholder-black m-2 text-black px-4 rounded-lg" type="number" placeholder="bankLevel" onChange={handleChange} name="banklevel" />

            <div className=" my-2 flex justify-start items-center">
<div className="flex flex-col items-start">
                <h5 className="p-0 m-0 font-bold text-blue-500"> estimated earnings : </h5>

                <h5 className="p-0 m-0 font-bold text-sm">total in token : {calculateTotal()} tw tokens </h5>
                <h5 className="p-0 m-0 font-bold text-sm">total in dollar :{(calculateTotal() * 0.1).toFixed(2)} $  </h5>
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