import { Component, OnInit } from '@angular/core';
import {Task} from '../model/task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  //private tasks: Task[] = [];
  details:any;

  selectedTaskToDelete:any;
  task1:Task = new Task(1,1,"aaaaaaaaaaa");
  task2:Task = new Task(1,2,"bbbbbbbbb");
  task3:Task = new Task(2,1,"ccccccccccccc");
  task4:Task = new Task(2,2,"dddddddddddd");

  tasks: Task[] =[];
  tasks2list: Task[] =[];

  listOfTasks : Task[][] =[];
  constructor() { }

  ngOnInit(): void {
   
  }

  createNewList(){
  /*  let container = document.getElementById("container");
    let div = document.createElement("div");
    
    let button = document.createElement("button");
    button.innerText ="Add Tasks";
    div.appendChild(button);
    container?.appendChild(div);

    console.log(container) */


    this.tasks.push(this.task1);
    this.tasks.push(this.task2);

    this.tasks2list.push(this.task3);
    this.tasks2list.push(this.task4);
    

    this.listOfTasks.push(this.tasks);
    this.listOfTasks.push(this.tasks2list);
    console.log(this.listOfTasks);
   // this.listOfTasks.push(this.task2);
   console.log("hi");
   //task: Task;

  } 

  getContainerDetails(details: any){
   // console.log(details);
  }

  receiveDataFromChild(data: string): void {
    this.selectedTaskToDelete = data;
    console.log(this.selectedTaskToDelete)
  }

  onTaskDropped(event: any): void {
    // Determine the new index and move the task
    console.log(event);
    const newIndex = event.currentIndex;
    const task: Task = event.item.data;


    console.log('Dropped item:', event.item.data);
      console.log('Previous container:', event.previousContainer.data);
      console.log('New container:', event.container.data);
   // this.taskService.moveTask(task, newIndex);
  }
}
