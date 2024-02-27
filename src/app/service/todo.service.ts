import { Injectable } from "@angular/core";
import { Goal } from "../goal";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  condition = false;
  protected taskList: Goal[] = [];

  getList(): Goal[] {
    return this.taskList;
  }

  addGoal(text: string): void {
    this.taskList.push({
      textToDo: text,
      complete: false,
      delete: false,
    });
    this.condition = this.isList();
  }

  isList(): boolean {
    return this.taskList.length ? true : false;
  }

  deleteGoal(index: number): void {
    this.taskList.splice(index, 1);
    this.condition = this.isList();
  }
}
