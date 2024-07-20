//THIS KEYWORDS REFERS TO AN OBJECT THAT IS EXECUTING THE CURRENT PIECE OF CODE

// जैसे normal english language में this word किसी चीज को represent करता है | वैसे ही javascript में this keyword उस object या method को represent करता है जिसके अंदर इसे लिखी गयी है |

// अगर ऐसे ही this keyword को लिखी जाये तो ये global object को represent करेगा | यानि ये window object को refer करेगा |
// किसी normal function के अंदर लिखी जाये तब भी ये global object यानि window object को refer करेगा |
// किसी object के अंदर इसे लिखी जाये, उसके अंदर के property या method को access करने के लिए | तब this keyword local object को refer करता है | यानि जीस object के अंदर इसे लिखी गयी है, this keyword उसे ही represent करता है |

const student={
    name:"Himanshu",
    age:23,
    mlt:74,
    daa:71,
    ds:67,
    getavg(){
        let avg=(this.ds+this.mlt+this.daa)/3;

        // Joh bhi object kisi bhi method ko execute kar rahi hai woh humari this keyword hai 

        // This keyword referes to an object this is executing the current piece of code 


        console.log(`${this.name} got avg marks = ${avg}`);
        console.log(this); //this is used to define current object and referes all of the data to function or console bar 
    }
}
console.log(student);
console.log(student.getavg());