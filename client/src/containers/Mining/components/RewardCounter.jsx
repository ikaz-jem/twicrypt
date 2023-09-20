import { useEffect, useState } from "react"





const RewardCounter =()=>{
    const [counter,setCounter]=useState(0)
useEffect(()=>{

    const interval = setInterval(()=>{
            setCounter(counter+1)
    },1000)
return()=> clearInterval(interval)

},[counter])

return (

<h1>{counter}</h1>


)

}

export default RewardCounter