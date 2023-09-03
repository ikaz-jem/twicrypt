
import LeftMenu from "./LeftMenu"
import BottomMenu from "./BottomMenu"
import React, { useState } from "react"

const Menu = ({setShowPanel})=> {
const [menuPosition , setMenuPosition] = useState(false)

return (

<React.Fragment>

 {menuPosition ? <LeftMenu changePosition={setMenuPosition}setShowPanel={setShowPanel} />  : <BottomMenu changePosition={setMenuPosition}  setShowPanel={setShowPanel}/>}

</React.Fragment>

)

}

export default Menu