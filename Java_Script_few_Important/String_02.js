//Few methods for string in Java script 

//1) trim()
console.log("1) trim() :- ");
let firstName="     Arun  ";
console.log(firstName);
console.log(firstName.length);
firstName=firstName.trim();
console.log(firstName);
console.log(firstName.length+"\n");

//2)toUpperCase()
console.log("2) toUpperCase():- ");
let secondName="hello my name";
console.log(secondName.toUpperCase()+"\n");

//3)toLowerCase()
console.log("3) toLowerCase():- ");
let thirdName="I AM BST TAM";
console.log(thirdName.toLowerCase()+"\n");

//4) Slice()
let forthName="jaiShriRam";
forthName=forthName.slice(3);
console.log(forthName);