package com.anying.controller;

import com.anying.entity.PersonBean;
import com.anying.service.LoginService;
import com.anying.util.HttpSessionUtil;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;


@Controller
public class LoginController {
	private final Log logger = LogFactory.getLog(getClass());

	@Resource
	LoginService loginServiceImpl;

	@RequestMapping("/login.do")
	public void login(HttpServletRequest req, HttpServletResponse res) {
		String userName = req.getParameter("username");
		PersonBean p = loginServiceImpl.login(userName);
		try {
			if (null != p) {
				HttpSessionUtil.saveDate(req, "person", p);
				req.getRequestDispatcher("page/home.jsp").forward(req, res);
				req.setAttribute("msg", "");
				logger.info("login success....");
			} else {
				req.setAttribute("msg", " User name error...");
				req.getRequestDispatcher("login.jsp").forward(req, res);
				logger.info("login failed....");
			}
		} catch (ServletException e) {

			e.printStackTrace();
		} catch (IOException e) {

			e.printStackTrace();
		}

	}

	@RequestMapping("/exit.do")
	public void exit(HttpServletRequest req, HttpServletResponse res) {

		HttpSession session = req.getSession(false);// 防止创建Session
		if (session == null) {
			return;
		}
		session.removeAttribute("person");

	}
}
