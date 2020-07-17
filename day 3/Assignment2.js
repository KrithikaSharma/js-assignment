console.log("Question 2");
let OSname=prompt("enter the OS name and version");
//let version=prompt("enter version");
let values=OSname.split(" ");
let name=values[0];
let version=values[1];
console.log(` The OS name is ${name} and version is ${version}`)