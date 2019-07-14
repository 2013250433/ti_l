package servlet;

import java.io.IOException;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LifeCycleServlet
 */
@WebServlet("/life.do")
public class LifeCycleServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public LifeCycleServlet() {
		System.out.println("생성자");
	}

	public void init(ServletConfig config) throws ServletException {
		System.out.println("init");
	}


	public void destroy() {
		System.out.println("destroy");
	}

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("service");
		System.out.println(request.getMethod());
		//get이든 post이든 공통으로 수행해야할 로직 작성
		String method = request.getMethod();
		if(method.equals("GET")) {
			doGet(request, response);
		} else {
			doPost(request, response);
		}
		
		//요청을 구분해서 요청방식이 get이면 doGet()호출
		//post이면 doPost() 호출
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		System.out.println("doGet");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//doGet(request, response);
		System.out.println("doPost");
	}

}
