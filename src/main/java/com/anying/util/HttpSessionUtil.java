package com.anying.util;

import com.anying.entity.PersonBean;

import javax.servlet.http.HttpServletRequest;

public class HttpSessionUtil {
	
	public static void saveDate(HttpServletRequest req,String key,String value){
		req.getSession().setAttribute(key, value);		
	}
	
	public static void saveDate(HttpServletRequest req, String key, PersonBean pb){
		req.getSession().setAttribute(key, pb);		
	}
	
	public static PersonBean getDate(HttpServletRequest req,String key){
		return (PersonBean)req.getSession().getAttribute(key);		
	}
}
