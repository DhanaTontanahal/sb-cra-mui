package com.zemoso.blogservice.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zemoso.blogservice.exception.ResourceNotFoundException;
import com.zemoso.blogservice.model.User;
import com.zemoso.blogservice.service.UserService;

@RestController
@RequestMapping("/api/v1")
public class UserController {

	@Autowired
	private UserService userService;
	
	
	@GetMapping("users")
	public List<User> getAllBlogs() {
		return this.userService.getAllUsers();
	}

	@GetMapping("users/{uId}")
	public ResponseEntity<User> getBlogById(@PathVariable(value = "uId") Long uId) throws ResourceNotFoundException {
		return ResponseEntity.ok().body(this.userService.getUserById(uId));
	}

}
