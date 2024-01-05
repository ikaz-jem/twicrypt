
import {useSelector } from "react-redux/es/hooks/useSelector"
import { useContractRead, useNetwork } from "wagmi"
import abi from '../../abi/ERC721.json'
import { app_chain_id } from "../../../../shared/data/chains"

export const useHasNft = ({contract ,execute ,chain})=> {

let isOwner = false
const {address } = useSelector((state=>state.session))


const {data,isLoading,hasError}= useContractRead({
address:contract && contract,
abi:abi && abi,
functionName:'tokensOfOwner',
args:[address && address],
enabled:execute,
chainId: app_chain_id && app_chain_id,
enabled:address ? true : false

})


let nftOwner=data
let pageVisitor = address
let error = hasError
let loading = isLoading
let isVisitorConnected = address ? true : false
// chain && console.log(getChainId())
address === nftOwner ? isOwner = true : isOwner = false
return {nftOwner ,pageVisitor, isOwner ,loading , error ,isVisitorConnected}


}