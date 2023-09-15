import axios from "axios"
import { useEffect } from "react"
import { headers, Testnetheaders } from "./Headers";
import { userData } from "../../../app/features/session/sessionSlice";
import { useSelector } from "react-redux";
import { opensea_testnet } from "../data/baseUrls";
import { setMyNfts } from "../../../app/features/MarketPlace/MarketplaceSlice";
import { useDispatch } from "react-redux";

export const useGetNftByContract = (change = '') => {

    const dispatch = useDispatch()
    const setMyNftsData = (data) => dispatch(setMyNfts(data))

    const { address } = useSelector(userData)
    const data = useSelector((state) => state.marketPlace.nftFilter)

    const testnetData = async () => {
        const Base = opensea_testnet;
        const nftlimit = `?limit=${data?.limit || ""}`
        const constructed = `${Base}${'bsctestnet'}/account/${address && address}/nfts${nftlimit}`

        setMyNftsData({
            isLoading: true,
        });

        try {
            const nftData = address && await axios.get(constructed, { Testnetheaders }).then((res) => res.data.nfts)
            setMyNftsData({
                data: nftData,
                isLoading: false,
                hasError: false,
            });

        } catch (err) {
            err &&
                setMyNftsData({
                    data: null,
                    isLoading: false,
                    hasError: true
                });
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
    }, [address, change])
    return
}
