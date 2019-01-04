package com.anying.filter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

public class SessionFilter implements Filter {

	@Override
	public void destroy() {
	}// 过滤器销毁，一般是释放资源

	@Override
	public void doFilter(ServletRequest arg0, ServletResponse arg1,
			FilterChain arg2) throws IOException, ServletException {
		HttpServletRequest request = (HttpServletRequest) arg0;
		HttpServletResponse response = (HttpServletResponse) arg1;
		// 判断session是否过期
		HttpServletRequest sr = (HttpServletRequest) request;
		String strURL = sr.getRequestURL().toString();
        HttpSession session=request.getSession(false);
		// 此处是判断url如果是登录页面则不执行过滤
		if (strURL.indexOf("/login.do") == -1) {
			// 获得session判断是否存在
			if (null == request.getSession(false)) {
				// 跳转至登录页面
				//response.sendRedirect("login.jsp");
				/*request.getRequestDispatcher("/login.jsp").forward(request,
						response);	*/	
				PrintWriter out = response.getWriter();  
			    out.println("<html>");  
			    out.println("<script>");  
			    out.println("window.open ('login.jsp','_top')");  
			    out.println("</script>");  
			    out.println("</html>");  
			    return;

			} else {				
				arg2.doFilter(request, response);
			}
		} else {
			arg2.doFilter(request, response);
		}
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {

	}

}
