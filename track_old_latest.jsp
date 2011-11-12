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
String toki = "",neri = "", nero = "", mewi = "",mewo = "", transf = "",lucene = "";
int index = 0;


String[] stopi = new String[10],toko= new String[10],stopo= new String[10],stemi= new String[10],stemo= new String[10],transi= new String[10],transo= new String[10],disamb= new String[50],transliti= new String[10],translito= new String[10];
int cstopi = 0,ctoko = 0,cstopo = 0,cstemi = 0, cstemo = 0, ctransi = 0, ctranso = 0, cdisamb = 0,ctransliti=0,ctranslito=0;
while((temp = br.readLine())!=null){
	index = temp.indexOf(":");
	if(temp.contains("tok I")){
		temp = temp.substring(index+1);
		toki = toki +" "+ temp;
	}
	else if(temp.contains("disamb")){
		temp = temp.substring(index+1);
		disamb[cdisamb] = temp;
		cdisamb++;
	}
	else if(temp.contains("tok O")){
		temp = temp.substring(index+1);
		toko[ctoko] = temp;
		ctoko++;
	}
	else if(temp.contains("stop I")){
		temp = temp.substring(index+1);
		stopi[cstopi] = temp;
		cstopi++;
	}
	else if(temp.contains("stop O")){
		temp = temp.substring(index+1);
		stopo[cstopo] = temp;
		cstopo++;
	}
	else if(temp.contains("stem I")){
		temp = temp.substring(index+1);
		stemi[cstemi] = temp;
		cstemi++;
	}
	else if(temp.contains("stem O")){
		temp = temp.substring(index+1);
		stemo[cstemo] = temp;
		cstemo++;
	}
	else if(temp.contains("ner I")){
		temp = temp.substring(index+1);
		neri = neri +" "+ temp;
	}
	else if(temp.contains("ner O")){
		temp = temp.substring(index+1);
		nero = nero +" "+ temp;
	}
	else if(temp.contains("mew I")){
		temp = temp.substring(index+1);
		mewi = mewi +" "+ temp;
	}
	else if(temp.contains("mew O")){
		temp = temp.substring(index+1);
		mewo = mewo +" "+ temp;
	}
	else if(temp.contains("trans I")){
		temp = temp.substring(index+1);
		transi[ctransi] = temp;
		ctransi++;
	}
	else if(temp.contains("trans O")){
		temp = temp.substring(index+1);
		transo[ctranso] = temp;
		ctranso++;
	}
	else if(temp.contains("translit I")){
		temp = temp.substring(index+1);
		transliti[ctransliti] = temp;
		ctransliti++;
	}
	else if(temp.contains("translit O")){
		temp = temp.substring(index+1);
		translito[ctranslito] = temp;
		ctranslito++;
	}
	else if(temp.contains("transf")){
		temp = temp.substring(index+1);
		transf = transf +" "+ temp;
	}
	else if(temp.contains("lucene")){
		temp = temp.substring(index+1);
		lucene = lucene +" "+ temp;
	}
	else{}
}

br.close();
%>


<div id="treeDiv1">
    <ul>
    
        <li> <b>Tokenization </b>
            <ul>
                <li> Input
                    <ul>
                        <li><% out.print(toki); %></li>
                    </ul>
                </li>
		<li> Output
		<%for(int x = 0;x<ctoko;x++){%>
                    <ul>
                        <li><% out.print(toko[x]); %></li>
                    </ul>
                    <%}%>
                </li>
            </ul>
        </li>

        
        <li> <b>StopWord Removal</b>
            <ul>
              <li> Input
              <%for(int x = 0;x<cstopi;x++){%>
                   
            	<ul>
                	<li><% out.print(stopi[x]); %></li>
            	</ul>
            	<%}%>
        	</li>
		<li> Output
            		<%for(int x = 0;x<cstopo;x++){%>
                   
            	<ul>
                	<li><% out.print(stopo[x]); %></li>
            	</ul>
            	<%}%>
        	</li>
            </ul>
        </li>
                <li> <b>Stemming</b>
                    <ul>
                      <li> Input
                      <%for(int x = 0;x<cstemi;x++){%>
                    	<ul>
                        <li><% out.print(stemi[x]); %></li>
                    	</ul>
                    	<%}%>
                	</li>
			<li> Output
                    		<%for(int x = 0;x<cstemo;x++){%>
                    	<ul>
                        <li><% out.print(stemo[x]); %></li>
                    	</ul>
                    	<%}%>
                	</li>
                    </ul>
                </li>


                 <li> <b>NER</b>
                    <ul>
                      <li> Input
                    	<ul>
                        <li><% out.print(neri); %></li>
                    	</ul>
                	</li>
			<li> Output
                    		<ul>
                        <li><% out.print(nero); %></li>
                    	</ul>
                	</li>
                    </ul>
                </li>

		 <li> <b>MWE</b>
                    <ul>
                      <li> Input
                    	<ul>
                        <li><% out.print(mewi); %></li>
                    	</ul>
                	</li>
			<li> Output
                    		<ul>
                        <li><% out.print(mewo); %></li>
                    	</ul>
                	</li>
                    </ul>
                </li>

<%if(ctransi !=0){
if(ctranso ==0){ctranso = 1; transo[0]="null";}
if(ctransliti ==0){ctransliti = 1; transliti[0]="null";}
if(ctranslito ==0){ctranslito = 1; translito[0]="null";}



%>
		<li> <b>Translation</b>
                    <ul>
                      <li> Input
                      <%for(int x = 0;x<ctransi;x++){%>
                    	<ul>
                        <li><% out.print(transi[x]); %></li>
                    	</ul>
                    	<%}%>
                	</li>
			<li> Output
                    		<%for(int x = 0;x<ctranso;x++){%>
                    	<ul>
                        <li><% out.print(transo[x]); %></li>
                    	</ul>
                    	<%}%>
                	</li>
                    </ul>
                </li>
                <li> <b>Transliteration </b>
                    <ul>
                      <li> Input
                      <%for(int x = 0;x<ctransliti;x++){%>
                    	<ul>
                        <li><% out.print(transliti[x]); %></li>
                    	</ul>
                    	<%}%>
                	</li>
			<li> Output
                    		<%for(int x = 0;x<ctranslito;x++){%>
                    	<ul>
                        <li><% out.print(translito[x]); %></li>
                    	</ul>
                    	<%}%>
                	</li>
                    </ul>
                </li>
                <li> <b>Disambiguation</b>
                    <ul>
                      <li> Input
                      <%for(int x = 0;x<cdisamb;x++){%>
                    	<ul>
                        <li><% out.print(disamb[x]); %></li>
                    	</ul>
                    	<%}%>
                	</li>
			<li> Output
                    		<ul>
                        <li><% out.print(transf); %></li>
                    	</ul>
                	</li>
                    </ul>
                </li>

		

<%}%>

<li> <b>Final Lucene Query</b>
                    <ul>
                      <li> Input
                    	<ul>
                        <li><% out.print(lucene); %></li>
                    	</ul>
                	</li>
                    </ul>
                </li>
         
    </ul>
</div>


<body>

</body>
