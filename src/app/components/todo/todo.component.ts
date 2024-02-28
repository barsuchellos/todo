import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Goal } from "../../goal";
import { TodoTaskComponent } from "../todo-task/todo-task.component";
import { TodoService } from "src/app/service/todo.service";
import { CompletedTodoTaskComponent } from "../completed-todo-task/completed-todo-task.component";

@Component({
  selector: "todo",
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    TodoTaskComponent,
    CompletedTodoTaskComponent,
  ],
  templateUrl: "./todo.component.html",
})
export class ToDoComponent {
  text: string = "";
  list: Goal[] = [];
  condition = false;
  completedList: Goal[] = [];

  constructor(private todoService: TodoService) {
    this.list = this.todoService.getList();
    this.condition = this.todoService.isList();
    this.completedList = this.todoService.getCompleteTask();
  }

  addGoal(text: string): void {
    this.todoService.addGoal(text);
    this.text = "";
    this.condition = this.todoService.isList();
  }
}
