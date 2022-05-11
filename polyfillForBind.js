let name = {
    firstName : "Shikhar",
    lastName : "Uttam"
}

let printName = function(homeTown,state,hobby="No hobby"){
    console.log(this.firstName+" "+this.lastName+" From "+homeTown+" "+state+" hobby: "+hobby);
}

Function.prototype.mybind = function (...args) {
    let obj = this;
    let params = args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2]);
    }
}

let printMyName = printName.mybind(name,"Ambala","Haryana");

printMyName("Table Tennis");

