const nameOne = {
    firstName : "Shikhar",
    lastName:"Uttam"
}

const nameTwo = {
    firstName : "Ramandeep",
    lastName:"Singh"
}

let printName = function(homeTown="Not Avail",state="Not Avail"){
    console.log(this.firstName+" "+this.lastName+" From "+homeTown+" "+state);
}

printName.apply(nameOne,["Ambala","Haryana"]); // In apply method we can pass addition arguements as a array
printName.apply(nameTwo,["Nabha","Punjab"]); 