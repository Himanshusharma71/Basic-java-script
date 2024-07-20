const student ={
    name: "himanshu",
    marks: 89,
    prop:this,   //global scope
    getName : function(){
        return this.marks;
    }
};
console.log(student.getName)


// normal function ke liye this hota hai joh object usko call laga rahi hai 
// or arrow function ke liye this hota hai joh object parent ko call laga rhi hai  