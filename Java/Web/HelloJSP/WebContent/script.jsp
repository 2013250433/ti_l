<%-- This is jsp comment (not shown in browser) --%>
<!-- THis is html comment (shown in browser) -->

<%-- ���þ�: �� �������� ���� ������. Tomcat�� jsp�� �������� ����. ������ html�� ���� --%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>

<%@ page import="java.util.Random" %>
<%!
	//�� ���� ���𹮿����̸� ���� �������� �Ľ̵� �� �� ������ �ʵ��(�������)�̴�.
	String sayHello = "�ȳ��ϼ���?";

	Random ran = new Random();
	
	public int sum(int a, int b){
		return a+b;
	}
	
	
%>
<%
	//�� ���� ��ũ��Ʈ�� �����̸� service()�޼����� ����(�ٵ�)�����̴�.
	request.setCharacterEncoding("utf-8");
	String msg = request.getParameter("msg");
	
	response.setContentType("text/html ; charset=utf-8");
	response.getWriter().println("�޽���:"+msg);
	
	//application, pageContext, session�� ��� ����.
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
	��ũ��Ʈ��� ���͵�
	<%out.println(sayHello);%>
	<%= sayHello %>
	�ȳ��ϼ���!
	<%= sum(10,20) %>
	
</body>
</html>