import { useEffect, useState } from "react"
import SectionWhy from "../../components/sectionWhy/SectionWhy"
import CarouselSponsor from "./CarouselSponsor/CarouselSponsor"
import SliderSponsor from "./sliderSponsor/SliderSponsor"
import CarouselTransition from "../../shared/transitions/CarouselTransition"
import { Transition } from "@headlessui/react"
import './sliderSponsor/style.css'


const SponsorUs = () => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

console.log(show)
  return (
    <div className="flex  flex-col ">

      <div className="h-full  ">

        <button className=" text-black text-bold animate-bg w-full">{show ? " Your sponsorship will Appear on the main slider you can switch to cazousel" : "Your sponsorship will Appear on main carousel switch to slider view"}</button>

        <CarouselTransition show={show} >
          <SliderSponsor show={show} setShow={setShow} />
        </CarouselTransition>



        <Transition
          appear
          className="z-0 "
          show={!show}
          enter="transition-all duration-1000 ease-in-out z-0 delay-1000"
          enterFrom="opacity-0 translate-y-60 z-0 "
          enterTo="opacity-100 translate-y-0 duration-1000 z-0"
          leave="transition-all duration-1000 z-0 fixed top-[8.3%] w-full h-full"
          leaveFrom="opacity-100 translate-x-0 z-0 "
          leaveTo="opacity-0 translate-x-40  z-0"
        >
          <CarouselSponsor show={!show} setShow={setShow} />

        </Transition>




        {/* <SectionWhy/> */}

      </div>
    </div>

  )
}

export default SponsorUs