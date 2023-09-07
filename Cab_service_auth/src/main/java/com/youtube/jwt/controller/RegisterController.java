package com.youtube.jwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.youtube.jwt.entity.User;
import com.youtube.jwt.service.UserService;

@RestController
public class RegisterController {
	
	 @Autowired
	    private UserService userService;
	
	 @PostMapping({"/registerNewUsers"})
	    public User registerNewUser(@RequestBody User user) {
	    	System.out.println(user);
	        return userService.registerNewUser(user);
	    }
	    
}
