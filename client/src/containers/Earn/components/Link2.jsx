
import { useState } from "react"
import { useEffect } from "react"
import MenuTransition from "../../../shared/transitions/MenuTransition"


const Link2 = ()=>{

const [show,setShow]=useState(false)

    useEffect(() => {
        setShow(true)
    }, [])


    return (
    <>
<MenuTransition setShow={show} >


    <h1>Link 2</h1>
</MenuTransition>
    </>)
}


export default Link2