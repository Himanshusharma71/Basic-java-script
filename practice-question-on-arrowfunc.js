// write a arrow function to return the square of a number n 

const squar =(n)=>{
    return n**2;
}
console.log(squar(8));

// write a function to print the hellow world after the 2s interval 

let id=setInterval(()=>{
        console.log("Namste sir kese hai aap");
    },2000);

    setTimeout(() => {
        clearInterval(id);
        console.log("Time up sir ")
    },10000)
