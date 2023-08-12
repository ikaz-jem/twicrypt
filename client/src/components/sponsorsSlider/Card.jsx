




const Card = ( {name,img,desc,color}) =>{

return (
 
<div className="rounded-lg  bg-neutral-900 border border-gray-800 m-10 flex flex-col hover:bg-white transition duration-300 cursor-pointer">

    <img src={img} className="rounded-md m-2 object-fit "/>
    <p>some text</p>
    </div>

)


    }

    export default Card