
import { useContractRead } from "wagmi"
import NftAbi from '../../MarketPlace/abi/ERC721_Nft.json'
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { app_chain_id } from "../../../shared/data/chains"
import { nft_contract } from "../../MarketPlace/data/Addresses"

export const useOwnerOf = (tokenId) => {

    const dispatch = useDispatch()





    let isOwner = false
    const { data, isLoading, hasError } = useContractRead({
        address: nft_contract,
        abi: NftAbi && NftAbi,
        functionName: 'ownerOf',
        args: [tokenId && Number(tokenId)],
        enabled: tokenId  && true,
        chainId: app_chain_id && app_chain_id,
        onError(){
            return null
        }
    })
    
  

    //setting store with comming data
  

       return {data, isLoading, hasError  }


}