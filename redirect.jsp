<%@page session="true" 
   contentType="text/html"
   pageEncoding="utf-8"
 import="java.io.*"
  import="java.util.*"
  import="java.net.*"
  
  import="org.apache.lucene.search.BooleanQuery"

  import="org.apache.nutch.html.Entities"
  import="org.apache.nutch.metadata.Nutch"
  import="org.apache.nutch.searcher.*"
  import="org.apache.nutch.plugin.*"
  import="org.apache.nutch.clustering.*"
  import="org.apache.hadoop.conf.*"
  import="org.apache.nutch.util.NutchConfiguration"
  import ="org.apache.nutch.didyoumean.*"
  import="org.apache.nutch.summary.generation.*"
%>

<%
  request.setCharacterEncoding("UTF-8");
  Configuration nutchConf = NutchConfiguration.get(application);
//     DidYouMean dmy=new DidYouMeanFactory(nutchConf).getSpellChecker();
String queryString=request.getParameter("TextArea");
String sessionLang=request.getParameter("sessionlang");
//String spellCheckResult=dmy.getSuggestion(queryString,sessionLang);
String spellCheckResult = "";
System.out.println("SpellingNow:"+spellCheckResult);
if(spellCheckResult.equals(queryString)){
spellCheckResult="";
}
	
	session.setAttribute("spellResult", spellCheckResult);
       
System.out.println("************QUERY STRING****************"+request.getParameter("TextArea"));
		
		if(request.getParameter("abc")!=null){
		
			if(request.getParameter("abc").equalsIgnoreCase("Site")){
				RequestDispatcher rd = request.getRequestDispatcher("result_new.jsp");
				rd.forward(request,response);
			}
			else{
				try{	RequestDispatcher rd = request.getRequestDispatcher("metaresult.jsp");
					rd.forward(request,response);
				}catch(Exception e){
					System.out.println("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
					e.printStackTrace();
				}
			}
		}
		else{
			String language = request.getParameter("sessionlang");
			response.sendRedirect("locale.jsp?"+language);
		}
%>
<input type="hidden" id="spellResult" name="spellResult" value="<%=spellCheckResult%>" >
