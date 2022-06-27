package co.edu.member;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;

@WebServlet("/member")
public class MemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public MemberServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 응답정보에 한글 인식하게
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset = utf-8");

		String cmd = request.getParameter("cmd");
		Gson gson = new GsonBuilder().create(); // json 데이터 생성.
		memberDAO dao = new memberDAO();

		if (cmd.equals("list")) {
			// 전체 리스트 => JSON화면 보여주기
			List<MemberVO> list = dao.memberList();
			response.getWriter().print(gson.toJson(list));
		} else if (cmd.equals("insert")) {
			String name = request.getParameter("name");
			String addr = request.getParameter("addr");
			MemberVO vo = new MemberVO();
			vo.setMemName(name);
			vo.setMemAddr(addr);
			dao.insertMember(vo);

			response.getWriter().print(gson.toJson(vo));

		} else if (cmd.equals("update")) {
			// 전화번호
			String num = request.getParameter("number");
			String phone = request.getParameter("phn");

			MemberVO vo = new MemberVO();
			vo.setMemNo(Integer.parseInt(num));
			vo.setMemPhone(phone);

			if (dao.updateMember(vo)) {
				// {"retCode": "Success"}
				response.getWriter().print("{\"retCode\": \"Success\"}");
			} else {
				// {"retCode": "Fail"}
				response.getWriter().print("{\"retCode\": \"Fail\"}");
			}

		} else if (cmd.equals("delete")) {
			String delNum = request.getParameter("num");

			if (dao.deleteMember(Integer.parseInt(delNum))) {
				response.getWriter().print("{\"retCode\": \"Success\"}");
			} else {
				// {"retCode": "Fail"}
				response.getWriter().print("{\"retCode\": \"Fail\"}");
			}
		}
	}

	// get방식 요청: 조회
	// post방식 요청: 입력, 수정, 삭제

	// 서블릭 처리
	// 1.form (서블릿 => 화면.jsp)
	// 2. ajax (Single Page Application)

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// post방식의 요청이 되면 실행될 메소드
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset = utf-8");
		String cmd = request.getParameter("cmd");

		String memName = request.getParameter("name");
		String memAddr = request.getParameter("address");
		String memphone = request.getParameter("phone");
		String memBir = request.getParameter("birth");
		String memImg = request.getParameter("image");

		MemberVO vo = new MemberVO();
		vo.setMemName(memName);
		vo.setMemAddr(memAddr);
		vo.setMemPhone(memphone);
		vo.setMemBirth(memBir);
		vo.setMemImage(memImg);

		memberDAO dao = new memberDAO();

		Gson gson = new GsonBuilder().create();

		PrintWriter out = response.getWriter();

		// 입력
		if (cmd.equals("add")) {
			dao.insertMember(vo);
			out.print(gson.toJson(vo));

			// 수정
		} else if (cmd.equals("modify")) {
			String memNo = request.getParameter("memNo");
			vo.setMemNo(Integer.parseInt(memNo));
			JsonObject obj = new JsonObject();	//{"name" : "횽길동","age" : "20"}
			
			if (dao.updateMember(vo)) {
//				out.print("{\"retCode\": \"Success\"}");
//				out.print("{\"memNo\" : \""+memNo+"\" , \"memName\" : \""+memName+"\", \"memPhone\" : \""+memphone+"\", \"memAddr\" :\""+memAddr+"\", \"memBirth\" : \""+memBir+"\" }");
				// {"memNo" : "mNo" , "memName" : "memName", "memPhone" : "memPhone", "memAddr" :"memAddr", "memBirth" : "memBirth" }
			
			obj.addProperty("memNo", memNo);	//{"memNo": 20}
			obj.addProperty("memName", memName);	//{"memNo" : 20, "memName" : "홍길동"}
			obj.addProperty("memphone", memphone);
			obj.addProperty("memAddr", memAddr);
			obj.addProperty("memBir", memBir);
			obj.addProperty("retCode", "Success");
			
			
			} else {
				out.print("{\"retCode\": \"Fail\"}");
			}
			System.out.println(gson.toJson(obj));
			out.print(gson.toJson(obj));

			// 삭제
		} else if (cmd.equals("remove")) {
			String delNo = request.getParameter("deleteno");
			if (dao.deleteMember(Integer.parseInt(delNo))) {
				out.print("{\"retCode\": \"Success\"}");
			} else {
				out.print("{\"retCode\": \"Fail\"}");
			}
		}
	}
}