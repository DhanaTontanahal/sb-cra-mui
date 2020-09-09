package com.zemoso.blogservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zemoso.blogservice.exception.ResourceNotFoundException;
import com.zemoso.blogservice.model.Comment;
import com.zemoso.blogservice.repository.CommentRepository;

@Service
public class CommentService {

	@Autowired
	private CommentRepository commentRepository;

	public List<Comment> getAllComments() {
		return this.commentRepository.findAll();
	}

	public Comment getComentByPostId(Long postId) throws ResourceNotFoundException {
		Comment comment = this.commentRepository.findById(postId)
				.orElseThrow(() -> new ResourceNotFoundException("Comment not found"));
		return comment;
	}

	
	
}
