<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>

<%
	String name = request.getParameter("name");
	String msg = "Hi, " + name;
	request.setAttribute("msg",msg);
	
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
	<jsp:forward page="ex04_actiontag_forward2.jsp"></jsp:forward>
</body>
</html>