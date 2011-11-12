<%@ 
	page session="true"
	contentType="text/html"
	pageEncoding="UTF-8"
	import="java.util.*"
	import="java.io.*"
	import="java.net.*"
	import="clia.unl.clia.*"  
	import="org.apache.hadoop.conf.*"
	import="org.apache.nutch.util.NutchConfiguration"
	import="org.apache.nutch.unl.UNL"
	import="org.apache.nutch.unlrerank.UNLrerank"
	
	import="org.apache.nutch.metadata.Nutch"
	import="org.apache.nutch.searcher.*"
	import="org.apache.nutch.plugin.*"
	import="org.apache.nutch.clustering.*"
%>

<%
	Configuration nutchConf = NutchConfiguration.get(application);
	NutchBean bean = NutchBean.get(application, nutchConf);
	request.setCharacterEncoding("UTF-8");
	String queryString = request.getParameter("TextArea");
	if (queryString == null)
		queryString = "";
	String htmlQueryString = queryString;
	long starttime=System.currentTimeMillis();
	int start=0,hitsPerPage=0;
	UNLrerank obj = bean.getUNLrerankInstance();
	ArrayList result1 = obj.process(queryString);
	int tempSize =0;
	if(queryString!=null)
	{
		
				tempSize = result1.size(); 
			
	}
	if(tempSize!=0)
	{
		start=1;
		hitsPerPage=tempSize;
	}

%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html">
<title>India Result Page</title>
 <link href="css/style.css" rel="stylesheet" type="text/css">
<link href="css/style.css" rel="stylesheet" type="text/css">
<script LANGUAGE="JavaScript" type="text/javascript" SRC="keyBoard/tabber.js" ></script>
<script language="JavaScript" type="text/javascript" src="keyBoard/Script.js"></script>
<link href="css/style.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="css/tp.css">
<script type="text/javascript" src="js/tp.js"></script>
<script language="javascript" type="text/javscript" >
   


<!-- Style Sheet for Page Numbers-->

    .mymenubottom a:link  
	{
		 color:#0000FF; 
	} 
    .mymenubottom a:visited
	 {
		 color: #0000FF; 
	} 
</script>
<script language="javascript">
<!--

var state = 'none';

function showhide(layer_ref) 
{
	if (state == 'block') 
	{
		state = 'none';
	}
	else
	 {
		state = 'block';
	}

	if (document.getElementById &&!document.all) 
	{
		hza = document.getElementById(layer_ref);
		hza.style.display = state;
	}
}
//-->
</script> 
<%      
         String Language ="ta";
         String lang="ta";
         ResourceBundle res=ResourceBundle.getBundle("MyResource",new Locale(lang,"IN")); 
         request.setCharacterEncoding("UTF-8");

%>

<% 
	String layer = res.getString("layer");
%>

<% String keyboard="keyBoard/"+Language+"_keyboards.js";%>

</head>

<body  onload="dynAnimation()" onKeyDown="CatchKeyCodeDn(event);" onKeyUp="CatchKeyCodeUp(event);">

	       <script LANGUAGE="JavaScript" src="<%=keyboard%>" type="text/javascript" ></script>
               <script LANGUAGE="JavaScript" src="keyBoard/tabber.js" type="text/javascript" ></script>

  <script LANGUAGE="JavaScript" src="keyBoard/keyBoard.js" type="text/javascript" ></script>
<form action="unl_result.jsp" method="post">
<table width="100%" border="0"><!-- ******************************************* Table Start  [1]********************************************* -->

          <tr>
                <td width="15%" valign="top" align="left"><img src="images/logo.jpg" alt="" width="144" height="30" onmouseover="ddrivetip(<%="\'"+res.getString("india")+" "+res.getString("Search")+"\'"%>);"  onMouseout="hideddrivetip()"></td>

                 <td align="left" width="50%"  valign="top"> <input  name="TextArea" type="text" value="<%=htmlQueryString%>" class="text" size="70%" maxlength="2048" onkeyup="getCaretPositions(this);"  onclick="getCaretPositions(this);" id="textfield" title="India Search Results" onkeydown="return SupressTextEcho(event);"></td>

                 <td width="35%" align="left" valign="top">
			 <a href="options.jsp" title="" class="navigation"><font size="-1"><%=res.getString("Advance Search") %></font></a><br>
                          <a href="help.jsp" title="" class="navigation"><font size="-1"><%=res.getString("Help")%></font></a><br>
			   <% if(!Language.equals("en"))
				{  // Keyboard for Languages other than English %> 
				<a  class="navigation" id="show" href="javascript:keyb_change()" onclick="swapLayers('<%=layer%>','<%=res.getString("roman")%>','<%=res.getString("hidekeyboard")%>');return true;" ><u><%=res.getString("roman")%></u></a>
						
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
                              <td colspan="2" align="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			      		<input type="submit" value="தேடு" style="width:80px;" >
				</td>
			  <td>&nbsp;</td>
		  </tr>
  <tr>
  </tr>
</table>
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
                    <a href="result.jsp?TextArea=<%=htmlQueryString%>&amp;lang=hi&amp;hitsPerPage=<%=hitsPerPage%>" class="tab" onclick="return showPanel2(this, 'panel1');"onmouseover="ddrivetip(hindi);" onMouseout="hideddrivetip()"><%=res.getString("Hindi")%></a>
                    <a href="result.jsp?TextArea=<%=htmlQueryString%>&amp;lang=en&amp;hitsPerPage=<%=hitsPerPage%>" class="tab" onclick="return showPanel2(this, 'panel2');"onmouseover="ddrivetip(english);" onMouseout="hideddrivetip()"><%=res.getString("English")%></a>

                    <%if(!lang.equals("hi")&&!lang.equals("en")){%>
                    <script LANGUAGE="JavaScript" type="text/javascript">currentLang=<%="\""+res.getString("newtip")+"\""%></script>
                    <input type="hidden" name="trial10" value=<%=res.getString("newlang")%> > 
                    <script LANGUAGE="JavaScript" type="text/javascript"> aP=document.form1.trial10.value</script> 
                   <a href="result.jsp?TextArea=<%=htmlQueryString%>&amp;lang=<%=lang%>&amp;hitsPerPage=<%=hitsPerPage%>" class="tab"  onmouseover="ddrivetip(currentLang)" onMouseout="hideddrivetip()" ><%=res.getString("newlang")%></a>
                    <% } %>
                </td>
<%long endtime=System.currentTimeMillis();
double duration=(endtime-starttime)/1000.0;%>
                <td width="73%" align="left">
                     <%=res.getString("result")%> <%=start%> <%=res.getString("to")%> <%=tempSize%> <%=res.getString("Search")%> -- <font color="green"><u><%=htmlQueryString%></u>&nbsp;&nbsp;தேடல் நேரம்=<%=duration%></font>
                </td>
        </tr>
        <tr>
            <td width="100%" colspan="2">
                <div  id="panel" style="border-style:solid; border-width:1px; border-color:black;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px ">
                 <%
			TreeSet set=new TreeSet();
			 for(int i=0;i<result1.size()-1;i++)
			 {
				
				 Object[][] temp =(Object[][])result1.get(i);
				
				 	out.println(temp[i][0]+"<font size=\"2.0\" color=\"maroon\">"+"@"+temp[i][1]+"@"+"</font></b>");
				
			 }	
		 %>
</div>
</td>
</tr>
</table> 
</form>
<table width="100%" cellspacing="0" cellpadding="0">
			<tr>
				<td colspan="2" align="center">
					<%@ include file="footer.html" %>
				</td>
			</tr>
</table>

</body>
</html>



