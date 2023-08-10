import { navigation } from "./navigation"
import { Web3Button } from "@web3modal/react";


const Navbar = () => {


    return (

        <div className="navbar  ">
           


            <div className="navbar__wrapper wrapper container container--xlarge container--center">
                <div className="grid grid--middle">
                    <div className="grid__column grid__column--3 hidden hidden@medium" data-component="fadereveal">

                        <h3 className="logo heading" dataref="fadereveal[el]">&nbsp;</h3>

                    </div>

                    <div className="navbar__menu grid__column">

                        <nav className="menu">
                            <ul className="list list--inline list--unstyle gutter gutter--large" data-component="fadereveal">
                            
                                {
                                    navigation.map(
                                        (link,i) => {
                                        return <li className="list__item" dataref="fadereveal[el]" key={i}>
                                            <a href="">{link.name}</a>
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