<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@page import="java.util.*" %> 
<%@page import="java.text.*"%>
<html>
<head>
	<title>Disclaimer</title>
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
	<table id="disclaimer-id1" align="center">
	<tr>
		<td><img src="img/logo.png"></td>
	</tr>
	</table>
		<H1>Disclaimer</H1>
	
	The information ("Information") accessible by you ("USER") using CLIA Search Engine has many sources that are not controlled by CLIA Search Engine. And that by using services of CLIA you accept and agree to be bound by the following terms and conditions.

	<H3> Terms of service </H3>
	CLIA Search Engine IS PROVIDED ON AN "AS IS, AS AVAILABLE" BASIS. WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, THOSE OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, WITH RESPECT TO CLIA Search Engine OR ANY 'INFORMATION'. 
	CLIA Search Engine does not warrant or guarantee 1) the accuracy, adequacy, quality, currentness, validity, completeness, or suitability of any Information for any purpose; 2) that any Information will be free of infection by viruses, worms, Trojan horses or anything else manifesting contaminating or destructive properties; 3) that the Information will not contain material which some individuals may deem objectionable; or 4) that the functions or services performed by CLIA Search Engine will be uninterrupted or error-free;5)We are not responsible if a website changes its URL, content, or anything;6)CLIA does not promote any specific Site or URL. 


	<H3>USER's Duty: </H3>
	USER shall 1) Determine whether the Information complies with USER's needs; 2) Determine whether USER has adequate legal rights to store, reproduce or otherwise make use of Information in the manner contemplated by USER; 3) Comply with any legal obligations, including but not limited to, obligations imposed by copyright, secrecy, defamation, decency, and export laws; and 4) Isolate Information, execute anti-contamination software and otherwise take steps to ensure that Information, if contaminated or infected, will not damage USER's information or system; 5) Determine and validate any information before using it, so that it may not cause any damage to USERs, CLIA urges you to consult with a qualified expert for answers to your personal questions.
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
