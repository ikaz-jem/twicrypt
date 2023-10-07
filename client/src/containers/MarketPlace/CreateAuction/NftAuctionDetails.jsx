import Disclaimer from '../../../shared/Disclamer/Disclaimer'
import { Link } from "react-router-dom"



const NftAuctionDetails = ({ myNfts }) => {


  return (
    <>
      <div className="h-full border-l border-neutral-900 rounded-2xl  " >
        <div className="flex items-start px-5 flex-col text-xs gap-2 text-left  ">
          {myNfts?.selectedNft ? <div className=" w-full h-full rounded-xl">
            <div className="mt-5 text-sm">

            {myNfts?.selectedNft?.name &&  <p className="font-extrabold">name :<span className="font-light pl-2">{myNfts?.selectedNft?.name} </span> </p>}
            { myNfts?.selectedNft?.created_at && <p className="font-extrabold">date created : <span className="font-light pl-2">{myNfts?.selectedNft?.created_at}</span> </p>}
            {myNfts?.selectedNft?.contract &&  <p className="font-extrabold">contract: <span className="font-light pl-2">{myNfts?.selectedNft?.contract} </span> </p>}
              <p className="py-5"> {myNfts?.selectedNft?.description}</p>

            </div>

            <Link className="border border-neutral-800 px-5 py-2 rounded-lg hover:bg-neutral-800 text-white transition-all duration-300" to={`/dashboard/marketplace/my-nfts/nft/?address=${myNfts?.selectedNft?.contract}&id=${myNfts?.selectedNft?.identifier}&cid=${myNfts?.selectedNft?.metadata_url}&chain=97`} >view full details</Link >
          </div>
            : <Disclaimer message={'select Nft to list'} className={"w-full opacity-70"} />
          }
        </div>
      </div>
    </>
  )
}

export default NftAuctionDetails