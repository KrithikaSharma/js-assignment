let colors=["Red","Yellow","brown","Blue","peach"];
console.log(colors);
const clr=document.querySelector(`#clr`);
console.log(clr);
colors.forEach(color=>{
    clr.innerHTML += `<li> ${color} </li>`
    })
function changeColor()
{
    setTimeout(function loop()
    {
        document.bgColor=colors.shift();
        if(colors.length)
        {
            setTimeout(loop,5000);
        }
    },5000);
}
function start()
{
    setInterval(changeColor(),5000);
}

        
