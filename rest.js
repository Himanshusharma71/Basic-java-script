// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.


// function sum(...args){
//     return arguments.reduce((sum, el) => sum + el); 
// }
// console.log(sum())


function min(msg, ...args){
    console.log(msg);
    return args.reduce((min,el)=>{
        if(min > el){
            return el;
        }
        else{
            return min;
        }
    });
}
console.log("himanshu" ,212,432,12,1)


