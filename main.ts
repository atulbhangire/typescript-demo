
function log(message){
    console.log(message);
}

var message = "Hello World!";

log(message);

/*********************************************************************************************/
//Types and annotation

let abc: any;
let val: number = 1;
let username: string = "Atul";
let isValid: boolean = true;
let arr: number[] = [1,2,3];
let combineArr: any[] = [1, true, "test"];

const colour = "red";

enum Colour {Red = 0, Green = 1, Blue = 2};

/*********************************************************************************************/
//Type Assertion

let message1;
message1 = "abc";

let messageEndWithC = (<string>message1).endsWith("c"); // Reccomended.
let alternateOption = (message1 as string).endsWith("c");

/*********************************************************************************************/
//Normal function
let fun1 = function(msg){
    console.log(msg);
}

//Arrow Function
let fun2 = (msg1) => {
    console.log(msg1);
}

/*********************************************************************************************/
//Interfaces

interface Point{
    x: number,
    y: number
}

let z = (point: Point) => {
    //.....
}