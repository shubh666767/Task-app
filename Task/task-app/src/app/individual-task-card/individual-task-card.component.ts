import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {Task} from '../model/task';
@Component({
  selector: 'app-individual-task-card',
  templateUrl: './individual-task-card.component.html',
  styleUrls: ['./individual-task-card.component.css']
})
export class IndividualTaskCardComponent implements OnInit {
  @Input() index:any;
  @Input() taskDetails :any;
  tasks: Task[] = [];

  selectedData:any;

  @Output() taskEvent = new EventEmitter<string>();
 task: Task = new Task(1,2,"abc");
 task1: Task = new Task(2,1,"def");
 
  constructor() { }

  ngOnInit(): void {
    console.log(this.index)
   console.log(this.taskDetails);
  

  }

  sendDataToParent(task: Task): void {
    console.log(task);
    const dataToSend = 'Hello from child!';
    this.taskEvent.emit(this.selectedData);
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

  onDragMoved(event:any):void{
    console.log(event);
  }

}
