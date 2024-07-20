// The reduce() function in JavaScript is used to reduce an array to a single value

// arr.reduce(reducer function with 2 variable for(accumulator,element));

// let nums=[1,2,3,4];
// let finalVal=nums.reduce((res,el)=> res+el);
// console.log(`your final value is : ${finalVal}`);

let num=[23,43,56,41,67,53,45];
let max=num.reduce((max , el)=>{
    if(max<el){
        return el;
    }
    else{
        return max;
    }
});
console.log(max);
























