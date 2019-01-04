package com.anying.service;

import com.anying.entity.Highlander;

import java.util.List;

public interface QueryService {
	
	public int getTotal(String search, String curType, String isOpen);

	public List<Highlander> getList(String search, String curType, int startPage, String isOpen);
	
	public Highlander getDetail(String id);
}
