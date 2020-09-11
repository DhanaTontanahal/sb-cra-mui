package com.zemoso.blogservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zemoso.blogservice.model.Tag;
import com.zemoso.blogservice.repository.TagRepository;
@Service
public class TagService {

	@Autowired
	private TagRepository tagRepository;
	
	public List<Tag> getAllTags() {
		return this.tagRepository.findAll();
	}

	public Tag createTag(Tag tag) {
		return this.tagRepository.save(tag);
	}
	
}
