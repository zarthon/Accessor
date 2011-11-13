<%@page session="true" 
   contentType="text/html"
   pageEncoding="utf-8"
import="java.io.*" 
import="java.util.*"
import="java.lang.*"
%>

<%
FileReader fr = new FileReader("/home/munish/test.out");
BufferedReader br = new BufferedReader(fr); 
String temp = "";
String toki = "",toko = "", stopi = "", stopo = "", stemi = "", stemo = "", neri = "", nero = "", mewi = "",mewo = "", transi = " ", transo = "", transliti = "", translito = "", transf = "",lucene = "", disambi = "";
int index = 0;
while((temp = br.readLine())!=null){
	index = temp.indexOf(":");
	if(temp.contains("tok I")){
		temp = temp.substring(index+1);
		toki = toki +" "+ temp;
	}else if(temp.contains("disamb")){
	temp = temp.substring(index+1);
		disambi = disambi +" , "+temp;
	}else if(temp.contains("tok O")){
	temp = temp.substring(index+1);
		toko = toko + " "+ temp;
	}else if(temp.contains("stop I")){
	temp = temp.substring(index+1);
		stopi = stopi +" "+ temp;
	}else if(temp.contains("stop O")){
	temp = temp.substring(index+1);
		stopo = stopo + " "+ temp;
	}else if(temp.contains("stem I")){
	temp = temp.substring(index+1);
		stemi = stemi +" "+ temp;
	}else if(temp.contains("stem O")){
	temp = temp.substring(index+1);
		stemo = stemo +" "+ temp;
	}else if(temp.contains("ner I")){
	temp = temp.substring(index+1);
		neri = neri +" "+ temp;
	}else if(temp.contains("ner O")){
	temp = temp.substring(index+1);
		nero = nero +" "+ temp;
	}else if(temp.contains("mew I")){
	temp = temp.substring(index+1);
		mewi = mewi +" "+ temp;
	}else if(temp.contains("mew O")){
	temp = temp.substring(index+1);
		mewo = mewo +" "+ temp;
	}else if(temp.contains("trans I")){
	temp = temp.substring(index+1);
		transi = transi +" "+ temp;
	}else if(temp.contains("trans O")){
	temp = temp.substring(index+1);
		transo = transo +" "+ temp;
	}else if(temp.contains("translit I")){
	temp = temp.substring(index+1);
		transliti = transliti +" "+ temp;
	}else if(temp.contains("translit O")){
	temp = temp.substring(index+1);
		translito = translito +"\n"+ temp;
	}else if(temp.contains("transf")){
	temp = temp.substring(index+1);
		transf = transf +" "+ temp;
	}else if(temp.contains("lucene")){
	temp = temp.substring(index+1);
		lucene = lucene +" "+ temp;
	}
	else{}
}
if(mewo == "") mewo = "null";
if(translito == "") translito = "null";
if(transi == "") transi = "null";


br.close();
%>
<body>
<table border="1">
<tr>
<th>Modules</th>
<th>Input</th>
<th>Output</th>
</tr>
<tr>
<th> Tokenization </th>
<th> <% out.print(toki); %></th>
<th> <% out.print(toko); %> </th>
</tr>
<tr>

<th> StopWord </th>
<th> <% out.print(stopi); %></th>
<th> <% out.print(stopo); %> </th>
</tr>
<tr>
<th> Stemming </th>
<th> <% out.print(stemi); %></th>
<th> <% out.print(stemo); %> </th>
</tr>
<tr>
<th> NER </th>
<th> <% out.print(neri); %> </th>
<th> <% out.print(nero); %> </th>
</tr>
<tr>
<th> MWE </th>
<th> <% out.print(mewi); %></th>
<th> <% out.print(mewo); %> </th>
</tr>
<%


if(transi != " "){%>

<tr>
<th> Translation </th>
<th> <% out.print(transi); %></th>
<th> <% out.print(transo); %> </th>
</tr>
<tr>
<th> Transliteration </th>
<th> <% out.print(transliti); %></th>
<th> <% out.print(translito); %> </th>
</tr>
<tr>
<th> Disambiguation </th>
<th> <% out.print(disambi); %></th>

</tr>
</table>
<br>


<h3> Final Translation + Transliteration output : </h3><%out.print(transf);%>

<%
}

%>



</table>
<br>
<br>
<h3>Final Lucene Query : </h3><%out.print(lucene);%>
</body>
