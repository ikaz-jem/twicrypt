import axios from "axios"
import { useEffect } from "react"



export const useGetMetadataByUrl = ({metadata_Url,callback})=>{

let data = metadata_Url && callback ? true : false
    const getNFtData = async () => {

        let isUrl = await metadata_Url?.includes('https')
        if (isUrl) {
            const res = await axios.get(metadata_Url).then((res) => res.data)
          await  callback({
                metadata: res,
                protocolGateaway: 'json',
            })
        } else {
            const gateway = 'https://ipfs.io/ipfs/'
            let endpoint = await metadata_Url
            const url = `${gateway}${endpoint}`
            try {
                const res = await axios.get(url).then((res) => res.data)
                await callback({
                    metadata: res,
                    protocolGateaway: 'ipfs',
                })
                return res
            } catch (err) {
                throw new Error(err.message)
            }
        }
        return null
    }

    useEffect(()=>{
        metadata_Url && callback && getNFtData()
    },[data])


}