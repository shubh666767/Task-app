package com.task.task.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.task.task.model.Task;
import com.task.task.model.TaskList;
import com.task.task.service.TaskService;


@RestController
public class TaskController {

	@Autowired
	private TaskService taskService;
	
	@GetMapping(value="/add-tasks")
	private void addTasks() {
		//System.out.println("djjjjjjjjjjjjjjjjjjjjjjjjjjj");
		TaskList taskList = new TaskList();
		taskList.setListId(1);
		
		Task task = new Task();
		task.setTitle("go gym");
		task.setTaskId(1);
		task.setTaskList(taskList);
		
		
		//taskList.setTask(task);
		
		
		TaskList taskList1 = new TaskList();
		taskList.setListId(1);
		
		Task task1 = new Task();
		task1.setTitle("read");
		task1.setTaskId(2);
		task1.setTaskList(taskList1);
		
		
		List<Task> tasks = new ArrayList<Task>();
		tasks.add(task);
		tasks.add(task1);
		
		taskList.setTask(tasks);
		
		
		//taskService.addtask(task);
		taskService.addtask(taskList);
		//taskService.addtask(taskList1);
		
		
	}
}
