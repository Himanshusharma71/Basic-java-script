// For Each method 

// let arr=[1,2,34,5,5,6];s
// // in this method we used for each method where it show the the all element of an array 
// let print = function (el){
//     console.log(el);
// }

// arr.forEach(print);

// another method 

// arr.forEach(function(el){ //this is the function where we get array in output by using for each function 
//     console.log(el);
// });



// // CREATE THE ARRAY OF OBJECT 
let arr=[{
    name:"himanshu sharma",
    marks:58
} ,{ 
    name:"shashank shukla ",
    marks:56
} ,{  name:"siddharth gautma",
marks:48} ,{ 
    name:"aditya mishra ",
    marks:68
},
 {  name:"shraddha sharma",
marks:88},
 {  name:"indian ",
marks:98}];

console.log(arr);

arr.forEach((student) => {
    console.log(student.marks);
})



//MAP METHOD USED IN JS

//peint the double of an array 
// let num=[2,4,6,8,7,3];

// let  double=num.map((el)=>
// {
//     return el*el;
// })

// console.log(double);


//Filter function

// let num=[2,5,3,4,7,6,5,2,1,78,56,9,,5442];

// let even=num.filter((num)=>(num%2==0))
// console.log(even)


// Every method 


// yeh bala method agar array mai constion par single value o=bhi false ho rahi hai toh woh false hi return karega  baki filter mai true return karega

// let arr=[2,4,223,10,8,4,6,18];

// let even=arr.every((el)=> (el%2==0));
// console.log(even); //yaha apr hum jab call kaege toh uper array mai agar eke bhi element false hai toh iska return false hi hoga
//yeh bala jab true return karega jab sari value true hogi  
































