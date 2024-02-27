import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ToDoComponent } from "./components/todo/todo.component";


@NgModule({
    declarations: [AppComponent],
    imports: [CommonModule, FormsModule, BrowserModule, ToDoComponent]
})

export class AppModule {}
