package co.edu;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@WebServlet("/fullCalenderServlet")
public class fullCalenderServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public fullCalenderServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset = utf-8");
		
		EmpDAO dao = new EmpDAO();
		List<CalenderVO> schedules = dao.getSchedule();

		Gson gson = new GsonBuilder().create();
		response.getWriter().print(gson.toJson(schedules));
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		//입력정보 한글포함
		request.setCharacterEncoding("utf-8");
		//파라미터 정보 cmd=insert, title,start,end는 입력한 값
		String cmd = request.getParameter("cmd");
		String title = request.getParameter("title");
		String start = request.getParameter("start");
		String end= request.getParameter("end");
		
		
		EmpDAO dao = new EmpDAO();
		CalenderVO vo = new CalenderVO();
		
		if(cmd.equals("insert")) {
			
			
			vo.setTitle(title);
			vo.setStartDate(start);
			vo.setEndDate(end);
			
			if(dao.insertSchedule(vo)) {
				response.getWriter().print("{\"retCode\": \"Success\"}");
			} else {
				// {"retCode": "Fail"}
				response.getWriter().print("{\"retCode\": \"Fail\"}");
			}
			
		}else if (cmd.equals("delete")) {
			
			
			
			if(dao.deleteSchedule(title)) {
				response.getWriter().print("{\"retCode\": \"Success\"}");
			}else {
				response.getWriter().print("{\"retCode\": \"Fail\"}");
			}
			
		}
		
		
	}

}
