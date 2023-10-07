import ProgressBar from "../../../../../../shared/ProgressBar/ProgressBar" 
import Nav from "../../../../../../shared/Nav/Nav"
import NavItem from "../../../../../../shared/NavItem/NavItem"
import logo from '../../../../../../media/logo.png'
import { useMintNft } from "../../../../../MarketPlace/hooks/web3Hooks/useMintNft"
import { useDispatch, useSelector } from "react-redux"
import { setMintNft } from "../../../../../../app/features/States/StatesSlice"
import { Link } from "react-router-dom"





const ContributionForm = () => {

    
    const nftCount = useSelector(state=>state?.states?.mint?.nftCount)
    
const mintNft= useMintNft()
const dispatch = useDispatch()
const setMint = (data)=> dispatch(setMintNft(data))
    
    
    const RenderInput =()=> {

const handleClick = ()=> {
mintNft.write()

}

    return (
        <div className="w-auto m-0  flex flex-col  grow gap-0 border border-purple-900 p-5 rounded-lg ">
            <h3 className="text-left p-0 m-0 py-2 font-bold">Mint Nft</h3>
        <ProgressBar percentage={70} min={0 + ' BNB'} max={150 + ' BNB'} />
        <div className=" flex p-0 gap-1 m-0">
            <div className="m-0 p-0 flex flex-col w-full justify-center gap-10">
                <input
                    type='number'
                    className="w-full py-2 h-full placeholder-white
                      bg-neutral-900 px-4 rounded-xl outline-none text-sm text-white focus:bg-neutral-700   transition-all duration-700 '"
                    placeholder='Nft Amount'
                    name='link'
                    onChange={(e)=>setMint({nftCount:e.target.value})}
                />
            </div>
           { nftCount >0 ?
                <Link    className="w-40 bg-yellow-500 text-black font-bold hover:text-white hover:bg-pink-500 flex items-center justify-center  rounded py-2 px-4" onClick={handleClick}> mint Nft </Link>
          
                    : 
                    <Link    className="w-40 bg-gray-500 text-black font-bold hover:text-white flex items-center justify-center  rounded py-2 px-4" > mint Nft </Link>
            }
        </div>
    </div>

    )
}


const RenderImage = ()=> {

return (
<><div className="flex grow items-center justify-center">

<img src={logo} className=" border  opacity-20 absolute blur-lg"></img>
</div>


  
</>
)


}

const RenderSaleInfos = ()=> {
    return (
     <>   
        <div className="flex justify-between border border-purple-900  items-start grow px-2 rounded-lg py-5">
        <ul className="flex items-start flex-col text-neutral-500 text-base">
            <li>your Contributions :</li>
            <li>your Purshased Tokens: </li>
            <li>NFTs : </li>
            <li>Refferals :</li>
            <li>item</li>
        </ul>
        <ul className="flex items-start flex-col  text-neutral-500 text-base">
            <li>0BNB</li>
            <li> 0BNB</li>
            <li> 0tokens</li>
            <li>item</li>
            <li>item</li>
        </ul>
    </div>
    <div className="flex justify-between  items-start grow px-2 border border-purple-900  rounded-lg py-5">
        <ul className="flex items-start flex-col  text-neutral-500 text-base">
            <li>Tokens For Sale :</li>
            <li>Current Rate : </li>
            <li>current Stage : </li>
            <li>Total Contributors:</li>
            <li>Min/Max</li>
        </ul>
        <ul className="flex items-start flex-col  text-neutral-500 text-base">
            <li>1M Tokens</li>
            <li> 0.05$ / 1 token</li>
            <li>Private Sale</li>
            <li>0</li>
            <li>0.1BNB/5BNB</li>
        </ul>
    </div>
    </>
    )
}


    return (
        <div className=" w-full flex  gap-5 justify-start items-start h-full p-5 flex-wrap">
                        <h3 className="text-left my-2 p-0 border-b border-neutral-800 w-full rounded-2xl px-5 pb-2 text-pink-600 font-bold text-xl ">Minting and Win ! <span className="m-0 pl-5 text-yellow-400 text-base ">win up to 1BTC in a single mint !  </span>  </h3>
       <div className="w-full flex flex-wrap gap-5 p-0 m-0 justify-between ">
       {RenderInput() }
       <RenderImage/>

            </div>

           
            <div className="w-full flex flex-wrap gap-5 p-0 m-0  ">
       <RenderSaleInfos/>

            </div>



        </div>



    )

}


export default ContributionForm