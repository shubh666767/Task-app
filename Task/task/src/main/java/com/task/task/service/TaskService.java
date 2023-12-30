package com.task.task.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.task.task.dao.TaskDao;
import com.task.task.model.Task;
import com.task.task.model.TaskList;

@Service
@Transactional
public class TaskService {

	@Autowired
	private TaskDao taskDao;
	
	public void fetchTask() {
		
	}
	
	
	public void addtask(TaskList taskList) {
		System.out.println(taskList.getTask());
		
		for(Task t: taskList.getTask()) {
		taskDao.save(t);
		}
		taskDao.save(taskList);
	}
	
}
