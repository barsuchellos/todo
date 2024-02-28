import { Injectable } from "@angular/core";
import { Goal } from "../goal";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  condition = false;
  protected taskList: Goal[] = [];
  protected completedList: Goal[] = [];

  getList(): Goal[] {
    return this.taskList;
  }

  addGoal(text: string): void {
    if (text.length) {
      this.taskList.push({
        textToDo: text,
        complete: false,
        delete: false,
      });
      this.condition = this.isList();
    }
  }

  deleteGoal(index: number): void {
    this.taskList.splice(index, 1);
    this.condition = this.isList();
  }

  isList(): boolean {
    return this.taskList.length > 0;
  }

  getCompleteTask(): Goal[] {
    return this.completedList;
  }

  addCompleteTask(index: number) {
    const [completeTask] = this.taskList.splice(index, 1);
    this.completedList.push({ ...completeTask, complete: true });
  }
}
