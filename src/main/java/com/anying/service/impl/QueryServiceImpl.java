package com.anying.service.impl;

import com.anying.dao.QueryDao;
import com.anying.entity.Highlander;
import com.anying.service.QueryService;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.io.UnsupportedEncodingException;
import java.util.List;

@Service
public class QueryServiceImpl implements QueryService {
	Logger logger=Logger.getLogger(QueryServiceImpl.class);
	@Resource
	QueryDao queryDao;

	@Override
	public int getTotal(String search,String curType,String isOpen) {
		return queryDao.getTotal(search,curType,isOpen);
	}

	@Override
	public List<Highlander> getList(String search, String curType, int startPage, String isOpen) {
		return queryDao.getList(search,curType, startPage,isOpen);
	}

	@Override
	public Highlander getDetail(String id) {
		Highlander hlr = queryDao.getDetail(id);
		try {
			hlr.setContent(new String(hlr.getDetails(),"utf-8"));
		} catch (UnsupportedEncodingException e) {
			logger.error(e.getMessage());
		}
		return hlr;
	}
	
}