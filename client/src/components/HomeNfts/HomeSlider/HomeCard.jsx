import { Link, useNavigate } from "react-router-dom"





const HomeCard = ( {name,img,desc,website,icon}) =>{




return (
 
<div    className="rounded-lg group bg-neutral-900 border border-neutral-700 m-10 pb-3 flex flex-col hover:bg-white transition duration-300  w-auto h-auto">

    <img src={img} className="rounded-md m-2 object-fit " loading="lazy"/>


    <div className="flex justify-center gap-2 items-center">
    <p className="text-white group-hover:text-black transition-all ">{name}</p>
   {icon && <img src={icon} className="h-7 w-7 rounded-full"/>}
    </div>
    </div>

)


    }

    export default HomeCard