package com.anying.controller;
import com.anying.entity.Highlander;
import com.anying.service.AddService;
import com.anying.service.QueryService;
import com.anying.util.DateFormatUtils;
import com.anying.util.UUIDUtils;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;


@Controller
public class AddController {
	private Logger logger = Logger.getLogger(AddController.class);
	@Resource
	private AddService addServiceImpl;
	private QueryService queryServiceImpl;

	@RequestMapping("add.do")
	public void addData(HttpServletRequest req, HttpServletResponse res) {
		Highlander hlr = new Highlander();
		String title = req.getParameter("title");
		String curType = req.getParameter("curType");
		String submitType=req.getParameter("submitType");
		String curId=req.getParameter("curId");
		String d=req.getParameter("details");
        if("add".equals(submitType)){
        	try {
    			byte[] details = req.getParameter("details").getBytes("utf-8");
    			hlr.setId(UUIDUtils.generate());
    			hlr.setTitle(title);
    			hlr.setDetails(details);
    			hlr.setCurType(curType);
    			hlr.setCreate_time(new DateFormatUtils().DateToString(new Date()
    					.getTime()));
    			hlr.setModify_time(new DateFormatUtils().DateToString(new Date()
    					.getTime()));
    			hlr.setIsOpen("0");
    			int m = addServiceImpl.addData(hlr);
    			if (m > 0) {				
    					res.sendRedirect("page/content.jsp?curType=" + curType.substring(0,2));
    			} else {
    				logger.error("系统异常，请您稍后重试");
    				res.getWriter().write("系统异常，请您稍后重试");
    			}
    		} catch (Exception e) {
    			logger.info(e.getMessage());
    		}
		}else{
			try {
				byte[] details = req.getParameter("details").getBytes("utf-8");
				hlr.setId(curId);
				hlr.setTitle(title);
				hlr.setDetails(details);
				hlr.setCurType(curType);
				hlr.setModify_time(new DateFormatUtils().DateToString(new Date()
						.getTime()));
				int m = addServiceImpl.updateData(hlr);
				if (m > 0) {				
						res.sendRedirect("page/content.jsp?curType=" + curType.substring(0,2));
				} else {
					logger.error("系统异常，请您稍后重试");
					res.getWriter().write("系统异常，请您稍后重试");
				}
			} catch (Exception e) {
				logger.info(e.getMessage());
			}
			
		}
		

	}
}
