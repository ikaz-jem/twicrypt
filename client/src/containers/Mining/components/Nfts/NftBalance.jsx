import { nft_contract } from "../../../MarketPlace/data/Addresses"
import Spinner from "../../../../shared/Spinner/Spinner"

import { useGetMintedNfts } from "../../hooks/useGetMintedNfts"
const NftBalance = () => {


    const handleClick = () => {

    }

    const Card = ({ data }) => {
        return (
            <>
                <div className=" border  h-20 w-20 rounded-lg overflow-hidden ">
                    <img alt="art nft" src={data.image_url} />
                </div>
            </>
        )
    }


    const Nfts = useGetMintedNfts({
        chain: 'bsctestnet'
    })

    return (

        <div className=" gap-2 flex items-center justify-start bg-neutral-900 p-2 h-[50vh] flex-wrap w-full   mx-auto overflow-y-scroll ">
            {Nfts.data ? Nfts && Nfts?.data?.map((nft, i) => {
                if (nft.contract === nft_contract) {

                    return <Card handleClick={(e) => handleClick(e, nft)} key={i} data={nft} />
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

    )

}

export default NftBalance