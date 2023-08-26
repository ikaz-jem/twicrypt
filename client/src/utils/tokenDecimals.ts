
export const toDecimals = (number:any, decimals:any)=>{
    const multiplier = 10 ** decimals;
    return number * multiplier;
  }

  

export const toFormated = (valueWithDecimals:any, decimals:any)=>{
    const divider = 10 ** decimals;
    return valueWithDecimals / divider;
  }

