type current = "pending" | "done";

//abstraction

abstract class List {
  public id: number;
  public title: string;
  public status: current;

  constructor(id: number, title: string, status: current) {
    (this.id = id), (this.title = title), (this.status = status);
  }
}

// we canot dirctly use the abstract class

export class Task extends List {}

// class for manage all the task and perform opration like edit delete updation
export class taskManage {
  private tasks: List[] = [];
  private nextId: number = 1;

  addTask(title: string): List {
    let task = new Task(this.nextId++, title, "pending");
    this.tasks.push(task);
    return task;
  }

  getallTask(): List[] {
    return this.tasks;
  }

  getTaskbyid(id: number): List | undefined {
    return this.tasks.find((e) => e.id === id);
  }

  deleteTask(id: number) {
    const index = this.tasks.findIndex(function (task) {
      return task.id === id;
    });

    this.tasks.splice(index, 1);
  }

  doneTask(id: number) {
    let item = this.getTaskbyid(id);
    if (item) {
      if (item.status == "pending") {
        item.status = "done";
      } else {
        item.status = "pending";
      }
    }
  }

  editTask(id: number, editTitle: string) {
    let item = this.getTaskbyid(id);
    if (item) {
      item.title = editTitle;
    }
  }
}
