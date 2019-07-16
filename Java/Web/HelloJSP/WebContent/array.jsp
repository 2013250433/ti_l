<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
	String[] city_array = {"seoul", "ulsan", "daegu", "incheon", "gwangju", "woolsan"};    
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
	<ul>
	<%
		for(int i=0; i < city_array.length; i++){
			if(i%2 == 0){
			
	%>
		<li>
		<%= city_array[i] %>
		</li>
	<%		
			}
		}
	 %>
	 </ul>
	 
	 <table border="/">
	 	<%
	 		for(int i=2; i<=9; i++){
	 	%>
	 		<tr>
	 			<%
	 				for(int k=1;k<=9;k++){
	 			%>	
	 				<td>
	 					<%= i %>&nbsp;x&nbsp;<%= k %>&nbsp;=&nbsp;<%= i * k %> 
	 				</td>
	 			<%
	 				}
	 			%>
	 		</tr>
	 	<%
	 		}
	 	%>
	 </table>
	 
</body>
</html>