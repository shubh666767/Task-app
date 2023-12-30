package com.task.task.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.task.task.model.TaskList;

@Repository
public class TaskDao {
	
	@PersistenceContext
	protected EntityManager entityManager;

	
	public <T> T save(Object obj) {
	T updatedObj=(T)entityManager.merge(obj);
	return updatedObj;
	}
	
	public List<TaskList> fetchAll() {
		return entityManager.createNamedQuery("TaskList.findAll").getResultList();
	}

}
