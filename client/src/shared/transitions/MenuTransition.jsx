
import { Transition } from "@headlessui/react"





const MenuTransition= ({children ,show})=> {


return (
    <Transition
    appear
    className="z-0 "
    show={show}
    enter="transition-all duration-150 ease-in-out z-0 "
    enterFrom="opacity-0 translate-y-60 z-0 blur-md"
    enterTo="opacity-100 translate-y-0 duration-150 z-0"
    leave="transition-all duration-150 z-0"
    leaveFrom="opacity-100 translate-x-0 z-0"
    leaveTo="opacity-0 translate-y-[-20vh] blur-md z-0"
  >
{children}

</Transition>

)

}


export default MenuTransition