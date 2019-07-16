<%@page import="java.util.Calendar"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%--	<%@ page import="java.util.Calendar" %>  --%>
<%@ page session="true" %>
<%@ page buffer="8kb" %>
<%@ page isThreadSafe="true" %>
<%@ page info="This is page is for practicing definition script" %>
<%@ page errorPage="error.jsp" %>
<%
	Calendar c = Calendar.getInstance();
	//int number = 100/0; just 500?
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
	practicing jsp
</body>
</html>