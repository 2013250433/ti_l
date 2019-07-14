package servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ParameterServlet
 */
@WebServlet("/parameter.do")
public class ParameterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;


	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String method = request.getMethod();
		if(method.equals("GET")) {
			doGet(request,response);
		}else {
			doPost(request,response);
		}
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String name = request.getParameter("name");
		String[] hobbyArray = request.getParameterValues("hobby");
		System.out.println(name);
		for(String hobby: hobbyArray) {
			System.out.println(hobby);
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//Post방식으로 한글데이터를 보낼경우 request Encoding방식을 지정해줘야한다.
		request.setCharacterEncoding("euc-kr"); //utf-8 -> euc-kr
		
		String name = request.getParameter("name");
		String[] hobbyArray = request.getParameterValues("hobby");
		System.out.println(name);
		for(String hobby: hobbyArray) {
			System.out.println("취미: "+hobby);
		}
	}

}
