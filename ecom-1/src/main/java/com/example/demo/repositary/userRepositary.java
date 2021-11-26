package com.example.demo.repositary;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.user;

public interface userRepositary extends CrudRepository<user, Integer>{

	
	public Iterable<user> deleteByUsername(String username);
	public user findByUsername(String username);
	
}


