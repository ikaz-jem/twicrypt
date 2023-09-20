
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
        <SidePanel togglePanel={handleClick} show={show}>
            <div className="flex flex-col items-center-justify-center">

                <h1>Profit calculator</h1>
             <label for='nftCount'> number of assets you hold :</label> 
                <input className="placeholder-black m-2 text-black px-4  rounded-lg" type="number" placeholder="number of nfts" onChange={handleChange} name="nftCount" />
             <label for='rate'> your mining rate :</label>
                <input className="placeholder-black m-2 text-black px-4 rounded-lg" type="number" placeholder="rate" onChange={handleChange} name="rate" />
             <label for='hours'>total mining hours :</label>
                <input className="placeholder-black m-2 text-black px-4 rounded-lg" type="number" placeholder="mining hours" onChange={handleChange} name="hours" />
             <label for='banklevel'> bank upgrade level :</label>
                <input className="placeholder-black m-2 text-black px-4 rounded-lg" type="number" placeholder="bankLevel" onChange={handleChange} name="banklevel" />
             
                <div className=" my-2">

                    <h5 className="p-0 m-0"> estimated earnings : </h5>
                     <span className="p-0 m-0">total in token : {calculateTotal()} tw tokens </span>
                     
                     <h5 className="p-0 m-0">total in dollar :{calculateTotal()*0.1} $  </h5>
                </div>
                    <h5 className="p-0 m-0 text-pink-500"> <span className="text-blue-500">tips 🚧</span> : upgrade your mining abilities and asset holding count to get more rewards </h5>
                    <h5 className="p-0 m-0 text-pink-500">🤫Nft holdings and Mining rate has higher profitability impact 🤫 </h5>
            </div>
        </SidePanel>
    )

}




export default MiningRewardCalculator