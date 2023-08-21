
import CarouselTransition from "../../shared/transitions/CarouselTransition";
import './style.css';
import { useEffect, useState } from "react";
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { MdOutlinePending, MdGeneratingTokens } from 'react-icons/md'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";
import MenuTransition from "../../shared/transitions/MenuTransition";


import Menu from "../../shared/Menu/Menu";
import Example from "./components/Example";
import QuickLinks from "./components/QuickLinks";
import Link2 from "./components/Link2";
import EarnHome from "./components/EarnHome";
import SectionWhy from "../../components/sectionWhy/SectionWhy";

const Earn = () => {

    const [show, setShow] = useState(false)
    const [component, setComponent] = useState('')
const navigate = useNavigate()


    // const {id} = useParams();
const location = useLocation()
console.log(location)
    useEffect(() => {
        location.pathname =='/earn/home'&& setComponent('home')
        location.pathname =='/earn/stats'&& setComponent('stats')

        setShow(true)
        //    id!= undefined && setComponent(id)
    }, [component,location.pathname])
    
    
    
    
  
const handleChangePage = async (item,e)=> {
    e.preventDefault()
    
    if(component == item.page) {
      return null 
    } else 
     await setShow(false)
     setTimeout(()=>{
     setComponent(item.page)
     setShow(true)
     navigate(item.component)
    
     },500)
    
    
    }



    const Components = {
        'home': <EarnHome  handleChangePage={handleChangePage} />,
        'stats': <Example />,
        2: <QuickLinks />,
        3: <Link2 />,
        'sectionWhy': <SectionWhy />,
    }
    

    const RenderMenu = () => {


        return (

            <div className={ `w-full shadow-md shadow-black  h-auto border-b    bg-opacity-30 rounded-3xl my-10 panel-1 py-2 relative flex gap-20 items-center px-10`}>

                <div className="flex items-center justify-start  m-0 p-0">
                    <RiMoneyDollarCircleLine className="text-white text-2xl m-0" />
                    <h6 className="m-0 pl-4">106587</h6>
                </div>
                <div className="flex items-center justify-start  m-0 p-0">
                    <MdGeneratingTokens className="text-white text-2xl m-0" />
                    <h6 className="m-0 pl-4">58486</h6>
                </div>
                <div className="flex items-center justify-start  m-0 p-0">
                    <AiOutlineCheckCircle className="text-white text-2xl m-0" />
                    <h6 className="m-0 pl-4">84487</h6>
                </div>
                <div className="flex items-center justify-start  m-0 p-0">
                    <MdOutlinePending className="text-white text-2xl m-0" />
                    <h6 className="m-0 pl-4">Pending</h6>
                </div>
               
                <div className="flex items-center justify-start  m-0 p-0">
                    <FaUsers className="text-white text-2xl m-0" />
                    <h6 className="m-0 pl-4">10</h6>
                </div>
            
            </div>

        )
    }

    return (
        <>



         

                <div className="lg:flex bg-black bg-opacity-70 relative h-auto w-full  ">

                    <div className="h-full lg:z-10 lg:sticky xl:sticky xl:top-22 lg-top-20 overflow-x-none fixed top-0  z-10  ">
                        <Menu setShow={setShow} show={show} component={component} setComponent={setComponent} handleChangePage={handleChangePage} />
                    </div>




                    {/*                         
        <a className="link" onClick={showIndex}> showIndex</a >
    <a className="link" onClick={showTable}> showTable</a > */}
                    <div className="flex flex-col  w-full relative relative h-full  container--xxlarge container--center ">
                        {RenderMenu()}

                        {/* <Example /> */}

                        <MenuTransition show={show}>

                            <div className="  w-auto h-auto  pl-10 lg:pl-0 xl:pl-0 relative   ">

                                {Components[component]}
                                {/* <Routes>

                                <Route  path={'/5'} element={<EarnHome setComponent={setComponent} />} />
                                <Route  path={'./'} element={<Example />} />
                                </Routes> */}
                                {/* {Component} */}
                            </div>

                        </MenuTransition>

                    </div>
                </div>
                {/* <SectionWhy/> */}


     

        </>
    )

}


export default Earn