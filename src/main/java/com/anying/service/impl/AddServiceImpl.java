package com.anying.service.impl;

import com.anying.dao.AddDao;
import com.anying.entity.Highlander;
import com.anying.service.AddService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class AddServiceImpl implements AddService {
	@Autowired
    private AddDao addDao;
	@Override
	public int addData(Highlander hlr) {
		return addDao.addData(hlr);
	}
	@Override
	public int updateData(Highlander hlr) {
		// TODO Auto-generated method stub
		return addDao.updateData(hlr);
	}

}
