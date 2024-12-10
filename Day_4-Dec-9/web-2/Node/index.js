
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
  .argument('<file>', 'File to write the todo')
  .argument('<title>', 'Title of the todo')
  .argument('[description]', 'Description of the todo', '')
  .argument('<done>', 'Done status of the todo')
  .option('-t','title')
  .option('-d', 'description')
  .option('-do','done')
  .action(function(file,title,description,done){
          console.log(title);
          console.log(description);
          console.log(done);
          let todo= {
            title:title,
            description:description,
            done:done
          }
          const todoString = JSON.stringify(todo, null, 2); // Pretty print with 2 spaces
          let s = JSON.stringify({
            title:title,
            description:description,
            done:done
          }, null, 2);
              let x=fs.appendFile(file,s,function(err){
                if(err){
                  console.log("file not found")
                }
                else{
                 
                  console.log("file has been written successfully");
                }
              })
        }
        );
  
    

program.parse();



// const fs = require("fs");
// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('todo CLI')
//   .description('CLI to add the todo')
//   .version('0.8.0');

// program.command('todo')
//   .description('add/delete the todo')
//   .argument('<file>', 'File to write the todo')
//   .argument('<title>', 'Title of the todo')
//   .argument('[description]', 'Description of the todo', '')
//   .argument('<done>', 'Done status of the todo')
//   .action((file, title, description, done) => {
//     // Create the todo object
//     const todo = {
//       title: title,
//       description: description,
//       done: done
//     };

//     // Convert the todo object to a JSON string
//     const todoString = JSON.stringify(todo, null, 2); // Pretty print with 2 spaces

//     // Write the JSON string to the file
//     fs.writeFile(file, todoString, function(err) {
//       if (err) {
//         console.log("Error writing to file:", err);
//       } else {
//         console.log("File has been written successfully");
//       }
//     });
//   });

// program.parse(process.argv);

