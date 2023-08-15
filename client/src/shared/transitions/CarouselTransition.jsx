
import { Transition } from "@headlessui/react"





const CarouselTransition= ({children ,show})=> {


return (
    <Transition
    appear
    className="z-0 "
    show={show}
    enter="transition-all duration-1000 ease-in-out z-0 delay-1000"
    enterFrom="opacity-0 translate-y-60 z-0"
    enterTo="opacity-100 translate-y-0 duration-1000 z-0"
    leave="transition-all duration-1000 z-0"
    leaveFrom="opacity-100 translate-x-0 z-0"
    leaveTo="opacity-0 translate-x-20 z-0"
  >
{children}

</Transition>

)

}


export default CarouselTransition