<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<title>Language Verticle Coordinator Page</title> 
<head>
  </head><script language = "Javascript">
function Validate(){
var fullname=document.frm.Full_Name
var username=document.frm.user_name
var password=document.frm.password
var cpassword=document.frm.confirmpassword

if ((fullname.value==null)||(fullname.value=="")){
alert("Please Enter Full name")
user.focus()
return false
}
if ((username.value==null)||(username.value=="")){
alert("Please Enter username")
pass.focus()
return false
}
if ((password.value==null)||(password.value=="")){
alert("Please Enter password")
pass.focus()
return false
}
if ((cpassword.value==null)||(cpassword.value=="")){
alert("Please Confirm password")
pass.focus()
return false
}
return true
}
</script>
  <body class="">


<%@ include file="sandhanheader1.jsp" %>

<div style="top: 170px; left: 271px; position: absolute;height: 200px; width: 729px">
<table border="0" align="center">
  <tbody>
    <tr>
      <td><h2><font face="Arial">
       Language Vertical Coordinator page</font>
    </h2></td>
    </tr>
  </tbody>
</table>




    <br>

<br > 

<FORM name="frm" action="signup.jsp" method="POST" enctype="application/x-www-form-urlencoded">

<table border="33" align="center" style="border-color:forestgreen">
  <tbody>
    <tr>
      <td style="border-width:1px;border-style:groove;border-color:cyan;"> <font face="Arial">
                Username</font></td>
      <td style="border-width:1px;border-style:groove;border-color:cyan;"><INPUT type="text" name="user_name"></td>
    </tr>
    <tr>
      <td style="border-width:1px;border-style:groove;border-color:cyan;"><font face="Arial">
              Password</font>
            </td>
      <td style="border-width:1px;border-style:groove;border-color:cyan;"><INPUT type="password" name="password"></td>
    </tr>
    <tr>
      <td style="border-width:1px;border-style:groove;border-color:cyan;"><font face="Arial">LV</font></td>
      <td style="border-width:1px;border-style:groove;border-color:cyan;"><INPUT type="text" name="lv" value="<%=request.getParameter("lv")%>" readonly="readonly"></td>
    </tr>
    <tr>
      <td style="border-width:1px;border-style:groove;border-color:cyan;"><font face="Arial">Role</font></td>
      <td style="border-width:1px;border-style:groove;border-color:cyan;"><INPUT type="text" name="role" value="accessor" readonly="readonly"></td>
    </tr>
<tr>
    <td style="border-width:1px;border-style:groove;border-color:cyan;" align="center"><INPUT type="submit" name="Submit" value="Submit"></td>
      <td style="border-width:1px;border-style:groove;border-color:cyan;" align="center"><INPUT type="reset" name="Reset"></td>
    </tr>
  </tbody>
</table>

</FORM>
<br><br><br><br>
</div>
      </body>
</html>
