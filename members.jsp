<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@page import="java.util.*" %> 
<%@page import="java.text.*"%>
<html>
<head>
	<title>Project Members</title>
<%

       String Language = request.getQueryString();
	if(Language==null){
		Language="en";
	}
	String lang = Language;
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
	<table id="member-tbl1" border="0" align="center">
	<tr>
		<td align="center">
			<a href="locale.jsp?<%=Language%>"><img src="img/logo.png" border="0"  
								alt="India Search Logo"/>
			</a>
		</td>
	</tr>
	</table>
	<H2>Brief History</H2>	
	CLIA is a mission mode project being executed by a consortium of academic and research institutions and industry partners, and funded by TDIL, Ministry of Information Technology, Government of India.<br>
	CLIA was started on 29th August, 2006 with the aim of providing a Search Engine where:<br>
1. A user will be able to give a query in one Indian language and<br>
2. S/he will be able to access documents available in<br>
&nbsp;&nbsp;&nbsp;&nbsp;a. the language of the query,<br>
&nbsp;&nbsp;&nbsp;&nbsp;b. Hindi (if the query language is not Hindi), and<br>
&nbsp;&nbsp;&nbsp;&nbsp;c. English<br>
3. Results are presented to the user in the language of the query. The results can also be presented in the language in which the information originally resided. The languages involved will be Bengali, Hindi, Marathi, Punjabi, Tamil and Telugu.
<br><br>
	<H2>Important Mile-Stones</H2>
		1. System was successfully presented at IJCNLP'08 and subsequently at ELITEX'08
		 
	<br><br>
	<table id="member-tbl2">
	<tr>
		<td align="left"><H2>Consortium Members:</H2> 
		</td>
	</tr>
	
	<tr>
		<td width="50%"><strong>IIT Bombay(Consortium Leader)</strong> - Prof. Pushpak Bhattacharyya</td><td width="50%"></td>
	</tr>
	<tr>
		<td width="50%"><strong>IIIT Hyderabad</strong> - Prof. Vasudeva Varma</td><td width="50%"></td> 
	</tr>
	<tr>
		<td width="50%"><strong>IIT Kharagpur</strong> - Prof. Sudeshna Sarkar</td><td width="50%"></td>
	</tr>
	<tr>
		<td width="50%"><strong>Jadavpur University</strong> - Prof. Sivaji Bandyopadhyay</td><td width="50%"></td>
	</tr>
	<tr>
		<td width="50%"><strong>ISI Kolkata</strong> - Prof. Mandar Mitra</td><td width="50%"></td>
	</tr>
	<tr>
		<td width="50%"><strong>CDAC Pune</strong> - Mr. Ajai Kumar</td><td width="50%"></td>
	</tr>
	<tr>
		<td width="50%"><strong>CDAC Noida</strong> - Mr. Karunesh Arora</strong></td><td width="50%"></td>
	</tr>
	<tr>
		<td width="50%"><strong>AUKBC Chennai</strong> - Prof. Shobha L.</strong></td><td width="50%"></td>
	</tr>
	<tr>
		<td width="50%"><strong>AUCEG Chennai</strong> - Prof. Ranjani Parthasarathi</strong></td><td width="50%"></td>
	</tr>
	<tr>
		<td width="50%"><strong>Utkal University</strong> - Prof. Sanghamitra Mohanty</strong></td><td width="50%"></td>
	</tr>
	</table>
<br>
<br>


		

<table align="center" width="85%">
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
