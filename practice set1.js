// Question 1:-what is value of age after the code requestAnimationFrame?
let age=23;
age + 2;
//console.log(age)
//answer is 23 

//Question 2=> what is the value of this code runs
let hindi=80;
let english=90;
let math=100;
let avg=(hindi + english + math)/3;
// console.log(avg)

let num=5;
let newnum=num++;
newnum=++num;

// console.log(num)


let color="red";
if(color=="red"){
    console.log("Plese stop befour yellow line");
    if (color=="yellow") {
        console.log("Start the engine ready for go");
    } else {
        console.log("You can go now");
    }
}