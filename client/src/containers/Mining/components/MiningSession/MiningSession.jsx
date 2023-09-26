import Disclamer from "../../../../shared/Disclamer/Disclaimer"
import { AiOutlineBank } from 'react-icons/ai'
import { BiTime } from 'react-icons/bi'
import { BsPiggyBank, BsSpeedometer2 } from 'react-icons/bs'
import { useStartMining } from "../../hooks/useStartMining"
import { useClaimBank } from "../../hooks/useClaimBank"
import { useSelector } from "react-redux"
import { formatEther} from "viem"
import { useCorrectNetwork } from "../../../../hooks/useCorrectNetwork"
import { app_chain_id } from "../../../../shared/data/chains"
import { useNftBalanceOf } from "../../../../hooks/web3/useNftBalanceOf"

const MiningSession = ({nftWarning}) => {

  // const miningSessionData = useSessionData()

const startMining = useStartMining()
const claimBank = useClaimBank();
const nftBalance = useNftBalanceOf()
const minbBalance = Number(nftBalance?.data)
const miningSessionData = useSelector(state=> state.mining.session)
const bankData = miningSessionData?.bankData



const {chain , switchNetwork} = useCorrectNetwork({
  fallback:()=>startMining.write()
})

const claim= useCorrectNetwork({
  fallback:()=>claimBank.write()
})

const isFull = bankData?.funds === bankData?.capacity && bankData?.capacity > 0 ? true : false

const handleClick = (e)=>{
  if(chain?.id ==app_chain_id && minbBalance !=0){
    e.preventDefault(); startMining.write()
  }else if (chain?.id ==app_chain_id && minbBalance !=0) {
    e.preventDefault();
     switchNetwork?.switchNetwork()
  }else {
    nftWarning();
  }
}
const handleClaimBank =(e)=>{
  if(chain?.id ==app_chain_id && minbBalance !=0){
    e.preventDefault();
     claimBank.write()
  }else if(chain?.id !==app_chain_id && minbBalance !=0){e.preventDefault();
     claim?.switchNetwork?.switchNetwork()
    } else{
      nftWarning()
    }
  }


const onWork = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  const Card = ({ data }) => {
    return (
        <><div className=" border my-1 h-10 w-10 rounded-lg overflow-hidden cursor-pointer hover:border-pink-500">
                <img alt="art nft" src='https://cdn-icons-png.flaticon.com/512/2910/2910254.png
' />
            </div></>
    )
}



    return (
        <div className="w-full h-[50vh]  p-10">
            {/* <div className="px-10 opacity-50">
                <Disclamer message={'before starting a new session send tokens to bank otherwise they will be lost ! '}></Disclamer>
            </div> */}

      <p>Nft Miners on work:</p>
              <h5>you have no active workers ! you need to send your nfts to work !</h5>
            <div className="w-full flex gap-1 flex-wrap border p-2 border-pink-500 rounded-lg bg-[#00000062]">
              {
                onWork.map((item,i)=> <Card/> )
              }

            </div>
         
<div className="flex flex-wrap gap-2 px-5 justify-center my-2">
    <div className="w-24 h-24  border border-purple-400 flex flex-col rounded-xl items-center justify-center">
    <AiOutlineBank className="text-white text-2xl" />
      <p className="text-xs text-neutral-500">bank</p>
      <p className="text-xs text-neutral-500">{ bankData?.capacity && formatEther(bankData?.capacity)}</p>
    </div>
    <div className="w-24 h-24 border border-purple-400 flex flex-col rounded-xl items-center justify-center">
    <BsPiggyBank className="text-white text-2xl" />
      <p className="text-xs text-neutral-500">accumulated</p>
      <p className="text-xs text-neutral-500">{ bankData?.capacity && formatEther(bankData?.capacity)}</p>
    </div>
    <div className="w-24 h-24 border border-purple-400 flex flex-col rounded-xl items-center justify-center">
    <BsSpeedometer2 className="text-white text-2xl" />
      <p className="text-xs text-neutral-500">speed</p>
      <p className="text-xs text-neutral-500">{ bankData?.capacity && formatEther(bankData?.capacity)}</p>
    </div>
    <div className="w-24 h-24 border border-purple-400 flex flex-col rounded-xl items-center justify-center">
    <BiTime className="text-white text-2xl" />
      <p className="text-xs text-neutral-500">speed</p>
      <p className="text-xs text-neutral-500">{ bankData?.capacity && formatEther(bankData?.capacity)}</p>
    </div>
    <div className="w-24 h-24 border border-purple-400 flex flex-col rounded-xl items-center justify-center">
    <AiOutlineBank className="text-white text-2xl" />
      <p className="text-xs text-neutral-500">speed</p>
      <p className="text-xs text-neutral-500">{ bankData?.capacity && formatEther(bankData?.capacity)}</p>
    </div>



</div>

            <div className="flex justify-between px-5 py-5">

            {/* <div className="flex flex-col gap-1 ">
                <p className="font-bold" >Mining Session Available</p>
                <p className="font-bold" >Mining Session Available</p>
            </div> */}

                <div className="flex  gap-1 items-center justify-center w-full">
                <button onClick={handleClick} disabled={isFull} className={`rounded-lg px-5  py-2 bg-blue-500 hover:bg-neutral-200 hover:text-black transition-all duration-300 text-xs disabled:cursor-not-allowed`}>Start mining</button>
                {miningSessionData?.bankData?.capacity>0  ? null : <button onClick={handleClaimBank} className=" rounded-lg px-5 py-2 bg-orange-500 hover:bg-neutral-200 hover:text-black transition-all duration-300 text-xs">Claim free Bank</button>}
                </div>

            </div>
                {isFull && <h5> bank is full please upgrade 🤫</h5> }
                <p className="text-xs text-yellow-500"><span className="text-xl">⚠️</span> your earnings will be automatically transefered to bank after the new session starts</p>
        </div>

    )
}

export default MiningSession