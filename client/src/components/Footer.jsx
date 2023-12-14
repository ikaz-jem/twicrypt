import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";




const Footer = ()=>{


return(

    <div className="index__footer footer">
    <div className="footer__panel panel">
      <div className="wrapper container space space--xlarge">
        <h3 className="heading">It’s All for you</h3>

        <div className="container container--medium container--center">
           <h4 className=" text-neutral-200">Join the community and enjoy all the great Features !</h4>
        </div>

         <Link to={'https://t.me/twicrypt'} target="blank">
        <button  className="border border-neutral-200 px-5 py-2 text-neutral-200 hover:text-neutral-800 hover:bg-neutral-200 transition-all">
        

          <span>Join Community</span>
        </button>
           </Link>
      </div>
    </div>

    <div className="footer__wrapper wrapper container container--xxxxlarge container--center bg-black space space--large">
      <section>
        <p className="text-white font-bold">All rights reserved</p>

        <p className="text-white font-bold">
          Copyright © 2022-{((new Date()).getFullYear())} <a href="https://twicrypt.com/" className="text-blue-500 font-bold hover:text-pink-500">Twicrypt</a>
        </p>
      </section>

      <ul className="list list--inline list--unstyle gutter gutter--large">
        <li className="list__item">
          <Link to="https://t.me/twicrypt" target="blank">
            <FaTelegramPlane className="text-3xl hover:text-white transition-all "/>
          </Link>
        </li>

        <li className="list__item">
          <Link to="https://twitter.com/twicrypt" target="blank">
            <BsTwitterX className="text-3xl hover:text-white  transition-all"/>
         
          </Link>
        </li>

       
      </ul>
    </div>
  </div>

)

}

export default Footer