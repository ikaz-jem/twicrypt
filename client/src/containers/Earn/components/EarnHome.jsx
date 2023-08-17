




const Data = [


{
    title : 'Staking',
    desc :  ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    link:1
},

{
    title : 'AP2E',
    desc :  ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    link:2

},

{
    title : 'Daily Free Rewards',
    desc :  ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    link:3
},

{
    title : 'Staking',
    desc :  ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    link:1
},


]



const EarnHome = ({setComponent})=> {
    return(

<ul className=" w-auto color-ball bg rounded-xl my-10 shadow-2xl shadow-black overflow-hidden ">

{
    Data.map((item,i)=>{
        return <li className="border border-neutral-500 bg-neutral-200 bg-opacity-10  m-5 w-auto flex rounded-xl relative text-white overflow-hidden hover:bg-[#4D3C77] - hover:scale-[102%] transition transition-all ease-in cursor-pointer shadow-xl " key={i} onClick={()=>setComponent(item.link)}>
            
            <div className=" flex flex-col relative lg:flex-row xl:flex-row  w-full h-auto gap-5  lg:items-center ">
                <img src="https://picsum.photos/200/200?grayscale" alt="" className="w-20 h-20 m-5 lg:w-40 lg:h-40 md:w-20 object-contain     rounded-full"/>
                <div className="flex flex-col items-start justify-start p-5">


<div className='flex  justify-between items-center relative  w-full'>

                    <h5 className=" text-md font-bold p-0 m-0 relative ">
                    {item.title}
                    </h5>

                    <p className=" text-white p-0 m-0 relative bg-[#4D3C77] px-10 rounded-xl">
                    "hello"
                    </p>
</div>


                    <p className="text-left text-neutral-300"> 
                        {item.desc}
                    </p>
            </div>
                </div>


        </li>
    })
}

</ul>

    )
}


export default EarnHome