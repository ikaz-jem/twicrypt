import { navigation } from "./navigation"
import { Web3Button } from "@web3modal/react";
import { UseStartSession } from "../../hooks/useConnectUser";
import { userData } from "../../app/features/session/sessionSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink,Link } from "react-router-dom";

const Navbar = () => {

const user = useSelector(userData)
UseStartSession()

    return (

        <div className="navbar  ">
           


            <div className="navbar__wrapper wrapper container container--xlarge container--center">
                <div className="grid grid--middle">
                    <div className="grid__column grid__column--2 hidden hidden@medium" data-component="fadereveal">

<Link className='logo hero__logo' to={'./'} >
           Logo             {/* <h3 className=" " dataref="fadereveal[el]">Logo</h3> */}
</Link>
                    </div>
                    <div className="navbar__menu grid__column">

                        <nav className="menu">
                            <ul className="list list--inline list--unstyle gutter gutter--large" data-component="fadereveal">
                            
                                {
                                    navigation.map(
                                        (link,i) => {
                                        return <li className="list__item" dataref="fadereveal[el]" key={i}>
                                            <NavLink to={link.url} > {link.name}</NavLink>
                                        </li>
                                    })
                                }
                            </ul>
                        </nav>

                    </div>

                    <div className="grid__column grid__column--2 hidden hidden@medium"></div>
              
                        <Web3Button/>

                            

                </div>
            </div>
        </div>



    )
}

export default Navbar