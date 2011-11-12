<%@page contentType="text/html"%>
<%@page session="true"%>
<%@page pageEncoding="UTF-8"%>
<%@page import="java.util.*" %> 
<%@page import="java.text.*"%>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>

<head>
    
<title>
Sandhan
</title>
<script language="javaScript" src="keyBoard/tabber.js" type="text/javascript" ></script>
<script language="javaScript" src="keyBoard/Script.js" type="text/javascript" ></script> 
	<link rel="stylesheet" type="text/css" href="js/jquery.autocomplete.css" />
<style type="text/css">
        #Text1{
          top: 83px; 
	  left: 41px;
	  position: absolute;
	  height: 22px;
           width: 450px; 
           right: 136px; 
       }        
	#Radio2{
            top: -1px;
            left: 179px;
            position: absolute;
            height: 14px;
            width: 20px;
            right: 256px;
        }        
      .style1
        { 
           color: #000000;
            font-weight: bold;
        }        
    .style3
       {
            height: 19px;
            top: 14px;
            left: 20px;
            position: absolute;
            width: 650px;
            font-family: Arial;
        }        
      .style5{
            font-size: small;
            font-weight: bold;
            font-family: Arial;
        }        
.style6 {
            font-size: small;
            font-family: Arial;
        }        
.style8{
color: #000000;
font-weight: bold;
font-family: Arial;
font-size: small;
}
.style9{
font-family: Arial;
font-size: small;
}
a:link {
COLOR: #000000;
}
a:visited {
COLOR: #000000;
}
a:hover {
COLOR: #FF0000;
}
a:active {
COLOR: #00FF00;
}        
#textfield {
            top: 85px;
            left: 18px;
            position: absolute;
            height: 22px;
            width: 471px;
        }    
</style>
	
<script src="js/jquery.js" type="text/javascript">
</script>
<script type='text/javascript' src='js/jquery.autocomplete.js'></script>


<script Language="javascript" type="text/javascript"/>
				function callAlert(){
					var browserName = navigator.appName;
					alert(browserName);
					if(browserName == "Netscape")
					alert('To set India Search as your home page in Firefox, click and drag the link to the "Home" icon in your browser.');
				}
			</script>

<script language="javascript" type="text/javascript">
function searchRedirect(){
if (document.getElementById('textfield').value=="" || document.getElementById('textfield').value==null){
alert("Please enter a query");
return;
}
else
	document.form1.action="redirect.jsp";
}
</script>
<script language="javascript" type="text/javascript">
function searchUNL(){
	document.form1.action="unl_result.jsp";

}

function no_page(){
alert("This feature is not activated in current evaluation");
}
</script>

	
<script type="text/javascript" src="js/global.js">
</script>
<!-- Java Scriplet Section-->
<%      
       ResourceBundle res=null;
       String url="";
       String Language = request.getQueryString();
       if(Language.equals("") || Language==null)
		Language = "en";

       String imageSRC="";

       String lang = Language; //(String)session.getAttribute("language");
        if(request.getQueryString()==null)
        {            
            lang="en";
            res=ResourceBundle.getBundle("MyResource" ,new Locale(lang,"IN"));
            //session.setAttribute("language",lang);        
           url="\""+request.getRequestURL()+"?"+"en"+"\"";
%>          <jsp:forward page="./result.jsp" ></jsp:forward>
<%      }
        else
        {
           res=ResourceBundle.getBundle("MyResource",new Locale(request.getQueryString(),"IN")); 
           url="\""+request.getRequestURL()+"?"+request.getQueryString()+"\"";
        }             
         request.setCharacterEncoding("UTF-8");
         //session.setAttribute("language",request.getQueryString());
	String layer = res.getString("layer");
%>
<% 
	String keyboard="keyBoard/"+Language+"_keyboards.js";
	String indiaSearch = res.getString("india") + res.getString("Search");
	
%>
<!-- End-->
</head>

<body onload="dynAnimation()" onKeyDown="CatchKeyCodeDn(event,'<%=layer%>');" onKeyUp="CatchKeyCodeUp(event,'<%=layer%>');">
<form name="form1" method="post" action="">
<input type="hidden" name="sessionlang" value='<%=request.getQueryString()%>'/>

<div style="height: 62px; top: 90%; left: 341px; position: absolute; width: 729px">
<img alt="" src="img/TDIL.bmp"  style="height: 49px; width: 93px; top: 9px; left: 0px; position: float;border:0" />
<span class="style9" >
 Project funded by- TDIL, Dept. Of IT, Ministry of Communication &amp; IT,         Govt. of India
</span>
   </div>     
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
        
<!--   Logo Section -->

<div style="height: 104px; top: 69px; left: 355px; position: absolute; width: 460px">
        
<img alt="" src="img/logo.png"  style="top: 13px; left: 26px; position: absolute; height: 104px; width: 460px" />

</div>

<!---->
    
<div style="border: thin groove #000000; height: 197px; top: 220px; left: 323px; position: absolute; width: 660px; -moz-border-radius: 15px; border-l: 15px;">
<!-- Basic,Advance,Bookmark section -->
<div class="style3">
<span class="style8"><%=res.getString("basic_search")%></span>
<span>|</span>
<a href="#" onclick="javascript:no_page()">
<span class="style8"><%=res.getString("Advance Search")%></span>
</a>
<span>|</span>          
<a href="inputscreen_help.jsp?sessionlang=<%=request.getQueryString()%>">
<span class="style8"><%=res.getString("Help")%> </span>
</a>
<span>|</span>
<a href="#" onClick="callAlert();this.style.behavior='url(#default#homepage)';this.setHomePage(c);">
<span class="style8"><%=res.getString("Make_ur_home_page")%></span>
</a>

