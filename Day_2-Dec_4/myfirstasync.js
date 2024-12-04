// const pr=require("fs");


// pr.readFile("a.txt","utf-8",print);        
// pr.readFile("b.txt","utf-8",print);
                                            
// //we are introducing a callback function called print as a argument to readFile. 
// function print(err,data){
//    if(err){
//     console.log("File not found ");
//    }
//    else{
//     console.log(data);
//    }
// }

// console.log("Done???!!!!");


/*******************************Deep Dive to Async Js ************************ */

console.log("My first print");

function timeout(){
    console.log("Executing after 15 milli-seconds");
}

setTimeout(timeout,15000);   

/* This line of code will be executed after 15 milli seconds
In a better way, As JS does single thread execution, 
When console reaches the above line;It is said to wait for 15 milli-seconds and then executes.
As a beginner;In my understanding when a console reaches the above line;the clock starts and the console 
goes to next line to do its execution
once the  time has been done timeout function gets executed.*/

let x=0;
for(let i=0;i<50;i++){
    x=x+1;
}

console.log("My 3rd print");



