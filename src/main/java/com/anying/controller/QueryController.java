package com.anying.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.anying.entity.Highlander;
import com.anying.service.QueryService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class QueryController {
	private final Log logger = LogFactory.getLog(getClass());
	@Resource
	private QueryService queryServiceImpl;

	@RequestMapping("/total.do")
	public void getTotal(HttpServletRequest req, HttpServletResponse res) {
		String curType = req.getParameter("curType");
		String search =req.getParameter("searchVal");
		String isOpen =req.getParameter("isOpen");
		int num  = queryServiceImpl.getTotal(search,curType,isOpen);
		try {
			res.getWriter().print(num);
		} catch (IOException e) {
			logger.error(e.getMessage());
		}
	}

	@RequestMapping("/list.do")
	public void getList(HttpServletRequest req, HttpServletResponse res) {
		String search = req.getParameter("searchVal");
		String curType = req.getParameter("curType");	
		String isOpen = req.getParameter("isOpen");
		int startPage = Integer.parseInt(req.getParameter("startPage")) * 8;
		List<Highlander> list = new ArrayList<Highlander>();
		list = queryServiceImpl.getList(search,curType, startPage,isOpen);
		try {
			if (!list.isEmpty()) {
				req.setAttribute("curIndex", startPage);
				req.setAttribute("Highlanders", list);
				System.out.println(list);
				req.getRequestDispatcher("page/list.jsp").forward(req, res);
			} 
		} catch (ServletException e) {
			logger.error(e.getMessage());
		} catch (IOException e) {
			logger.error(e.getMessage());
		}

	}

	@RequestMapping("/detail.do")
	public void getDetail(HttpServletRequest req, HttpServletResponse res) {
		String id = req.getParameter("id");
		String type = req.getParameter("type");
		Highlander hlr = queryServiceImpl.getDetail(id);
		if (hlr != null) {
			req.setAttribute("hlr", hlr);

			logger.info(hlr.getDetails());
			try {
				if (hlr.getCurType().indexOf("fc") >= 0){
					req.getRequestDispatcher("page/function.jsp").forward(req,
							res);
				}else{
					if("0".equals(type))
					req.getRequestDispatcher("page/detail.jsp").forward(req,
							res);
					else
						res.getWriter().print(hlr.getContent());	
					
				}
					
			} catch (ServletException e) {
				logger.error(e.getMessage());
			} catch (IOException e) {
				logger.error(e.getMessage());
			}
		} else {
			logger.error("************************Get content failed*********************");
		}

	}
}
