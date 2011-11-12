<%@ 
page
     session="true"
     contentType="text/html"
     pageEncoding="UTF-8"
     import="java.util.*"
     import="java.io.*"
     import="java.net.*"
     import="clia.unl.clia.*"
     import="org.apache.hadoop.conf.*"
     import="org.apache.nutch.util.NutchConfiguration"
     import="org.apache.nutch.unl.UNL"
     import="org.apache.nutch.snippetgeneration.Snippetgenerator"
     import="org.apache.nutch.metadata.Nutch"
     import="org.apache.nutch.searcher.*"
     import="org.apache.nutch.plugin.*"
     import="org.apache.nutch.clustering.*"
     import="org.apache.nutch.html.Entities"
     import="java.net.URLDecoder"
     %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <%!String queryString="";
    int More;
    ArrayList results,getplace;
    String place = "Anna University chennai guindy";
    %>

    <%
    long starttime = System.currentTimeMillis();
    Date DateandTime = new Date(365L * 24L * 60L * 60L * 1000L);
    Configuration nutchConf = NutchConfiguration.get(application);
    NutchBean bean = NutchBean.get(application, nutchConf);
    request.setCharacterEncoding("UTF-8");
    int start = 0, hitsPerPage = 0, PageNos = 0, Reminder = 0,DisplayPage=0,Totalsize=0,Largecapacity=0;
    UNL obj = bean.getUNLInstance();
    Snippetgenerator snippet=bean.getUNLSnippetgenerator();

    String Query=request.getParameter("Query");

  if(request.getParameter("Query")!=null){
    if(Query.equals("1")){
	String Testing=request.getQueryString();	
        Testing=URLDecoder.decode(Testing, "UTF-8");
	String[] splt=Testing.split("TextArea=");
	queryString=splt[1];
	if(queryString.contains("&")){
	 String[] Moresplit=queryString.split("&");
	 queryString=Moresplit[0];
	}
        results = obj.process(queryString);
	    if (request.getParameter("start") != null) {
		String startIndex = request.getParameter("start");
		start = Integer.parseInt(startIndex);
	    }
	    if (request.getParameter("More") != null) {
		String MoreIndex = request.getParameter("More");
		More = Integer.parseInt(MoreIndex);
	    }
	}
	else{
	    if (request.getParameter("start") != null) {
		String startIndex = request.getParameter("start");
		start = Integer.parseInt(startIndex);
	    }
	    if (request.getParameter("More") != null) {
		String MoreIndex = request.getParameter("More");
		More = Integer.parseInt(MoreIndex);
	    }
	    if (request.getParameter("TextArea") != null) {
		if (queryString.equals(request.getParameter("TextArea"))) {
		    queryString = request.getParameter("TextArea");
		    More=0;
		} else {
		    String append = request.getParameter("TextArea");
		    if(append!=null||append.length()!=0){
		    results = obj.process(append);
		    queryString=append;
		    More=0;
		   }else{
			queryString=append;
			results=new ArrayList();
		   }
		}
	    }else{
		queryString="";
		results=new ArrayList();
	    }
	}
  }else{
	    if (request.getParameter("TextArea") != null) {
		if (queryString.equals(request.getParameter("TextArea"))) {
		    queryString = request.getParameter("TextArea");
		    More=0;
		} else {
		    String append = request.getParameter("TextArea");
		    if(append.length()!=0){
		    results = obj.process(append);
		    queryString=append;
		    More=0;
		   }else{
			queryString=append;
			results=new ArrayList();
		   }
		}
	   }else{
		queryString="";
		results=new ArrayList();
	    }
	}
    if(results==null){
      results=new ArrayList();
      getplace=new ArrayList();
    }
    for(int i=0;i<results.size();i++){
        int compare=((ArrayList)results.get(i)).size();
        if(Largecapacity < compare){	
            Largecapacity=compare;
         }
    Totalsize=Totalsize+compare;
    }
    String htmlQueryString = queryString;
    %>

    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <head>
        <meta http-equiv="Content-Type" content="text/html">
        <title>India Result Page</title>
        <script type="text/javascript" src="http://www.google.com/jsapi">
        </script>
        <script type="text/javascript">

            // Load the Google Transliteration API
            google.load("elements", "1", {
                packages: "transliteration"
            });

            function onLoad() {
                var options = {
                    sourceLanguage: 'en', // or google.elements.transliteration.LanguageCode.ENGLISH,
                    destinationLanguage: ['ta'], // or [google.elements.transliteration.LanguageCode.Tamil],
                    shortcutKey: 'ctrl+g',
                    transliterationEnabled: true
                };
                // Create an instance on TransliterationControl with the required
                // options.
                var control =
                    new google.elements.transliteration.TransliterationControl(options);

                // Enable transliteration in the textfields with the given ids.
                var ids = [ "transl1", "transl2" ];
                control.makeTransliteratable(ids);

                // Show the transliteration control which can be used to toggle between
                // English and Tamil.
                control.showControl('translControl');
            }
            google.setOnLoadCallback(onLoad);
        </script>
        <link href="css/style.css" rel="stylesheet" type="text/css">
        <link href="css/style.css" rel="stylesheet" type="text/css">
        <script LANGUAGE="JavaScript" type="text/javascript" SRC="keyBoard/Tamil/tabber.js" ></script>
        <script language="JavaScript" type="text/javascript" src="keyBoard/Tamil/Script.js"></script>
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
        String Language = "ta";
        String lang = "ta";
        ResourceBundle res = ResourceBundle.getBundle("MyResource", new Locale(lang, "IN"));
        request.setCharacterEncoding("UTF-8");

        %>

        <%
        String layer = res.getString("layer");
        %>

        <% String keyboard = "keyBoard/Tamil/" + Language + "_keyboards.js";%>

    </head>



    <script LANGUAGE="JavaScript" src="<%=keyboard%>" type="text/javascript" ></script>
    <script LANGUAGE="JavaScript" src="keyBoard/Tamil/tabber.js" type="text/javascript" ></script>

    <script LANGUAGE="JavaScript" src="keyBoard/Tamil/keyBoard.js" type="text/javascript" ></script>
    <form action="unl_result.jsp" method="post">
        <table width="100%" border="0"><!-- ******************************************* Table Start  [1]********************************************* -->

            <tr>
                <td width="15%" valign="top" align="left"><img src="images/logo.jpg" alt="" width="144" height="30" onmouseover="ddrivetip(<%="\'" + res.getString("india") + " " + res.getString("Search") + "\'"%>);"  onMouseout="hideddrivetip()"></td>

                <td align="left" width="50%"  valign="top">
                    <input  name="TextArea" type="text" value="<%=queryString%>" class="text" size="70%" maxlength="2048" onkeyup="getCaretPositions(this);"  onclick="getCaretPositions(this);" id="transl1" title="India Search Results" onkeydown="return SupressTextEcho(event);"/>
                </td>

                <td width="35%" align="left" valign="top">
                    <a href="options.jsp" title="" class="navigation"><font size="-1"><%=res.getString("Advance Search")%></font></a><br>
                    <a href="help.jsp" title="" class="navigation"><font size="-1"><%=res.getString("Help")%></font></a><br>
                    <% if (!Language.equals("en")) {  // Keyboard for Languages other than English %>
                    <a  class="navigation" id="show" href="javascript:keyb_change()" onclick="swapLayers('<%=layer%>','<%=res.getString("roman")%>','<%=res.getString("hidekeyboard")%>');return true;" ><u><%=res.getString("roman")%></u></a>

                    <%}%>
                </td>
            </tr>
            <tr>
                <td colspan="3" align="center" nowrap>
                    <div  id="<%=layer%>" style="align:left;display:none" >
                        <% if (!Language.equals("en")) {%>
                        <script language="javascript" type="text/javascript">

                            keyboard();

                        </script>
                        <%}%>
                    </div>
                </td>
            </tr>
            <td colspan="2" align="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="submit" name="Query" value="தேடு" style="width:80px;" ></td>
            <td>&nbsp;</td>
            </tr>
            <tr>
            </tr>
        </table>
        <table width="100%" border="0">
            <tr>
                <td>


                    <script LANGUAGE="JavaScript" type="text/javascript">hindi=<%="\"" + res.getString("tip_hindi") + "\""%></script>
                    <script LANGUAGE="JavaScript" type="text/javascript">english=<%="\"" + res.getString("tip_english") + "\""%></script>

                    <script LANGUAGE="JavaScript" type="text/javascript"> aH=<%="\"" + res.getString("Hindi") + "\""%></script>
                    <script LANGUAGE="JavaScript" type="text/javascript"> aE=<%="\"" + res.getString("English") + "\""%></script>
                </td>
            </tr>
            <tr>
                <td width="35%">
                    <%if (!lang.equals("hi") && !lang.equals("en")) {%>
                    <script LANGUAGE="JavaScript" type="text/javascript">currentLang=<%="\"" + res.getString("newtip") + "\""%></script>
                    <input type="hidden" name="trial10" value=<%=res.getString("newlang")%> >
                    <script LANGUAGE="JavaScript" type="text/javascript"> aP=document.form1.trial10.value</script>
                    <a class="tab"  onmouseover="ddrivetip(currentLang)" onMouseout="hideddrivetip()" ><%=res.getString("newlang")%></a>
                    <% }%>
                </td>
                <%long endtime = System.currentTimeMillis();
        double duration = (endtime - starttime) / 1000.0;%>
                <td width="73%" align="left">
                    <%=res.getString("result")%> <%=start * 3
                    %> <%=res.getString("to")%> <%=Totalsize%> <%=res.getString("Search")%> -- <font color="green"><u><%=queryString%></u>&nbsp;&nbsp;தேடல் நேரம்=<%=duration%></font>
                </td>
            </tr>
            <tr></table>
        <table width="100%" border="1">
            <tr>
                <%
        if(results.size()==0||results==null){
                out.println("<td>");
                String[] hits=snippet.snippet_generator("is empty","is empty","is empty","is empty");
                out.println("<h2>No Match Found</h2>");
                out.println("</td>");
        }//notFound
	else{

                if(More==0){
                if(results.size()<=3){%>
	        <style type="text/css">
                div.scroll
                {
                    width:100%;
                    height:400px;
                    overflow:scroll;
                }
        	</style>
	        <%}else{%>
        	<style type="text/css">
                div.scroll
                {
                    width:100%;
                    height:200px;
                    overflow:scroll;
                }
            </style>
            <%}//resultsSize check
    for(int i=0;i<results.size();i++){
        ArrayList getList=(ArrayList)results.get(i);
        if(i==3){
            out.println("</tr>");
            out.println("<tr>");
        }//i==3
            %>
            <td width="33%">
                <p align="center"><b><a href="unl_result.jsp?More=<%=i+1%>&Query=1&TextArea=<%=queryString%>">மேலும்</a></b></p>
                <div class="scroll"><%
                for(int j=start*3;j<getList.size();j++){
                         if (j < start * 3 + 3) {
                             Object[] temp = (Object[]) getList.get(j);
                             if(j==start*3){
                                    out.println("<p align=\"right\"><b><font color=\"Maroon\">"+temp[4]+"</font></b></p>");
                              }//j==start*3
                             String[] hits=snippet.snippet_generator(temp[8].toString().trim(),temp[1].toString().trim(),temp[0].toString().trim(),temp[4].toString().trim());
                             out.println(hits[0]+ "@" + temp[4]+"@<br/>");
                         } else {
                             break;
                         }//j<start*3+3
                    }//for
                 PageNos = Largecapacity / 3;
                 Reminder = Largecapacity % 3;
                 if (Reminder != 0) {
                     PageNos = PageNos + 1;
                 }//Reminder conditons
                    %> </div>
            </td>
            <% }//for
               }else{%>
            <tr>
            <div  id="panel" style="border-style:solid; border-width:1px; border-color:black;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px ">
            <p align="center"><b><a href="unl_result.jsp?More=<%=0%>&Query=1&TextArea=<%=queryString%>">முகப்பு</a></b></p>
                <%
                ArrayList getList=(ArrayList)results.get(More-1);
                                for(int j=start*10;j<getList.size();j++){
                                         if (j < start * 10 + 10) {
                                             Object[] temp = (Object[]) getList.get(j);
                                             String[] hits=snippet.snippet_generator(temp[8].toString().trim(),temp[1].toString().trim(),temp[0].toString().trim(),temp[4].toString().trim());
		                             out.println(hits[0]+ "@" + temp[4]+"@<br/>");
                                         } else {
                                             break;
                                         }
                                    }
                                 PageNos = getList.size() / 10;
                                 Reminder = getList.size() % 10;
                                 if (Reminder != 0) {
                                     PageNos = PageNos + 1;
                                 }

                }
	}
