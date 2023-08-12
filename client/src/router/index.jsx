import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
  

  import '../App.css';


import Home from '../containers/Home'
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Dashboard from "../containers/Dashboard/Dashboard";
import SponsorUs from "../containers/sponsorUs/SponsorUs";

import Earn from "../containers/Earn";
import About from "../containers/About";
import Preparations from "../containers/Preparations";
import MyProvider from "../Providers/Web3";

const routes = [
    {
        path:'/',
        component:Home,
        requiresAuth:false,
    },
    {
        path:'/earn',
        component:Earn,
        requiresAuth:false,
    },
    {
        path:'/sponsor',
        component:SponsorUs,
        requiresAuth:false,
    },
    {
        path:'/preparations',
        component:Preparations,
        requiresAuth:false,
    },
    {
        path:'/dashboard',
        component:Dashboard,
        requiresAuth:false,
    },
    
    {
        path:'/about',
        component:About,
        requiresAuth:false,
    },

]



   const AppRoutes = ()=>{


return (

<BrowserRouter>

    <MyProvider>
<div className="hero h-100" data-component="fadereveal">


                  <Navbar/>
                        <Routes>
                                {routes.map(({component:Component , path ,requiresAuth},index)=>{
                                    
                                    return requiresAuth ? null :  <Route key={index} path={path} element={<Component />} />
                                    
                                })}
                        </Routes>
                                </div>

                <Footer/>
    </MyProvider>

</BrowserRouter>


    )
  }


  export default AppRoutes