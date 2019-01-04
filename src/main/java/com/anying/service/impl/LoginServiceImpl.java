package com.anying.service.impl;

import com.anying.dao.LoginDao;
import com.anying.entity.PersonBean;
import com.anying.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {
	@Autowired
	private LoginDao loginDao;
	public PersonBean login(String userName) {
		PersonBean pb =loginDao.login(userName);
		return pb;
	}
}
