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
        <body>
                           <%@ include file="sqlconnection.jsp" %>
<%
                            String sql = "select password,lv,role from user_auth where username=?";
			    PreparedStatement pst = connection.prepareStatement(sql);
                            String role="assesor";
			    String lang="gu";
			    pst.setString(1, request.getParameter("user"));
			    rs = pst.executeQuery();
                            while (rs.next()) {                              
                                passwrd = rs.getString("password");                               
				role = rs.getString("role");
				lang = rs.getString("lv");
                            }
                            rs.close();                          
                        if (passwrd.equals(request.getParameter("pass"))) {
				if(role.equals("lvc"))
				{
                		            out.println("WELCOME LV Coordinator " + request.getParameter("user"));
		                            out.println("\n<Br><Br>You can add or remove Assessors and access Logs<br> <br>\nclick here to continue");
		                            String redirectURL = "lvc.jsp?lv="+lang;
                	                    response.sendRedirect(redirectURL);

				}
				else
				{
	                            out.println("WELCOME " + request.getParameter("user"));
                                //        	                    out.println("<br><a href=\"reljudge_submitfile.jsp?user="+request.getParameter("user")+"\">click here to continue</a>");

            				    String redirectURL = "infomation.jsp";
			            	    response.sendRedirect(redirectURL);

				   
				}
			    
   			    String name = request.getParameter( "user" );
			    session.setAttribute("username",name);
			 
                        } else {
                            pout.println("Please enter correct username and password");
                            pout.println("<a href='login.jsp'><br>Login again</a>");
                        }
%>

            
        </body>
    </html>
