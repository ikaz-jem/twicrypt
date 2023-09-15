
import LeftMenu from "./LeftMenu"
import BottomMenu from "./BottomMenu"
import { useSelector } from "react-redux"
import { Fragment } from "react"

const Menu = ()=> {

const position =useSelector(state=>state.states.menuposition)

return (

<Fragment>

 {position ? <LeftMenu />  : <BottomMenu />}

</Fragment>

)

}

export default Menu