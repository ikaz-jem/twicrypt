import { navigation } from "./navigation"
import { Web3Button } from "@web3modal/react";
import { UseStartSession } from "../../hooks/useConnectUser";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink,Link } from "react-router-dom";
import logo from '../../media/logo.png'
import { userSession } from "../../app/features/session/sessionSlice";
import AppMenu from "./dropdown/AppMenu";
import { FcBusinessman} from "react-icons/fc";



const Navbar = () => {


const isLogedIn = useSelector(userSession)
 
const {userChanged} = UseStartSession()






return (

        <div className="navbar fixed w-full top-0 bg-gradient-to-b from-[#ffffff15] to-[#ffffff1c]  ">
           
{/* {isLogedIn && user.accountType !== 'guest' && !user.hasAccount && <UserModal address={address} show={!user.hasAccount} />} */}

            <div className="   container container--xxlarge container--center h-10  shadow-xl  backdrop-blur-sm rounded-3xl overfllow-hidden m-0  ">

             <div className="flex h-full justify-between px-5">
                    
                <Link className='logo ' to={'./'} >
                        <img src={logo} alt="logo" className="w-6 h-6 mr-1 animate-spin" />
                            {/* <p className="ml-1 p-0 text-xs text-pink-600 font-bold bg-yellow-400 invisible md:visible ">Twi<span className="text-yellow-300 ml-1 bg-pink-600">Crypt</span></p> */}
                            <p className="ml-1 pl-2 text-neutral-100 font-bold font-sans tracking-wide text-base invisible w-0 md:w-auto md:visible   ">Twicrypt</p>
                </Link>




                        <nav className=" flex items-center justify-between">
                            <ul className="list list--inline list--unstyle gutter gutter--medium collapse w-0 lg:w-full lg:visible  " >
                                {
                                    navigation && navigation?.map(
                                        (link,i) => {
                                            return <li className="list__item h-100" key={i}>
                                           {
                                               link?.requireAuth && !isLogedIn ? null : <NavLink to={link?.url} className='link font-sans font-thin tracking-widest  '> {link?.name}</NavLink>
                                               
                                            }
                                        </li>
                                    })
                                }
                                <div className="inline-block my-2 items-center justify-center h-100 ">

                                </div>
                            </ul>
                                <AppMenu/>
                        </nav>

 
                    <div className=" flex items-center justify-center px-2">
                       {/* <Web3Button icon="hide" label="Connect" avatar="hide"/> */}
                       <w3m-button  size ={"sm"} label={'connect'}/>
                        {/* <Link to={`/dashboard/account/${userChanged}`} className="collapse lg:visible" >   <FcBusinessman className="text-4xl p-2 mx-4 bg-neutral-800 hover:bg-pink-600 transition-all rounded-full cursor-pointer " /> </Link>  */}
                    </div>


                    </div>

                   

                            

                </div>

                    </div>
                

       



    )
}

export default Navbar



// import { navigation } from "./navigation"
// import { Web3Button } from "@web3modal/react";
// import { UseStartSession } from "../../hooks/useConnectUser";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import { NavLink,Link } from "react-router-dom";
// import logo from '../../media/logo.png'
// import { userSession } from "../../app/features/session/sessionSlice";
// import AppMenu from "./dropdown/AppMenu";
// import { FcBusinessman} from "react-icons/fc";



// const Navbar = () => {


// const isLogedIn = useSelector(userSession)
 
// const {userChanged} = UseStartSession()






// return (

//         <div className="navbar sticky top-0 ">
           
// {/* {isLogedIn && user.accountType !== 'guest' && !user.hasAccount && <UserModal address={address} show={!user.hasAccount} />} */}

// <div className=" navbar__wrapper wrapper container container--xlarge container--center  shadow-xl  backdrop-blur-sm rounded-3xl overfllow-hidden ">
// <div className="grid grid--middle h-100">
//     <div className="grid__column grid__column--2 hidden hidden@medium h-full" >
    

// <Link className='logo ' to={'./'} >
// <img src={logo} alt="logo" className="w-6 h-6 mr-1 " />
// <p className="ml-1 p-0 text-xs text-pink-600 font-bold bg-yellow-400 bord">Twi<span className="text-yellow-300 ml-1 bg-pink-600">Crypt</span></p>
// </Link>
//     </div>
//     <div className="navbar__menu grid__column  ">

//         <nav className=" ">
//             <ul className="list list--inline list--unstyle gutter gutter--medium  " >
//                 {
//                     navigation && navigation?.map(
//                         (link,i) => {
//                             return <li className="list__item h-100" key={i}>
//                            {
//                                link?.requireAuth && !isLogedIn ? null : <NavLink to={link?.url} className='link  '> {link?.name}</NavLink>
                               
//                             }
//                         </li>
//                     })
//                 }
//                 <div className="inline-block my-2 items-center justify-center h-100 ">

//                 <AppMenu/>
//                 </div>
//             </ul>
//         </nav>

//     </div>

//     <div className="grid__column grid__column--2 hidden hidden@medium"></div>
//     <div className="flex justify-center items-center ">

//         <Web3Button icon="hide" label="Connect" balance="show" avatar="hide"/>
//               <Link to={`/dashboard/account/${userChanged}`} >   <FcBusinessman className="text-4xl p-2 mx-5 bg-neutral-800 hover:bg-pink-600 transition-all rounded-full cursor-pointer " /> </Link> 
//     </div>

            

// </div>
// </div>
// </div>



// )
// }

// export default Navbar
