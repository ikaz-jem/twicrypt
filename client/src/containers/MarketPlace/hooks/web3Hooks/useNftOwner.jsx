
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useContractRead } from "wagmi"
import abi from '../../abi/ERC721.json'
import { useDispatch } from "react-redux"
import { setNftDetailsPageState } from "../../../../app/features/MarketPlace/MarketplaceSlice"
import { useEffect } from "react"
import { app_chain_id } from "../../../../shared/data/chains"

export const useNftOwner = () => {

    const dispatch = useDispatch()
    const { address } = useSelector((state => state.session))
    const setNftDetailsData = (data) => dispatch(setNftDetailsPageState(data))
    const nftDetails = useSelector(state=>state?.marketPlace?.nftDetailsPageState)





    let isOwner = false
    const { data, isLoading, hasError } = useContractRead({
        address: nftDetails?.contractAddress && nftDetails?.contractAddress,
        abi: abi && abi,
        functionName: 'ownerOf',
        args: [nftDetails?.tokenId && Number(nftDetails?.tokenId)],
        enabled: nftDetails?.tokenId && nftDetails?.contractAddress && app_chain_id&& true,
        chainId: app_chain_id && app_chain_id,
        onError(){
            return null
        }
    })
    
    let nftOwner = data
    let pageVisitor = address
    let error = hasError
    let loading = isLoading
    let isVisitorConnected = address ? true : false
    address === nftOwner ? isOwner = true : isOwner = false

    //setting store with comming data
    useEffect(()=>{
            data ? setNftDetailsData({ nftOwner:nftOwner, 
                pageVisitor:pageVisitor, 
                isOwner:isOwner, 
                loading:loading, 
                error:error, 
                isVisitorConnected:isVisitorConnected,
             }) : setNftDetailsData({ nftOwner:nftOwner, 
                pageVisitor:pageVisitor, 
                isOwner:isOwner, 
                loading:loading, 
                error:error, 
                isVisitorConnected:isVisitorConnected,
             })

        },[data,address])

       return { nftOwner, pageVisitor, isOwner, loading, error, isVisitorConnected }


}