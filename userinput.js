// let  yourName=prompt("enter your name here");
// alert(`Welcome mr ${yourName}`)
// console.log(yourName)

// const fav_movie="indian";
// let guess=prompt("Guess my fav movie : ");
// while((guess !=fav_movie) && (guess !="Quite")){
//     guess=prompt("guess again");
// }
// if(guess=="Quite"){
//     alert("tumse yahi ummid thi")
// }
// else{
//     alert("are waah kafi janne lage ho humare bare mai")
// }


//GUESSING GAME 
const max=prompt("enter your range");
let number=Math.floor(Math.random()*max)+ 1;
let guess=prompt("guess the number comes under the range of 1 to 9 ");
while(true){
    if(guess =="quit"){
        alert("haar gye hai aap");
        break;
    }
    else if(guess== number){
        alert("sehbas bahut badiya aap jeet gye hai 😁");
        break;
    }
    else if(guess > number){
        guess =prompt("bahut aage aagye ho piche jaaao ");
    }
    else if(guess < number){
        guess=prompt("lamba hai ri madam lamba hai teri jaan kasan hai lamba aage jaa 4 ");
    }

    else{
       guess= prompt("nihayti chutiya insan ho be tum ");
    }
}