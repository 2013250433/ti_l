<%-- This is jsp comment (not shown in browser) --%>
<!-- THis is html comment (shown in browser) -->

<%-- 지시어: 이 페이지에 대한 설정값. Tomcat이 jsp를 서블릿으로 변경. 서블릿이 html로 변경 --%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>

<%@ page import="java.util.Random" %>
<%!
	//이 곳은 선언문영역이며 실제 서블릿으로 파싱될 때 그 서블릿의 필등영역(멤버영역)이다.
	String sayHello = "안녕하세요?";

	Random ran = new Random();
	
	public int sum(int a, int b){
		return a+b;
	}
	
	
%>
<%
	//이 곳은 스크립트릿 영역이며 service()메서드의 지역(바디)영역이다.
	request.setCharacterEncoding("utf-8");
	String msg = request.getParameter("msg");
	
	response.setContentType("text/html ; charset=utf-8");
	response.getWriter().println("메시지:"+msg);
	
	//application, pageContext, session도 사용 가능.
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
	스크립트요소 스터디
	<%out.println(sayHello);%>
	<%= sayHello %>
	안녕하세요!
	<%= sum(10,20) %>
	
</body>
</html>