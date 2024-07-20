let todo=[];

let req = prompt("Plese enter your request");

console.log(req);

while(true){
    if(req=="quit"){
        console.log("Quitting the task");
        break;
        }
        if(req=="list"){
            console.log("------------------------")
            for(let i=0; i<=todo.length;i++){
                console.log(i, todo[i])
            }
            console.log("------------------------")
        }
        else if(req=="add"){
            let task=prompt("enter your task you want to add");
            todo.push(task);
            console.log("task added");
        }
        else if(req=="delete"){
            let index=prompt("Enter the task index you want to delet")
            todo.splice(index, 1);
            console.log("Your last task has been deleted");
        }
        else{
            console.log("Wrong Request you enter plaese enter the right option")
        }
        req=prompt("Plesase RE-Enter the requestlist");
}