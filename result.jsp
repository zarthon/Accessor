<%@ page 
  session="true"
  contentType="text/html"
  pageEncoding="UTF-8"
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

<%!//URL Encoding  
private String DecodeURL(String s) {
    StringBuffer sbuf = new StringBuffer () ;
    int l  = s.length() ;
    int ch = -1 ;
    int b, sumb = 0;
    for (int i = 0, more = -1 ; i < l ; i++) {
      /* Get next byte b from URL segment s */
      switch (ch = s.charAt(i)) {
	case '%':
	  ch = s.charAt (++i) ;
	  int hb = (Character.isDigit ((char) ch) 
		    ? ch - '0'
		    : 10+Character.toLowerCase((char) ch) - 'a') & 0xF ;
	  ch = s.charAt (++i) ;
	  int lb = (Character.isDigit ((char) ch) 
		    ? ch - '0'
		    : 10+Character.toLowerCase((char) ch) - 'a') & 0xF ;
	  b = (hb << 4) | lb ;
	  break ;
	case '+':
	  b = ' ' ;
	  break ;
	default:
	  b = ch ;
      }
      /* Decode byte b as UTF-8, sumb collects incomplete chars */
      if ((b & 0xc0) == 0x80) {			
	sumb = (sumb << 6) | (b & 0x3f) ;	
	if (--more == 0) sbuf.append((char) sumb) ; 
      } else if ((b & 0x80) == 0x00) {		
	sbuf.append((char) b) ;			
      } else if ((b & 0xe0) == 0xc0) {		
	sumb = b & 0x1f;
	more = 1;				
      } else if ((b & 0xf0) == 0xe0) {		
	sumb = b & 0x0f;
	more = 2;				
      } else if ((b & 0xf8) == 0xf0) {		
	sumb = b & 0x07;
	more = 3;				
      } else if ((b & 0xfc) == 0xf8) {
	sumb = b & 0x03;
	more = 4;		
      } else /*if ((b & 0xfe) == 0xfc)*/ {
	sumb = b & 0x01;
	more = 5;				
      }
      /* No need to test if the UTF-8 encoding is well-formed */
    }
    return sbuf.toString() ;
  }

  private String getIEOutput(String url,String sessionLang)
  {
          if(sessionLang.equals("en"))
                return "";
        try{
        BufferedReader url_map = new BufferedReader(new InputStreamReader(
                                        new FileInputStream("/home/clia/MultiLing-IE/urls_map")));
        String line;
        String fileName = "NOFILE";
        while((line=url_map.readLine())!=null)
        {
                String a[] = line.split("\t");
                if(a.length==2 && a[1].equals(url.replaceAll("/$","")))
                {
                        fileName = a[0];
                        break;
                }
        }
        url_map.close();
                if(new File("/home/clia/MultiLing-IE/"+sessionLang+"/output/"+fileName).isFile()){
                BufferedReader in = new BufferedReader(new InputStreamReader(
                                        new FileInputStream("/home/clia/MultiLing-IE/"+sessionLang+"/output/"+fileName)));
                String s = null;
                String IEOutput="";
                while((s = in.readLine()) != null) {
                        if(s.matches("^\\s*$"))
                                continue;
                        if(IEOutput.equals(""))
                                IEOutput = s;
                        else
                                IEOutput += System.getProperty("line.separator") + s;
                }
                in.close();
                return IEOutput;
                }
                else
                return "";
        }catch(Exception e)
        {return "";}
  }

%>
<%
  Configuration nutchConf = NutchConfiguration.get(application);
  
  /**
   * Number of hits to retrieve and cluster if clustering extension is available
   * and clustering is on. By default, 100. Configurable via nutch-conf.xml.
   */
  int HITS_TO_CLUSTER = 
    nutchConf.getInt("extension.clustering.hits-to-cluster", 100);

  /**
   * An instance of the clustering extension, if available.
   */
  OnlineClusterer clusterer = null;
  try {
    clusterer = new OnlineClustererFactory(nutchConf).getOnlineClusterer();
  } catch (PluginRuntimeException e) {
    // NOTE: Dawid Weiss
    // should we ignore plugin exceptions, or rethrow it? Rethrowing
    // it effectively prevents the servlet class from being loaded into
    // the JVM
  }
  
%>






<%
  NutchBean bean = NutchBean.get(application, nutchConf);
  // set the character encoding to use when interpreting request values 
  request.setCharacterEncoding("UTF-8");

  bean.LOG.info("query request from " + request.getRemoteAddr());

  // get query from request
  String queryString = request.getParameter("TextArea");
 // queryString = new String(queryString.getBytes("ISO-8859-1"),"UTF-8");
  if (queryString == null)
    queryString = "";
  String htmlQueryString = Entities.encode(queryString);
		FileOutputStream fout;
		fout = new FileOutputStream ("/var/lib/tomcat6/webapps/sandhan-gu/test.out");
		String tempinp[] = queryString.split(" ");
		for(int x=0; x < tempinp.length ;x++){
			new PrintStream(fout).println ("tok O:"+tempinp[x]);
			new PrintStream(fout).println ("stop I:"+tempinp[x]);
		}
		new PrintStream(fout).println ("tok I:"+queryString);
	fout.close();
  // a flag to make the code cleaner a bit.
  boolean clusteringAvailable = (clusterer != null);

  String clustering = "";
  if (clusteringAvailable && "yes".equals(request.getParameter("clustering")))
    clustering = "yes";

  int start = 0;          // first hit to display
  String startString = request.getParameter("start");
  if (startString != null)
    start = Integer.parseInt(startString);
  
  

