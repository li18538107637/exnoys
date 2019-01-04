package com.anying.dao;

import com.anying.entity.Highlander;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface QueryDao {
	public int getTotal(@Param("search") String search, @Param("curType") String curType, @Param("isOpen") String isOpen);
		
	public List<Highlander> getList(@Param("search") String search, @Param("curType") String curType, @Param("startPage") int startPage, @Param("isOpen") String isOpen);
     
	public Highlander getDetail(String id);
}
