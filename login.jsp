<%@page contentType="text/html"%>
<%@page session="true"%>
<%@page pageEncoding="UTF-8"%>
<%@page import="java.util.*" %> 
<%@page import="java.text.*"%>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>

<head>
    
<title>User Assessment Page Sandhan 1.0</title>
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
	
<!-- End-->
</head>


<div style="height: 62px; top: 90%; left: 341px; position: absolute; width: 729px">
<img alt="" src="img/TDIL.bmp"  style="height: 49px; width: 93px; top: 9px; left: 0px; position: float;border:0" />
<span class="style9" >
 Project funded by- TDIL, Dept. Of IT, Ministry of Communication &amp; IT,         Govt. of India
</span>
   </div>     
<div style="height: 35px; top: 0px; left:0px; position: absolute; width: 100%;  background-image: url('img/gradient.jpg'); background-repeat: repeat-x;text-align:right">
<%
String lang="en";
%>
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
<div style="top: 140px; left: 271px; position: absolute;height: 200px; width: 729px">
<script language = "Javascript">
function Validate(){
var user=document.frm.user
var pass=document.frm.pass

if ((user.value==null)||(user.value=="")){
alert("Please Enter user name")
user.focus()
return false
}
if ((pass.value==null)||(pass.value=="")){
alert("Please Enter password")
pass.focus()
return false
}
return true
}
</script>
</head>
<body>
<br><br>
<table border="0" align="center">
  <tbody>
    <tr>
      <td><h2><font face="Arial">
       Welcome to Sandhan User Assessment page</font>
    </h2></td>
    </tr>
  </tbody>
</table>
<form name="frm" action="processlogin.jsp" method="Post" onSubmit="return Validate()" >
<br>
<br>
<br>
<table border="23" style="border-color:forestgreen" align="center">
  <tbody>
    <tr>
      <td style="border-width:1px;border-style:groove;border-color:cyan;"> <font face="Arial">Name:</font></td>
      <td style="border-width:1px;border-style:groove;border-color:cyan;"><input type="text" name="user" value=""/></td>
    </tr>
    <tr>
      <td style="border-width:1px;border-style:groove;border-color:cyan;"> <font face="Arial">Password:</font></td>
      <td style="border-width:1px;border-style:groove;border-color:cyan;"><input type="password" name="pass" value=""/></td>
    </tr>
    <tr>
      <td width="50%" align="center" style="border-width:1px;border-style:groove;border-color:cyan;"><input type="submit" value="Sign-In" /></td>
      <td width="50%" align="center" style="border-width:1px;border-style:groove;border-color:cyan;"><input type="reset" value="Reset" /></td>
    </tr>
  </tbody>
</table>

</form>
<br><br><br><br><br><br><br>

</body>

</html>
