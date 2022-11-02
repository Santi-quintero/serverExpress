class ToDoList{

    id: string;
    description: string;
    estimation: number;
    completed: boolean;
    constructor(id: string, description:string, estimation:number, completed:boolean){
        this.id = id;
        this.description= description;
        this.estimation = estimation;
        this.completed = completed;
    }
}
export {ToDoList}