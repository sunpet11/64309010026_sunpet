let myJSON ='{"firstName":"jonh","lastName":"Smith","age" :25,}';
let myobj = {
    firstName : "John",
    lastName : "Smith",
    age : 25
}
//console.log(typeof(myJSON));
//console.log(myobj.firstName);
//function parse
let obj2 = JSON.parse(myJSON);
console.log(obj2.typeof(obj2));

//function stringify
let JSUN2 = JSUN.stringify(myobj);
console.log(JSUN2)