%>
                </tr>
        </table>
        <center>
            <%
            DisplayPage = start;
                       if(PageNos!=0){
                            out.println("<a href=\"unl_result.jsp?start=0&Query=1&TextArea="+queryString+"\">");
                            out.println("முதல்</a>   ");
                            }
                    if (DisplayPage ==1) {
                            DisplayPage = DisplayPage - 1;
                        }
                    if (DisplayPage >=2) {
                            DisplayPage = DisplayPage - 2;
                        }
                    start = 0;
                    for (int i = DisplayPage; i < PageNos; i++) {%>
            <a href="unl_result.jsp?start=<%=i%>&Query=1&TextArea=<%=queryString%>">
                <%
                if (i < DisplayPage + 10 ) {
                    out.print(i+1);
                    out.print("</a>   ");
                } else {
                    break;
                }
                }
                            if(PageNos!=0){
                                out.println("  <a href=\"unl_result.jsp?start="+(PageNos-1)+"&Query=1&TextArea="+queryString+"\">");
                                out.println("இறுதி </a>   ");
                               }
                %>
        </center>
    </form>

    <table width="100%" cellspacing="0" cellpadding="0">
        <tr>
            <td colspan="2" align="center">
                <%@ include file="footer.html"%>
            </td>
        </tr>
    </table>
		<%@ include file="bottom.html" %>
</body>
</html>
