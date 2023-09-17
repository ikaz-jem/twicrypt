import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import Spinner from "../../../../shared/Spinner/Spinner"
import { setNftDetailsPageState } from "../../../../app/features/MarketPlace/MarketplaceSlice"




const NftDetailsImage = ()=> {
    
    const nftDetailsPageState = useSelector(state=>state.marketPlace.nftDetailsPageState)
    const dispatch = useDispatch()
    const setNftDetails =(data)=> dispatch(setNftDetailsPageState(data))

    useEffect(()=>{

    const generateImageLink = () => {
        const isHttp = nftDetailsPageState?.metadata?.image.includes('https://')
        const Cid = nftDetailsPageState?.metadata?.image.slice(7, nftDetailsPageState?.metadata?.image.length);
        const imageLink = `https://ipfs.io/ipfs/${Cid}`
        if (nftDetailsPageState?.protocolGateaway == 'ipfs' && nftDetailsPageState?.metadata && !isHttp) {
            setNftDetails({imageLink:imageLink})
            return imageLink
        } else if (nftDetailsPageState?.metadata && isHttp) {
            setNftDetails({imageLink:nftDetailsPageState?.metadata?.image})

            return nftDetailsPageState?.metadata?.image

        } return setNftDetails({imageLink:nftDetailsPageState?.metadata?.image})


    }
    generateImageLink()
},[nftDetailsPageState?.metadata])


      
        if (!nftDetailsPageState?.metadata?.image ) {
            return (
                <div className="flex flex-col justify-start items-center  rounded-xl  bg-[#00000050] w-auto h-auto overflow-hidden border border-neutral-900 relative ">
                    <Spinner message={'Getting Asset Ready...'} />
                </div>
            )
        } else return (
            <div className="flex flex-col justify-start items-center  rounded-3xl  bg-[#000000d2] w-auto h-auto overflow-hidden border border-neutral-900 relative ">
                {/* <div className="bg-[#4b005575] w-full h-10 "> hell</div> */}
                {<img  src={nftDetailsPageState?.imageLink} alt="Fetching image" className=" object-contain w-full relative rounded-b-md" />}
            </div>
        )


}


export default NftDetailsImage