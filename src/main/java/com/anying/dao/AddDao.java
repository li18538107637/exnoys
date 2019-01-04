package com.anying.dao;

import com.anying.entity.Highlander;
import org.springframework.stereotype.Repository;
@Repository
public interface AddDao {
  public int addData(Highlander hlr);
  public int updateData(Highlander hlr);
}