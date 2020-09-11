package com.zemoso.blogservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.zemoso.blogservice.model.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

	@Query("SELECT c FROM Comment c WHERE c.postId = ?1")
	List<Comment> getCommentsByPostId(long postId);
	
	
	
}
