package com.zemoso.blogservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zemoso.blogservice.model.Tag;
import com.zemoso.blogservice.service.TagService;

@RestController
@RequestMapping("/api/v1")
public class TagController {
	
	@Autowired
	private TagService tagService;
	
	
	@GetMapping("tags")
	public List<Tag> getAllBlogs() {
		return this.tagService.getAllTags();
	}

	@PostMapping("tags")
	public Tag createTag(@RequestBody Tag tag) {
		return this.tagService.createTag(tag);
	}

}
