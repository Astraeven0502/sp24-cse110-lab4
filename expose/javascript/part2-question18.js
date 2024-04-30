function printCurrentTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }
  
  //every 1000ms(1s)
  setInterval(printCurrentTime, 1000);