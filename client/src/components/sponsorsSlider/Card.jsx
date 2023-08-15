




const Card = ( {name,img,desc,color,icon}) =>{

return (
 
<div className="rounded-lg  bg-neutral-900 border border-gray-800 m-10 flex flex-col hover:bg-white transition duration-300 cursor-pointer w-auto h-auto">

    <img src={img} className="rounded-md m-2 object-fit "/>


    <div className="flex justify-center gap-2 items-center">
    <p>{name}</p>
    <img src={icon} className="h-7 w-7 rounded-full"/>
    </div>
    </div>

)


    }

    export default Card