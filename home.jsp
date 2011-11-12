<%
    	String lang = request.getLocale().getLanguage();	// get Browser Locale
	if(!lang.equals("en") && !lang.equals("hi") && !lang.equals("pa") 
		&& !lang.equals("bn") && !lang.equals("mr") && !lang.equals("ta") 
		&& !lang.equals("te")){
			lang = "en";	//if Locale other-then covered languages(7)
	}
	response.sendRedirect("locale.jsp?"+lang);
%>