int hitsPerPage = 10;
String sss;
int nop;
if((sss =  (String) session.getAttribute("hitsPerPage"))!=null){
	hitsPerPage = Integer.parseInt(sss);
}
  else if((sss = request.getParameter("hitsPerPage")) != null){
    nop = Integer.parseInt(sss);
    hitsPerPage = nop;
  }
  session.setAttribute("hitsPerPage",""+hitsPerPage);

  String hitsString = ""+hitsPerPage;
  //request.getParameter("hitsPerPage");
  //if (hitsString != null)
  //  hitsPerPage = Integer.parseInt(hitsString);

  int hitsPerSite = 0;                            // max hits per 

  String hitsPerSiteString = request.getParameter("hitsPerSite");
  if (hitsPerSiteString != null)
    hitsPerSite = Integer.parseInt(hitsPerSiteString);

  String sort = request.getParameter("sort");
  boolean reverse =
    sort!=null && "true".equals(request.getParameter("reverse"));

  String params = "&amp;hitsPerPage="+hitsPerPage
     +(sort==null ? "" : "&amp;sort="+sort+(reverse?"&amp;reverse=true":""));

  int hitsToCluster = HITS_TO_CLUSTER;            // number of hits to cluster

  // get the lang from request
  String queryLang = request.getParameter("lang");
  String sessionlang = request.getParameter("sessionlang");
  String parseText[] = new String[hitsPerPage];
 if(queryLang == null){
	queryLang = sessionlang;
 }
 String session_queryLang  = sessionlang; 
  
  DidYouMean dmy=new DidYouMeanFactory(nutchConf).getSpellChecker();
String spellCheckResult=dmy.getSuggestion(queryString,queryLang);
System.out.println("SpellingNow:"+spellCheckResult);
  Query query = Query.parse(queryString, queryLang,session_queryLang, nutchConf);
//  System.out.println("******GOT AT 210: ");
  bean.LOG.info("BOOLEAN QUERY============================"+query);
  bean.LOG.info("query: " + queryString);
  bean.LOG.info("lang: " + queryLang);

  String language =
    ResourceBundle.getBundle("org.nutch.jsp.search", request.getLocale())
    .getLocale().getLanguage();
  String requestURI = HttpUtils.getRequestURL(request).toString();
  String base = requestURI.substring(0, requestURI.lastIndexOf('/'));
  String rss = "../opensearch?query="+htmlQueryString
    +"&amp;hitsPerSite="+hitsPerSite+"&amp;lang="+queryLang+params;
%>
<%
  // To prevent the character encoding declared with 'contentType' page
  // directive from being overriden by JSTL (apache i18n), we freeze it
  // by flushing the output buffer. 
  // see http://java.sun.com/developer/technicalArticles/Intl/MultilingualJSP/
  out.flush();
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ taglib uri="http://jakarta.apache.org/taglibs/i18n" prefix="i18n" %>
<i18n:bundle baseName="org.nutch.jsp.search"/>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html">
<title>India Result Page</title>
<!-- For KeyBoard Activity  ********************************************************************-->
  
  
<link href="css/style.css" rel="stylesheet" type="text/css">

<script language="JavaScript" type="text/javascript">
<!--
function dynAnimation() {}
function clickSwapImg() {}
//-->
</script>



<script language="javascript">
<!--

function NewPage() {
  window.open( "track.jsp" );

}

//-->
</script>

<script language="JavaScript" type="text/javascript" >

var browserType;

if (document.layers) {browserType = "nn4"}
if (document.all) {browserType = "ie"}
if (window.navigator.userAgent.toLowerCase().match("gecko")) {
   browserType= "gecko"
}

function show_hide() 
{

    if(document.getElementById("hidden").value!="Hide")
    {
     document.getElementById("p").style.display = "";
     
     document.getElementById("hidden").value="Hide";
    }
    else if(document.getElementById("hidden").value=="Hide")
    { 
     document.getElementById("p").style.display = "none";
     
     document.getElementById("hidden").value=document.getElementById("state").value;

    }
}

</script><!-- End of Keyboard -->

<link href="css/style.css" rel="stylesheet" type="text/css">
<script LANGUAGE="JavaScript" type="text/javascript" SRC="keyBoard/tabber.js" ></script>
<script language="JavaScript" type="text/javascript" src="keyBoard/Script.js"></script>
<script language="javascript" type="text/javascript">
/******************************************************
* Tab Content function
*******************************************************/
function expandtab(tabcontentid, tabnumber){ //interface for selecting a tab (plus expand corresponding content)
var thetab=document.getElementById(tabcontentid).getElementsByTagName("a")[tabnumber]
if (thetab.getAttribute("rel"))
expandcontent(thetab)
}



