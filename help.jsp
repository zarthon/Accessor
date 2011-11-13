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
        <title>HelpPage</title>
<%
	String lang = (String)session.getAttribute("language");
 	ResourceBundle res=ResourceBundle.getBundle("MyResource",new Locale(lang,"IN"));
        request.setCharacterEncoding("UTF-8");
	System.out.println("SESSION LANG: "+lang);
%>
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
	<a href="locale.jsp?<%=lang%>"><img src="img/logo.png" alt="" width="144" height="30" border="0"></a><span  style=" font-size:20px; color:#FF9966">HELP</span>
	<hr><P>
	<script language="javascript" type="text/javascript">
		out.print("<p>Some of the examples are following :-</p>");
	</script>
	<%if(lang.equals("pa")){
		out.print("<font size='2'>");
		out.print("<p>(1) &#2349;&#2366;&#2352;&#2340; = 'SHIFT &#2349;' + '&#2366;' + '&#2352;' + '&#2340;' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(2) &#2325;&#2352;&#2381;&#2350; = '&#2325;' + '&#2352;' + '&#2381;' + '&#2350;' ");
		out.print("</p>");

		out.print("<p>(3) &#2325;&#2381;&#2352;&#2350; =  '&#2325;' + '&#2381;' + '&#2352;' + '&#2350;'");
		out.print("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(4) &#2346;&#2306;&#2325;&#2381;&#2340;&#2367; =  '&#2346;' + '&#2306;' + '&#2325;' + '&#2381;' + '&#2340;' + '&#2367;'");
		out.print("</p>");

		out.print("<p>(5) &#2350;&#2361;&#2352;&#2381;&#2359;&#2367; = '&#2350;'+ '&#2361;' + '&#2352;' +'&#2381;' + 'SHIFT &#2359;' + '&#2367;'");
		out.print("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(6) &#2326;&#2354;&#2368;&#2347;&#2364;&#2366; = '&#2326;' + '&#2354;'+ '&#2368;' + 'SHIFT &#2347;' + '&#2364;' + '&#2366;'");
		out.print("</p>");

		out.print("<p>(7) &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340; = '&#2346;' + '&#2381;' + '&#2352;' + '&#2366;' + '&#2346;' + '&#2381;' + '&#2340;'");
		out.print("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(8) &#2346;&#2369;&#2339;&#2381;&#2351; = '&#2346;' + '&#2369;' + 'SHIFT &#2339;' + '&#2381;' + '&#2351;'");
		out.print("</p>");
	}//Help For Punjabi Keyboard%>
	<%if(lang.equals("bn")){
		out.print("<font size='2'>");
		out.print("<p>");
		out.print("(1) &#2349;&#2366;&#2352;&#2340; = 'SHIFT &#2349;' + '&#2366;' + '&#2352;' + '&#2340;' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(2) &#2325;&#2352;&#2381;&#2350; = '&#2325;' + '&#2352;' + '&#2381;' + '&#2350;' ");
		out.print("</p>");
		out.print("<p>");
		out.print("(3) &#2325;&#2381;&#2352;&#2350; =  '&#2325;' + '&#2381;' + '&#2352;' + '&#2350;'");
		out.print("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(4) &#2346;&#2306;&#2325;&#2381;&#2340;&#2367; =  '&#2346;' + '&#2306;' + '&#2325;' + '&#2381;' + '&#2340;' + '&#2367;'");
		out.print("</p>");
		out.print("<p>");
		out.print("(5) &#2350;&#2361;&#2352;&#2381;&#2359;&#2367; = '&#2350;'+ '&#2361;' + '&#2352;' +'&#2381;' + 'SHIFT &#2359;' + '&#2367;'");
		out.print("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(6) &#2326;&#2354;&#2368;&#2347;&#2364;&#2366; = '&#2326;'+ '&#2354;' + '&#2368;' + 'SHIFT &#2347;' +'&#2364;' + '&#2366;'");
		out.print("</p>");
		out.print("<p>");
		out.print("(7) &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340; = '&#2346;' + '&#2381;' + '&#2352;' + '&#2366;' + '&#2346;' + '&#2381;' + '&#2340;'");
		out.print("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(8) &#2346;&#2369;&#2339;&#2381;&#2351; = '&#2346;' + '&#2369;' + 'SHIFT &#2339;' + '&#2381;' + '&#2351;'");
		out.print("</p>");
	}//Help For Bengali KeyBoard%>
	<%if(lang.equals("hi")){
		System.out.println("KEYBRD IS: hi");
		out.print("<fontsize='2'>");
		out.print("<p>");
		out.print("(1)&#2349;&#2366;&#2352;&#2340;='SHIFT&#2349;'+'&#2366;'+'&#2352;'+'&#2340;'");
		out.print("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(2)&#2325;&#2352;&#2381;&#2350;='&#2325;'+'&#2352;'+'&#2381;'+'&#2350;'");
		out.print("</p>");
		out.print("<p>");
		out.print("(3)&#2325;&#2381;&#2352;&#2350;='&#2325;'+'&#2381;'+'&#2352;'+'&#2350;'");
		out.print("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(4)&#2346;&#2306;&#2325;&#2381;&#2340;&#2367;='&#2346;'+'&#2306;'+'&#2325;'+'&#2381;'+'&#2340;'+'&#2367;'");
		out.print("</p>");
		out.print("<p>");
		out.print("(5)&#2350;&#2361;&#2352;&#2381;&#2359;&#2367;='&#2350;'+'&#2361;'+'&#2352;'+'&#2381;'+'SHIFT&#2359;'+'&#2367;'");
		out.print("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(6)&#2326;&#2354;&#2368;&#2347;&#2364;&#2366;='&#2326;'+'&#2354;'+'&#2368;'+'SHIFT&#2347;'+'&#2364;'+'&#2366;'");
		out.print("</p>");
		out.print("<p>");
		out.print("(7)&#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340;='&#2346;'+'&#2381;'+'&#2352;'+'&#2366;'+'&#2346;'+'&#2381;'+'&#2340;'");
		out.print("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(8)&#2346;&#2369;&#2339;&#2381;&#2351;='&#2346;'+'&#2369;'+'SHIFT&#2339;'+'&#2381;'+'&#2351;'");
		out.print("</p>");
	}%>
	<%if(lang.equals("mr")){
		out.print("<font size='2'>");
		out.print("<p>");
		out.print("(1) &#2349;&#2366;&#2352;&#2340; = 'SHIFT &#2349;' + '&#2366;' + '&#2352;' + '&#2340;' ");
		out.print(" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(2) &#2325;&#2352;&#2381;&#2350; = '&#2325;' + '&#2352;' + '&#2381;' + '&#2350;' ");
		out.print("</p>");
	
		out.print("<p>");
		out.print("(3) &#2325;&#2381;&#2352;&#2350; =  '&#2325;' + '&#2381;' + '&#2352;' + '&#2350;'");
		out.print("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(4) &#2346;&#2306;&#2325;&#2381;&#2340;&#2367; =  '&#2346;' + '&#2306;' + '&#2325;' + '&#2381;' + '&#2340;' + '&#2367;'");
		out.print("</p>");
	
		out.print("<p>");
		out.print("(5) &#2350;&#2361;&#2352;&#2381;&#2359;&#2367; = '&#2350;' + '&#2361;' + '&#2352;' +'&#2381;' + 'SHIFT &#2359;' + '&#2367;'");
		out.print("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(6) &#2326;&#2354;&#2368;&#2347;&#2364;&#2366; = '&#2326;'+ '&#2354;' + '&#2368;' + 'SHIFT &#2347;' + '&#2364;' + '&#2366;'");
		out.print("</p>");

		out.print("<p>");
		out.print("(7) &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340; = '&#2346;' + '&#2381;' + '&#2352;' + '&#2366;' + '&#2346;' + '&#2381;' + '&#2340;'");
		out.print("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(8) &#2346;&#2369;&#2339;&#2381;&#2351; = '&#2346;' + '&#2369;' + 'SHIFT &#2339;' + '&#2381;' + '&#2351;'");
		out.print("</p>");
	}%>
	<%if(lang.equals("te")){
		out.print("<p>Some of the examples are following :-</p>");
		out.print("<font size='2'>");
		out.print("<p>(1) &#3117;&#3134;&#3120;&#3108; = 'SHIFT &#3117;' + '&#3134;' + '&#3120;' + '&#3108;' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(2) &#3093;&#3120;&#3149;&#3118; = '&#3093;' + '&#3120;' + '&#3149;' + '&#3118;' ");
		out.print("</p>");
		out.print("<p>(3) &#3093;&#3149;&#3120;&#3118; =  '&#3093;' + '&#3149;' + '&#3120;' + '&#3118;'");
		out.print("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(4) &#3114;&#3074;&#3093;&#3149;&#3108;&#3135; = '&#3114;' + '&#3074;' + '&#3093;' + '&#3149;' + '&#3108;' + '&#3135;'");
		out.print("</p>");
		out.print("<p>(5) &#3118;&#3129;&#3120;&#3149;&#3127;&#3135; ='&#3118;' + '&#3129;' + '&#3120;' +'&#3149;' + 'SHIFT &#3127;' + '&#3135;'");
		out.print("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(6) &#3094;&#3122;&#3136;&#3115;&#3132;&#3134; = '&#3094;' + '&#3122;' + '&#3136;' + 'SHIFT &#3115;' + '&#3132;' + '&#3134;'");
		out.print("</p>");
		out.print("<p>(7) &#3114;&#3149;&#3120;&#3134;&#3114;&#3149;&#3108; = '&#3114;' + '&#3149;' + '&#3120;' + '&#3134;' + '&#3114;' + '&#3149;' + '&#3108;'");
		out.print("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		out.print("(8) &#3114;&#3137;&#3107;&#3149;&#3119; = '&#3114;' + '&#3137;' + 'SHIFT &#3107;' + '&#3149;' + '&#3119;'");
		out.print("</p>");
		out.print("</font>");
		out.print("<p>");
	}%>
	<%if(lang.equals("ta")){
		out.print("<font size='2'>");
   		out.print("<p>(1) &#2964;&#2997;&#3016;&#2991;&#3006;&#2992;&#3021; = 'SHIFT &#2964;' + '&#2997;' + '&#3016;' +    '&#2991;' + '&#3006;' + '&#2992;' + '&#3021;' ");
   		out.print("</p>");
   		out.print("<p>(2) &#2986;&#3020;&#2992;&#3021;&#2979;&#2990;&#3007; = '&#2986;' + '&#3020;' + '&#2992;' + '&#3021;' + 'SHIFT &#2979;' + '&#2990;' + '&#3007;'");
  	 	out.print("</p>"); 
   		out.print("<p>(3) &#2994;&#2965;&#3021;&#2999;&#3021;&#2990;&#3007; = '&#2994;' + 'SHIFT &#2965;&#3021;&#2999;' +    '&#3021;' + '&#2990;' + '&#3007;'"); 
   		out.print("</p>");
   		out.print("<p>(4) &#2994;&#2975;&#3021;&#2970;&#3009;&#2990;&#3007; = '&#2994;' + '&#2975;' + '&#3021;' + '&#2970;' +    '&#3009;' + '&#2990;' + '&#3007;'");
   		out.print("</p>");
   		out.print("<p>(5) &#3000;&#3021;&#2997;&#2992;&#2969;&#3021;&#2965;&#2995;&#3021; = '&#3000;' + '&#3021;' + '&#2997;'    + '&#2992;' + 'SHIFT &#2969;' + '&#3021;' + '&#2965;' + 'SHIFT &#2995;' + '&#3021;'");
   		out.print("</p>");
   		out.print("<p>(6)    &#2974;&#3006;&#2991;&#3007;&#2993;&#3021;&#2993;&#3009;&#2965;&#3021;&#2965;&#3007;&#2996;&#2990;&#3016; = '&#2974;' + '&#3006;' + '&#2991;' + '&#3007;' + 'SHIFT &#2993;' + '&#3021;' + 'SHIFt &#2993;' + '&#3009;' + '&#2965;' + '&#3021;' + '&#2965;' +'&#3007;' + 'SHIFT &#2996;' + '&#2990;' + '&#3016;'"); 
   		out.print("</p>");
   		out.print("</font>");
	}%>
	<p>
	<hr>
	<p>
	<table width="100%" align="center">
	<tr>
		<td align="center">
		<%@ include file="footer.html"%>
		</td>
	</tr>
	</table>
    </body>
</html>
