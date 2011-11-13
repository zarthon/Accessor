<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@page import ="java.util.*"%>
<%@page session="true"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Advance Search</title>
<link href="css/style.css" rel="stylesheet" type="text/css">

<style type="text/css">
body,td,a,p,.h{font-family:arial,sans-serif}
.h{font-size:20px}
.h{color:#3366cc}
.q{color:#00c}
</style>

<script LANGUAGE="JavaScript" src="keyBoard/tabber.js" type="text/javascript" ></script>
<script LANGUAGE="JavaScript" src="keyBoard/Script.js" type="text/javascript" ></script>
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

<script language="JavaScript" type="text/JavaScript">
function butCheckForm_onclick(txt)
{
   
   var myForm = document.form1;
   if (myForm.txtSearch.value =="" )
   {
      alert(txt);
      
    return false;
      }
    else{
        return true;
        }

}
  
function setfocus()
{
	document.forms[0].elements['txtSearch'].focus();
}
</script>

<%
    String lang ="";//(String)session.getAttribute("language");  
    String sessionLang = request.getParameter("sessionlang");
    lang = sessionLang;
    String Language = lang;
    //System.out.println("LANGUAGE: "+lang+ " "+Language);
    if(lang==null){
	    lang="en";
        session.setAttribute("language",lang);  
    }
    ResourceBundle res=ResourceBundle.getBundle("MyResource",new Locale(lang,"IN")); 
    String url=(request.getRequestURL()).toString();
    session.setAttribute("language",lang);
	String query = request.getParameter("TextArea");
	if(query == null){
		query = "";
	}
	String layer = res.getString("layer");
%>
<% 
	String keyboard="keyBoard/"+ lang +"_keyboards.js";
	String indiaSearch = res.getString("india") + res.getString("Search");
%>
</head>


<body onload="dynAnimation()" onKeyDown="CatchKeyCodeDn(event);" onKeyUp="CatchKeyCodeUp(event);">
	<form name="form1" action="redirect.jsp?<%=Language%>" method="post" > 
		<script LANGUAGE="JavaScript" src="<%=keyboard%>" type="text/javascript">
		</script>
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
		<table width="100%" border="0">
			<tr>
				<td align="center" colspan="3">
					<img src="img/logo.png"  alt="" align="middle" 
						 onmouseover="ddrivetip(<%="\'"+res.getString("india")+" "+res.getString("Search")+"\'"%>)" 
						 onMouseout="hideddrivetip()">
				</td>
			</tr>			
			<tr>
				<td width="20%"></td>
				<td width="48%" height="1" align="right" valign="middle" nowrap>
                <!--  <input type="text" title="India Search" name="TextArea"  size="63%" 
						   onkeyup="getCaretPositions(this);" onclick="getCaretPositions(this);" 
						   id="textfield"  onkeydown="return SupressTextEcho(event);" value="<%=query%>">
		-->		  
				</td>                
				
				<td width="32%" align="left" nowrap="nowrap">
	<!--				<input name="hidden" type="hidden" id="hidden" value="<%=res.getString("roman")%>">
                    <input name="hidden_1" type="hidden" id="hidden_1" value="<%=res.getString("hidekeyboard")%>">
                                        
					<a href="inputscreen_help.jsp" title="" class="navigation">
						<%=res.getString("Help")%>
						
					</a><br>
					
					<a href="locale.jsp?<%=Language%>" title="" class="navigation">
						<%=res.getString("Home Page")%>
					</a><br>
                    <% if(!Language.equals("en")){  // Keyboard for Languages other than English %> 
						<font size="-1">
							<a  class="navigation" href="javascript:keyb_change()" id="show"  
								onclick="swapLayers('<%=layer%>','<%=res.getString("roman")%>','<%=res.getString("hidekeyboard")%>');
								return false;">
								<%=res.getString("roman")%> 								
							</a>
						</font>
					<%}%>
	-->			</td>
			</tr>
		</table>
		<table width="100%" border="0">
			<tr>
				<td colspan="3" align="centre">
					<hr width="70%">
					<br>
				</td>
			</tr>
			<tr>
				<td width="30%"></td>
				<td width="42%" height="1" align="right" valign="middle" nowrap>
					<div align="left" >
						<strong><%=res.getString("query")%>: </strong>
                                                <input type="text" title="India Search" name="TextArea"  size="73%" 
                                                      onkeyup="getCaretPositions(this);" onclick="getCaretPositions(this);" 
                                                      id="textfield"  onkeydown="return SupressTextEcho(event);" 
                                                      value="<%=query%>">
					</div>
				</td>
				<td width="32%" align="left" nowrap="nowrap">
				</td>
			</tr>
		</table>
		<br>
		<table width="100%" border="0">
			<tr>
				<td width="18%">
				</td>
				<td width="60%" height="1" align="right" valign="middle" nowrap>
					<div align="left">
						<strong><%=res.getString("title")%>: </strong> &nbsp;&nbsp;
				      		<input type="text" name="title" id="query_title" size="25%"  									   onkeyup="getCaretPositions(this);" 
								       onclick="getCaretPositions(this);" 
								       onkeydown="return SupressTextEcho(event);" 
								       value="" align="centre">
						&nbsp;&nbsp;&nbsp; 
						<strong><%=res.getString("file type")%>: </strong>
				      		<input type="text" name="file_type" id="query_file_type" 										size="25%" onkeyup="getCaretPositions(this);" 
										onclick="getCaretPositions(this);" 
										onkeydown="return SupressTextEcho(event);" 
										value="" align="centre">
				      		<br><br>  
				      		<strong><%=res.getString("site")%>: </strong> &nbsp;&nbsp;
				      		<input type="text" name="site" id="query_site" size="63%" 
									onkeyup="getCaretPositions(this);" 
									onclick="getCaretPositions(this);" 
									onkeydown="return SupressTextEcho(event);" 
									value="" align="left">
	            			</div>
				</td>
				<td width="28%" height="1" align="left" nowrap>
					 <input name="hidden" type="hidden" id="hidden" value="<%=res.getString("roman")%>">
                    <input name="hidden_1" type="hidden" id="hidden_1" value="<%=res.getString("hidekeyboard")%>">

                                        <a href="advancesearch_help.jsp?sessionlang=<%=lang%>" title="" class="navigation">
                                                <%=res.getString("Help")%>

                                        </a><br>

                                        <a href="locale.jsp?<%=Language%>" title="" class="navigation">
                                                <%=res.getString("Home Page")%>
                                        </a><br>
                    <% if(!Language.equals("en")){  // Keyboard for Languages other than English %>
                                                <font size="-1">
                                                        <a  class="navigation" href="javascript:keyb_change()" id="show"  
                                                                onclick="swapLayers('<%=layer%>','<%=res.getString("roman")%>','<%=res.getString("hidekeyboard")%>');
                                                                return false;">
                                                                <%=res.getString("roman")%>                                  
                                                        </a>
                                                </font>
                                        <%}%>
				</td>
			</tr>
		</table>
		<table width="100%" border="0">
			<tr>
				<td colspan="3" align="center" nowrap>
					<div  id="<%=layer%>" style="align:left;display:none">
						<% if(!Language.equals("en")){ %>	
							<script language="javascript" type="text/javascript"> keyboard(); 
							</script>
						<%}%>
					</div>
				</td>
			</tr>
			<tr>
				<td align="center" colspan="3">
					<strong><%=res.getString("Domain")%></strong>
                    <!--<input name="radiobutton" type="radio" value="radiobutton" checked>
                    	<%=res.getString("Health")%>-->
                    <input name="radiobutton" type="radio" value="radiobutton">
                        <%=res.getString("Tourism and Pilgrimage")%>
                    <input name="radiobutton" type="radio" value="radiobutton">
                        <%=res.getString("All")%>
            	</td>
			</tr>
			<tr>
            	<td align="center" colspan="3">
					<%=res.getString("Results to be shown in a page")%>
		      		<select name="hitsPerPage">
		        		<option value="10">10</option>
		        		<option value="20">20</option>
		        		<option value="30">30</option>
                    </select>
            	</td>
          	</tr>
			<tr id="tr1" align="center" >
 				<td align="center"  height="27" nowrap colspan="3">
					<input name="btnSearch" id="mainSearch" type="submit" style="width:80px" 
						   value="<%=res.getString("Search")%>"  onclick="searchRedirect()">
                    
					<% if(Language.equals("ta")){ %>
						<input name="UNL Tamil" id="unl" type="submit" value="UNL Search" 
							   onClick="searchUNL()">
					 	<input name"metasite" id="meta" type="hidden" value="yahoo"> 
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
					<input name="abc" title="Search in this site" type="radio" 
						   value="Site" checked="checked">
						   <%=res.getString("This Site Only")%>
					<input name="abc" align="bottom" title="SearchYahoo" type="radio" 
						   value="yahoo">
						   yahoo
					<input name="abc" align="bottom" title="SearchMSN" type="radio" 
						   value="msn">
						   msn
					<input name="abc" align="bottom" title="SearchGoogle" type="radio" 
						   value="google">
						   google
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
					<a class="a1" href="#" onClick="this.style.behavior='url(#default#homepage)';this.setHomePage(c);">
						<%=res.getString("Make_ur_home_page")%> !
					</a>
				</td>
			</tr>
	   </table>

		<%@ include file="bottom.html" %>
	</form>
</body>
</html>