/*****************************************************************
* End of Function 
*****************************************************************/
var panels = new Array('panel1', 'panel2','panel3');
var selectedTab = null;
function showPanel(tab, name)
{
if (selectedTab) 
{
selectedTab.style.backgroundColor = '';
selectedTab.style.paddingTop = '';
selectedTab.style.paddingBottom = '';
}
selectedTab = tab;
selectedTab.style.backgroundColor = 'white';
selectedTab.style.paddingTop = '6px';



for(i = 0; i < panels.length; i++)
{
document.getElementById(panels[i]).style.display = (name == panels[i]) ? 'block':'none';
}


return false;
}

/**********************************************************
*for two tab
*************************************************************/
var panelN = new Array('panel1', 'panel2');
var selectedTab = null;
function showPanel2(tab, name)
{
if (selectedTab) 
{
selectedTab.style.backgroundColor = '';
selectedTab.style.paddingTop = '';
selectedTab.style.paddingBottom = '';
}
selectedTab = tab;
selectedTab.style.backgroundColor = 'white';
selectedTab.style.paddingTop = '6px';



for(i = 0; i < panelN.length; i++)
{
document.getElementById(panelN[i]).style.display = (name == panelN[i]) ? 'block':'none';
}


return false;
}



</script>
<link href="css/style.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="css/tp.css">
<script type="text/javascript" src="js/tp.js"></script>
<script language="javascript" type="text/javscript" >
   


