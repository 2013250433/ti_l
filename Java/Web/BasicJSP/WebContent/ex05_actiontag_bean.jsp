<%@page import="vo.PersonVo"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
	PersonVo vo = new PersonVo();
	vo.setName("Jin");
	vo.setAge(27);
	vo.setGender("male");
%>

<jsp:useBean id="pvo" class="vo.PersonVo"></jsp:useBean>
<jsp:setProperty property="name" value="Jin" name="pvo"/>
<jsp:setProperty property="age" value="700" name="pvo"/>
<jsp:setProperty property="gender" value="male" name="pvo"/>

<jsp:setProperty property="age" name="pvo"/>

<jsp:setProperty property="name" param="name" name="pvo"/>
<jsp:setProperty property="gender" param="g" name="pvo"/>

<jsp:setProperty property="*" name="pvo" />


<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
	이름:<%= vo.getName() %>
	<hr>
	이름:<jsp:getProperty property="name" name="pvo" /><br>
	나이:<jsp:getProperty property="age" name="pvo" /><br>
	성별:<jsp:getProperty property="gender" name="pvo" />
</body>
</html>