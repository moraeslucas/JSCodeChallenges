export default function Clock(myClock) {
    let newTime;

    /* setInterval is one JavaScript function which requires a callback function as the 1st arg.
     * And after a certain amount of time (which is in the 2nd arg), setInterval gets executed
     */
    return setInterval(() =>
           {
               newTime = new Date().toLocaleTimeString();

               myClock.textContent = newTime;
           },
           1000); //2nd arg: one thousand milliseconds (1 second)
}