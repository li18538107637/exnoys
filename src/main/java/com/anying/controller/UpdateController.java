package com.anying.controller;

import java.io.IOException;

import com.anying.service.UpdateService;
import org.apache.log4j.Logger;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class UpdateController {
	private Logger logger=Logger.getLogger(UpdateController.class);
	@Resource
  private UpdateService updateServiceImpl;
  /**
  *删除记录
  */
  @RequestMapping("/delete.do")
  public void deleteDate(HttpServletRequest req, HttpServletResponse res){
	  String id=req.getParameter("id");
	  String curType=req.getParameter("curType");
	  int m=0;
	  if("de".equals(curType)){
		  m=updateServiceImpl.realDeleteData(id);	   
	  }else{
		  m=updateServiceImpl.deleteData(id);	 
	  }
	  
		  try {
			res.getWriter().print(m);
		} catch (IOException e) {
			logger.info(e.getMessage());
		}  
	  }
  }
