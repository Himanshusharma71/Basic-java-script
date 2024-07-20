// let name=["tony","bruce","peter","steve"];

//yha niche jab humne yeh winner runner up asign kiye toh jada linne ka code likhn apda toh ise sort karne ke liye hum destructuring ka used karege 

// let winner=name[0];
// let runnerup=name[1];
// let second_runnerup=name[2];


// let [winner ,runnerup, secondRunnerup]=name;//yhe upar wale se aasan trika hai winner and runnerup print karane kaa 
///yaha upar jab winner asign kiya toh automatic usine array se 0 index value asign karli hai runnerup ne 1 index value asign karli haia

// console.log(winner);//here the winner is tone  because the index value in array of name tony is 0
// console.log(runnerup);


// let name=["tony","bruce","peter","steve" , "thor" , "natasha" ,"locy"];
// let [winner ,runnerup, ...others]=name;//here we used rest method so the winner and runnerup have place in 0 and 1 and all others are stores in othere name array which created using rest ;

// console.log(others);//here all the names are show aspect tony ande bruce because tone and bruce are the winner and runnerups



//Destructuring in Objects

const student={
    name:"Himanshu",
    age:23,
    class:"aiml",
    subjects:['mlt','cn','td','opps','advmlt'],
    userName:"hspandit",
    password:"himanshu@192"
}
// let {userName,password}=student; //here we easly get the username without using too many lines of code

let {userName,password, city="jhansi"}=student;
console.log(city);

console.log(student);































