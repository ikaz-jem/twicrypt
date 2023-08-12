

import { useState } from "react"
import SideBar from "../../components/sideBar/SideBar"

import { Table } from "../../shared/Table"




const Dashboard = ()=> {
const [Component,setComponent]=useState(<Table/>)



const showIndex =async ()=>{
 const comp = await import("./Index").then(({Index})=><Index />)
 setComponent(comp)
}
const showTable =async ()=>{
    const comp = await import("../../shared/Table").then( ({Table}) =>  <Table/>)
    setComponent(comp)
   }

    return( 

        <div className="light-ball ">
        <div className="lg:flex ">
                            <div className="h-full lg:z-10 lg:sticky xl:sticky xl:top-22 lg-top-20 overflow-x-none fixed top-40 left-0 z-max ">
                                     <SideBar />
                            </div>
{/*                         
        <a className="link" onClick={showIndex}> showIndex</a >
        <a className="link" onClick={showTable}> showTable</a > */}

                            <div className=" wrapper container container--xxlarge container--center  ">
                                 {Component}
                            </div>
        </div>
            {/* <SectionWhy/> */}
        </div>
    )
}

export default Dashboard