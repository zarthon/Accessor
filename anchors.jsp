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

  import="org.apache.nutch.html.Entities"
  import="org.apache.nutch.searcher.*"
  import="org.apache.hadoop.conf.Configuration"
  import="org.apache.nutch.util.NutchConfiguration"
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<%
  Configuration nutchConf = NutchConfiguration.get(application);
  NutchBean bean = NutchBean.get(application, nutchConf);
  // set the character encoding to use when interpreting request values 
  request.setCharacterEncoding("UTF-8");
  bean.LOG.info("anchors request from " + request.getRemoteAddr());
  Hit hit = new Hit(Integer.parseInt(request.getParameter("idx")),
                    Integer.parseInt(request.getParameter("id")));
  HitDetails details = bean.getDetails(hit);
  String language =
    ResourceBundle.getBundle("org.nutch.jsp.anchors", request.getLocale())
    .getLocale().getLanguage();
  String requestURI = HttpUtils.getRequestURL(request).toString();
  String base = requestURI.substring(0, requestURI.lastIndexOf('/'));
%>
<%
  // To prevent the character encoding declared with 'contentType' page
  // directive from being overriden by JSTL (apache i18n), we freeze it
  // by flushing the output buffer. 
  // see http://java.sun.com/developer/technicalArticles/Intl/MultilingualJSP/
  out.flush();
  String lan = request.getParameter("lang");
  ResourceBundle res = ResourceBundle.getBundle("MyResource",new Locale(lan,"IN"));
%>

<title>India Search: title</title>
<jsp:include page="/include/style.html"/>
<!--base href="<%= base + "/" + language + "/" %>"-->
<script LANGUAGE="JavaScript" src="keyBoard/tabber.js" type="text/javascript" ></script>
<link href="css/style.css" rel="stylesheet" type="text/css">

<script language="JavaScript" type="text/javascript">
<!--
function dynAnimation() {}
function clickSwapImg() {}
//-->
</script>
</head>

<body onload="dynAnimation()">
<br>
<a href="locale.jsp?<%=language%>"><img src="img/logo.png" width="144" height="30" border="0" alt="India Search Logo"></a>
<hr>
<h3>
page
  <%=details.getValue("url")%>
</h3>

<h3>anchors</h3>

<ul>
<%
  String[] anchors = bean.getAnchors(details);
  if (anchors != null) {
    for (int i = 0; i < anchors.length; i++) {
%><li><%=Entities.encode(anchors[i])%>
<%   } %>
<% } %>
</ul>
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
