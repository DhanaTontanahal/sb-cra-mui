package com.zemoso.blogservice.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zemoso.blogservice.exception.ResourceNotFoundException;
import com.zemoso.blogservice.model.Blog;
import com.zemoso.blogservice.service.BlogService;

@RestController
@RequestMapping("/api/v1")
public class BlogController {

	@Autowired
	private BlogService blogService;
	
	@GetMapping("blogs")
	public List<Blog> getAllBlogs() {
		return this.blogService.getAllBlogs();
	}

	@GetMapping("blogs/{blogId}")
	public ResponseEntity<Blog> getBlogById(@PathVariable(value = "blogId") Long blogId) throws ResourceNotFoundException {
		return ResponseEntity.ok().body(this.blogService.getBlogById(blogId));
	}

	@PostMapping("blogs")
	public Blog createBlog(@RequestBody Blog blog) {
		return blogService.createBlog(blog);
	}
	
	@PutMapping("blogs/{id}")
	public ResponseEntity<Blog> updateBlog(@PathVariable(value="id") Long blogId,
			 @RequestBody Blog blog) throws ResourceNotFoundException{
		Blog blogFromDB = blogService.getBlogById(blogId);
		blogFromDB.setTitle(blog.getTitle());
		blogFromDB.setContent(blog.getContent());
		return ResponseEntity.ok(blogService.createBlog(blog));
	}
	
	@DeleteMapping("blogs/{id}")
	public Map<String,Boolean> deleteBlog(@PathVariable(value="id") Long blogId) throws ResourceNotFoundException{
		Blog blogFromDB = blogService.getBlogById(blogId);
		return blogService.deleteBlog(blogFromDB);
	}

}
