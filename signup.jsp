<%@page
contentType="text/html"
import ="java.io.*"
import ="java.util.*"
import ="java.sql.*"
import ="javax.servlet.*"
import ="javax.servlet.http.*" %>

<html>
<body>
<%@ include file="sqlconnection.jsp"%>
<%
String username = request.getParameter("user_name");
String lv = request.getParameter("lv");
String password = request.getParameter("password");

String role = request.getParameter("role");
try {
String sql = "insert into user_auth values (?,?,?,?)";
PreparedStatement pst = connection.prepareStatement(sql);
pst.setString(1, username);
pst.setString(2, password);
pst.setString(3, lv);
pst.setString(4, role);

int numRowsChanged = pst.executeUpdate();
// show that the new account has been created
pout.println(" Hello : ");
pst.close();
response.sendRedirect("lvc.jsp?lv="+lv);
}
catch(SQLException e){
pout.println("username already exists !!!"+ e);
pout.println("<a href=\"index.jsp\">click here to continue signup</a>");
}
%>
</body>
</html>
