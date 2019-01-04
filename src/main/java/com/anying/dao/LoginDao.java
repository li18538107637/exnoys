package com.anying.dao;

import com.anying.entity.PersonBean;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginDao{
	public PersonBean login(String userName);
	
	
}