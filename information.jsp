<%@page
    contentType="text/html"
    import ="java.io.*"
    import ="java.util.*"
    import ="java.sql.*"
    import ="javax.servlet.*"
    import ="javax.servlet.http.*"

    %>
<%@ page session="true" %>
<html>
    <head>
    <script type="text/javascript" src="jquery.min.js"></script>

<script type="text/javascript" src="ddaccordion.js">

/***********************************************
* Accordion Content script- (c) Dynamic Drive DHTML code library (www.dynamicdrive.com)
* Visit http://www.dynamicDrive.com for hundreds of DHTML scripts
* This notice must stay intact for legal use
***********************************************/

</script>


<script type="text/javascript">


ddaccordion.init({
	headerclass: "submenuheader", //Shared CSS class name of headers group
	contentclass: "submenu", //Shared CSS class name of contents group
	revealtype: "click", //Reveal content when user clicks or onmouseover the header? Valid value: "click", "clickgo", or "mouseover"
	mouseoverdelay: 200, //if revealtype="mouseover", set delay in milliseconds before header expands onMouseover
	collapseprev: true, //Collapse previous content (so only one open at any time)? true/false 
	defaultexpanded: [], //index of content(s) open by default [index1, index2, etc] [] denotes no content
	onemustopen: false, //Specify whether at least one header should be open always (so never all headers closed)
	animatedefault: false, //Should contents open by default be animated into view?
	persiststate: true, //persist state of opened contents within browser session?
	toggleclass: ["", ""], //Two CSS classes to be applied to the header when it's collapsed and expanded, respectively ["class1", "class2"]
	togglehtml: ["suffix", "<img src='plus.gif' class='statusicon' />", "<img src='minus.gif' class='statusicon' />"], //Additional HTML added to the header when it's collapsed and expanded, respectively  ["position", "html1", "html2"] (see docs)
	animatespeed: "fast", //speed of animation: integer in milliseconds (ie: 200), or keywords "fast", "normal", or "slow"
	oninit:function(headers, expandedindices){ //custom code to run when headers have initalized
		//do nothing
	},
	onopenclose:function(header, index, state, isuseractivated){ //custom code to run whenever a header is opened or closed
		//do nothing
	}
})


</script>


<style type="text/css">

.glossymenu{
margin: 5px 0;
padding: 0;
width: 170px; /*width of menu*/
border: 1px solid #9A9A9A;
border-bottom-width: 0;
}

.glossymenu a.menuitem{
background: black url(glossyback.gif) repeat-x bottom left;
font: bold 14px "Lucida Grande", "Trebuchet MS", Verdana, Helvetica, sans-serif;
color: white;
display: block;
position: relative; /*To help in the anchoring of the ".statusicon" icon image*/
width: auto;
padding: 4px 0;
padding-left: 10px;
text-decoration: none;
}


.glossymenu a.menuitem:visited, .glossymenu .menuitem:active{
color: white;
}

.glossymenu a.menuitem .statusicon{ /*CSS for icon image that gets dynamically added to headers*/
position: absolute;
top: 5px;
right: 5px;
border: none;
}

.glossymenu a.menuitem:hover{
background-image: url(glossyback2.gif);
}

.glossymenu div.submenu{ /*DIV that contains each sub menu*/
background: white;
}

.glossymenu div.submenu ul{ /*UL of each sub menu*/
list-style-type: none;
margin: 0;
padding: 0;
}

.glossymenu div.submenu ul li{
border-bottom: 1px solid blue;
}

.glossymenu div.submenu ul li a{
display: block;
font: normal 13px "Lucida Grande", "Trebuchet MS", Verdana, Helvetica, sans-serif;
color: black;
text-decoration: none;
padding: 2px 0;
padding-left: 10px;
}

.glossymenu div.submenu ul li a:hover{
background: #DFDCCB;
colorz: white;
}

</style>

</head>

<body>
    <center>
        <div class="glossymenu">

			  <%@ include file="sqlconnection.jsp" %>
			  <%
			  String sql = "select * from information_need";
			  PreparedStatement pst = connection.prepareStatement(sql);
			  try{
			    rs = pst.executeQuery();
			    String inf = "";
			    while (rs.next()) {   
                    inf = rs.getString("inf_desc");
                    int id = rs.getInt("id");
                    
                    String sql1 = "select * from query_run inner join query_list where query_run.query_id=query_list.id and query_run.inf_id=?";
                    PreparedStatement ps1 = connection.prepareStatement(sql1);
                    ps1.setString(1,Integer.toString(id));
                    ResultSet rs3; 
                    rs3 = ps1.executeQuery();
                    %>
                    <a class="menuitem submenuheader" href=""><%=inf%></a>
                    
                    <div class="submenu">
                        <ul>
                            <%
                            String query="";
                            while(rs3.next()){
                                query = rs3.getString("keywords");
                                %>
                                <li><a href=""><%=query%></a></li>
                                <%} rs3.close();%>
                            </ul>
                        </div>
			    <%}
			    rs.close();
			  }
			  catch(Exception e){
			    System.out.println(e.getMessage());
			  }
			  %>
          </div>
          </center>
	</body>
    </html>
