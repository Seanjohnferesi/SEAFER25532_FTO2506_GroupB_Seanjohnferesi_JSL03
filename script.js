//Storing tasks as objects inside an array
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

/*function to add up to 3 new tasks to the existing array and stops user from adding
  more tasks*/
function addTask(inputTitle, inputDescription, inputStatus) {
  //Incrementing the ID when task are added.
  let id = initialTasks.length + 1;
  let maxTask = 6;

  if (initialTasks.length < maxTask){
    let newTask = {
      id: id,
      title: inputTitle,
      description: inputDescription, 
      status: inputStatus, 
    }
    initialTasks.push(newTask);

  } else if (initialTasks.length === maxTask){
    alert("There are enough tasks on your board, please check them in the console");
  }
}

// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task 1 title");
const task1Description = prompt("Enter task 1 description");

// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt("Enter task 1 status (todo, doing, done)").toLowerCase();

// Keep asking until the user enters a valid status for task 1
while (task1Status !== "todo" && task1Status !== "doing" && task1Status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    task1Status = prompt("Enter task 1 status (todo, doing, done)").toLowerCase();
}
addTask(task1Title, task1Description, task1Status);
//console.log(`Status: ${task1Status}`);

// Repeating the same steps for Task 2
const task2Title = prompt("Enter task 2 title");
const task2Description = prompt("Enter task 2 description");
let task2Status = prompt("Enter task 2 status").toLowerCase();

while(task2Status !== "todo" && task2Status !== "doing" && task2Status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    task2Status = prompt("Enter task 1 status (todo, doing, done)").toLowerCase();
}

// Check if task1 is done, and log it if so
if (task1Status === "done") {
  console.log("Title: " + task1Title + ", status: " + task1Status);
}

// Check if task2 is done, and log it if so
if (task2Status === "done") {
  console.log("Title: " + task2Title + ", status: " + task2Status);
}

// If neither task1 nor task2 is done, show a motivational message
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}
addTask(task2Title, task2Description, task2Status);

console.log(initialTasks);

/*//Adding tasks through prompts and storing them inside and object
for (let i = 1; i <= 1; i++) {
  let inputTitle = prompt("Enter Task Title");
  let inputDescription = prompt("Enter Task Description");
  let inputStatus = prompt("Enter Task Status(todo, doing, done)").toLowerCase();

  //Keep asking for status when user entered invalid status.
  while(inputStatus !== "todo" && inputStatus !== "doing" && inputStatus !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    inputStatus = prompt("Enter task 1 status (todo, doing, done)").toLowerCase();
  }

  let id = initialTasks.length + 1;

  addTask(inputTitle, inputDescription, inputStatus)


  if (inputStatus === "done") {
    console.log("Title: " + inputTitle + ", status: " + inputStatus);
  }

  // If neither task1 nor task2 is done, show a motivational message
  if (inputStatus !== "done") {
    console.log("No tasks completed, let's get to work!");
  }
}
console.log(initialTasks);*/