
import LeftMenu from "./LeftMenu"
import BottomMenu from "./BottomMenu"
import React, { useState } from "react"

const Menu = ()=> {
const [menuPosition , setMenuPosition] = useState(false)

return (

<React.Fragment>

 {menuPosition ? <LeftMenu changePosition={setMenuPosition}/> : <BottomMenu changePosition={setMenuPosition} />}

</React.Fragment>

)

}

export default Menu