</div>
    <!-- End-->     
<input id="textfield"  name="TextArea" type="text" onkeydown="return SupressTextEcho(event,'<%=layer%>');"/>

<!-- Domain Selection section-->
<div style="height: 19px; top: 127px; left: 76px; position: absolute; width: 600px">
<div style="position: absolute; width:100px">
<span class="style5">
<img alt="" src="img/arrow-mark.png" style="top: 3px; left: 1px; position: absolute; height:16px; width: 19px;" />
<span style="padding:22px"> <%=res.getString("Domain")%>:</span>
</span>
</div>
<div style="position: absolute; width: 100px;left: 120px;">           
<input id="option_1" name="abc" type="radio"  value="Site" checked />
<span class="style6">
<%=res.getString("Tourism")%> 
 </span></div>
<div style="position: absolute; width:350px; left: 240px;">
<span class="style6" style="padding:38px">
<input id="option_1" name="abc" type="radio"  value="Site"/>      
<%=res.getString("Health")%>
</span></div>
        
</div>
    <!--End --> 
<!-- Engine Selection -->    
<div style="height: 19px; top: 170px; left: 76px; position: absolute; width: 600px;">
<div style="position: absolute; width: 100px; ">
<span class="style5">
<img alt="" src="img/arrow-mark.png" style="top: 3px; left: 1px; position: absolute; height: 16px; width: 19px" />
<span style="padding:22px"> <%=res.getString("Search")%>:</span>
</span>
</div>
<div style="position: absolute; width: 250px; left: 120px;">            
<input name="radiobutton" type="radio" value="radiobutton" checked />
<span class="style6">
<%=res.getString("with this Engine")%>
</span></div>
<div style="position: absolute; width: 350px; left: 240px;">
<span class="style6" style="padding:38px">
<input  name="radiobutton" type="radio" value="radiobutton" />
<%=res.getString("with other Engines")%>
</span></div>

</div>
    <!--End--> 
<% if(!(Language.equals("en"))){ %>
<a href="#" class="show_hide" id="show">
 <img id="kb_link" border="0" alt="" src="img/keyboard.png"  style="top: 87px; left: 467px; position: absolute; height: 22px; width: 23px" />
</a>
  <%}%> 
<input name="btnSearch" id="mainSearch"  style="border-style: none; background-color: #0066FF;color: #FFFFFF; right: 56px;font-family: Arial; font-size: small; font-weight: bold; top: 83px; left: 505px; position: absolute; height: 26px; width: 66px;"             type="submit" value="<%=res.getString("Search")%>" onclick="searchRedirect();" />
<% if(Language.equals("ta")){ %>
<input name="UNLTamil" id="unl" type="submit" value="UNLSearch" style="border-style: none;background-color: #0066FF; color: #FFFFFF; right: 56px; font-family: Arial; font-size:small; font-weight: bold; top: 83px; left: 575px; position: absolute; height: 26px; width: 80px;" onclick="searchUNL();">

					<%}%>

</div>
    

<!-- Language Selection Section-->    
<div style="height: 30px; top: 475px; left: 370px; position: absolute; width: 759px;align:center;">

<a href="locale.jsp?en">
<span class="style8"><%=res.getString("english")%></span>
</a>
<span>|</span>
<a href="locale.jsp?hi">       
<span class="style8"><%=res.getString("hindi")%></span>
</a>
   <span>|</span>     
<a href="locale.jsp?pa">
<span class="style8"><%=res.getString("punjabi")%></span>
</a>
<span>|</span>
<a href="locale.jsp?bn">
<span class="style8"><%=res.getString("bengali")%></span>
</a>
 <span>|</span>
<a href="locale.jsp?mr">
<span class="style8"><%=res.getString("marathi")%></span>
</a>
<span>|</span>
<a href="locale.jsp?te">
<span class="style8"><%=res.getString("telgu")%></span>
</a>
<span>|</span>
<a href="locale.jsp?ta">
<span class="style8"><%=res.getString("tamil")%></span>
</a>
<span>|</span>
<a href="locale.jsp?or">
<span class="style8"><%=res.getString("oriya")%></span>
</a>
 <span>|</span>
<a href="locale.jsp?as">
<span class="style8"><%=res.getString("assamese")%></span>
</a>
<span>|</span>
<a href="locale.jsp?gu">
<span class="style8"><%=res.getString("gujarati")%> </span>
</a>

</div>
    <!--End-->

<% if(!(Language.equals("en"))||Language.equals("as")||Language.equals("or")||Language.equals("gu")){ %>	

<div  id="<%=layer%>" class="slidingDiv" style="display: none; border: thin outset #000000; top: 343px; left: 796px; position: absolute; height: 155px; width: 442px; float: none; background-color: #BCD6FA;">
  
				     
<div style="top: 2px; left: 2px; position: absolute; height: 141px; width: 439px; float: none; border: thin none #FFFFFF">

<script language="javascript" src="<%=keyboard%>" type="text/javascript"></script>
<script language="javascript" type="text/javascript">
keyboard();									 
</script>
</div>
     
<div style="border-style: none; top: 2px; left: 1px; position: absolute; height: 22px; width: 440px; background-color: #BCD6FA;">
    
<a href="#" class="close_kb">
<img alt="" border="0" src="img/cancel_button.gif"  style="top: 2px; left: 411px; position: absolute; height: 14px; width: 16px" />
</a>
 
</div>
  
   <%}%> 
</div>
</form>
</body>

</html>
