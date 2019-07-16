<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<script>
	$(document).ready(function(){
		$("#myP").html("서브1 페이지입니다. jqeury! <%=name %>");
	});
</script>
</head>
<body>
	<p id="myP">서브1 페이지 입니다.<%=name %></p>
	<!-- 합쳐진다 -->
</body>
</html>