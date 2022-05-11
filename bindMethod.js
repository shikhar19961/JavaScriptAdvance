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

let bindNameOne = printName.bind(nameOne,"Ambala","Haryana"); //bindNameOne keeps the copy of printName function
let bindNameTwo = printName.bind(nameTwo,"Nabha","Punjab");

bindNameOne(); // We can envoke printName function binded with nameOne arguement like this.
bindNameTwo();