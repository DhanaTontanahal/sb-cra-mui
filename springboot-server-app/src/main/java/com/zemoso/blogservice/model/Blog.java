package com.zemoso.blogservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Blog")
public class Blog {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long postId;
	
	@Column(name="title")
	private String title;
	
	@Column(name="content")
	private String content;
	
	@Column(name="post_date")
	private String postedDate;
	
	@Column(name="post_desc")
	private String postDesc;
	
	@Column(name="post_img")
	private String postImgUrl;
	
	@Column(name="read_time")
	private String readTime;
	
	@Column(name="upvotes")
	private int upvotesCount;
	
	@Column(name="claps")
	private int clapsCount;
	
	@Column(name="uid")
	private long uId;
	
	public Blog() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Blog(Long postId, String title, String content, String postedDate, String postDesc, String postImgUrl,
			String readTime, int upvotesCount, int clapsCount, long uId) {
		super();
		this.postId = postId;
		this.title = title;
		this.content = content;
		this.postedDate = postedDate;
		this.postDesc = postDesc;
		this.postImgUrl = postImgUrl;
		this.readTime = readTime;
		this.upvotesCount = upvotesCount;
		this.clapsCount = clapsCount;
		this.uId = uId;
	}
	public Long getPostId() {
		return postId;
	}
	public void setPostId(Long postId) {
		this.postId = postId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getPostedDate() {
		return postedDate;
	}
	public void setPostedDate(String postedDate) {
		this.postedDate = postedDate;
	}
	public String getPostDesc() {
		return postDesc;
	}
	public void setPostDesc(String postDesc) {
		this.postDesc = postDesc;
	}
	public String getPostImgUrl() {
		return postImgUrl;
	}
	public void setPostImgUrl(String postImgUrl) {
		this.postImgUrl = postImgUrl;
	}
	public String getReadTime() {
		return readTime;
	}
	public void setReadTime(String readTime) {
		this.readTime = readTime;
	}
	public int getUpvotesCount() {
		return upvotesCount;
	}
	public void setUpvotesCount(int upvotesCount) {
		this.upvotesCount = upvotesCount;
	}
	public int getClapsCount() {
		return clapsCount;
	}
	public void setClapsCount(int clapsCount) {
		this.clapsCount = clapsCount;
	}
	public long getuId() {
		return uId;
	}
	public void setuId(long uId) {
		this.uId = uId;
	}
	@Override
	public String toString() {
		return "Blog [postId=" + postId + ", title=" + title + ", content=" + content + ", postedDate=" + postedDate
				+ ", postDesc=" + postDesc + ", postImgUrl=" + postImgUrl + ", readTime=" + readTime + ", upvotesCount="
				+ upvotesCount + ", clapsCount=" + clapsCount + ", uId=" + uId + "]";
	}
	
	
}
