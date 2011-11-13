<%--
  Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at
  
  http://www.apache.org/licenses/LICENSE-2.0
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
--%>
<%@ page 
  session="true"
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
   
  import="org.apache.nutch.metasearch.yahoo.*"	
  import="org.apache.nutch.metasearch.google.*"
  import="org.apache.nutch.metasearch.msn.*"
  import="java.io.*"
  import="java.util.*"
  import="com.google.soap.search.*"
  import="org.jvnet.argos.*"
  import="org.jvnet.argos.msn.*"
  import="com.yahoo.search.*"
  import="java.math.*"  
  import="org.apache.nutch.plugin.*"
  import="org.apache.nutch.searcher.*"
  import="org.apache.nutch.util.NutchConfiguration"
  import="java.net.*"  
  import="org.apache.lucene.search.BooleanQuery"
  import="org.apache.nutch.html.Entities"
  import="org.apache.nutch.metadata.Nutch"
  import="org.apache.hadoop.conf.*"
  


%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>MetaSearch: </title>
<jsp:include page="/include/style.html"/>
<!--base href=""-->
<link href="css/style.css" rel="stylesheet" type="text/css">
	<script language="javascript" type="text/javascript">
		function setOption(form){
			//alert("inside function");
			option = document.meta.choice.value;
			//alert("abc= " + option);
			if(option == "yahoo"){
			//	alert("FROM YAHOO: ");
				//form.abc[1].ckecked = true;
				document.getElementById("yahoo").checked = true;
			}
			else if(option == "msn"){
				document.getElementById("msn").checked = true;
			}
			else
				document.getElementById("google").checked = true;
		}
	</script>
<%
/// This is vishal's code 
Configuration nutchConf = NutchConfiguration.get(application);
session.setAttribute("configuration",nutchConf);
NutchBean bean = NutchBean.get(application, nutchConf);
request.setCharacterEncoding("utf-8");
bean.LOG.info("query request from " + request.getRemoteAddr());
String queryString = request.getParameter("TextArea");
 String queryLang = request.getParameter("lang");
 if(queryLang == null){
        queryLang = (String)session.getAttribute("language");
 }
String session_queryLang  = request.getParameter("sessionlang");//(String)session.getAttribute("language");
ResourceBundle res=ResourceBundle.getBundle("MyResource",new Locale(session_queryLang,"IN"));  
Query query1 = Query.parse(queryString, "en","mr", nutchConf);
System.out.println("Query in MetaSearch" + query1.toString());
 //if(queryLang == null){
//	queryLang = (String)session.getAttribute("language");
 //}
 
  
/* Vector<String> tQuery = bean.getTranslatedQueries(query1);  

for(int i=0;i<tQuery.size();i++){
System.out.println("from MetaResult.jsp " + tQuery.get(i));
}*/

%>


<%
  request.setCharacterEncoding("utf-8");
  out.flush();
  String lang = session_queryLang;
  session.setAttribute("language",lang);
%>
</head>

<body onLoad="dynAnimation()">
<br>
<%
	String indiaSearch = res.getString("india") + res.getString("Search");
%>
<%
		String choice = request.getParameter("abc");
		//choice = "msn";
		String output = null;
		String startString=request.getParameter("start");
		String hitString = request.getParameter("hitsPerPage");
		String query = request.getParameter("TextArea");	
	//	out.print(query); //For Check To be Removed
		int start = 0;
		if(startString != null){
			start = Integer.parseInt(request.getParameter("start"));
		}
		bean.LOG.info("HIT String from External Search Page: "+ hitString);
		//if(hitString == null){
		//hitString = (String) session.getAttribute("hitsPerPage");
		//}
		int hitsPerPage=10;
		if(hitString != null){
			hitsPerPage = Integer.parseInt(hitString);
		}
		session.setAttribute("hitsPerPage",""+hitsPerPage);
		System.out.println("HITSPERPAGE======= "+hitsPerPage); //For Log in catalina.out
%>	
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
<table width="100%">
 <tr>
 <td align="left">
	<a href="locale.jsp?<%=lang%>"><img src="images/logo.jpg" align="left" width="144" 
	   height="25" border="0" title="<%=indiaSearch%>" alt="India Search Logo">
	</a>
 </td>
 </tr>
 <tr>
 <td align="left" style="padding-left:5px">
	<form action="metaresult.jsp" method="get" title="<%=res.getString("Search")%>" name="meta">
	<input type="hidden" name="sessionlang" value="<%=session_queryLang%>">
	<input type="text" name="TextArea" id="TextArea" value="<%=query%>" size="40%" style="height: 22px; font-size: 11pt;">
	<input type="submit" value="<%=res.getString("Search")%>" style="width:80px"><br>
	<input align="bottom" title="Search from Yahoo" name="abc" type="radio" id="yahoo" value="yahoo" onClick=0>
		<span title="Yahoo"></span>yahoo
	<input align="bottom" title="Search from MSN" name="abc" type="radio" id="msn" value="msn" onClick=0>
		<span title="MSN"></span>msn
	<input align="bottom" title="Search from Google" name="abc" type="radio" id="google" value="google" onClick=0>
		<span title="Google"></span>google
	<input type="hidden" name="choice" value="<%=choice%>">
	<input type="hidden" name="hitsPerPage" value='<%=hitsPerPage%>'>
	<script language="javascript" type="text/javascript"> 
		setOption(this.form) 
	</script>    
	<input type="hidden" name="TextArea" value="<%=query%>">
	</form>
 </td>
 </tr>
