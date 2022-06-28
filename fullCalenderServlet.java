package co.edu;

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

@WebServlet("/fullCalenderServlet")
public class fullCalenderServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public fullCalenderServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		EmpDAO dao = new EmpDAO();
		List<CalenderVO> schedules = dao.getSchedule();

		Gson gson = new GsonBuilder().create();
		response.getWriter().print(gson.toJson(schedules));
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

}
