package com.anying.service;

public interface UpdateService {
	public int deleteData(String id);
	public int realDeleteData(String id);
	public int collectData(String id, String pid, String collectFlag);
}
