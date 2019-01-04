package com.anying.service.impl;

import com.anying.dao.UpdateDao;
import com.anying.service.UpdateService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
@Service
public class UpdateServiceImpl implements UpdateService {
	@Resource
  private UpdateDao updateDao;
	public int deleteData(String id) {	
		return updateDao.deleteData(id);
	}
	public int realDeleteData(String id) {	
		return updateDao.realDeleteData(id);
	}
	@Override
	public int collectData(String id, String pid, String collectFlag) {
		// TODO Auto-generated method stub
		return updateDao.collectData(id,pid,collectFlag);
	}
}
