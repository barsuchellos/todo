import { Component, inject } from "@angular/core";
import { TodoService } from "../../service/todo.service";
import { Input } from "@angular/core";
import { Goal } from "../../goal";

@Component({
  selector: "todo-task",
  imports: [],
  standalone: true,
  templateUrl: "./todo-task.component.html",
  styleUrl: "./todo-task.component.css",
})
export class TodoTaskComponent {
  @Input() Goal!: Goal;

  toDoService: TodoService = inject(TodoService);

  deleteGoal(): void {
    const index = this.toDoService.getList().indexOf(this.Goal);
    if (index !== -1) this.toDoService.deleteGoal(index);
  }
}
