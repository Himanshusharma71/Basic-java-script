// object literals are used to store keyed collections & complex entities


// syntax of creatio=ng object literlas

// const student={
//     name: "himanshu",
//     class: "aiml",
//     roll: 220071,
//     city:"jhansi"
// }
// console.log(student);

//create a treat post using object 

// const post={
//     username:"himanshu",
//     content:"clean india",
//     likes:40023761,
//     reports: 121,
//     tags:["siddharth gautam" ,"shashank shukla ","sharaddha sharma"]
// }
// console.log(post);
// console.log(post["username"]);//the way to print a single entity in the object 

// console.log(post.content);//another way to print the single value in object 

// const rendom={//here the js is automatic convert all key value into string in objects
//     1:"a",
//     2:"b",
//     null:"c",
//     undefined:"d",
//     true:"f"
// }
// console.log(rendom);
// console.log(rendom.null);


// HERE WE KNOW ABOUT HOW TO UPDATE VALUES IN OBJECT LITERALS
const student={
    name:"Himanshu",
    age:23,
    marks:76,
    city:"jhansi"
}
//for change the city name 
student.city="Greater noida";

//now create the property in object is that simple

student.gender="male"; //by this we easly add the new property in object
console.log(student);

delete student.marks;//the way to delet any property in object 
console.log(student);
















































