import { Component, Input, OnInit } from '@angular/core';
import {Task} from '../model/task';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  task!: Task;

  @Input() index:any;

  onInputChange(event: any): void {
    console.log(event)
   // const inputValue = (event.target as HTMLInputElement).value;
   // console.log('Input data:', inputValue);
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
