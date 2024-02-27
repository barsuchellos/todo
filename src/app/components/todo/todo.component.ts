import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Goal } from "../../goal";
import { TodoTaskComponent } from "../todo-task/todo-task.component";
import { TodoService } from "src/app/service/todo.service";

@Component({
  selector: "todo",
  standalone: true,
  imports: [FormsModule, CommonModule, TodoTaskComponent],
  templateUrl: "./todo.component.html",
})

export class ToDoComponent {
  text: string = "";
  list: Goal[] = [];
  todoService: TodoService = inject(TodoService);
  condition = false;

  constructor() {
    this.list = this.todoService.getList();
    this.condition = this.todoService.isList();
  }

  addGoal(text: string): void {
    if (text.length) {
      this.todoService.addGoal(text);
      this.text = "";
      this.condition = this.todoService.isList();
    }
  }

  isList(): boolean {
    return this.list.length ? true : false;
  }
}
