import { nft_contract } from "../../../MarketPlace/data/Addresses"
import Spinner from "../../../../shared/Spinner/Spinner"

import { useGetMintedNfts } from "../../hooks/useGetMintedNfts"
import { useState } from "react"
import { useStakeMiners } from "../../hooks/useStakeMiners"
import { useCorrectNetwork } from "../../../../hooks/useCorrectNetwork"
import { app_chain_id } from "../../../../shared/data/chains"


const NftBalance = () => {
    
    const [selectedNft, setSelectedNft] = useState([])
    
    const Nfts = useGetMintedNfts({
        chain: 'bsctestnet'
    })

    const handleClick = (nft) => {
        if (!selectedNft.some((item) => item.identifier === nft.identifier)) {
            setSelectedNft((prev) => [...prev, nft]);
        }
    }

    const handleDeselect = (nft) => {
        setSelectedNft((prev) => (
            prev.filter((item) => item?.identifier != nft?.identifier)
        ))
    }

const selectAll = ()=> {
Nfts?.data?.map((nft)=>{
if(nft?.contract == nft_contract){
    if (!selectedNft.some((item) => item.identifier === nft.identifier)) {
     return   setSelectedNft((prev) => [...prev, nft]);
    }
}else return null

})

}


const prepareData = ()=> {
    const Ids = [];
    const images = [];
    selectedNft.map((item)=>{
        Ids.push(Number(item.identifier))
        images.push(item.image_url)
    })
  
    return [Ids,images]

}

const [Ids,images] = prepareData()

const { approve , approveSingle} = useStakeMiners({
    ids: Ids && Ids,
    images:images&& images
})

const {switchNetwork,chain} = useCorrectNetwork({
    fallback: selectedNft.length == 1 ? ()=>  approveSingle.write() :  ()=>  approve.write()
})


const putMinersOnWork = (e)=> {
if (chain?.id == app_chain_id) {
    e.preventDefault()
    if (selectedNft.length ==1){
        approveSingle.write()
    }else {
        approve.write();
    }
  
}else {
    e.preventDefault()
    switchNetwork?.switchNetwork();
}}




    const Card = ({ data }) => {
        return (
            <>
                <div className={`${isSelected(data) && "border border-pink-800  transition-all"}  duration-500  h-16 w-16 rounded-lg overflow-hidden cursor-pointer  `} onClick={(e) => handleClick(data)}>
                    <img alt="art nft" src={data.image_url} className={`${isSelected(data) && ' filter grayscale contrast-100  rounded-3xl overflow-hidden scale-75 p-0 m-0'} `} />
                </div>
            </>
        )
    }

    const Card2 = ({ data }) => {
        return (
            <><div className=" border my-1 h-10 w-10 overflow-hidden rounded-full transition cursor-pointer hover:border-pink-500" onClick={(e) => handleDeselect(data)}>
                    <img alt="art nft" src={data.image_url} />
                </div></>
        )
    }


    const isSelected = (nft) => {
        if (selectedNft.length > 0) {
            return selectedNft.includes(nft)
        }
    }

    return (

        <div className=" gap-2 flex items-center justify-start  p-2 h-[50vh] flex-wrap w-full   mx-auto  overflow-auto">

            <div className="w-full border py-2 border-purple-500 rounded">
                <p className="p-0 m-0 text-white text-xs">click to select/unselect</p>
                <div className="gap-2 flex items-center justify-start  px-2 h-auto flex-wrap w-full   mx-auto ">

                    {selectedNft && selectedNft.map((nft, i) => {
                        return <Card2 key={i} data={nft} />
                    })}
                </div>
       

                         
            </div>
                            <div className="flex flex-col items-start justify-center">
                        {selectedNft?.length>0 && <div className="flex gap-2 items-center justify-center py-2">

                            <button className="px-4 bg-green-500 rounded hover:bg-orange-500 text-sm py-1" onClick={(e)=>putMinersOnWork(e)}>put to work</button>
                            <button onClick={()=> selectAll()} className="px-4 bg-blue-500 rounded hover:bg-pink-500 text-sm py-1">select all</button>
                            <button onClick={()=> setSelectedNft([])} className="px-4 bg-blue-500 rounded hover:bg-pink-500 text-sm py-1">unselect all</button>
                        </div>
                            }

                            <p className="p-0 m-0 text-yellow-400 text-xs">click to select/unselect  from your nfts :</p>
                           </div>
    <div className=" gap-2 flex items-start justify-start   h-[30vh] flex-wrap w-full   mx-auto overflow-y-scroll border rounded overflow-hidden border-purple-500 p-2">
            {Nfts?.data ? Nfts && Nfts?.data?.map((nft, i) => {
                if (nft.contract === nft_contract) {
                    
                    return <Card onClick={(e) => handleClick(nft)} key={i} data={nft} />
                   
                } else {
                    return null
                }
            })
            :
            <div className="flex items-center justify-center w-full h-full">
                    <Spinner message={'getting your Nfts ...'} />
                </div>
            }
            </div>
        </div>

    )

}

export default NftBalance