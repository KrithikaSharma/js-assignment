console.log("StopWatch Project")
let time=0;
let i=0;
let isrunning=false;
let lap="00:00:00:00";
let isready;

//to start or stop the stopwatch
function begin(){
    if(!isrunning){
        isrunning=true;
        increment();
        document.getElementById("start").innerHTML="Pause";
        //document.getElementById("begin");
    }
    else{
        isrunning=false;
        // if(isready !==undefined)
        // {

        // }
        document.getElementById("start").innerHTML="Resume";
    }
}

function increment(){
    if(isrunning)
    {
        setTimeout(()=>{
            time++;
            let t=time/10;
            let milli=time %10;
            let secs=Math.floor(t % 60);
            let mins =Math.floor(t/60);
            let hours= Math.floor(t/3600);

            if(mins<10){
                mins= "0"+ mins;
            }
            if(milli<10){
                milli= milli+"0";
            }
            if(hours<10){
                hours="0"+hours;
            }
            if(secs<10){
                secs= "0"+ secs;
            }
            lap=hours + " : " + mins + " : " + secs + " : " + milli;
            document.getElementById("output").innerHTML=lap;
            increment();

        },100)
    }
}
function reset(){
    isrunning=false;
    time=-1;
    console.log("***** SESSION ENDED *****");
    i=0;
    document.getElementById("start").innerHTML="Start";
    document.getElementById("output").innerHTML = "00:00:00:00";


}


function notelap()
{
    i++;
    console.log("Lap " + i + "on :" +lap);
}