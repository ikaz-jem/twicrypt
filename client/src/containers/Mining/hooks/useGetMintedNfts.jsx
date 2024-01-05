
import axios from "axios"
import { useEffect, useState } from "react"
import { Testnetheaders,headers } from "../../MarketPlace/hooks/Headers";
import { userData } from "../../../app/features/session/sessionSlice";
import { useSelector } from "react-redux";

export const useGetMintedNfts    = ({chain}) => {

const changes = useSelector(state=>state.mining.session)
const depend = changes?.staked?.length
    const [Nfts, setNfts] = useState({
        data: null,
        isLoading: false,
        hasError: false,
    
    })

    const {address}=useSelector(userData)
    const data = useSelector((state)=>state?.marketPlace?.nftFilter)
    
    const Base = 'https://testnets-api.opensea.io/v2/chain/'
    const nftlimit = `?limit=${50}`
    const constructed = `${Base}${chain&&chain}/account/${address}/nfts${nftlimit}`

    const mainnetData = async ()=> {
    const Base = 'https://api.opensea.io/v2/chain/'
    const nftlimit = `?limit=${50}`
    const constructed = `${Base}${chain&&chain}/account/${address}/nfts${nftlimit}`
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
        const res =  await axios.get(constructed, { Testnetheaders }).then((res) => res.data)

        setNfts((prev) => ({
            ...prev,
            data: res.nfts,
            isLoading: false,
            hasError:false
        }))
        if (res.next){
            let link =`${constructed}&next=${res.next}`
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
        mainnetData()
        // if (data?.chain === 'bsctestnet' || data?.chain ==='goerli' ){
        //     await testnetData()
        // }else if(data?.chain === 'twicrypt'){
            
        //     await testnetData()
        // } else {
        //     await mainnetData()
        // }

    }

    useEffect(() => {
       
        !!data?.execute && address && fetchData()
    
    }, [address,data?.chain ])

return Nfts
}