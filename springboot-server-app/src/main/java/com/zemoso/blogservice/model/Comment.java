package com.zemoso.blogservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Comment")
public class Comment {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column(name="comment")
	private String comment;
	
	@Column(name="post_id")
	private long postId;
	
	@Column(name="uid")
	private long uid;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public long getPostId() {
		return postId;
	}

	public void setPostId(long postId) {
		this.postId = postId;
	}

	public long getUid() {
		return uid;
	}

	public void setUid(long uid) {
		this.uid = uid;
	}

	public Comment(long id, String comment, long postId, long uid) {
		super();
		this.id = id;
		this.comment = comment;
		this.postId = postId;
		this.uid = uid;
	}

	public Comment() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((comment == null) ? 0 : comment.hashCode());
		result = prime * result + (int) (id ^ (id >>> 32));
		result = prime * result + (int) (postId ^ (postId >>> 32));
		result = prime * result + (int) (uid ^ (uid >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Comment other = (Comment) obj;
		if (comment == null) {
			if (other.comment != null)
				return false;
		} else if (!comment.equals(other.comment))
			return false;
		if (id != other.id)
			return false;
		if (postId != other.postId)
			return false;
		if (uid != other.uid)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Comment [id=" + id + ", comment=" + comment + ", postId=" + postId + ", uid=" + uid + "]";
	}
	
	
}
