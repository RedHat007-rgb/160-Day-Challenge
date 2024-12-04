 //learning about  Asynchronous Javascript from Basics
 
 const ps=require("prompt-sync")();
 const fs = require('fs');
  
function sum(a,b){
    return a+b;
}

let ans=sum(34,45)

console.log("The sum of two Numbers is:" +ans);

// //learning about parseint()
// /*
// what is parseint?
// -->parseint is a function which converts a string into a number
// We will see an example below:
// */

function sum(a,b){
    return parseInt(a)+parseInt(b);
}

let b=sum("89","90")//In this line we are passing a="89"(as a string) and b="90"(also a string) 
                    //but the sum function returned a number. 

console.log("The sum of two numbers using parseInt:"+b);

// //Find sum from 1 to n number

function sum(n){
    let sum1=0;
    for(let i=1;i<= n;i++){
        sum1=sum1+i;
    }
    return sum1;
}

// /* How to take input from the user?
// Using prompt() in web Browser.
// but in Node js; There are various ways to take input from the user.
// -->Installed prompt-sync(Npm install prompt-sync)
// */



 const n=ps("Enter the number:"); 

 console.log(sum(n));

// //Why parseInt is used in  above line?
// //Because in default n takes the value as string so we are converting string to integer.

// console.log("The sum  from 1 to n number is:"+sum(n));

/***************************  Until this line of code we learned ********* 
 ****** how to write syncronous code in javaScript[Single-thread execution] *****/

                 /* ---------ASynchronous  Javascript-----------*/

/* What are I/O heavy operations?
These are the operations which involves in a lot a data transfer between 
the programs and external devices.
Ex: Reading a content from a file and initializing to a varaiable.
Ex: Getting infrormation from the the database  */

const contents=fs.readFileSync("a.txt","UTF-8");
console.log(contents);

let user={
    age:30,
    name:"preetham",
    canvote:function (age){    //This code explains how to code a function inside an object.
        if(age>18){
            return "can vote";
        }
        return "cant vote";
    }
}

const x=user.canvote(19); // This line is calling canvote() function which is inside the user.
//console.log(x);

//I/O operation time depends upon the response or data from the opposite side 
//i.e,,, from external devices or from database

function calculator(num1,num2,op){
    while(op=="+"){
        return num1+num2;
    }
    while(op=="-"){
        return num1-num2;
    }
    while(op=="*"){
        return num1*num2;
    }
    while(op=="/"){
        return num1/num2;
    }
    return 0;

}


console.log(calculator(2,3,"-"));
/*................................ Using Functional Arguments.........................*/
function sum(a,b){
    return a+b;
}

function subtraction(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}                                   //Functional Arguments:passing a function into 
                                    //another function has an argument
function division(a,b){
    return a/b;
}

function calculator(a,b,pr){
    let p=pr(a,b);
    return p;
}

console.log(calculator(2,3,division));


const constant1=fs.readFileSync("a.txt","UTF-8");
console.log(constant1);                     /*Here the code runs line-by-line(synchronously)
                                            once, the console reaches to line 131; it waits for the output and printing it,
                                            goes to next line. */

const constant2=fs.readFileSync("b.txt","utf-8");
console.log(constant2);


//we are introducing a callback function called print as a argument to readFile.

// This topic is discussed in myfirstasync.js