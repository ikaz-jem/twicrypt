
const bigIntToFormated = (number, decimals) => {
  const bigIntNumber = number ? number.toString() : 'waiting infos ...'
  const divider = 10 ** decimals;
  const formated = bigIntNumber / divider
return formated
}


const toDecimals = (number, decimals) => {
  const multiplier = 10 ** decimals;
  return number * multiplier;
}

const toFormated = (valueWithDecimals, decimals) => {
  const divider = 10 ** decimals;
  return valueWithDecimals / divider;
};



export {bigIntToFormated,toDecimals,toFormated}