
import { useEffect } from "react"
import {  useSelector } from "react-redux/es/hooks/useSelector"


export const useStoreData = (selector )=> {
    
 let data = useSelector(selector)

 

return {data}

}