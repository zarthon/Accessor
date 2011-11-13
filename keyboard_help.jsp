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
		String fig1 = "images/keyboard/keyboard_" + lang + ".jpeg";
//		String fig2 = "images/advanced_search/advance_" + lang + ".jpeg";
		String text1 = res.getString("keyboard_t1");
		//String text2 = res.getString("iscreen_t2");		
	%>
        <title>Input Screen<%=res.getString("Help")%></title>
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
		<h4><%=res.getString("roman")%>:</h4>
		<%=text1%>
		</td>
		</tr>
		<tr>
		<td align="center">
			<img src="<%=fig1%>" align="center">
		</td>
		</tr>
		<tr>
		<td align="justify">	
			<% if(lang.equals("hi")){%>
			<font size='2'>
                <p>(1) &#2349;&#2366;&#2352;&#2340; = 'SHIFT &#2349;' + '&#2366;' + '&#2352;' + '&#2340;' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                (2) &#2325;&#2352;&#2381;&#2350; = '&#2325;' + '&#2352;' + '&#2381;' + '&#2350;'
                </p>

                <p>(3) &#2325;&#2381;&#2352;&#2350; =  '&#2325;' + '&#2381;' + '&#2352;' + '&#2350;'
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                (4) &#2346;&#2306;&#2325;&#2381;&#2340;&#2367; =  '&#2346;' + '&#2306;' + '&#2325;' + '&#2381;' + '&#2340;' + '&#2367;'
                </p>

                <p>(5) &#2350;&#2361;&#2352;&#2381;&#2359;&#2367; = '&#2350;'+ '&#2361;' + '&#2352;' +'&#2381;' + 'SHIFT &#2359;' + '&#2367;'
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                (6) &#2326;&#2354;&#2368;&#2347;&#2364;&#2366; = '&#2326;' + '&#2354;'+ '&#2368;' + 'SHIFT &#2347;' + '&#2364;' + '&#2366;'
                </p>

                <p>(7) &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340; = '&#2346;' + '&#2381;' + '&#2352;' + '&#2366;' + '&#2346;' + '&#2381;' + '&#2340;'
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                (8) &#2346;&#2369;&#2339;&#2381;&#2351; = '&#2346;' + '&#2369;' + 'SHIFT &#2339;' + '&#2381;' + '&#2351;'
                </p>
		<br>
		<%}%>
		<% if(lang.equals("mr")){ %>
		<font size='2'>
                <p>
                (1) &#2349;&#2366;&#2352;&#2340; = 'SHIFT &#2349;' + '&#2366;' + '&#2352;' + '&#2340;'
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                (2) &#2325;&#2352;&#2381;&#2350; = '&#2325;' + '&#2352;' + '&#2381;' + '&#2350;'
                </p>

                <p>
                (3) &#2325;&#2381;&#2352;&#2350; =  '&#2325;' + '&#2381;' + '&#2352;' + '&#2350;'
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                (4) &#2346;&#2306;&#2325;&#2381;&#2340;&#2367; =  '&#2346;' + '&#2306;' + '&#2325;' + '&#2381;' + '&#2340;' + '&#2367;'
                </p>

                <p>
                (5) &#2350;&#2361;&#2352;&#2381;&#2359;&#2367; = '&#2350;' + '&#2361;' + '&#2352;' +'&#2381;' + 'SHIFT &#2359;' + '&#2367;'
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                (6) &#2326;&#2354;&#2368;&#2347;&#2364;&#2366; = '&#2326;'+ '&#2354;' + '&#2368;' + 'SHIFT &#2347;' + '&#2364;' + '&#2366;'
                </p>

                <p>
                (7) &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340; = '&#2346;' + '&#2381;' + '&#2352;' + '&#2366;' + '&#2346;' + '&#2381;' + '&#2340;'
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                (8) &#2346;&#2369;&#2339;&#2381;&#2351; = '&#2346;' + '&#2369;' + 'SHIFT &#2339;' + '&#2381;' + '&#2351;'
               </p>
		<br>
		<% } %>
		<% if(lang.equals("bn")){ %>

		<% }%>
		<% if(lang.equals("pa")){ %>
		
		<% } %>
		<% if(lang.equals("ta")){ %>
			<font size='2'>
                <p>(1) &#2964;&#2997;&#3016;&#2991;&#3006;&#2992;&#3021; = 'SHIFT &#2964;' + '&#2997;' + '&#3016;' +    '&#2991;' + '&#3006;' + '&#2992;' + '&#3021;'
                </p>
                <p>(2) &#2986;&#3020;&#2992;&#3021;&#2979;&#2990;&#3007; = '&#2986;' + '&#3020;' + '&#2992;' + '&#3021;' + 'SHIFT &#2979;' + '&#2990;' + '&#3007;'
                </p>
                <p>(3) &#2994;&#2965;&#3021;&#2999;&#3021;&#2990;&#3007; = '&#2994;' + 'SHIFT &#2965;&#3021;&#2999;' +    '&#3021;' + '&#2990;' + '&#3007;'
                </p>
                <p>(4) &#2994;&#2975;&#3021;&#2970;&#3009;&#2990;&#3007; = '&#2994;' + '&#2975;' + '&#3021;' + '&#2970;' +    '&#3009;' + '&#2990;' + '&#3007;'
                </p>
                <p>(5) &#3000;&#3021;&#2997;&#2992;&#2969;&#3021;&#2965;&#2995;&#3021; = '&#3000;' + '&#3021;' + '&#2997;'    + '&#2992;' + 'SHIFT &#2969;' + '&#3021;' + '&#2965;' + 'SHIFT &#2995;' + '&#3021;'
                </p>
                <p>(6)    &#2974;&#3006;&#2991;&#3007;&#2993;&#3021;&#2993;&#3009;&#2965;&#3021;&#2965;&#3007;&#2996;&#2990;&#3016; = '&#2974;' + '&#3006;' + '&#2991;' + '&#3007;' + 'SHIFT &#2993;' + '&#3021;' + 'SHIFt &#2993;' + '&#3009;' + '&#2965;' + '&#3021;' + '&#2965;' +'&#3007;' + 'SHIFT &#2996;' + '&#2990;' + '&#3016;'
                </p>
                </font>
		<br>
		<% } %>
		<%if(lang.equals("te")){%>
			 <font size='2'>
                <p>(1) &#3117;&#3134;&#3120;&#3108; = 'SHIFT &#3117;' + '&#3134;' + '&#3120;' + '&#3108;' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                (2) &#3093;&#3120;&#3149;&#3118; = '&#3093;' + '&#3120;' + '&#3149;' + '&#3118;'
                </p>
                <p>(3) &#3093;&#3149;&#3120;&#3118; =  '&#3093;' + '&#3149;' + '&#3120;' + '&#3118;'
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                (4) &#3114;&#3074;&#3093;&#3149;&#3108;&#3135; = '&#3114;' + '&#3074;' + '&#3093;' + '&#3149;' + '&#3108;' + '&#3135;'
                </p>
                <p>(5) &#3118;&#3129;&#3120;&#3149;&#3127;&#3135; ='&#3118;' + '&#3129;' + '&#3120;' +'&#3149;' + 'SHIFT &#3127;' + '&#3135;'
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                (6) &#3094;&#3122;&#3136;&#3115;&#3132;&#3134; = '&#3094;' + '&#3122;' + '&#3136;' + 'SHIFT &#3115;' + '&#3132;' + '&#3134;'
                </p>
                <p>(7) &#3114;&#3149;&#3120;&#3134;&#3114;&#3149;&#3108; = '&#3114;' + '&#3149;' + '&#3120;' + '&#3134;' + '&#3114;' + '&#3149;' + '&#3108;'
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                (8) &#3114;&#3137;&#3107;&#3149;&#3119; = '&#3114;' + '&#3137;' + 'SHIFT &#3107;' + '&#3149;' + '&#3119;'
                </p>
                </font>
		<% } %>
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
