<%@ page 
  session="false"
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"

  import="java.io.*"
  import="java.util.*"
  import="java.net.*"

  import="org.apache.nutch.html.Entities"
  import="org.apache.nutch.metadata.Nutch"
  import="org.apache.nutch.searcher.*"
  import="org.apache.nutch.plugin.*"
  import="org.apache.nutch.clustering.*"
  import="org.apache.hadoop.conf.*"
  import="org.apache.nutch.util.NutchConfiguration"

  import="org.apache.nutch.summary.clia.*"

%>
<%!
 private String getIEOutput(String url,String sessionLang)
  {
          if(sessionLang.equals("en"))
                return "";
        try{
        BufferedReader url_map = new BufferedReader(new InputStreamReader(
                                        new FileInputStream("MultiLing-IE/urls_map")));
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
                if(new File("MultiLing-IE/"+sessionLang+"/output/"+fileName).isFile()){
                BufferedReader in = new BufferedReader(new InputStreamReader(
                                        new FileInputStream("MultiLing-IE/"+sessionLang+"/output/"+fileName)));
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

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Summary</title>
</head>
<%! String summ=new String(); %>
<%
	Configuration nutchConf = NutchConfiguration.get(application);
	request.setCharacterEncoding("UTF-8");
	HttpSession session=request.getSession();
	FullSummary fsumm = new FullSummary(nutchConf);
%>

<body>
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
<table align="center" width="100%">
	<tr>
		<td align="left" valign="bottom">
		<img src="img/logo.png" alt="" width="144" height="30"><span  style=" font-size:20px; color:#FF9966">Information Template</span>
		</td>
	</tr>
	<tr>
		<td align="center">
		<hr>
		</td>
	</tr>	
	<tr>
		<td align="center">
			<%String url = request.getParameter("url");
			  String qLang = request.getParameter("qLang");
			%>
			<%=getIEOutput(url,qLang)%>
		</td>
	</tr>
</table>
<center>
	
</center>
</body>
</html>
