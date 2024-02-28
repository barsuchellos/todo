import { Component } from "@angular/core";
import { TodoService } from "../../service/todo.service";
import { Input } from "@angular/core";
import { Goal } from "../../goal";

@Component({
  selector: "completed-todo-task",
  standalone: true,
  imports: [],
  templateUrl: "./completed-todo-task.component.html",
})

export class CompletedTodoTaskComponent {
  @Input() Goal!: Goal;
  @Input() index!: number;
  
  constructor(private toDoService: TodoService) {}

  addCompleteTask(): void {
    const index = this.toDoService.getList().indexOf(this.Goal);
    this.toDoService.addCompleteTask(index);
  }
}
