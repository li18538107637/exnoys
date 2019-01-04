package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class login_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html;charset=utf-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("<!DOCTYPE>\n");
      out.write("<html>\n");
      out.write("<head>\n");
      out.write("<title>正正的大师,永远都怀着一颗学徒的心...</title>\n");
      out.write("<meta http-equiv=\"pragma\" content=\"no-cache\">\n");
      out.write("<meta http-equiv=\"cache-control\" content=\"no-cache\">\n");
      out.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n");
      out.write("<meta http-equiv=\"expires\" content=\"0\">\n");
      out.write("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\">\n");
      out.write("<meta http-equiv=\"keywords\" content=\"keyword1,keyword2,keyword3\">\n");
      out.write("<meta http-equiv=\"description\" content=\"This is my page\">\n");
      out.write("<link rel=\"shortcut icon\" href=\"favicon.ico\" />\n");
      out.write("<link rel=\"stylesheet\" href=\"./css/login.css\">\n");
      out.write("<script src='js/jquery-1.11.3.min.js'></script>\n");
      out.write("<script src='js/jquery.form.js'></script>\n");
      out.write("<script src='js/login.js'></script>\n");
      out.write("</head>\n");
      out.write("<body onkeydown=\"master_login.enterLogin();\" style=\"background:rgb(43,43,43);\">\n");
      out.write("<img src=\"loginImg/audio.png\" class=\"audio_img\"   id=\"audioImg\" title='Open the sound'  hidden=\"hidden\"/>\n");
      out.write("<video width=\"100%\" height=\"100%\" id=\"playVideo\" autoplay=\"autoplay\"  loop=\"loop\" style=\"object-fit:fill;opacity:1;\" ></video>\n");
      out.write("\t<form class=\"login_box\" id=\"login_box\" action=\"login.do\" method=\"post\"  hidden=\"hidden\">\t\t\n");
      out.write("\t\t<input\n");
      out.write("\t\t\ttype=\"text\" class=\"login_input\" id=\"username\" name=\"username\" autocomplete=\"new-password\"  readonly  \n");
      out.write("\t\t\tplaceholder=\"press enter after input\"  /><span class=\"error_msg\">");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.evaluateExpression("${msg}", java.lang.String.class, (PageContext)_jspx_page_context, null));
      out.write("</span>\n");
      out.write("\t</form>\n");
      out.write("\t<div class=\"cr_div\" hidden=\"hidden\">©2018-2019 hlr, Inc. All rights reserved.</div>\n");
      out.write("</body>\n");
      out.write("</html>\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
