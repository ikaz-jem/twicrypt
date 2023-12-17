import { useSelector } from "react-redux";
import {useState} from 'react';
import Spinner from "../../../../shared/Spinner/Spinner";
import { Link } from "react-router-dom";
import { useUnstakeMiners } from "../../hooks/useUnstakeMiners";




const StakedNfts = ({miningSessionData,currentTime}) => {
const [selectedNft,setSelectedNft]=useState([])


    const staked = useSelector(state => state.mining.session)
    const onWorkNfts = staked ? staked?.result?.staked : []

// prepares array of ids for Unstaking
    const prepareData = () => {
        const Ids = [];
        selectedNft?.map((item) => {
            Ids.push(Number(item?.tokenId))
        })
        return [Ids]
    }
    const [Ids] = prepareData()
    // const miningSessionData = useSessionData()
    const {unstakeMiners} = useUnstakeMiners({
      ids:Ids
    })

  

  const handleSelect= (nft) => {
    if (!selectedNft.some((item) => item.tokenId === nft.tokenId)) {
        setSelectedNft((prev) => [...prev, nft]);
    }
  }
  const selectAll = () => {
    onWorkNfts?.map((nft) => {
        
            if (!selectedNft.some((item) => item.tokenId === nft.tokenId)) {
                return setSelectedNft((prev) => [...prev, nft]);
            }
    })
  }


  const isRoomAvailable = ()=> {
    return selectedNft?.length < onWorkNfts?.length
  }

const deselectAll = (nft) => {
    setSelectedNft((prev) => (
        prev.filter((item) => item?.identifier != nft?.identifier)
        ))
    }
  
     




    const Card = ({ data }) => {
          
    const isSelected = (nft) => {
        if (selectedNft.length > 0) {
            return selectedNft.includes(nft)
        }
    }
    
    const handleDeselect = (nft) => {
        setSelectedNft((prev) => (
            prev.filter((item) => item?.tokenId !== nft?.tokenId)
            ))
        }
      

        return (
            <><div className={` border my-1 h-14 w-14 rounded-lg overflow-hidden cursor-pointer hover:border-pink-500 ${isSelected(data) && "border border-pink-800  transition-all scale-[80%] grayscale"} ` }>
                <img alt="art nft" src={data?.imageUrl  } onClick={()=> isSelected(data) ? handleDeselect(data) : handleSelect(data)}/>
            </div></>
        )
    }


const Buttons = ()=> {

    const handleUnstake = ()=> {
        unstakeMiners?.write()
    }

return (
    <div className="flex items-center justify-center gap-5 font-neutral-200 font-sans text-xs w-full my-5 ">
{  miningSessionData?.userData?.miningStartTime != "0" && currentTime <= miningSessionData?.userData?.miningStartTime ? <p className="text-[12px] text-yellow-500">you can't withdraw your Nfts until your current mining session ends</p> :
<>
<button onClick={handleUnstake} className={`py-1 text-xs  hover:bg-neutral-200 hover:text-black transition-all duration-300 bg-blue-500 rounded flex items-center justify-center px-2  ${!isRoomAvailable() && "bg-red-500" }  `}>{isRoomAvailable() ?  'withdraw Selected' : "withdraw all workers"}</button>

    {isRoomAvailable() && <button onClick={ selectAll} className={`py-1 text-xs  hover:bg-neutral-200 hover:text-black transition-all duration-300 bg-blue-500 rounded flex items-center justify-center  px-2 `}> withdraw All</button>}
</>
}
</div>  
)

}


    const RenderStaked = () => {

        return (
            <>
                {onWorkNfts && onWorkNfts?.length >0 ?
                    <div className="w-full flex gap-1 flex-col flex-wrap border p-2 border-pink-500 rounded-lg bg-[#00000062]">

                        <p className="text-xs text-white"> Nft Miners on work:</p>
                    <div className="flex gap-2 items-center justify-center flex-wrap">
                        {
                            onWorkNfts &&   onWorkNfts?.map((item, i) => <Card data={item} key={i}  />)
                        }
                        </div>  
                       {selectedNft?.length > 0 &&  miningSessionData?.staked?.length > 0  ? null : <Buttons/>}
                    
                    </div>
                    : 
                    <div className="flex gap-2 items-center justify-center border rounded-xl bg-[#00000081] h-auto border-purple-500">
                                    <Spinner message={'loading Nfts on work ...'} />
                      </div>
                    }
            </>
        )
    }



    // staked?.staked && onWorkNfts?.length > 0 
    return (
        <>
            <div className="w-full h-auto p-10">
                {staked?.result?.staked && onWorkNfts?.length > 0? <RenderStaked />
                     :
                        <div className="flex gap-2 items-center justify-center border rounded-xl bg-[#00000081] h-20 border-purple-500">
                      <p className="p-0 m-0 text-xl">⚠️</p>      <h5 className="text-white text-sm font-bold p-0 m-0">  you have no active workers online !</h5>
                            <Link to='./?id=miners' className="px-4 py-2 bg-blue-500 hover:bg-pink-500 rounded text-white text-xs">
                                put Miners to work 💸
                            </Link>
                        </div>
                }
            </div>
        </>

    )
}

export default StakedNfts;