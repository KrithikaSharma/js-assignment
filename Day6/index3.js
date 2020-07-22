console.log("Question 3");
let name=prompt("Enter your name");

inn.innerText =`Welcome ${name}`;
const currenttime=document.getElementById('time');
function clock()
{
    let date= new Date();
    let time=date.toLocaleTimeString();
    currenttime.innerText = time;
}
clock();
setInterval(clock,1000);

function mydark()
{
    let ele= document.body;
    ele.classList.toggle("dark-mode");
}