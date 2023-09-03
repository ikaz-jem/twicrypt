
import axios from "axios"
import { useEffect, useState } from "react"
import { headers } from "./Headers";

export const useGetNftByAccount = (data) => {
    const [Nfts, setNfts] = useState({
        data: null,
        isLoading: false,
        hasError: false,
    
    })

    const Base = 'https://testnets-api.opensea.io/v2/chain/'
    const nftlimit = `?limit=${data?.limit || ""}`
    const constructed = `${Base}${data?.chain}/account/${data?.walletAddress}/nfts${nftlimit}`

    const fetchData = async () => {
        setNfts((prev) => ({
            ...prev,
            isLoading: true,
        }))
        
        try {
            const response = await axios.get(constructed, { headers }).then((res) => setNfts((prev) => ({
                ...prev,
                data: res.data.nfts,
                isLoading: false,
                hasError:false
            })))
        } catch (err) {
            err && setNfts((prev) => ({
                ...prev,
                isLoading: false,
                hasError: true
            }))
            return null
        }
    }

    useEffect(() => {
        const controller = new AbortController()
        !!data?.execute && fetchData()
        return () => controller.abort()
    }, [data?.walletAddress,data])

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