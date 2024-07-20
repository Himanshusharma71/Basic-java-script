//What will be the output of the code
// let greet="hello";

// function changeGreet(){
//     let greet="namaste";
//     console.log(greet);
//     function innerGreen(){
//         console.log(greet);
//     }
// }
// console.log(greet);
// changeGreet();


// if i want to call my function several times then 

// The function which take another function as an argument then it call higher order function
//HIGHER ORDER FUNCTION
// function multiple(func , count){
//     for(let i=1;i<=count;i++){
//         func()
//     }
// }
// let greet =function(){
//     console.log("himanshu sharma");
// }

// multiple(greet , 10);



//HIGHERORDER FUNCTION WHICH RETURN A FUNCTION

function oddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0))
        }
        
    }
    else if(request == "even"){
        return function(n){
            console.log(n%2==0); 
            }
        }
        else{
            console.log("Wrong answer");
        }
    }
    let request="odd";
    let funck=oddEvenTest(request);

















