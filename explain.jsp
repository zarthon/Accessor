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

  import="java.io.*"
  import="java.util.*"
  import="org.apache.nutch.searcher.*"
  import="org.apache.hadoop.conf.Configuration"
  import="org.apache.nutch.util.NutchConfiguration"
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html >
<head>
<%
  // To prevent the character encoding declared with 'contentType' page
  // directive from being overriden by JSTL (apache i18n), we freeze it
  // by flushing the output buffer. 
  // see http://java.sun.com/developer/technicalArticles/Intl/MultilingualJSP/
  out.flush();
%>

<%
  Configuration nutchConf = NutchConfiguration.get(application);
  NutchBean bean = NutchBean.get(application, nutchConf);
  // set the character encoding to use when interpreting request values 
  request.setCharacterEncoding("UTF-8");
  bean.LOG.info("explain request from " + request.getRemoteAddr());
  Hit hit = new Hit(Integer.parseInt(request.getParameter("idx")),
                    Integer.parseInt(request.getParameter("id")));
  HitDetails details = bean.getDetails(hit);
  // get the lang from request
  // get the lang from request
  String queryLang = request.getParameter("lang");
  if (queryLang == null) { queryLang = ""; }
  Query query = Query.parse(request.getParameter("query"), queryLang, nutchConf);
  String language =
    ResourceBundle.getBundle("org.nutch.jsp.explain", request.getLocale())
    .getLocale().getLanguage();
  String requestURI = HttpUtils.getRequestURL(request).toString();
  String base = requestURI.substring(0, requestURI.lastIndexOf('/'));
%>
<title>India Search: Explain </title>
<jsp:include page="/include/style.html"/>
<!--<base href="<%= base  + "/" + language %>/">-->
<%
  // To prevent the character encoding declared with 'contentType' page
  // directive from being overriden by JSTL (apache i18n), we freeze it
  // by flushing the output buffer. 
  // see http://java.sun.com/developer/technicalArticles/Intl/MultilingualJSP/
  out.flush();
  String lan = request.getParameter("lang");
  ResourceBundle res = ResourceBundle.getBundle("MyResource",new Locale(lan,"IN"));
%>
<script LANGUAGE="JavaScript" src="keyBoard/tabber.js" type="text/javascript" ></script>

<link href="css/style.css" rel="stylesheet" type="text/css">
</head>

<body>
<br>
<a href="locale.jsp?<%=language%>"><img src="img/logo.png" width="144" height="30" border="0" alt="India Search Logo"></a>
<hr>
<h3>page</h3>
<%      

      
       String Language = request.getQueryString();
      
       String lang = (String)session.getAttribute("language");
        if(request.getQueryString()==null)
        {            
            lang="en";
            res=ResourceBundle.getBundle("MyResource" ,new Locale(lang,"IN"));
            session.setAttribute("language",lang);        
%>
<%      }
        request.setCharacterEncoding("UTF-8");
        session.setAttribute("language",request.getQueryString());
	
%>

<%=bean.getDetails(hit).toHtml()%>

<h3>scoreForQuery
  <%=query%>
</h3>

<%=bean.getExplanation(query, hit)%>
<table width="100%">
<tr>
<td> <hr> </td>
</tr>
<tr>
<td align="center" colspan="2">
<%@ include file="footer.html" %>
</td>
</tr>
</table>
</body>     
</html>
