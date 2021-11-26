package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.Service.UserService;
import com.example.demo.model.user;

@org.springframework.web.bind.annotation.RestController
public class RestController {
	
	@Autowired
	private UserService service;

	@PostMapping("/save-user")
	@Transactional
	@CrossOrigin
	 public String registerUser(@RequestBody user us)
	 {
		 service.saveMyUser(us);
		 return "Hello "+us.getFirstname()+" your registration is successfully";
	 }
	
	@GetMapping("/all-users")
	@CrossOrigin
	public Iterable<user> showAllUsers(){
		return service.showAllUsers();
	}
	
	@GetMapping("/delete/{username}")
	@Transactional
	@CrossOrigin
     public Iterable<user> deleteUser(@PathVariable String username){
    	 return service.deleteUserByUsername(username);
     }
     
     @GetMapping("/serach/{username}")
     @CrossOrigin
    	 public user serachUser(@PathVariable String username) {
    		 return service.findByUsername(username);
    	 }
     }
     
