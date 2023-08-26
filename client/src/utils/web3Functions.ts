
// returns supply with wagmi 
export const getSupply =  (presaleToken:any)=>{
    const supply = presaleToken.data.totalSupply.value.toString()
    const decimals =  presaleToken.data.decimals
    const sliceNumber = supply.length - decimals
    const totalSupply =  supply.slice(0,sliceNumber)      
    return Number(totalSupply)
}


export const bigIntToFormated =  (number:any, decimals:any)=> {

    const bigIntNumber = number ? number.toString() : 'waiting infos ...'
   
    const divider = 10 ** decimals;
     const formated =  bigIntNumber / divider
    console.log(formated)

}

