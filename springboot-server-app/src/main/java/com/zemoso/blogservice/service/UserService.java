package com.zemoso.blogservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zemoso.blogservice.exception.ResourceNotFoundException;
import com.zemoso.blogservice.model.User;
import com.zemoso.blogservice.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public List<User> getAllUsers() {
		return this.userRepository.findAll();
	}
	
	public User getBlogById(Long uId) throws ResourceNotFoundException {
		User user = this.userRepository.findById(uId).orElseThrow(() -> new ResourceNotFoundException("User not found"));
		return user;
	}

	public User getUserById(Long uId) throws ResourceNotFoundException {
		User user = this.userRepository.findById(uId).orElseThrow(() -> new ResourceNotFoundException("User not found"));
		return user;
	}
	

}
