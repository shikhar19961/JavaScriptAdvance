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

printName.call(nameOne,"Ambala","Haryana");
printName.call(nameTwo,"Nabha","Punjab");