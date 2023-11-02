
import axios from "axios"
import { useEffect, useState } from "react"
import { headers,Testnetheaders } from "./Headers";
import { userData } from "../../../app/features/session/sessionSlice";
import { useSelector } from "react-redux";


export const useGetNftByAccount = () => {
    const [Nfts, setNfts] = useState({
        data: null,
        isLoading: false,
        hasError: false,
    
    })

    const {address}=useSelector(userData)
    const data = useSelector((state)=>state?.marketPlace?.nftFilter)
    
    const Base = 'https://testnets-api.opensea.io/v2/chain/'
    const nftlimit = `?limit=${data?.limit || ""}`
    const constructed = `${Base}${data?.chain}/account/${address}/nfts${nftlimit}`

const mainnetData = async ()=> {
    const Base = 'https://api.opensea.io/v2/chain/'
    const nftlimit = `?limit=${data?.limit || ""}`
    const constructed = `${Base}${data?.chain}/account/${address}/nfts${nftlimit}`
    setNfts((prev) => ({
        ...prev,
        isLoading: true,
    }))
    
    try {
        await axios.get(constructed, { headers }).then((res) => setNfts((prev) => ({
            ...prev,
            data: res.data.nfts,
            isLoading: false,
            hasError:false
        })))
    } catch (err) {
        err && setNfts((prev) => ({
            ...prev,
            data:null,
            isLoading: false,
            hasError: true
        }))
        return null
    }
}


const testnetData = async ()=> {

    setNfts((prev) => ({
        ...prev,
        isLoading: true,
    }))
    
    try {
         await axios.get(constructed, { Testnetheaders }).then((res) => setNfts((prev) => ({
            ...prev,
            data: res.data.nfts,
            isLoading: false,
            hasError:false
        })))
    } catch (err) {
        err && setNfts((prev) => ({
            ...prev,
            data:null,
            isLoading: false,
            hasError: true
        }))
        return null
    }

}


const twicrypt = async ()=> {

    const baseUrl = 'https://testnets-api.opensea.io/v2/chain/'
    const limit = `?limit=${50}`
    const url = `${baseUrl}${'bsctestnet'}/account/${address}/nfts${limit}`

    setNfts((prev) => ({
        ...prev,
        isLoading: true,
    }))
    
    try {
        const res =  await axios.get(url, { Testnetheaders }).then((res) => res.data)

        setNfts((prev) => ({
            ...prev,
            data: res.nfts,
            isLoading: false,
            hasError:false
        }))
        if (res.next){
            let link =`${url}&next=${res.next}`
            const resp = await axios.get(link, { Testnetheaders }).then((res) => res.data)
            setNfts((prev) => ({
                ...prev,
                data:[...prev.data, ...resp.nfts],
                isLoading: false,
                hasError:false
            }))
        }
    } catch (err) {
        err && setNfts((prev) => ({
            ...prev,
            data:null,
            isLoading: false,
            hasError: true
        }))
        return null
    }

}


    const fetchData = async () => {
       
        if (data?.chain === 'bsctestnet' || data?.chain ==='goerli' ){
            await testnetData()}
            else if (data?.chain==="twicrypt"){
                await twicrypt();
            }
        else {
            await mainnetData()
        }

    }

    useEffect(() => {
       
        !!data?.execute && address && fetchData()
    
    }, [address,data?.chain])

return Nfts
}

/*
https://api.opensea.io/v2/chain/{chain}/account/{address}/nfts // Retrieve NFTs (by account)
https://api.opensea.io/v2/chain/{chain}/contract/{address}/nfts ///Retrieve NFTs (by contract)
https://api.opensea.io/v2/chain/{chain}/contract/{address}/nfts/{identifier} Get an NFT

https://api.opensea.io/v2/orders/{chain}/seaport/listings  Retrieve listings
https://api.opensea.io/v2/collection/{slug}/nfts  ///Retrieve NFTs (by collection)
https://api.opensea.io/v2/offers/collection/{slug} Retrieve collection offers















*/