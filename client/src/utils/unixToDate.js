
export function unixToDate(unixTimestamp) {

  const date = new Date(unixTimestamp * 1000);
  let years = date.getFullYear();
  let months= date.getMonth() + 1;
  let days = date.getDate();
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()

  const formattedDate = `${days}-${months}-${years} ${hours}:${minutes}:${seconds}`;

  return formattedDate
}

