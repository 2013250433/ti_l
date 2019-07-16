<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
	String name = "jin";
	request.setAttribute("name",name);
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
	메인페이지
	<%@ include file="sub1.jsp" %>
	<hr>
	<jsp:include page="sub2.jsp"></jsp:include>
</body>
</html>