package com.task.task.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
public class TaskList {
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(name="listId")
	private int listId;
	
	@OneToMany(cascade = {
			CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH
	}, mappedBy="taskList", fetch=FetchType.EAGER)
	private List<Task> task;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getListId() {
		return listId;
	}

	public void setListId(int listId) {
		this.listId = listId;
	}

	public List<Task> getTask() {
		return task;
	}

	@Override
	public String toString() {
		return "TaskList [id=" + id + ", listId=" + listId + ", task=" + task + "]";
	}

	public void setTask(List<Task> task) {
		this.task = task;
	}
	
	
	
	

}
