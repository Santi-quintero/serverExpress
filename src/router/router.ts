import { Router, Request, Response } from "express";
import { GameController } from "../game/gameController";
import { ToDoListController } from "../toDoList/toDoListController";

const router = Router();
const gameController = new GameController();
const toDoListTask = new ToDoListController();

router.get("/play/:number", function (req, res) {
  var numero = req.params.number;
  res.send(gameController.play(numero));
});
router.get("/usuario-tasks", (req: Request, res: Response) => {
  res.send(toDoListTask.getUsers());
});
router.post("/usuario-tasks/user", (req: Request, res: Response) => {
  const { description, estimation } = req.body;
  if (!description) {
    res.status(400).send({ error: "Task is required" });
  }
  toDoListTask.addUsuario(description, estimation);
  res.json({message: "User Saved"})
});
router.post("/usuario-tasks", (req: Request, res: Response) => {
  const { id, description, estimation } = req.body;
  if (!description) {
    res.status(400).send({ error: "Task is required" });
  }
  toDoListTask.addTask(id, description, estimation);
  res.json({message: "Task Saved"})
});
router.delete("/usuario-tasks/:id/:idTask", (req: Request, res: Response) => {
  const { id, idTask } = req.params;
  // if (!id) {
  //   res.status(400).send({ error: "id is required type string" });
  // }
  // if (!idTask) {
  //   res.status(400).send({ error: "idTask is required type number" });
  // }
  toDoListTask.deleteTask(id, idTask);
  res.json({message: "Task deleted"})
});
router.put("/usuario-tasks/:id/:idTask", (req: Request, res: Response) => {
  const { id, idTask } = req.params;
  const { description, estimation } = req.body;
  if (!id) {
    res.status(400).send({ error: "id is required type string" });
  }
  if (!idTask) {
    res.status(400).send({ error: "idTask is required type number" });
  }
  if (!description) {
    res.status(400).send({ error: "description is required type string" });
  }
  if (!estimation) {
    res.status(400).send({ error: "estimation is required type number" });
  }
  toDoListTask.editTask(id, idTask, description, estimation);
  res.json({message: "Task Update"})
});
router.get("/usuario-tasks/:string", (req: Request, res: Response) => {
  const id = req.params.string;
  res.send(toDoListTask.getUsuTask(id));
});

router.patch("/usuario-tasks/completed/:id/:idTask", (req: Request, res: Response) => {
  const { id, idTask } = req.params;
  console.log(id, idTask)
  if (!id) {
    res.status(400).send({ error: "id is required type string" });
  }
  if (!idTask) {
    res.status(400).send({ error: "idTask is required type number" });
  }
  toDoListTask.completedTask(id, idTask);
  res.json({message: "Task Completed"})
});
router.patch("/usuario-tasks/pending/:id/:idTask", (req: Request, res: Response) => {
    const { id, idTask } = req.params;
   if (!id) {
     res.status(400).send({ error: "id is required type string" });
   }
   if (!idTask) {
     res.status(400).send({ error: "idTask is required type number" });
   }
   toDoListTask.uncompletedTask(id, idTask);
   res.json({message: "Task pending"})
 });
export { router };
