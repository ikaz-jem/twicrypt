
  export const toUnix = (regularDateTime:any)=> {
    // Create a new Date object with the regular date and time
    const dateObject = new Date(regularDateTime);
  
    // Get the Unix timestamp in milliseconds using the getTime() method
    const unixTimestamp = dateObject.getTime();
  
    // Convert milliseconds to seconds (Unix timestamp is usually in seconds)
    const unixTimestampInSeconds = Math.floor(unixTimestamp / 1000);
  
    return unixTimestampInSeconds;
  }

export const unixCountdown =  (unixTimestamp:any )=> {
const countdown = setInterval(()=>{
  return unixTimestamp - 1;
  },1000) 

}

  //counter

/*
=> arg unix () {

1s unix time sta - 1


}





*/
