import { useSelector } from "react-redux"

import Spinner from "../../../../shared/Spinner/Spinner"
import { Link } from "react-router-dom"




const StakedNfts = () => {

    const staked = useSelector(state => state.mining.session)
    const onWorkNfts = staked?.staked
console.log(onWorkNfts)

    const Card = ({ data }) => {
        return (
            <><div className=" border my-1 h-10 w-10 rounded-lg overflow-hidden cursor-pointer hover:border-pink-500">
                <img alt="art nft" src={data?.imageUrl  }/>
            </div></>
        )
    }


    const RenderStaked = () => {

        return (
            <>
                {staked?.staked && staked?.staked?.length >0 ?
                    <div className="w-full flex gap-1 flex-wrap border p-2 border-pink-500 rounded-lg bg-[#00000062]">
                        <p>Nft Miners on work:</p>
                        {
                        onWorkNfts &&   onWorkNfts?.map((item, i) => <Card data={item} />)
                        }
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
                {staked?.staked && onWorkNfts?.length > 0? <RenderStaked />
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