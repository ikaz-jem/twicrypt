
import { Transition } from "@headlessui/react"





const MenuTransition= ({children ,show})=> {


return (
    <Transition
    appear
    className="z-0 "
    show={show}
    enter="transition-all duration-300 ease-in-out z-0 "
    enterFrom="opacity-0  z-0 "
    enterTo="opacity-100  z-0 "
    leave="transition-all duration-300 z-0"
    leaveFrom="opacity-100  z-0"
    leaveTo="opacity-0 z-0"
  >
{children}

</Transition>

)

}


export default MenuTransition