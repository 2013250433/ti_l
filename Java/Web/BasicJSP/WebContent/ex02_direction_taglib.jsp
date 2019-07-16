<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>

<%@ taglib prefix="core" uri="http://java.sun.com/jsp/jstl/core" %>
<%--pache-tomcat-8.5.43\lib 에  apache-tomcat-8.5.43\webapps\examples\WEB-INF\lib --%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
	<ul>
	<core:forEach var="index" begin="0" end="10">
		<li>${index }번째 행</li>
	</core:forEach>
	</ul>
	<hr>
	<ul>
	<%
		for(int i=0; i<=10; i++){
	%>
		<li><%=i+10 %>번째 행</li>
	<%			
		}
	%>
	</ul>
</body>
</html>