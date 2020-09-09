package com.zemoso.blogservice;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.zemoso.blogservice.model.Blog;
import com.zemoso.blogservice.repository.BlogReposit;
import com.zemoso.blogservice.service.BlogService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class Test {

	@Autowired
	private BlogService service;

	@MockBean
	private BlogReposit repository;

	@org.junit.Test
	public void getAllBlogsest() {
		when(repository.findAll()).thenReturn(Stream.of(
				new Blog((long) 1002, "title1", "blogcontent1", "Sep 10 2020", "post desc1", "imageUrl", "2 min", 0, 0,
						1050),
				new Blog((long) 1003, "title1", "blogcontent1", "Sep 10 2020", "post desc1", "imageUrl", "2 min", 0, 0,
						1050))
				.collect(Collectors.toList()));
		assertEquals(2, service.getAllBlogs().size());
	}



}
