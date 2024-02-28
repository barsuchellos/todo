import { Component, inject } from "@angular/core";
import { TodoService } from "../../service/todo.service";
import { Input } from "@angular/core";
import { Goal } from "../../goal";

@Component({
  selector: "todo-task",
  imports: [],
  standalone: true,
  templateUrl: "./todo-task.component.html",
})
export class TodoTaskComponent {
  @Input() Goal!: Goal;
  @Input() index!: number;
  
  constructor(private toDoService: TodoService) {}

  deleteGoal(): void {
    const index = this.toDoService.getList().indexOf(this.Goal);
    if (index !== -1) this.toDoService.deleteGoal(index);
  }

  addCompleteTask(): void {
    const index = this.toDoService.getList().indexOf(this.Goal);
    this.toDoService.addCompleteTask(index);
  }
}
