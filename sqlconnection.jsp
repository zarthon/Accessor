<%
			PrintWriter pout = response.getWriter();
                        String connectionURL = "jdbc:mysql://10.100.56.35:3306/evaluate";
                        Connection connection = null;
                        ResultSet rs,rs1,res;
                        String userName = new String("");
                        String passwrd = new String("");
                        response.setContentType("text/html");
                        try {
                            Class.forName("com.mysql.jdbc.Driver");
                            connection = DriverManager.getConnection(connectionURL, "root", "reset123");
//			    out.print("dsnjdksa");
			}
			catch(Exception e)
			{	
				out.print("Cannot create SQL Connection Please check connection"+e);
			}
%>
