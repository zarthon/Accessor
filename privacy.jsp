<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@page import="java.util.*" %> 
<%@page import="java.text.*"%>
<html>
<head>
	<title>Privacy Statement</title>
<%

       String Language = request.getQueryString();
	if(Language==null){
		Language="en";
	}
	String lang =  Language;
	ResourceBundle res = ResourceBundle.getBundle("MyResource",new Locale(Language,"IN"));
%>

</head>
<body>
<div style="height: 35px; top: 0px; left:0px; position: absolute; width: 100%;  background-image: url('img/gradient.jpg'); background-repeat: repeat-x;text-align:right">
<a href="locale.jsp?<%=lang%>">
<span class="style8">Home </span>
</a>
<span>| </span>
<a href="members.jsp?<%=lang%>">
<span class="style8">About Consortium </span>
 </a>
    <span>| </span>        
<a href="disclaimer.jsp?<%=lang%>">
<span class="style8">Disclaimer </span>
</a>
 <span>| </span>

<a href="privacy.jsp?<%=lang%>">
<span class="style8">Privacy Policy  </span>
</a>

</div>
	<table id="privacy-tbl1" align="center">
	<tr>
		<td><img src="img/logo.png"></td>
	</tr>
	</table>
	<table id="privacy-tbl2" align="center" width="85%">
	<tr>
		<td>	<H1>Privacy Statement</H1>	</td>
	</tr>
	<tr>
		<td>
	When YOU access CLIA services, CLIA servers records information that your browser sends whenever you visit a website. This may include information such as your web request(Links clicked, Query submitted), Internet Protocol address, browser type, browser language, the date and time of your request and cookies that may uniquely identify your browser. But the information collected is not personally identifiable and is used only to provide statistics about usage of sites to improve the quality of services.	
		</td>
	</tr>
	</table>
<br>
<br>		
<table id="privacy-tbl3" align="center" width="85%">
<tr>
	<td align="center" width="75%"> 
		<hr>
		<%@ include file="footer.html" %>
	</td>
</tr>
</table>
		<%@ include file="bottom.html" %>
</body>
</html>