</table>
<br>
<!--<hr>-->
 <table width="100%" border="0">
	<tr>
        	<td>


                            <script LANGUAGE="JavaScript" type="text/javascript">hindi=<%="\""+res.getString("tip_hindi")+"\""%></script>
                            <script LANGUAGE="JavaScript" type="text/javascript">english=<%="\""+res.getString("tip_english")+"\""%></script>

                            <script LANGUAGE="JavaScript" type="text/javascript"> aH=<%="\""+res.getString("Hindi")+"\""%></script>
                            <script LANGUAGE="JavaScript" type="text/javascript"> aE=<%="\""+res.getString("English")+"\""%></script>
            	</td>
	</tr>
        <tr>
                <td width="35%">
                   <%if(!lang.equals("hi")&&!lang.equals("en")){%>
                    <script LANGUAGE="JavaScript" type="text/javascript">currentLang=<%="\""+res.getString("newtip")+"\""%></script>
                    <input type="hidden" name="trial10" value=<%=res.getString("newlang")%> >
                    <script LANGUAGE="JavaScript" type="text/javascript"> aP=document.form1.trial10.value</script>
                   <a href="metaresult.jsp?TextArea=<%=query%>&amp;lang=<%=lang%>&amp;hitsPerPage=<%=hitsPerPage%>&amp;tabv=others&amp;abc=<%=choice%>" id="otherTab" class="tab"  onmouseover="ddrivetip(currentLang)" onMouseout="hideddrivetip()" ><%=res.getString("newlang")%></a>
                    <% } %>
                </td>
 <%String tabv = request.getParameter("tabv");
 if(tabv == null){
        if(lang.equals("en"))
                tabv = "english";
        else if(lang.equals("hi"))
                tabv = "hindi";
        else
                tabv = "others";
 }
 if(tabv.equals("hindi")){%>
        <script lang="JavaScript" type="text/javascript"> document.getElementById("hindiTab").style.backgroundColor = 'white'; </script>
<%}if(tabv.equals("english")){%>
        <script lang="JavaScript" type="text/javascript"> document.getElementById("englishTab").style.backgroundColor = 'white'; </script>
<%}if(tabv.equals("others")){%>
        <script lang="JavaScript" type="text/javascript"> document.getElementById("otherTab").style.backgroundColor = 'white'; </script>
<%}%>

 <tr>
	<td width="100%">
                <div  id="panel" style="border-style:solid; border-width:1px; border-color:black;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px ">
<%
		if(!choice.equalsIgnoreCase("site")){
		 	if(choice.equalsIgnoreCase("yahoo")){
				YahooSearch yms = new YahooSearch();
				output = yms.Ysearch(query,start,hitsPerPage);
			}
			else if(choice.equalsIgnoreCase("msn")){
				MsnSearch mms = new MsnSearch();
				output = mms.SearchMSN1(query,start,hitsPerPage);
			}
			else{
	    			GoogleMS gms=new GoogleMS();
				output = gms.Gsearch(query,start,hitsPerPage);
			}

			if(output.equals(null))
				output = "<b>No Result Found";

			out.print(output);
		}

%>

		</div>
	</td>
 </tr>
 </table>

<table width="100%">
<tr>
<td width="40%" align="right">
<%if(start>=10){%>
<form action="metaresult.jsp" title="<%=res.getString("previous")%>">
	<input type="hidden" name="start" value="<%=start-10%>">
	<input type="hidden" name="abc" value="www">
	<input type="hidden" name="hitsPerPage" value="<%=hitsPerPage%>">
	<input type="hidden" name="sessionlang" value="<%=session_queryLang%>">
	<input type="hidden" name="TextArea" value="<%=query%>">
	<input type="hidden" name="choice" value="<%=choice%>">
	<input type="submit" value="<%=res.getString("previous")%>" style="width:80px">
</form>
<%}else{%>
<input type="submit" value="<%=res.getString("previous")%>" style="width:80px"disabled>
<%}%> </td>
<td width="20%" align="center"></td>
<td width="40%" align="left">
<form action="metaresult.jsp" title="<%=res.getString("next")%>">
	<input type="hidden" name="start" value="<%=start+10%>">
	<input type="hidden" name="abc" value="www">
	<input type="hidden" name="sessionlang" value="<%=session_queryLang%>">
	<input type="hidden" name="hitsPerPage" value="<%=hitsPerPage%>">
	<input type="hidden" name="TextArea" value="<%=query%>">
	<input type="hidden" name="choice" value="<%=choice%>">
	<input type="submit" value="<%=res.getString("next")%>" style="width:80px">
</form> 
</td>
</tr>
</table>
<table width="100%">
	<tr>
	 <td> <!--<hr>--> </td>
	</tr>
 <tr>
	<td align="center" colspan="2">
		<%@ include file="footer.html" %>
	</td>
 </tr>
</table>
</body>     
</html>
