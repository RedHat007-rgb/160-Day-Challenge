const express = require('express')
const app = express()


let todos=[
  {
    id: 1,
    title: "Learn JavaScript",
    description: "Complete the JavaScript basics tutorial",
    completed: false
  },
  {
    id: 2,
    title: "Practice React",
    description: "Build a simple to-do app using React",
    completed: false
  },
  {
    id: 3,
    title: "Study Solidity",
    description: "Go through the Solidity documentation and write smart contracts",
    completed: false
  },
  {
    id: 4,
    title: "Read about Web3",
    description: "Read articles and watch videos about Web3 development",
    completed: true
  },
  {
    id: 5,
    title: "Work on project",
    description: "Implement features in the current project using JavaScript and React",
    completed: false
  },
  {
    id: 6,
    title: "Review Git",
    description: "Refresh knowledge on Git commands and workflows",
    completed: false
  },
  {
    id: 7,
    title: "Learn TypeScript",
    description: "Start learning TypeScript and migrate a small JavaScript project",
    completed: false
  },
  {
    id: 8,
    title: "Build a portfolio",
    description: "Create a personal portfolio website showcasing projects",
    completed: false
  },
  {
    id: 9,
    title: "Explore OpenZeppelin",
    description: "Learn how to use OpenZeppelin Contracts for secure smart contract development",
    completed: false
  },
  {
    id: 10,
    title: "Participate in a hackathon",
    description: "Join a hackathon to practice coding skills and learn new technologies",
    completed: false
  }
];

app.get('/all', function (req, res) {
  res.send(todos);
})

app.delete('/del',function(req,res){
    let del=req.query.id;
    //let d=[];
    for(let i=0;i<todos.length;i++){
        if(todos[i].id==del){
            //d.push(todos[i]);
            todos.splice(i,1);
            //console.log(d); 
            
        }
    }
    res.send("TODO HAS BEEN DELETED SUCCESSFULLY");

})

app.put('/update',function (req,res){
    let uid=req.query.id;
    let descr=req.query.des;
    for(let i=0;i<todos.length;i++){
        if(todos[i].id==uid){
            todos[i].description=descr;
           
        }
    }
     res.send("Todo has been updated successfully");

})

app.post("/create",function(req,res){
    let title=req.query.title;
    let description=req.query.description;
    let done= false;
    todos.push({
       "id": todos.length+1,
        "title": title,
        "description": description,
        "completed": done
    })
    res.send("TODO HAS BEEN SUCCESFULLY CFREATED");
    
})



app.listen(3000)
 