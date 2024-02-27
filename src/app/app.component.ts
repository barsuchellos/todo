import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ToDoComponent } from "./components/todo/todo.component";

@Component({
  selector: "my-app",
  standalone: true,
  imports: [ToDoComponent, FormsModule],
  template: `<todo></todo>`,
})
export class AppComponent {}