<!-- Style Sheet for Page Numbers-->

    .mymenubottom a:link  { color:#0000FF; } 
    .mymenubottom a:visited { color: #0000FF; ; } 
</script>

<%      
         String Language = sessionlang;
         String lang= sessionlang;
         if(lang == null)
         {
            lang = "en";
         }
         ResourceBundle res=ResourceBundle.getBundle("MyResource",new Locale(sessionlang,"IN")); 
         request.setCharacterEncoding("UTF-8");

%>
<%
   // how many hits to retrieve? if clustering is on and available,
   // take "hitsToCluster", otherwise just get hitsPerPage
   int hitsToRetrieve = (clusteringAvailable && clustering.equals("yes") ? hitsToCluster : hitsPerPage);

   if (clusteringAvailable && clustering.equals("yes")) {
     bean.LOG.info("Clustering is on, hits to retrieve: " + hitsToRetrieve);
   }

   // perform query
    // NOTE by Dawid Weiss:
    // The 'clustering' window actually moves with the start
    // position.... this is good, bad?... ugly?....
   Hits hits;
   try{
     hits = bean.search(query, start + hitsToRetrieve, hitsPerSite, "site",
                        sort, reverse);
   } catch (IOException e){
     hits = new Hits(0,new Hit[0]);	
   }
   int end = (int)Math.min(hits.getLength(), start + hitsPerPage);
   int length = end-start;
   int realEnd = (int)Math.min(hits.getLength(), start + hitsToRetrieve);

   Hit[] show = hits.getHits(start, realEnd-start);
   HitDetails[] details = bean.getDetails(show);
   Summary[] summaries = bean.getSummary(details, query);
   bean.LOG.info("total hits: " + hits.getTotal());
   //***********************************************
   //MY CODE STARTS HERE                           *
   //***********************************************
	bean.LOG.info("hitsPerPage "+hitsPerPage+" End "+end+" realEnd "+realEnd+" length "+length+" start "+start);
	int totalHits = (int)hits.getTotal();
	int numberOfPages = 0;
	if(totalHits > hitsPerPage){
		numberOfPages = totalHits/hitsPerPage;
		
	}
	if(totalHits%hitsPerPage > 0){
			numberOfPages += 1;
	}
        int currentPage = (start/hitsPerPage + 1);
	bean.LOG.info("Number Of Pages " + numberOfPages+" Current Page "+ (start/hitsPerPage + 1)+" "+hitsString);
   //************************************************
   //MY CODE ENDS HERE                              *
   //************************************************
%>
<% //Snippet Translation JU
                                                String ret_TS = "";
						if ( totalHits > 0 ) {
							//String queryLang = (String)nutchConf.getObject("querylang");
		                                        //String sessionQueryLang = (String)nutchConf.getObject("session_querylang");
		                                        if(!session_queryLang.equals(queryLang))
		                                        {
		                                                String engSnippet = "";
		                                                for(int i = 0; i< length; i++)
								{
									HitDetails detail = details[i];
									String url = detail.getValue("url");
					                                if(url.contains(".js")||url.contains(".jsp"))
			            		                            continue;
		                                                        engSnippet += summaries[i].toString() + "\n snippet_end_clia \n";
								}
		                                                
		                                                //CLIATranslation cT = new CLIATranslation();
		                                              
		                                                if(!session_queryLang.equals(queryLang))
		                                                        ret_TS = bean.getSnippetTranslator().smt_snippet_translation(engSnippet, queryLang, session_queryLang);
		                                        }
						}
%>
<% 
//	String keyboard="keyBoard/"+lang+"_kboards.js";
	String layer = res.getString("layer");
%>
<% String keyboard="keyBoard/"+Language+"_keyboards.js";%>
                <script LANGUAGE="JavaScript" src="<%=keyboard%>" type="text/javascript" ></script>
<script language="javascript" type="text/javascript">
	function hidePrevious(){
		document.getElementById("preButton").disabled=true;
	}	
	function hideNext(){
		document.getElementById("nextButton").disabled=true;
	}	
</script>

<script language="javascript" type="text/javascript">
var win=null;
function NewWindow(mypage,myname,w,h,scroll,pos){
if(pos=="random"){LeftPosition=(screen.width)?Math.floor(Math.random()*(screen.width-w)):100;TopPosition=(screen.height)?Math.floor(Math.random()*((screen.height-h)-75)):100;}
if(pos=="center"){LeftPosition=(screen.width)?(screen.width-w)/2:100;TopPosition=(screen.height)?(screen.height-h)/2:100;}
else if((pos!="center" && pos!="random") || pos==null){LeftPosition=screen.width-w;TopPosition=120}
settings='width='+w+',height='+h+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',location=no,directories=no,status=yes,menubar=no,toolbar=no,resizable=yes';
win=window.open(mypage,myname,settings);}
</script>
						<script language="javascript" type="text/javascript">
							function getSummary(i,qu,title){
								document.forms['formname'].id.value=i;
								document.forms['formname'].query.value=qu;
								document.forms['formname'].title.value=title;
								document.forms['formname'].submit();
							}
						</script>

<SCRIPT TYPE="text/javascript" LANGUAGE="javascript">


function waitPreloadPage() { 
alert("hi");
if (document.getElementById){
document.getElementById('prepage').style.visibility='hidden';
}else{
if (document.layers){ 
document.prepage.visibility = 'hidden';
}
else { 
document.all.prepage.style.visibility = 'hidden';
}
}
}

 </SCRIPT>

</head>

<body  bgcolor="#333333"onload="waitPreloadPage();" onKeyDown="CatchKeyCodeDn(event);" onKeyUp="CatchKeyCodeUp(event);" >
<DIV id="prepage" style="position:absolute; font-family:arial; font-size:16; left:0px; top:0px; background-color:white; layer-background-color:white; height:100%; width:100%;"> 
<TABLE width=100%><TR><TD><B>Loading ... ... Please wait!</B></TD></TR></TABLE>
</DIV>


<form name="form1" action="redirect.jsp?<%=Language%>" method="get">
                                            <input type="hidden" name="sessionlang" value="<%=sessionlang%>">
 		
                <script LANGUAGE="JavaScript" src="<%=keyboard%>" type="text/javascript" ></script>
    
               <script LANGUAGE="JavaScript" src="keyBoard/tabber.js" type="text/javascript" ></script>
  <script LANGUAGE="JavaScript" src="keyBoard/keyBoard.js" type="text/javascript" ></script>

<table width="100%" border="0"><!-- ******************************************* Table Start  [1]********************************************* -->

          <tr>
                <td width="15%" valign="top" align="left"><img src="images/logo.jpg" alt="" width="144" height="30" onmouseover="ddrivetip(<%="\'"+res.getString("india")+" "+res.getString("Search")+"\'"%>);"  onMouseout="hideddrivetip()"></td>
                 <td align="left" width="50%"  valign="top"> <input  name="TextArea" type="text" value="<%=htmlQueryString%>" size="70%" maxlength="2048" onkeyup="getCaretPositions(this);"  onclick="getCaretPositions(this);" id="textfield" title="India Search Results" onkeydown="return SupressTextEcho(event);" style="height: 22px; font-size: 11pt;"></td>
                 <td width="35%" align="left" valign="top"> <a href="options.jsp?sessionlang=<%=sessionlang%>" title="" class="navigation"><font size="-1"><%=res.getString("Advance Search") %></font></a><br>
                          <a href="output_help.jsp?sessionlang=<%=sessionlang%>" title="" class="navigation"><font size="-1"><%=res.getString("Help")%></font></a><br>
                       <% if(!Language.equals("en")){ %> 
	        <A href="javascript:keyb_change()" onclick="swapLayers('<%=layer%>','<%=res.getString("roman")%>','<%=res.getString("hidekeyboard")%>'); return false;" id="show" class="navigation"><font color="#008080" size="-1"><%=res.getString("roman")%></font></A></td><% }%> <br>
          </tr>
	<tr >                  
               <td width="15%" height="1" valign="top">               </td>
			<td><p align="left">                             
				<DIV id="<%=layer%>" style="align:left;display:none">
			   		<script language="javascript" type="text/javascript"> keyboard()
					</script>
				</DIV>
				<DIV id="k"> </DIV>
				<input type="hidden" id="hidden" value="<%=res.getString("roman")%>">
                                <input type="hidden" id="hidden_1" value="<%=res.getString("hidekeyboard")%>">
				<input id="state" type="hidden" value='<%=res.getString("roman")%>'>
				<p></p>
			</td>
								  <td width="35%"></td>
        </tr>
		<tr id="p" style="display:none"> 
                             <td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p></td>
							  <td></td>
							  <td width="35%"></td>
    		</tr>
		<tr>
                              <td colspan="2" align="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							  <input name="btnSearch" type="submit" value='<%=res.getString("Search")%>' style="width:80px;" >
							  <input type="button" value="Track"  onClick="NewPage()" >
                              </td>
							  <td>&nbsp;</td>
							  
  </tr>
  <tr>
      <td align="center" colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong><%=res.getString("Search") %> :</strong> <input name="abc" title="Search in this site" type="radio" value="Site" checked="checked" > <span title="Search in this site"><%=res.getString("with this Engine") %></span>&nbsp;<input align="bottom" title="Search in WWW" name="abc" type="radio" value="WWW"><span title="Search in WWW"><%=res.getString("with other Engines")%></span></td>
  </tr>
<tr>
 <td width="15%" height="1" valign="top">               </td>
 <td colspan="2"  ><font size="3" color="red" ><%=res.getString("Did you mean :")%>&nbsp; <a href="redirect.jsp?sessionlang=<%=sessionlang%>&TextArea=<%=spellCheckResult%>&btnSearch=<%=res.getString("Search")%>&abc=Site&hitsPerPage=10" <font size=4><i><%=spellCheckResult%></i>
<td>
</tr>
</table>
<input type="hidden" name="hitsPerPage" value="<%=hitsPerPage%>">
		  <table width="70%"  align="center">
          <tr>
                  <td>

           
                            <script LANGUAGE="JavaScript" type="text/javascript">hindi=<%="\""+res.getString("tip_hindi")+"\""%></script> 
                            <script LANGUAGE="JavaScript" type="text/javascript">english=<%="\""+res.getString("tip_english")+"\""%></script> 

                            <script LANGUAGE="JavaScript" type="text/javascript"> aH=<%="\""+res.getString("Hindi")+"\""%></script> 
                            <script LANGUAGE="JavaScript" type="text/javascript"> aE=<%="\""+res.getString("English")+"\""%></script> 
            </td>
          </tr>
        <tr>
                <td width="45%" style="border-bottom: 1px solid cyan; padding: 5px;">
			<% if(!lang.equals("en")){%>
                    <a href="result.jsp?TextArea=<%=htmlQueryString%>&amp;sessionlang=<%=sessionlang%>&amp;lang=hi&amp;hitsPerPage=<%=hitsPerPage%>" class="tab" id="hi_tab" "onmouseover="ddrivetip(hindi);" onMouseout="hideddrivetip()"><%=res.getString("Hindi")%></a>
			<%}%>
                    <a href="result.jsp?TextArea=<%=htmlQueryString%>&amp;sessionlang=<%=sessionlang%>&amp;lang=en&amp;hitsPerPage=<%=hitsPerPage%>" class="tab" id="en_tab" "onmouseover="ddrivetip(english);" onMouseout="hideddrivetip()"><%=res.getString("English")%></a>

                    <%if(!lang.equals("hi")&&!lang.equals("en")){%>
                    <script LANGUAGE="JavaScript" type="text/javascript">currentLang=<%="\""+res.getString("newtip")+"\""%></script>
                    <input type="hidden" name="trial10" value=<%=res.getString("newlang")%> > 
                    <script LANGUAGE="JavaScript" type="text/javascript"> aP=document.form1.trial10.value</script> 
                   <a href="result.jsp?TextArea=<%=htmlQueryString%>&amp;sessionlang=<%=sessionlang%>&amp;lang=<%=lang%>&amp;hitsPerPage=<%=hitsPerPage%>" class="tab" id="lang_tab" onmouseover="ddrivetip(currentLang)" onMouseout="hideddrivetip()" ><%=res.getString("newlang")%></a>
                    <% }
			if(queryLang.equals("hi")){ %>
				<script lang="JavaScript" type="text/javascript">
					document.getElementById("hi_tab").style.backgroundColor = 'white';
				</script>				
			<%}else if(queryLang.equals("en")){%>
				<script lang="JavaScript" type="text/javascript">
					document.getElementById("en_tab").style.backgroundColor = 'white';
				</script>				
			<%}else{%>
				<script lang="JavaScript" type="text/javascript">
					document.getElementById("lang_tab").style.backgroundColor = 'white';
				</script>				
			<%} %>

		
                </td>
                <td width="33%" align="center" style="border-bottom: 1px solid cyan; padding: 5px;">
			<% 	int rStart=0; 
				if(end>1){
					rStart = start+1;
				}
			%>
                     <%=res.getString("result")%> <%=rStart%> <%=res.getString("to")%> <%=end%> <%=res.getString("total")%> <%=totalHits%> <%=res.getString("Search")%> -- <u><%=request.getParameter("TextArea")%></u>&nbsp;&nbsp;
                </td>
        </tr>
        
        <tr>

            <td width="100%" colspan="2" style="border-left: 1px solid cyan; padding: 5px;">
                <div  id="panel" style="border-style:solid; border-width:0px; padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:5px;width:600px ">
                   <br>
                                       
						<% HashSet highlight = new HashSet();
					//	System.out.println("GOT at 588");
						String qu = "";
						Set<org.apache.lucene.index.Term> termset = new HashSet<org.apache.lucene.index.Term>();
						BooleanQuery bquery = (BooleanQuery) nutchConf.getObject("formated_query");
						bquery.extractTerms(termset);
						
						Iterator<org.apache.lucene.index.Term> iterator = termset.iterator();
						
						while(iterator.hasNext()) {
							org.apache.lucene.index.Term term = iterator.next();
							String fieldName = term.field();

							//To bypass Language Field
							if(fieldName.equals("lang"))
								continue;

							String token = term.text();
							token = token.trim();
							if(!highlight.contains(token))
							{
								highlight.add(token);
									qu=qu+token+" ";
							}
						}
						session.setAttribute("configuration",nutchConf);
                                            %>
                                            <%
						int pfind = 0, find = 0;
					//	System.out.println("GOT at 614");
                                            for (int i = 0; i < length; i++) {      // display the hits
                                            Hit hit = show[i];
                                            HitDetails detail = details[i];
                                            String title = detail.getValue("title");
                                            String url = detail.getValue("url");
					    if(url.contains(".js")||url.contains(".jsp"))
					   	continue;
                                            String idx="";
                                            String id = "idx=" + hit.getIndexNo() +"&amp;id=" + hit.getIndexDocNo()+"&query="+queryString;
                                            String summary = summaries[i].toHtml(true);
                                            String caching = detail.getValue("cache");
                                            boolean showSummary = true;
                                            boolean showCached = true;
                                            if (caching != null) {
                                            showSummary = !caching.equals(Nutch.CACHING_FORBIDDEN_ALL);
                                            showCached = !caching.equals(Nutch.CACHING_FORBIDDEN_NONE);
                                            }

                                            if (title == null || title.equals("")) {     
                                            	title = url;
                                            }
						//Distinguish translated snippet JU
                                            String translatedSnippet = "";
                                            if(!(sessionlang.equals(queryLang)) && queryLang.equals("en")) {
                                                find = ret_TS.indexOf("snippetendclia", pfind);
                              	                  if(find >= 0) {
                                                        translatedSnippet = ret_TS.substring(pfind,find);
                                                        pfind = find+14;
							
                                                }
                                            }
					    else if(!(sessionlang.equals(queryLang)) && queryLang.equals("hi")) {
                                                find = ret_TS.indexOf("snippet_end_clia", pfind);
                                                if(find >= 0) {
                                                        translatedSnippet = ret_TS.substring(pfind,find);
                                                        pfind = find+16;
                                                }
                                            }
					
					if(title.equals(url)){
						title = Entities.encode(DecodeURL(title));
					}
                                            %>
                                            <b><FONT size="3"><a class="title" href="<%=url%>"><%=title%></a></FONT></b>
                                            <%@ include file="more.jsp" %>
                                            <% if (showSummary) {// if summary is to be shown
						//session.setAttribute(i+"",bean.getParseText(detail).getText());
						//String parseText = bean.getParseText(detail).getText();
					    %>
                                            <br><FONT size="2"><%=summary%></FONT>
                                            <%
                                                if(!(sessionlang.equals(queryLang)))
                                                {
                                                %>
                                                <br> <FONT size="3"> <%=translatedSnippet %></FONT>
                                               <%} }// if summary shown completes here %>
					    <br>
					    <span class="url"><FONT size="2" color="green"><%=Entities.encode(DecodeURL(url))%></FONT></span>
                                            <%
                                            if (showCached) {
                                            %><FONT size="2">(<a href="cached.jsp?<%=id%>"><%=res.getString("cached")%></a>)</FONT> <%
                                            }
                                            %>
					    <%
						String IEOutput=""; 
						if(queryLang.equals("en")){
							 IEOutput = getIEOutput(url,sessionlang);
							 if(IEOutput!=null && !IEOutput.equals("")){
					    %>
					    <Font size="2">
					    (<a href="ieTemplet.jsp?url=<%=url%>&amp;qLang=<%=sessionlang%>" onclick="showTemplate(<%=i%>);return false">IE Template</a>)</FONT>
					    <%	}//		    out.println(IEOutput+"<br>");
						}
					    %>
					    <%if(showSummary){
						String temp = bean.getParseText(detail).getText();						
						String [] tmp = temp.split("\"");
						temp = "";
						for(int j=0;j<tmp.length;j++)
							temp += tmp[j];
						temp = temp.replace('"',' ');
						temp = temp.replace('<',' ');
						temp = temp.replace('>',' ');
						temp = temp.replaceAll("\"","");
						parseText[i] = temp;
					    %>
					<FONT size="2"><a  onmouseover="ShowContent(<%=i%>); return true;" onmouseout="HideContent(<%=i%>); return true;"
   href="javascript:ShowContent(<%=i%>)"><%=res.getString("summary")%></a>)</FONT>
		<div id=<%=i%> style=" font-family: Tahoma;font-size: 12px;display: none;position: absolute;width: 300px; z-index: 60; border-top:outset 1px gray;border-left:outset 1px gray;border-bottom:outset 1px black;border-right:outset 1px black">
						
					<img src="images/logo.jpg" alt="" width="144" height="30">
						  <b>Summary</b>
	
								  <hr>
								
								  <br><%=title%></br>		
						<br>		
						<%
						  SummaryExtraction summaryEx = new SummaryExtraction(nutchConf);
						  SummaryGeneration summarygen = new SummaryGeneration(nutchConf);
						  String generatedSumm=summarygen.generateSummary(parseText[i],qu,title);
						  generatedSumm=generatedSumm.substring(0,200);
						%>
<Font size="2">
					  <%= generatedSumm%></br>
						    </p>

						</div>
				            <%}%>

<script type="text/javascript" language="JavaScript">
var cX = 0; var cY = 0; var rX = 0; var rY = 0;
var fadeOpacity  = new Array();
var fadeTimer    = new Array();
var fadeInterval = 100;  // milliseconds

function fade(o,d) {
  // o - Object to fade in or out.
  // d - Display, true =  fade in, false = fade out

  var obj = document.getElementById(o);

  if((fadeTimer[o])||(d&&obj.style.display!='block')||(!d&&obj.style.display=='block')) {
    if(fadeTimer[o])
      clearInterval(fadeTimer[o]);
    else
      if(d) fadeOpacity[o] = 0;
      else  fadeOpacity[o] = 9;
  
    obj.style.opacity = "."+fadeOpacity[o].toString();
    obj.style.filter  = "alpha(opacity="+fadeOpacity[o].toString()+"0)";
    
    if(d) {
      obj.style.display = 'block';
      fadeTimer[o] = setInterval('fadeAnimation("'+o+'",1);',fadeInterval);
    } else
      fadeTimer[o] = setInterval('fadeAnimation("'+o+'",-1);',fadeInterval);
  }
}

function fadeAnimation(o,i) {
  // o - o - Object to fade in or out.
  // i - increment, 1 = Fade In

  var obj = document.getElementById(o);
  fadeOpacity[o] += i;
  obj.style.opacity = "."+fadeOpacity[o].toString();
  obj.style.filter  = "alpha(opacity="+fadeOpacity[o].toString()+"0)";

  if((fadeOpacity[o]=='9')|(fadeOpacity[o]=='0')) {
    if(fadeOpacity[o]=='0')
      obj.style.display = 'none';
    else {
      obj.style.opacity = "1";
      obj.style.filter  = "alpha(opacity=100)";
    }

    clearInterval(fadeTimer[o]);
    delete(fadeTimer[o]);
    delete(fadeTimer[o]);
    delete(fadeOpacity[o]);
  }  
}

function UpdateCursorPosition(e){ cX = e.pageX; cY = e.pageY;}

function UpdateCursorPositionDocAll(e){ cX = event.clientX; cY = event.clientY;}

if(document.all) { document.onmousemove = UpdateCursorPositionDocAll; }
else { document.onmousemove = UpdateCursorPosition; }

function AssignPosition(d) {
if(self.pageYOffset) {
	rX = self.pageXOffset;
	rY = self.pageYOffset;
	}
else if(document.documentElement && document.documentElement.scrollTop) {
	rX = document.documentElement.scrollLeft;
	rY = document.documentElement.scrollTop;
	}
else if(document.body) {
	rX = document.body.scrollLeft;
	rY = document.body.scrollTop;
	}
if(document.all) {
	cX += rX; 
	cY += rY;
	}
d.style.left = 850 + "px"; //Shifts the position of div
d.style.top = (cY-30) + "px";
}

function HideContent(d) {
if(d.length < 1) { 
return; 
}
document.getElementById(d).style.display = "none";
}

function ShowContent(d) {
if(d.length < 1) { return; }
var dd = document.getElementById(d);
AssignPosition(dd);
fade(d,true);

}
function ReverseContentDisplay(d) {
if(d.length < 1) { return; }
var dd = document.getElementById(d);
AssignPosition(dd);
if(dd.style.display == "none") { dd.style.display = "block"; }
else { dd.style.display = "none"; }
}
</script>


						<DIV id="<%=i%>" style="display:none">
						<span style="background-color: #FFFF00"><FONT size="2">	<%=IEOutput%></FONT></span>
						</DIV>
                                            <!--(<a href="explain.jsp?<%=id%>&amp;query=<%=URLEncoder.encode(queryString, "UTF-8")%>&amp;lang=<%=queryLang%>"><i18n:message key="explain"/></a>)
                                            (<a href="anchors.jsp?<%=id%>&amp;lang=<%=queryLang%>"><i18n:message key="anchors"/></a>) -->
                                            <% if (hit.moreFromDupExcluded()) {
                                            String more =
                                            "query="+URLEncoder.encode("site:"+hit.getDedupValue()+" "+queryString, "UTF8")
                                            +params+"&amp;hitsPerSite="+0
                                            +"&amp;lang="+queryLang
                                            +"&amp;clustering="+clustering;%>
                                            (<a href="result.jsp?<%=more%>"><i18n:message key="moreFrom"/>
                                            <%=hit.getDedupValue()%></a>)
                                            <% } %>
                                            <br><br>
                                            <% } %>
					<% if(length<1){%>
						<h3> No Results Found </h3>
					<%}%>

                                             </div> 
					</td>
                                             <% if (clustering.equals("yes") && length != 0) { %>
                                      		<!-- clusters -->
                                      		<td style="border-right: 1px dotted gray;" />&#160;</td>

                                      		<td align="left" valign="top" width="25%">
                                            		<%@ include file="cluster.jsp" %>
                                      		</td>
					     <%}%>
	</tr>
	</table>

    </form>
						<form name="formname" method="POST" action="summary.jsp" target="summary" 
							onsubmit="NewWindow(this.target,'Summary','640','480','yes','center');return true;">
							<%for (int i = 0; i < length; i++) {   %>
								<input type="hidden" name="<%=i%>" value="<%=parseText[i]%>"/>
							<% } %>
							<input type="hidden" name="id" value=""/>
							<input type="hidden" name="query" value=""/>
							<input type="hidden" name="title" value=""/>
						</form>
        <table width="80%" align="center"><!-- *************************************** Table Start  [4]**************************************** -->
        
                <tr>
                        <td align="right">
                                <%
					String previous = "< "+res.getString("previous");
                                      //  if(start >= hitsPerPage){
                                %>

<form name="previous" action="result.jsp" method="get">
                                            <input type="hidden" name="TextArea" value="<%=htmlQueryString%>">
                                            <input type="hidden" name="lang" value="<%=queryLang%>">
                                            <input type="hidden" name="sessionlang" value="<%=sessionlang%>">
                                            <input type="hidden" name="start" value="<%=start-hitsPerPage%>">	
                                            <input type="hidden" name="hitsPerPage" value="<%=hitsPerPage%>">
                                            <input type="hidden" name="hitsPerSite" value="<%=hitsPerSite%>">
                                            <input type="hidden" name="clustering" value="<%=clustering%>">
                                            <input type="submit" value="<%=previous%>" id="preButton">
                                            <% if (sort != null) { %>
                                                <input type="hidden" name="sort" value="<%=sort%>">
                                                <input type="hidden" name="reverse" value="<%=reverse%>">    
                                            <% } %>
</form>
                               <%// }else{ 
				if(start<hitsPerPage){
				%> 
			   		<script language="javascript" type="text/javascript"> hidePrevious()
					</script>
				<%} %>
                        </td>

                        <td align="center" width="45%" class="mymenubottom">
                                <% if(numberOfPages>0){
                                        int cnt = 0;
                                        int startCount = 10*((start)/(10*hitsPerPage)); //Stores the Value of Starting Page Number
					int i = startCount;
                                        bean.LOG.info("START COUNT: "+startCount);
					/* For Going to Set of Previous 10 Pages Directly */
					if(i>=10){
				%>
						<a href="result.jsp?TextArea=<%=htmlQueryString%>&amp;start=<%=hitsPerPage*(i-1)%>&amp;sessionlang=<%=sessionlang%>&amp;lang=<%=queryLang%>&amp;hitsPerPage=<%=hitsPerPage%>">...</a>
				<%	}
                                        for(;cnt<10 && i<numberOfPages; i++,cnt++){
                                                start = i*hitsPerPage;

                                                if(i == currentPage-1)
                                                {%>
                                                <a href="result.jsp?TextArea=<%=htmlQueryString%>&amp;start=<%=start%>&amp;sessionlang=<%=sessionlang%>&amp;lang=<%=queryLang%>&amp;hitsPerPage=<%=hitsPerPage%>" ><span style="background-color: #FFFF00"><FONT size="2"><%=i+1%></FONT></span></a>            
                                                <%}else{
                                        //bean.LOG.info("start value:"+start);			
                                		%>
                                <a href="result.jsp?TextArea=<%=htmlQueryString%>&amp;start=<%=start%>&amp;hitsPerPage=<%=hitsPerPage%>&amp;sessionlang=<%=sessionlang%>&amp;lang=<%=queryLang%>"><FONT size="2"><%=i+1%></FONT></a>
                                <%		  }
					}
					/* For Going to Set of Next 10 Pages Directly*/
					if(i<numberOfPages){
				%>
				<a href="result.jsp?TextArea=<%=htmlQueryString%>&amp;start=<%=i*hitsPerPage%>&amp;sessionlang=<%=sessionlang%>&amp;lang=<%=queryLang%>&amp;hitsPerPage=<%=hitsPerPage%>">...</a>
				<%	}	
                                  }
                                %>
                        </td>

                        <td align="left">
				<%
					String next = res.getString("next")+" >";
				%>
                                    <form name="next" action="result.jsp" method="get">
                                    <input type="submit" value="<%=next%>" id="nextButton">
                                <%
                                if ((hits.totalIsExact() && end < hits.getTotal()) // more hits to show
                                    || (!hits.totalIsExact() && (hits.getLength() > start+hitsPerPage))) {
                                %>
                                    <input type="hidden" name="TextArea" value="<%=htmlQueryString%>">
                                    <input type="hidden" name="lang" value="<%=queryLang%>">
                                    <input type="hidden" name="sessionlang" value="<%=sessionlang%>">
                                    <input type="hidden" name="start" value="<%=end%>">
                                    <input type="hidden" name="hitsPerPage" value="<%=hitsPerPage%>">
                                    <input type="hidden" name="hitsPerSite" value="<%=hitsPerSite%>">
                                    <% String ss = ">"; %>
                                    <input type="hidden" name="clustering" value="<%=clustering%>">
                                <% if (sort != null) { %>
                                    <input type="hidden" name="sort" value="<%=sort%>">
                                    <input type="hidden" name="reverse" value="<%=reverse%>">
                                <% } %>
                                    </form>
                                <%
                                    }else{%> 
			   		<script language="javascript" type="text/javascript"> hideNext()
					</script>
					
				<%}if ((!hits.totalIsExact() && (hits.getLength() <= start+hitsPerPage))){
                                %>
                        </td>
                        
                                <% } %>
                </tr>
                
        </table><!-- **************************************************** Table End  [4]************************************************* -->
<table width="100%" cellspacing="0" cellpadding="0">
			<tr>
				<td colspan="3" align="center">
					<%@ include file="footer.html" %>
				</td>
			</tr>
</table>
		<br>
		<%@ include file="bottom.html" %>

</body>
</html>
