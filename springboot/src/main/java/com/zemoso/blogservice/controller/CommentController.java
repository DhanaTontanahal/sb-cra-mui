package com.zemoso.blogservice.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zemoso.blogservice.exception.ResourceNotFoundException;
import com.zemoso.blogservice.model.Comment;
import com.zemoso.blogservice.repository.CommentRepository;
import com.zemoso.blogservice.service.CommentService;

@RestController
@RequestMapping("/api/v1")
public class CommentController {

	@Autowired
	private CommentRepository commentRepository;
	
	@Autowired
	private CommentService commentService;
	
	
	@GetMapping("comments")
	public List<Comment> getAllComments() {
		return this.commentService.getAllComments();
	}

	@GetMapping("comments/{postId}")
	public ResponseEntity<List<Comment>> getCommentsByPostId(@PathVariable(value = "postId") Long postId) throws ResourceNotFoundException {
		return ResponseEntity.ok().body(commentRepository.getCommentsByPostId(postId));
	}

	@PostMapping("comments")
	public Comment createBlog(@RequestBody Comment comment) {
		return this.commentRepository.save(comment);
	}
	
	
	@DeleteMapping("comments/{id}")
	public Map<String,Boolean> deleteComment(@PathVariable(value="id") Long commentId) throws ResourceNotFoundException{
		Comment commentFromDB = commentRepository.findById(commentId).orElseThrow(() -> new ResourceNotFoundException("Comment not found"));
		this.commentRepository.delete(commentFromDB);
		
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
		
	}

}
