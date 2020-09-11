package com.zemoso.blogservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zemoso.blogservice.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{

}
