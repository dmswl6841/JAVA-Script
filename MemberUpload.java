package co.edu.member;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

@WebServlet({ "/MemberUpload", "/fileUpload" })
public class MemberUpload extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public MemberUpload() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String mn = request.getParameter("memberName");
		System.out.println(mn);
		String file = request.getServletContext().getRealPath("images");
		int fileSize = 5*1023*1024; //5메가
		
		MultipartRequest mr = new MultipartRequest(request, file, fileSize, "utf-8", new DefaultFileRenamePolicy());
		
//		new MultipartRequest(request //요청정보
//				,file	//파일 이름
//				,fileSize	//파일 사이즈
//				,"utf-8"	//인코딩 타입
//				, new DefaultFileRenamePolicy()	//리네임 정책
//				);
		
		mn = mr.getParameter("memberName");
		
		String ph = mr.getParameter("phone");
		String ad = mr.getParameter("addr");
		System.out.println(ad);
		String bi= mr.getParameter("birth");
		String im = mr.getParameter("image");
		im = mr.getFilesystemName("image");	// 바뀐 이름으로 저장
				
		MemberVO vo = new MemberVO();
		vo.setMemName(mn);
		vo.setMemPhone(ph);
		vo.setMemAddr(ad);
		vo.setMemBirth(bi);
		vo.setMemImage(im);
		
		memberDAO dao = new memberDAO();
		Gson gson = new GsonBuilder().create();
		PrintWriter out = response.getWriter();
		
		dao.insertMember(vo);
		
		System.out.println(mn);
	}
}
