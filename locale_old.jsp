<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@page import="java.util.*" %> 
<%@page import="java.text.*"%>
<%@page errorPage="errorPage.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>India Search</title>

<!-- For KeyBoard Activity  ********************************************************************-->
  <script LANGUAGE="JavaScript" src="keyBoard/tabber.js" type="text/javascript" ></script>
  <script LANGUAGE="JavaScript" src="keyBoard/Script.js" type="text/javascript" ></script>
  

<link href="css/style.css" rel="stylesheet" type="text/css">

<script language="JavaScript" type="text/javascript">
<!--
function dynAnimation() {}
function clickSwapImg() {}
//-->
</script>
<script language="javascript" type="text/javascript">
function searchUNL(){
	document.form1.action="unl_result.jsp";
}
</script>
<script language="javascript" type="text/javascript">
function searchRedirect(){
	document.form1.action="redirect.jsp";
}
</script>

<script language="JavaScript" type="text/javascript">


var browserType;

if (document.layers) {browserType = "nn4"}
if (document.all) {browserType = "ie"}
if (window.navigator.userAgent.toLowerCase().match("gecko")) {
   browserType= "gecko"
}

function show_hide(){
	if(document.getElementById("hidden").value!="Hide"){
     		document.getElementById("p").style.display = "";
     		document.getElementById("hidden").value="Hide";
    	}
    	else if(document.getElementById("hidden").value=="Hide"){ 
     		document.getElementById("p").style.display = "none";
     		document.getElementById("hidden").value=document.getElementById("state").value;
	}
}
</script>
<%      
       ResourceBundle res=null;
       String url="";
       String Language = request.getQueryString();
       String imageSRC="";
       String lang = (String)session.getAttribute("language");
        if(request.getQueryString()==null)
        {            
            lang="en";
            res=ResourceBundle.getBundle("MyResource" ,new Locale(lang,"IN"));
            session.setAttribute("language",lang);        
           url="\""+request.getRequestURL()+"?"+"en"+"\"";
%>          <jsp:forward page="./result.jsp" ></jsp:forward>
<%      }
        else
        {
           res=ResourceBundle.getBundle("MyResource",new Locale(request.getQueryString(),"IN")); 
           url="\""+request.getRequestURL()+"?"+request.getQueryString()+"\"";
        }             
         request.setCharacterEncoding("UTF-8");
         session.setAttribute("language",request.getQueryString());
	String layer = res.getString("layer");
%>
<% 
	String keyboard="keyBoard/"+Language+"_keyboards.js";
	String indiaSearch = res.getString("india") + res.getString("Search");
	
%>
</head>
<body onload="dynAnimation()" onKeyDown="CatchKeyCodeDn(event);" onKeyUp="CatchKeyCodeUp(event);">

	<form name="form1" method="post" action=""> 
		<script LANGUAGE="JavaScript" src="<%=keyboard%>" type="text/javascript">
		</script>
		
		<table width="100%" border="0">
			<tr>
				<td align="center" colspan="3">
					<img src="images/logo.jpg"  alt="" align="middle" 
						 onmouseover="ddrivetip(<%="\'"+res.getString("india")+" "+res.getString("Search")+"\'"%>)" 
						 onMouseout="hideddrivetip()">
				</td>
			</tr>			
			<tr>
				<td width="20%"></td>
				<td width="46%" height="1" align="right" valign="middle" nowrap>
                  <input type="text" title="India Search" name="TextArea"  size="55%"
						   
						   id="textfield"  onkeydown="return SupressTextEcho(event);">
				</td>                
				
				<td width="34%" align="left" nowrap="nowrap">
					<input name="hidden" type="hidden" id="hidden" value="<%=res.getString("roman")%>">
                    <input name="hidden_1" type="hidden" id="hidden_1" value="<%=res.getString("hidekeyboard")%>">
                    <a href="options.jsp" title="" class="navigation" >
						<%=res.getString("Advance Search")%>
						
					</a><br>
                    
					<a href="help.jsp" title="" class="navigation">
						<%=res.getString("Help")%>
						
					</a><br>
                    <% if(!Language.equals("en")){  // Keyboard for Languages other than English %> 
						
							<a  class="navigation" id="show" href="javascript:keyb_change()" 
								onclick="swapLayers('<%=layer%>','<%=res.getString("roman")%>','<%=res.getString("hidekeyboard")%>');
								return true;" ><u>
								<%=res.getString("roman")%> 								</u>
							</a>
						
					<%}%>
				</td>
			</tr>
			
			<tr>
				<td colspan="3" align="center" nowrap>
					<div  id="<%=layer%>" style="align:left;display:none" >
						<% if(!Language.equals("en")){ %>	
							<script language="javascript" type="text/javascript">
								
									 keyboard();
																
							</script>
						<%}%>
					</div>
				</td>
			</tr>
			<tr id="tr1" align="center" >
 				<td align="center"  height="27" nowrap colspan="3">
					<input name="btnSearch" id="mainSearch" type="submit" style="width:80px" 
						   value="<%=res.getString("Search")%>" onclick="searchRedirect();">
                    			
					<% if(Language.equals("ta")){ %>
						<input name="UNLTamil" id="unl" type="submit" value="UNLSearch" onclick="searchUNL();">
					<%}%>
				</td>
            		</tr>
			<tr>
            			<td align="center" colspan="3" height="21">
					<label>
						<strong>
							<%=res.getString("Search")%> :
						</strong>
					</label>
					<input id="option_1" name="abc" type="radio" 
						   value="Site" checked>
						   <%=res.getString("This Site Only")%>
					<input id="option_2" name="abc" type="radio" 
						   value="WWW">
						   <%=res.getString("World Wide Web")%>
				</td>
            		</tr>
			<tr id="seperator">
            			<td colspan="3" height="16" align="center"><hr width="70%"></td>
            		</tr>
			<tr>
				<td colspan="3" align="center">
					<%@ include file="footer.html" %>
				</td>
			</tr>
			<tr>
				<td colspan="3">&nbsp;</td>
			</tr>
			<tr id="tr5">			
            			<td colspan="3" align="center" height="19">
				<script Language="javascript" type="text/javascript"/>
				function callAlert(){
					var browserName = navigator.appName;
					alert(browserName);
					if(browserName == "Netscape")
					alert('To set India Search as your home page in Firefox, click and drag the link to the "Home" icon in your browser.');
				}
			</script>
			<a class="a1" href="#" onClick="callAlert();this.style.behavior='url(#default#homepage)';
							this.setHomePage(c);">
				<%=res.getString("Make_ur_home_page")%> !
			</a>
	                <input type="hidden" id="urlID" name="url" value=<%=url%>>
                        <script LANGUAGE="JavaScript" type="text/javascript">
				c = document.getElementById("urlID").value;						
			</script> 
                		</td>
			</tr>
                    
</table>
	</form>
</body>
</html>
