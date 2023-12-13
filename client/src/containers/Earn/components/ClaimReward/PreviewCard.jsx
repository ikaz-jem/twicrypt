

const PreviewCard = ({ids})=> {
    console.log(ids)

    
    
    const Card  = ({id})=>{
        const tokenId = Number(id)
        const image = `https://api.twicrypt.com/bsc/img/thumbnails/tn_${tokenId}.png`
    return (

        <>
        <div className="flex items-center justify-center flex-col p-0 m-0">

        <img src={image}   className="w-14 h-14 rounded-md" alt={'nft' + tokenId}/>
        <p className="text-[10px] p-0 m-0">{'id : '+ tokenId}</p>
        </div>
        </>
    )

}

    
return (
            <div className=" border-neutral-700 shadow-lg rounded-3xl w-full h-full flex  justify-center border-l border-r ">
                <div className="flex  flex-col gap-2 ">
                    <h5 className="text-left text-2xl pl-2 text-neutral-200 font-sans ">your twicrypt Nfts :</h5>
                    
                       

                        <div className="  w-full flex   rounded-xl  flex-wrap p-2 m-0  items-start justify-start  gap-2 overflow-y-scroll h-80 " >
                            {  ids?.map((id, i) =><Card id={id} key={i}/>)}
                        </div>
                        
                </div>
            </div>
)


}

export default PreviewCard