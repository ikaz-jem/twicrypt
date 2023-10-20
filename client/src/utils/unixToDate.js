
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

export function toUnix (dateString){
const date = new Date(dateString);

// Get the Unix timestamp (milliseconds since January 1, 1970)
const unixTimestamp = date.getTime();

// If you want it in seconds, you can divide by 1000
const unixTimestampInSeconds = Math.floor(unixTimestamp / 1000);
return unixTimestampInSeconds;
}
export function unixCountDownDays(unixTimestamp) {

  const date = new Date(unixTimestamp * 1000);

  let years = date.getFullYear();
  let months= date.getMonth() + 1;
  let days = date.getDate()-1;
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()

  const formattedDate = `${days} days ${hours}h:${minutes}m:${seconds}s`;

  return formattedDate
}

