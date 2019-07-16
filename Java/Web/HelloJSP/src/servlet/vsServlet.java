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
		response.setContentType("text/html; charset=utf-8"); //decoding �� ���� utf-8��
		PrintWriter out = response.getWriter();
		out.println("<!DOCTYPE html>");
		out.println("<html>");
		out.println("<head>");
		out.println("</head>");
		out.println("<body>");
		out.println("����� 'servlet'<br>"); //�ֵ���ǥ ��� ��������ǥ
		out.println("<h1>"+msg+"</h1>");
		out.println("</body>");		
		out.println("</html>"); //�±׸� ���ڿ��� �ؼ� ������.
		// �������� html ������ �ۼ�
	}

}
