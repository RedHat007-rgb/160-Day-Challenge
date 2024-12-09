
// const commander=require("commander"); 

// const p=fs.readFileSync("a.txt","utf-8",function(err,data){
//     if(data){console.log(data);}
// })
// console.log(p);
// var count=0;
// for(let i=0;i<p.length;i++){
//     if(p[i]==" "){  //learned how to iterate in a string
//         count+=1;
//     }
// }`
// console.log(count);



// (file)=>fs.readFileSync(file,"utf-8",(err,data)=>
// {
//     if(err){
//         console.log("file not found");
//     }
//     else{
//         var count=0;
//         for(let i=0;i<data.length;i++){
//             if(data[i]==" "){
//                 count+=1;
//             }
//         }
//     }
//     console.log(`The number of words in ${file} is`+" "+count);
// }));

//creating a cli of our own
// const fs=require("fs");
// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('count the words')
//   .description('CLI to count the words in a file')
//   .version('0.8.0');

// program.command('count')
//   .description('Count the number of words in a file')
//   .argument('<file>', 'file to count')
//   .action(function(file){
//     const p = fs.readFileSync(file, "utf-8");
//     let cnt =0;
//     for(let i=0; i<p.length; i++){
//         if(p[i]==" "){
//             cnt++;
//         }
//     }
//     console.log(cnt);
//   }
//   );
    

// program.parse();
//





//creating a CLI for adding/deleting/updating todos.
const fs=require("fs");
const { Command } = require('commander');
const program = new Command();

program
  .name('todo ClI')
  .description('CLI to add the todo')
  .version('0.8.0');

program.command('todo')
  .description('add/delete the todo')
  .argument(' add <file> <title> [description] <done>', 'todo to add/delete')
  .option('-t','title')
  .option('-d', 'description')
  .option('-do','done')
  .action(function(title,description,done){
    const p=fs.readFileSync()
  });
    

program.parse();
