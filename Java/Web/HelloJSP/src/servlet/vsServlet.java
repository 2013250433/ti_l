package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/vs.do")
public class vsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		String msg = request.getParameter("msg");
		response.setContentType("text/html; charset=utf-8"); //decoding 할 때도 utf-8로
		PrintWriter out = response.getWriter();
		out.println("<!DOCTYPE html>");
		out.println("<html>");
		out.println("<head>");
		out.println("</head>");
		out.println("<body>");
		out.println("여기는 'servlet'<br>"); //쌍따움표 대신 작은따움표
		out.println("<h1>"+msg+"</h1>");
		out.println("</body>");		
		out.println("</html>"); //태그를 문자열로 해서 불편한.
		// 동적으로 html 문서를 작성
	}

}
