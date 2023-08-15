
import { Transition } from "@headlessui/react"





const FormTransition= ({children ,show})=> {


return (
  <Transition
  appear
  show={show}
  className={"relative z-10"}
  enter="transition-all duration-700 z-0"
  enterFrom="opacity-0 translate-x-40 z-10"
  enterTo="opacity-100 translate-x-0 z-10"
  leave="transition-all duration-700 z-10"
  leaveFrom="opacity-100 translate-x-0 z-10"
  leaveTo="opacity-0 translate-x-20 z-0"
>
{children}

</Transition>

)

}


export default FormTransition