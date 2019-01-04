package com.anying.controller;

import com.anying.util.UUIDUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;

@Controller
public class UpLoadImgController {
	@RequestMapping("Tkuang/uploadImg.do")
    public void uploadImg(@RequestParam("upload")MultipartFile uploadFile,HttpServletRequest req,HttpServletResponse res){
    	//�������·��webapp����·��  
        String pathRoot = req.getSession().getServletContext().getRealPath("");  
        String path="";  
        if(!uploadFile.isEmpty()){  
            //����uuid��Ϊ�ļ�����  
            String uuid = UUIDUtils.generate();
            //����ļ����ͣ������ж��������ͼƬ����ֹ�ϴ���  
            String contentType=uploadFile.getContentType();  
            //����ļ���׺����  
            String imageName=contentType.substring(contentType.indexOf("/")+1);  
            path="/myImg/"+uuid+"."+imageName;  
            try {
            	uploadFile.transferTo(new File(pathRoot+path));
			} catch (IllegalStateException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}  
        }  
        res.setContentType("text/html;charset=UTF-8");
        String callback = req.getParameter("CKEditorFuncNum");
        PrintWriter out;
		try {
			out = res.getWriter();
			out.println("<script type=\"text/javascript\">");
	        out.println("window.parent.CKEDITOR.tools.callFunction(" + callback + ",'"+req.getContextPath()+ path + "',''" + ")");
	        out.println("</script>");
	        out.flush();
	        out.close(); 
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
    }                       
}
