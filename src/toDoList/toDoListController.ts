import { ToDoList } from "./toDoList";

const { v4: uuidv4 } = require("uuid");
const fs = require("fs");


export class ToDoListController {

  private tasks: ToDoList[] = [];
  private tasksUsu: { id: string; task: ToDoList[]; endTask: ToDoList[]}[] = [];
  private usuTask: { id: string; task: ToDoList[] }[] = [];

  constructor() {
    const json_tasks = fs.readFileSync("./src/tasks.json", "utf-8");
    const usuarios = JSON.parse(json_tasks);
    this.tasksUsu = usuarios;
  }
  
  public addTask(id: string, description: string, estimation: number) {
    const json_tasks = fs.readFileSync("./src/tasks.json", "utf-8");
    const usuarios = JSON.parse(json_tasks);
    let index = usuarios.findIndex(
      (usuario: { id: string }) => usuario.id === id
    );
    if (index === -1) {
      let newTask = {
        id: this.tasks.length + 1,
        description: description,
        estimation: estimation,
        completed: false,
      };
      this.tasks.push(newTask);
      // let newTaskObject = {
      //   id: id,
      //   task: this.tasks,
      // };
      this.tasksUsu.push({id: id, task:this.tasks, endTask: []});
      const json_tasks2 = JSON.stringify(this.tasksUsu);
      fs.writeFileSync("./src/tasks.json", json_tasks2, "utf-8");
    } else {
      this.tasks = this.tasksUsu[index].task;
      let newTask = {
        id: this.tasks.length + 1,
        description: description,
        estimation: estimation,
        completed: false,
      };
      this.tasks.push(newTask);
      this.tasksUsu[index].task = this.tasks;
      const json_tasks2 = JSON.stringify(this.tasksUsu);
      fs.writeFileSync("./src/tasks.json", json_tasks2, "utf-8");
    }
  }

  public deleteTask(id: string, idTask: number){
    const json_tasks = fs.readFileSync("./src/tasks.json", "utf-8");
    let usuarios = JSON.parse(json_tasks);
    let index = usuarios.findIndex(
      (usuario: { id: string }) => usuario.id === id
    );
    this.tasks= this.tasksUsu[index].task;
    let indexTask = this.tasks.findIndex(
      (task: {id: number})=> task.id === idTask
    );
    this.tasks.splice(indexTask, 1);
    this.tasksUsu[index].task = this.tasks
    const json_tasks2 = JSON.stringify(this.tasksUsu);
    fs.writeFileSync("./src/tasks.json", json_tasks2, "utf-8");
  }

  public editTask(id:string, idTask:number, description:string, estimation:number){
    const json_tasks = fs.readFileSync("./src/tasks.json", "utf-8");
    let usuarios = JSON.parse(json_tasks);
    let index = usuarios.findIndex(
      (usuario: { id: string }) => usuario.id === id
    );
    this.tasks= this.tasksUsu[index].task;
    let indexTask = this.tasks.findIndex(
      (task: {id: number})=> task.id === idTask
    );
    this.tasks[indexTask].description= description;
    this.tasks[indexTask].estimation= estimation;
    this.tasksUsu[index].task = this.tasks;
    const json_tasks2 = JSON.stringify(this.tasksUsu)
    fs.writeFileSync("./src/tasks.json", json_tasks2, "utf-8");
  }

  public getUsuTask(id:string){
    const json_tasks = fs.readFileSync("./src/tasks.json", "utf-8");
    let usuarios = JSON.parse(json_tasks);
    let index = usuarios.findIndex(
      (usuario: { id: string }) => usuario.id === id
    );
    this.usuTask = usuarios[index];
    return this.usuTask
  }

  public completedTask(id: string, idTask: number){
    const json_tasks = fs.readFileSync("./src/tasks.json", "utf-8");
    let usuarios = JSON.parse(json_tasks);
    let index = usuarios.findIndex(
      (usuario: { id: string }) => usuario.id === id
    );
    this.tasks= this.tasksUsu[index].task;
    let indexTask = this.tasks.findIndex(
      (task: {id: number})=> task.id === idTask
    );
    this.tasks[indexTask].completed = true
    this.tasksUsu[index].task = this.tasks;
    this.tasksUsu[index].endTask.push(this.tasks[indexTask])
    this.tasks.splice(indexTask, 1);
    const json_tasks2 = JSON.stringify(this.tasksUsu);
    fs.writeFileSync("./src/tasks.json", json_tasks2, "utf-8");
  }


  //pasa tarea completada de nuevo a por realizar
  public uncompletedTask(id: string, idTask:Number){
    const json_tasks = fs.readFileSync("./src/tasks.json", "utf-8");
    let usuarios = JSON.parse(json_tasks);
    let index = usuarios.findIndex(
      (usuario: { id: string }) => usuario.id === id
    );
    this.tasks= this.tasksUsu[index].task;
    let indexTask = this.tasksUsu[index].endTask.findIndex(
      (task: {id: number})=> task.id === idTask
    );
    this.tasksUsu[index].endTask[indexTask].completed = false
    this.tasks.push(this.tasksUsu[index].endTask[indexTask]);
    this.tasksUsu[index].task = this.tasks;
    this.tasksUsu[index].endTask.splice(indexTask, 1);
    const json_tasks2 = JSON.stringify(this.tasksUsu);
    fs.writeFileSync("./src/tasks.json", json_tasks2, "utf-8");
  }

  public getUsers(){
    const json_tasks = fs.readFileSync("./src/tasks.json", "utf-8");
    let usuarios = JSON.parse(json_tasks);
    return usuarios;
  }
}
