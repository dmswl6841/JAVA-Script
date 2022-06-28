package co.edu;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EmpDAO extends DAO {

	// 일정정보
	public List<CalenderVO> getSchedule() {
		getConnect();
		String sql = "select * from full_calender";
		List<CalenderVO> list = new ArrayList<>();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				CalenderVO cal = new CalenderVO();
				cal.setTitle(rs.getString("title"));
				cal.setStartDate(rs.getString("start_date"));
				cal.setEndDate(rs.getString("end_date"));

				list.add(cal);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disConnect();
		}
		return list;
	}

	// 부서정보, 인원정보
	public Map<String, Integer> getDeptCnt() {
		Map<String, Integer> map = new HashMap<String, Integer>();
		getConnect();
		String sql = "select department_name, count(1)\r\n" + "from employees e, departments d\r\n"
				+ "where e.department_id = d.department_id\r\n" + "group by department_name";
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();

			while (rs.next()) {
				map.put(rs.getString(1), rs.getInt(2));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disConnect();
		}
		return map;
	}

	// class => 복합적인 데이터를 하나의 변수로
	// 사원번호, 이름, 이메일, 직무 => class 작성 : 필드로 선언
	public void insertEmp(Employee emp) {
		getConnect();
		String sql = "insert into employees (employee_id, last_name, email, job_id,hire_date)"
				+ "values(employees_seq.nextval,?,?,?,?)";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, emp.getLastName());
			psmt.setString(2, emp.getEmail());
			psmt.setString(3, emp.getJobID());
			psmt.setString(4, emp.getHireDate());

			int r = psmt.executeUpdate();

			System.out.println(r + "건 입력");

		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public List<String> getNames() {
		getConnect();
		String sql = "select first_name from employees";
		List<String> list = new ArrayList<>();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				list.add(rs.getString("first_name"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disConnect();
		}
		return list;
	}

	public List<Employee> empList() {
		getConnect();
		String sql = "select * from employees";
		List<Employee> list = new ArrayList<>();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				Employee emp = new Employee();
				emp.setEmail(rs.getString("email"));
				emp.setEmpID(rs.getInt("employee_id"));
				emp.setHireDate(rs.getString("hire_date"));
				emp.setJobID(rs.getString("job_id"));
				emp.setLastName(rs.getString("last_name"));
				list.add(emp);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disConnect();
		}
		return list;
	}

}
