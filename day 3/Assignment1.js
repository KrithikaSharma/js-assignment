console.log("Question1");
let number=Number(prompt("enter a number"));//taking number from user
function evenodd()//using function to check whether  the number is even or odd
{
    let result;
    if(number%2==0)
    {
        result="even";
    }
    else{
        result="odd";
    }
    return result;
}
let check=evenodd();//assigning the result to a variable
console.log(`The number entered is ${number} and number is ${check}`);//logging the variable to the console