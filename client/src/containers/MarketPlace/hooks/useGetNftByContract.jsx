import axios from "axios"
import { useEffect, useState } from "react"
import { headers,Testnetheaders } from "./Headers";
import { userData } from "../../../app/features/session/sessionSlice";
import { useSelector } from "react-redux";
import { opensea_testnet } from "../data/baseUrls";



export const useGetNftByContract = () => {
    const [Nfts, setNfts] = useState({
        data: null,
        isLoading: false,
        hasError: false,
    })

    const {address}=useSelector(userData)
    const data = useSelector((state)=>state.marketPlace.nftFilter)

    const testnetData = async ()=> {

    const Base = opensea_testnet ;
    const nftlimit = `?limit=${data?.limit || ""}`
    const constructed = `${Base}${'bsctestnet'}/account/${address&&address}/nfts${nftlimit}`
    setNfts((prev) => ({
        ...prev,
        isLoading: true,
    }))
    try {
         const nftData = address && await axios.get(constructed,{Testnetheaders}).then((res)=>res.data.nfts)
            setNfts((prev)=> ({
                ...prev,
                data: nftData,
                isLoading:false,
                hasError:false,
            }))
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
      await testnetData()
        // if (data?.chain === 'bsctestnet' || data?.chain ==='goerli' ){
        //     await testnetData()
        // } else {
        //     await mainnetData()
        // }
    }

    useEffect(() => {
    fetchData()    
    }, [address])

return Nfts
}
