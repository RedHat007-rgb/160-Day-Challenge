const fs = require("fs");
const { Command } = require('commander');
const program = new Command();

program
  .name('todo CLI')
  .description('CLI to add the todo')
  .version('0.8.0');

program.command('todo')
  .description('add/delete the todo')
  .argument('<file>', 'File to write the todo')
  .argument('<title>', 'Title of the todo')
  .argument('[description]', 'Description of the todo', '')
  .argument('<done>', 'Done status of the todo')
  .action((file, title, description, done) => {
    // Create the todo object
    const todo = {
      title: title,
      description: description,
      done: done === 'true' // Convert string "true" to boolean true
    };

    // Read the existing data from the file
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err && err.code !== 'ENOENT') {
        console.error("Error reading the file:", err);
        return;
      }

      // Parse the existing data or start with an empty array if the file is new
      const todos = data ? JSON.parse(data) : [];

      // Add the new todo item
      todos.push(todo);

      // Convert the updated todos array to a JSON string
      const todosString = JSON.stringify(todos, null, 2); // Pretty print with 2 spaces

      // Write the updated JSON string back to the file
      fs.writeFile(file, todosString, (err) => {
        if (err) {
          console.error("Error writing to the file:", err);
        } else {
          console.log("File has been updated successfully");
        }
      });
    });
  });

program.parse(process.argv);
