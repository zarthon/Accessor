<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@page session="true"%>
<%@page import="java.io.*"
  	import="java.util.*"
  	import="java.net.*"
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<%
		String lang = request.getParameter("sessionlang");	// Session Language
 		ResourceBundle res = ResourceBundle.getBundle("MyResource",new Locale(lang,"IN"));
        	request.setCharacterEncoding("UTF-8");
		System.out.println("SESSION LANG: "+lang);
		String queryLang = request.getParameter("lang");	// Query Language
 		if(queryLang == null){
        		queryLang = lang;
 		} 		
		String fig1 = "images/home_page/home_en.jpeg";
		String fig2 = "images/home_page/home_" + lang + ".jpeg";
		String text1 = res.getString("iscreen_t1");
		String text2 = res.getString("iscreen_t2");		
	%>
        <title><%=res.getString("Help")%></title>
    </head>
    <body onload="pop();">
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
	<table width="100%" cellpadding="10%" cellspacing="10px">
		<tr align="center">
		<td>
			<img src="img/logo.png" align="middle"/>
		</td>
		</tr>
	</table>
	<table align="center" width="100%">
		<tr>
                <td align="center">
                	<link href="css/help.css" rel="stylesheet" type="text/css">
			<div class="bar3855285">
				<table cellpadding="0" cellspacing="0" border="0" class="tabbar">
					<tr>
					 <td valign="middle" id="b38552851" class="button" onmouseover = "mOv3855285(1); " 
                                                                                                onmouseout = "mOut3855285(1); ">
                                                        <center>
                                                        <a href="inputscreen_help.jsp?sessionlang=<%=lang%>" class="a3855285">
                                                                <span class="t3855285"><%=res.getString("Home Page")%> <%=res.getString("Help")%></span>
                                                        </a>
                                                </td>
                                                <td valign="middle" id="b38552852" class="button" onmouseover = "mOv3855285(2); " 
                                                                                                onmouseout = "mOut3855285(2); ">
                                                        <center>
                                                        <a href="inputquery_help.jsp?sessionlang=<%=lang%>" class="a3855285">
                                                                <span class="t3855285"><%=res.getString("query")%> <%=res.getString("Help")%></span>
                                                        </a>
                                                </td>
                                                <td valign="middle" id="b38552853" class="button" onmouseover = "mOv3855285(3); " 
                                                                                                onmouseout = "mOut3855285(3); ">
                                                        <center>
                                                        <a href="advancesearch_help.jsp?sessionlang=<%=lang%>" class="a3855285">
                                                                <span class="t3855285"><%=res.getString("Advance Search")%> <%=res.getString("Help")%></span>
                                                        </a>
                                                </td>
                                                <td valign="middle" id="b38552854" class="button" onmouseover = "mOv3855285(4); " 
                                                                                                onmouseout = "mOut3855285(4); ">
                                                        <center>
                                                        <a href="keyboard_help.jsp?sessionlang=<%=lang%>" class="a3855285">
                                                                <span class="t3855285"><%=res.getString("roman")%> <%=res.getString("Help")%></span>
                                                        </a>
                                                </td>
                                                <td valign="middle" id="b38552855" class="button" onmouseover = "mOv3855285(5); " 
                                                                                                onmouseout = "mOut3855285(5); ">
                                                        <center>
                                                        <a href="output_help.jsp?sessionlang=<%=lang%>" class="a3855285">
                                                                <span class="t3855285"><%=res.getString("result")%> <%=res.getString("page")%> <%=res.getString("Help")%></span>
                                                        </a>
                                                </td>
					</td>
					</tr>
				</table>
			</div>
			<script type="text/javascript" src="css/help_menu.js">	</script>
		</td>
		</tr>
	</table>
	<table cellpadding="30%" cellspacing="30%" align="center" width="80%">
		<tr>
		<td align="justify">
		<%=text1%>
		</td>
		</tr>
		<tr>
		<td align="center">
			<img src="<%=fig1%>" align="center">
		</td>
		</tr>
		<tr>
		<td align="center">	
			<%=text2%>
			<br><br>
			<img src="<%=fig2%>" align="center">
		</td>
		</tr>
	</table>		
	<table width="100%" cellspacing="0" cellpadding="0">
			<tr id="seperator">
                                <td colspan="3" height="16" align="center"><hr width="70%"></td>
                        </tr>
                        <tr>
                                <td colspan="3" align="center">
                                        <%@ include file="footer.html" %>
                                </td>
                        </tr>
	</table>
		<%@ include file="bottom.html" %>
	</body>
</html>
