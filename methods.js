const calculator={
    num:55,
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
}
console.log(calculator);
console.log("Addition of numbers is",+calculator.add(62,12));
console.log("multiplication of numbers is",+calculator.mul(7,3));
console.log("subtraction of numbers is",+calculator.sub(53,3));


//ANOTHER METHOD USED TO DEFINE METHODIN OBJECT SHORTHAND METHOD


const cal={
    add(a,b){ //yeh bhi ek method hai jaha humne function likhne ki jrurt nhi padhti hai
        return a+b;
    },
    sub(a,b){
        return a-b;
    },

}
console.log(cal);
console.log(cal.add(45,32));
console.log(cal.sub(45,32));




















