package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.user;
import com.example.demo.repositary.userRepositary;

@Service
public class UserService {
	
	@Autowired
	private userRepositary repo;
	
	public UserService() {}
	public UserService(userRepositary repo) {
		super();
		this.repo=repo;
		
	}
	public void saveMyUser(user us) {
		repo.save(us);
	}
   public Iterable<user>showAllUsers(){
	   return repo.findAll();
   }
   public Iterable<user> deleteUserByUsername(String username){
	  repo.deleteByUsername(username) ;
	  return repo.findAll();
   }
   public user findByUsername(String username) {
	  return repo.findByUsername(username);
   }
}