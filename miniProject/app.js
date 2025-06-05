import readline from "readline";
const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})
const todos=[];
const showMenu=()=>{
  console.log("\n1: Add a Task");
  console.log("2: View all tasks");
  console.log("3: Exit");
  console.log("4:Delete Task");

  rl.question("Choose an option:",handleInput);
 
}
const handleInput=(option)=>{  

  if(option==="1"){
    rl.question("Enter the task:",(task)=>{
      todos.push(task);
      console.log("task added:" ,task);
        showMenu();
    })
  
  }
  else  if(option==="2"){
    console.log("Your Todo Lists");
    todos.forEach(( task,index)=>{
      console.log(`${index+1}. ${task}`);
    })
       showMenu();
  }
  else if(option==="3"){
    console.log("Goodbye");
  rl.close();
  }
  else if(option ==="4"){
    console.log("Delete a task");
    rl.question("Enter the task you want to delete:",(task)=>{
      todos.forEach((value,index)=>{
        if(value===task){
          todos.splice(index,1);
          console.log("Task deleted");
          showMenu();
        }
      })
    })

  }
  else{
    console.log("Invalid Option please select Valid Option");
    showMenu();
    
  }
  }
showMenu();