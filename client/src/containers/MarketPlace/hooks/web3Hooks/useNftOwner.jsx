
import {useSelector } from "react-redux/es/hooks/useSelector"
import { useContractRead, useNetwork } from "wagmi"


export const useNftOwner = ({contract , tokenId,execute ,chain})=> {

const abi = require('../../abi/ERC721.json')
let isOwner = false
const {address } = useSelector((state=>state.session))


const {data,isLoading,hasError}= useContractRead({
address:contract && contract,
abi:abi,
functionName:'ownerOf',
args:[tokenId && tokenId],
enabled:execute,
chainId: chain && chain

})
let nftOwner=data
let pageVisitor = address
let error = hasError
let loading = isLoading
let isVisitorConnected = address ? true : false
// chain && console.log(getChainId())
address === nftOwner ? isOwner = true : isOwner = false
console.log(nftOwner)
return {nftOwner ,pageVisitor, isOwner ,loading , error ,isVisitorConnected}


}