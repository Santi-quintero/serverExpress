import { ToDoList } from "./toDoList";
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
export class ToDoListController {
  private task: ToDoList;
  private tasks: ToDoList[] = [];
  private taskObject: { [key: string]: ToDoList[]} = {};
  private tasksUsu: {id: string; task:ToDoList[]}[]=[];
  constructor() {
    const json_tasks = fs.readFileSync('./src/tasks.json', 'utf-8')
      const usuarios = JSON.parse(json_tasks)
      this.tasksUsu = usuarios
  }
  public addTask(id:string,description: string, estimation: number) {
     const json_tasks = fs.readFileSync('./src/tasks.json', 'utf-8')
     const usuarios = JSON.parse(json_tasks)
    let index = usuarios.findIndex((usuario: {id:string})=>usuario.id === id)
    if (index === -1) {
       let newTask ={
        id: this.tasks.length+1,
        description: description,
        estimation: estimation,
        completed: false
       }
       this.tasks.push(newTask)
       let newTaskObject={
        id: id,
        task: this.tasks
       }
       this.taskObject[id] = this.tasks;
       this.tasksUsu.push(newTaskObject);
       const json_tasks2 = JSON.stringify(this.tasksUsu);;
       fs.writeFileSync('./src/tasks.json', json_tasks2,'utf-8')
   }else{
     this.tasks = this.tasksUsu[index].task
     console.log(this.tasks)
    let newTask ={
        id: this.tasks.length+1,
        description: description,
        estimation: estimation,
        completed: false
       }
       this.tasks.push(newTask)
       this.taskObject[id] = this.tasks;
       this.tasksUsu[index].task=this.tasks;
       const json_tasks2= JSON.stringify(this.tasksUsu);
       fs.writeFileSync('./src/tasks.json', json_tasks2,'utf-8') 
   }

  }


}
