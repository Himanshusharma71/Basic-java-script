function name(){
    console.log("Himanshu sharma");
}
// name();

// function dia()
// {
//     let num = (Math.floor(Math.random()*6)) + 1;
//     console.log(num);
// }
// dia();


// function printInfo(name,age){
//     console.log(`student name is ${name} and  age of student is ${age}`);
// }
// printInfo("himanshu sharma" , 23);
// printInfo("Sumit " , 23);


// function sum(a,b){
//     console.log(a+b);
// }
// sum(1,3);

// function Average(a,b,c){
//     avg=(a+b+c)/3;
//     console.log(avg);
// }
// Average(1,3,5);


// function table(n){
//     for(let i =1; i<=10; i++){
//         console.log(n*i);
//     }
// }
// table(5);

// function tableprint(n){
//     for(let i=n; i<=n*10; i+=n){
//         console.log(i);
//     }
// }
// tableprint(8);




// Return the value of the function
// function re(name){
//     let he=prompt("Enter the name ");
//     return he;
// }
// alert(re());


// function sum(a,b){ //this is how to return value
  
//     return a+b;
// }
// console.log(sum(5,6));


function sum(a,b){ //the function is only add two value but we have 3 then small hack is 

    return a+b;
}
// console.log(sum(sum(5,6),5));



// create a function to display sum for n 

function sumof(n){
    let sum=0;
    for(let i=1; i<=n; i++){
        sum=sum+i;
    }
    console.log(sum);
}
// sumof(10);

//create a function to concatinate the string 


let str=["himanhsu","sharma","hspandit"];

function concat(str){
    let result="";
    for(let i=0;i<=str.length;i++){
        result += str[i];
    }
    console.log(result); 
}
concat(str);
































