console.log("Question 3")
let marks=Number(prompt("enter marks"));
let grade;
if(marks>90)
{
    grade='O+';
}
else if(marks>80)
{
    grade='O';
}
else if(marks>70)
{
    grade='A+';
}
else if(marks>60)
{
    grade='A';
}
else if(marks>50)
{
    grade='B+';
}
else if(marks>40)
{
    grade='B';
}
else if(marks>30)
{
    grade='C';
}
else
{
    grade='Fail';
}

console.log(`Marks are ${marks} and grade is ${grade}`);

//using switch
// switch(marks)
// {
//     case (marks>90):

//         grade='O+';
//         break;
//     case (marks>80):

//         grade='O';
//         break;
//     case (marks>70):

//         grade='A+';
//         break;
//     case (marks>60):

//         grade='A';
//         break;
//     case (marks>50):

//         grade='B+';
//         break;
//     case (marks>40):

//         grade='B';
//         break;
//     default:
//         grade='Fail';
// }
// console.log(`Marks (using switch) are ${marks} and grade is ${grade}`);

//using Ternary operator
// (marks>90)?(grade='O+'):(marks>80) ? (grade='O'): (marks>70) ? (grade='A+'): (marks>60) ? (grade='A'): (marks>50) ? (grade='B+'): (marks>40) ? (grade='B'):(marks>30) ? (grade='C'): (grade='Fail');
// console.log(`Marks (using ternary) are ${marks} and grade is ${grade}`);


