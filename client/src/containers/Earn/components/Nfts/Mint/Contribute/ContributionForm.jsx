import ProgressBar from "../../../../../../shared/ProgressBar/ProgressBar" 
import logo from '../../../../../../media/logo.png'
import { useMintNft } from "../../../../../MarketPlace/hooks/web3Hooks/useMintNft"
import { useDispatch, useSelector } from "react-redux"
import { setMintNft } from "../../../../../../app/features/States/StatesSlice"
import { Link, useParams } from "react-router-dom"
import { useRefMint } from "../../hooks/useRefMint"
import { formatEther } from "viem"





const ContributionForm = ({data}) => {

    const  {address={}} = useParams()

    const user = useSelector(state=>state.session)
    const nftCount = useSelector(state=>state?.states?.mint?.nftCount)
    
const mintNft= useMintNft()
const refMint = useRefMint({address})


const dispatch = useDispatch()
const setMint = (data)=> dispatch(setMintNft(data))
const mintInfos = data?.mintStats?.data
const userInfos = data?.referralStats?.data
    
    const RenderInput =()=> {

const handleClick = ()=> {
if (address?.length > 0 && address?.toLowerCase()!=user?.address?.toLowerCase() ) {
    refMint.write();

}else {
    mintNft.write()
}
}


const minted = Number(mintInfos?.supply)

let percentage =  minted * 0.01

    return (
        <div className="w-auto m-0  flex flex-col  grow gap-0 border border-purple-900 p-5 rounded-lg ">
            <h3 className="text-left p-0 m-0 py-2 font-bold">Mint Nft</h3>
        <ProgressBar percentage={percentage} min={"minted nfts : " + minted + ' unit'} max={10000 + ' Nft'} />
        <div className=" flex p-0 gap-1 m-0">
            <div className="m-0 p-0 flex flex-col w-full justify-center gap-10">
                <input
                    type='number'
                    className="w-full py-2 h-full placeholder-white z-50
                      bg-neutral-900 px-4 rounded-xl outline-none text-sm text-white focus:bg-neutral-700   transition-all duration-700 '"
                    placeholder='Nft Amount'
                    name='link'
                    onChange={(e)=>setMint({nftCount:e.target.value})}
                />
            </div>
           { nftCount >0 ?
                <Link    className="w-40 bg-yellow-500 text-black font-bold hover:text-white hover:bg-pink-500 flex items-center justify-center  rounded-3xl py-2 px-4" onClick={handleClick}> mint Nft </Link>
          
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
const userContributions = formatEther(Number(userInfos?.userContributions)) || 0
const nftBalance = Number(userInfos?.nftBalance) || 0
const price = formatEther(Number(mintInfos?.cost)) || 0
const max =  Number(mintInfos?.nftPerAddressLimit) || 0
const totalContributions = formatEther(Number(mintInfos?.totalContributions)) || 0 
const reffs = Number(userInfos?.reffCount) || 0

    return (
     <>   
        <div className="flex justify-between border border-purple-900  items-start grow px-2 rounded-lg py-5">
        <ul className="flex items-start flex-col text-neutral-500 text-xs">
            <li className="text-purple-300" >your Contributions : </li>
            <li className="text-purple-300" >NFTs : </li>
            <li className="text-purple-300" >Refferals :</li>
        </ul>
        <ul className="flex items-start flex-col  text-neutral-500 text-xs font-bold">
            <li className="text-white" >{isNaN(Number(userContributions).toFixed(2))? 0 : Number(userContributions).toFixed(2) + " BNB" } </li>
            <li className="text-white" > {nftBalance}</li>
            <li className="text-white" >{reffs}</li>
        </ul>
    </div>
    <div className="flex justify-between  items-start grow px-2 border border-purple-900  rounded-lg py-5">
        <ul className="flex items-start flex-col  text-neutral-500 text-xs ">
            <li className="text-purple-300">units For Sale :</li>
            <li className="text-purple-300">unit price : </li>
            <li className="text-purple-300">Total contributions:</li>
            <li className="text-purple-300">Max per wallet</li>
        </ul>
        <ul className="flex items-start flex-col  text-white text-xs font-bold">
            <li className="text-white">10k units</li>
            <li className="text-white" > {price} BNB</li>
            <li className="text-white" >{totalContributions} bnb</li>
            <li className="text-white" >{max} nft</li>
        </ul>
    </div>
    </>
    )
}


    return (
        <div className=" w-full flex  gap-5 justify-start items-start h-full p-5 flex-wrap">
                        <h3 className="text-left m-0 p-0 border-b border-purple-800 w-full rounded-2xl px-5 pb-2 text-pink-600 font-bold text-xl ">get Nft Win cash , mine tokens !  </h3>
                        <span className="m-0 pl-5 text-yellow-400 text-sm font-bold ">win up to 1BTC in a single mint !  </span> 
                        <span className="m-0 pl-5 text-pink-400 text-sm font-bold ">claim cash rewards from nft instantly !  </span> 
       <div className="w-full flex flex-wrap gap-5 p-0 m-0 justify-between ">
       {RenderInput() }
        {/* <div>
            <h1 >lfnek</h1>
        </div> */}
       <RenderImage/>
            </div>

            <div className="w-full flex flex-wrap gap-5 p-0 m-0  ">
       <RenderSaleInfos/>

            </div>



        </div>



    )

}


export default ContributionForm