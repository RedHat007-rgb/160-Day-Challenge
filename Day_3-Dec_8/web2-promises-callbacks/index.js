// /*
// What are Classes in JavaScript?
// => Classes are the Blueprints for creating an object.
// =>Syntax:Class keyword is used to declare a class.

//  class name{
//  constructor(parameters){
//         this.parameters=parameters;
//  }
//     methods(){
//     }   
//  }

//  variable object= new Classname(arguments);
//  //calling methods
//  object.method();

// */

// class Rectangle{
//     constructor(length,breadth,colour){//Constructor is an method which is called when a new instance is created.
//         this.length=length;
//         this.breadth=breadth;
//         this.colour=colour;
//     }
// //Methods are nothing but a functions inside the class.
//     area(){//Merhod 1
//         const area=this.length*this.breadth;
//         return area;
//     }
//     color(){// Method 2
//         return(console.log(`The length of a rectangle is ${this.length} 
//             The breadth of a rectangle is ${this.breadth} 
//             The colour of a rectangle is ${this.colour}`));
//     }
// }
// //creating a new instance nothing but object
// const rect1= new Rectangle(3,4,"blue");
// const area=rect1.area();
// console.log(area);
// const color=rect1.color();

// //There are some classes which are predefined in javascript. Eg:Date,Map .....

// const date = new Date();
// console.log(date);//The date and time will be printed and time will be lgged in UTC.
// console.log(date.toISOString()); //This line gives the time in IST.

// const name_age=new Map();
// name_age.set('name','preetham');
// name_age.set('age',30);

// const preetham_name=name_age.get("name");
// console.log(preetham_name);
// console.log(name_age.get("age"));


/*************************************PROMISE CLASS ******************************************/
//promise class gives us a promise that returns something in the future.

// function log(){
//     console.log("please log after three seconds")
// }
// //From line 61 to 65 a function name log is defined and setTimeout(asynchronous function) is calling the log function after 3 milliseconds i.e.., 
// //it is giving us a promise that i will call this function after 3 milli seconds.
// setTimeout(log,3000);

// //promises are used to handle asynchronous operations effectively than the traditional callback functions.
// function setTimeoutPromisified(ms) {
//     return new Promise (resolve => setTimeout (resolve, ms));
// }
// function callback(){
//     console.log("please log after 3 seconds")
// }

// setTimeoutPromisified(5000).then(callback);
// In the qabove line of code;it is saying  the same as setTimeout(callback,5000) but it is syntactically cleaner.
// The above line says that after 5 seconds then the callback function is called.
// The other way of writing the above line is:

// setTimeoutPromisified(3000).then(function callback(){
//     console.log("please log after 3 seconds")
// }); but it is very hard to understand for the beginners.


// function setTimeoutPromisified(ms){
//     let f=new Promise();
//     return f;
// }
// //here setTimeoutPromisified(ms) is returning the object of a promise class.
// let p = new setTimeoutPromisified(5000);
// console.log(p);

// function wait3sec(resolve){
//     setTimeout(resolve,3000);
   
// }

// function main(){
//     console.log("log after three seconds");
// }
// wait3sec(main);
// function random(resolve){
//         setTimeout(resolve,3000);
// }

// let p = new Promise(random);//creating an instance of promise();

// function main(){
//     console.log("log me after three seconds")
// }

// // p.then(main);

// function setPromisifies(ms){
//     return new Promise(function random(resolve){
//         setTimeout(resolve,3000);
// })
// }

// setPromisifies(3000).then(main);

function random(resolve){
 return setTimeout(resolve,3000);
}

let p = new Promise(random);
function main(){
    console.log("kabfjbaf");
}

p.then(main);