<%@ page 
  session="false"
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"

  import="java.io.*"
  import="java.util.*"
  import="java.net.*"

  import="org.apache.nutch.html.Entities"
  import="org.apache.nutch.metadata.Nutch"
  import="org.apache.nutch.searcher.*"
  import="org.apache.nutch.plugin.*"
  import="org.apache.nutch.clustering.*"
  import="org.apache.hadoop.conf.*"
  import="org.apache.nutch.util.NutchConfiguration"

  import="org.apache.nutch.summary.generation.*"

%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Summary</title>
</head>
<%! String summ=new String(); %>
<%
	Configuration nutchConf = NutchConfiguration.get(application);
	request.setCharacterEncoding("UTF-8");
	//HttpSession session=request.getSession();
	SummaryExtraction summaryEx = new SummaryExtraction(nutchConf);
	SummaryGeneration summary = new SummaryGeneration(nutchConf);
%>

<body>
<table align="center" width="100%">
	<tr>
		<td align="left" valign="bottom">
		<img src="img/logo.png" alt="" width="144" height="30"><span  style=" font-size:20px; color:#FF9966">Summary</span>
		</td>
	</tr>
	<tr>
		<td align="center">
		<hr>
		</td>
	</tr>	
	<tr>
		<td align="center">
		<b><%=request.getParameter("title")%></b>		
		</td>
	</tr>
</table>
	<%= summary.generateSummary(request.getParameter(request.getParameter("id")), request.getParameter("query"), request.getParameter("title")) %><br>
</body>
</html>
