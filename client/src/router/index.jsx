import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
  

  import '../App.css';


import Home from '../containers/Home'
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Dashboard from "../containers/Dashboard";
import SponsorUs from "../containers/SponsorUs";
import Earn from "../containers/Earn";
import About from "../containers/About";
import Preparations from "../containers/Preparations";


const routes = [
    {
        path:'/',
        component:Home,
        requiresAuth:'',
    },
    {
        path:'/earn',
        component:Earn,
        requiresAuth:'',
    },
    {
        path:'/sponsor',
        component:SponsorUs,
        requiresAuth:'',
    },
    {
        path:'/preparations',
        component:Preparations,
        requiresAuth:'',
    },
    {
        path:'/dashboard',
        component:Dashboard,
        requiresAuth:'',
    },
    
    {
        path:'/about',
        component:About,
        requiresAuth:'',
    },

]



   const AppRoutes = ()=>{


return (

<BrowserRouter>

<div className="hero" data-component="fadereveal">

                  <Navbar/>
                        <Routes>
                                {routes.map(({component:Component , path},index)=>{
                                    
                                    return  <Route key={index} path={path} element={<Component />} />
                                    
                                })}
                        </Routes>
                                </div>

                <Footer/>

</BrowserRouter>


    )
  }


  export default AppRoutes