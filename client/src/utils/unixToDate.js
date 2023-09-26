
export function unixToDate(unixTimestamp) {

  const date = new Date(unixTimestamp * 1000);
  let years = date.getFullYear();
  let months= date.getMonth() + 1;
  let days = date.getDate();
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()

  const formattedDate = `${days}/${months}/${years} ${hours}h:${minutes}m:${seconds}s`;

  return formattedDate
}


export function unixCountDown(unixTimestamp) {

  const date = new Date(unixTimestamp * 1000);

  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()

  const formattedDate = `${hours}h:${minutes}m:${seconds}s`;

  return formattedDate
}

