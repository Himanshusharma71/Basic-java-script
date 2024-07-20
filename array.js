let month=['january', 'july' ,'march','august','november','december']
// console.log(month); //this is orginal array
// month.shift();//here we remove the element from array from start
// month.shift();//do same for second element 
// // console.log(month)//when be print the array here the first two element is remove from here

// month.unshift("july","june");//here be add two new element in array from start 
// console.log(month); //the output is new array where old elements are remove and new element is added in the array
// console.log("your element on the index of : " +  month.indexOf("march"));

let marks=[12,45,34,78,65,98,45,67,87,43];
console.log(marks)
// console.log(marks.indexOf(45));//this is used for find the index value of an array elements

// console.log(month.includes("january")); //this methodis used when we want tho know that particular element is present in array or not if yes the output is true else false

// console.log(month.concat(marks)); //this method use to concat the two array 

// console.log(month.reverse());//this method used for reverse the array 

//SLICE METHOD IS USED FOR CUT SMALL AND PRINT THE ARRAY


// console.log(month.slice(1)); //here the output is it cut the array from 1 to end of an array means print the array is not include the 0 index elemnt 
// console.log(month.slice(1,4)); // here the last index 4 is not print because it not exclude the last elemnt

// console.log(month.slice(-1));//this give the output of last value of index


//Splice lement is a game change line it include replace or delete the element


// console.log(month.splice(3)); //here it print the element from index value 3

// console.log(month.splice(0,1)); //yaha apr 0 index se suru huaa then 1 index element ko delete kar diya 
// console.log(month); 
// console.log(month.splice(0,0,"january","may")); //yaha humne 2 month add kiye hai joh ki start main hi add ho jaege array ke 
// console.log(month);

// console.log(month.splice(1,0,"himanshu"));//yaha par hume kuch delete nhi karna hai lekin1 index value par kuch add karna hai then we run this program

// console.log(month);

// console.log(month.splice(2,2,"shashank"));//yha par humne 2 index value ko delete kiya then uski jagah apar humne new values insert kiye hai 
// console.log(month);
// console.log(month.sort());


// SORT THE ARRAY 

// console.log(marks.sort()); //this method is sort the array in assending order byb default
// console.log(marks);

// console.log(marks.sort());


// CONSTANT ARRAY 
//in constent array we perfome all operation on elemnent of array but we cannot totaly chnage the array 
const arr=["himanhu","india","hspandit"];//this is constant array where it can't be totaly change any more








