import { navigation } from "./navigation"
import { Web3Button } from "@web3modal/react";
import { UseStartSession } from "../../hooks/useConnectUser";
import { userData } from "../../app/features/session/sessionSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink,Link } from "react-router-dom";
import logo from '../../media/logo.png'
import { userSession } from "../../app/features/session/sessionSlice";
import UserModal from "../../shared/userModal/UserModal";
import PopoverMenu from "../../containers/Earn/components/MenuTopLink/Popover";
import { useWeb3Modal } from '@web3modal/react'

const Navbar = () => {


const user = useSelector(userData)
const isLogedIn = useSelector(userSession)

const {userChanged:address} = UseStartSession()
const { isOpen, open, close, setDefaultChain } = useWeb3Modal()





return (

        <div className="navbar sticky top-0 ">
           
{/* {isLogedIn && user.accountType !== 'guest' && !user.hasAccount && <UserModal address={address} show={!user.hasAccount} />} */}

            <div className=" navbar__wrapper wrapper container container--xlarge container--center  shadow-xl  backdrop-blur-sm rounded-3xl overfllow-hidden ">
                <div className="grid grid--middle h-100">
                    <div className="grid__column grid__column--2 hidden hidden@medium h-full" data-component="fadereveal">
                    
            
<Link className='logo ' to={'./'} >
           <img src={logo} alt="logo" className="w-10 h-10 " />
            <p className="m-0 p-0 text-sm">Twicrypt</p>
</Link>
                    </div>
                    <div className="navbar__menu grid__column  ">

                        <nav className=" ">
                            <ul className="list list--inline list--unstyle gutter gutter--medium  " data-component="fadereveal">
                                {
                                    navigation.map(
                                        (link,i) => {
                                            return <li className="list__item h-100" key={i}>
                                           {
                                               link.requireAuth && !isLogedIn ? null : <NavLink to={link.url} className='link  '> {link.name}</NavLink>
                                               
                                            }
                                        </li>
                                    })
                                }
                                <div className="inline-block my-2 items-center justify-center h-100 ">

                                <PopoverMenu/>
                                </div>
                            </ul>
                        </nav>

                    </div>

                    <div className="grid__column grid__column--2 hidden hidden@medium"></div>
                    <div className="flex justify-center items-center ">

                        <Web3Button icon="hide" label="Connect" balance="show" avatar="hide"/>
                    </div>

                            

                </div>
            </div>
        </div>



    )
}

export default Navbar