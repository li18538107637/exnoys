package com.anying.dao;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface UpdateDao {
  public int deleteData(@Param("id") String id);
  public int realDeleteData(@Param("id") String id);
  public int collectData(@Param("id") String id, @Param("pid") String pid, @Param("collectFlag") String collectFlag);
}