<%@page session="true" 
   contentType="text/html"
   pageEncoding="utf-8"
import="java.io.*" 
import="java.util.*"
import="java.lang.*"
%>

<%
FileReader fr = new FileReader("./test.out");
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



<html>
<head>


    <meta http-equiv="content-type" content="text/html; charset=utf-8">
<title>CLIA Query Tracker</title>

<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.8.2r1/build/fonts/fonts-min.css" />
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.8.2r1/build/treeview/assets/skins/sam/treeview.css" />
<script type="text/javascript" src="http://yui.yahooapis.com/2.8.2r1/build/yahoo-dom-event/yahoo-dom-event.js"></script>

<script type="text/javascript" src="http://yui.yahooapis.com/2.8.2r1/build/treeview/treeview-min.js"></script>


<style>
    #treeDiv1 {background: #fff; padding:1em;}
</style>


</head>

<body >

<h1><h1><img src="images/logo.jpg" width="" height="60"  /><%out.print("    ");%><img src="images/tracker.jpg"  /></h1></h1>



<!--BEGIN SOURCE CODE FOR EXAMPLE =============================== -->

<div id="treeDiv1"></div>

<script type="text/javascript">

//global variable to allow console inspection of tree:
var tree;

//anonymous function wraps the remainder of the logic:
(function() {

	//function to initialize the tree:
    function treeInit() {
        buildRandomTextNodeTree();
    }
    
	//Function  creates the tree and 
	//builds between 3 and 7 children of the root node:
    function buildRandomTextNodeTree() {
	
		//instantiate the tree:
        tree = new YAHOO.widget.TreeView("treeDiv1");

//        for (var i = 0; i < Math.floor((Math.random()*4) + 3); i++) {
            var tok = new YAHOO.widget.TextNode("Tokenization", tree.getRoot(), false);
            buildLargeBranch(tok,1);
            var stop = new YAHOO.widget.TextNode("Stopword", tree.getRoot(), false);
            buildLargeBranch(stop,2);
            var stem = new YAHOO.widget.TextNode("Stemming", tree.getRoot(), false);
            buildLargeBranch(stem,3);
            var ner = new YAHOO.widget.TextNode("NER", tree.getRoot(), false);
            buildLargeBranch(ner,4);
            var mwe = new YAHOO.widget.TextNode("MWE", tree.getRoot(), false);
            buildLargeBranch(mwe,5);

<%if(ctransi !=0){
if(ctranso ==0){ctranso = 1; transo[0]="null";}
if(ctransliti ==0){ctransliti = 1; transliti[0]="null";}
if(ctranslito ==0){ctranslito = 1; translito[0]="null";}



%>

            
            var trans = new YAHOO.widget.TextNode("Translation", tree.getRoot(), false);
            buildLargeBranch(trans,6);
            var translit = new YAHOO.widget.TextNode("Transliteration", tree.getRoot(), false);
            buildLargeBranch(translit,7);
            var disamb = new YAHOO.widget.TextNode("Disambiguation", tree.getRoot(), false);
            buildLargeBranch(disamb,8);

<%}%>
            var lucene = new YAHOO.widget.TextNode("Lucene Query", tree.getRoot(), false);
            buildLargeBranch(lucene,9);
            // tmpNode.collapse();
            // tmpNode.expand();
            // buildRandomTextBranch(tmpNode);
            //
  //      }

       // Expand and collapse happen prior to the actual expand/collapse,
       // and can be used to cancel the operation
       tree.subscribe("expand", function(node) {
              YAHOO.log(node.index + " was expanded", "info", "example");
              // return false; // return false to cancel the expand
           });

       tree.subscribe("collapse", function(node) {
              YAHOO.log(node.index + " was collapsed", "info", "example");
           });

       // Trees with TextNodes will fire an event for when the label is clicked:
       tree.subscribe("labelClick", function(node) {
              YAHOO.log(node.index + " label was clicked", "info", "example");
           });

		//The tree is not created in the DOM until this method is called:
        tree.draw();
    }

	//function builds 10 children for the node you pass in:
    function buildLargeBranch(node,i) {
            
//                new YAHOO.widget.TextNode(node.label +"", node, false);
                var temp1 = new YAHOO.widget.TextNode("Input", node, false);
                     b1(temp1,i);
                     if(i!=9){  
                var temp2 = new YAHOO.widget.TextNode("Output", node, false); 
                b2(temp2,i);}
    }



    function b1(node,i) {
            
//                new YAHOO.widget.TextNode(node.label +"", node, false);
		if(i == 1){
                	new YAHOO.widget.TextNode("<% out.print(toki);%>", node, false);} 
                else if (i ==2){
		        <%for(int x = 0;x<cstopi;x++){%>
		        new YAHOO.widget.TextNode("<% out.print(stopi[x]); %>", node, false);
		        <%}%>
                }
                else if (i ==3){
		        <%for(int x = 0;x<cstemi;x++){%>
		        new YAHOO.widget.TextNode("<% out.print(stemi[x]); %>", node, false);
		        <%}%>
                }
                else if (i ==4){
		        new YAHOO.widget.TextNode("<% out.print(neri); %>", node, false);
                }
                else if (i ==5){
		        new YAHOO.widget.TextNode("<% out.print(mewi); %>", node, false);
                }
                else if (i ==6){
		        <%for(int x = 0;x<ctransi;x++){%>
		        new YAHOO.widget.TextNode("<% out.print(transi[x]); %>", node, false);
		        <%}%>
                } 
                else if (i ==7){
		        <%for(int x = 0;x<ctransliti;x++){%>
		        new YAHOO.widget.TextNode("<% out.print(transliti[x]); %>", node, false);
		        <%}%>
                } else if (i ==8){
		        <%for(int x = 0;x<cdisamb;x++){%>
		        new YAHOO.widget.TextNode("<% out.print(disamb[x]); %>", node, false);
		        <%}%>
                } else if (i ==9){
		        
		        new YAHOO.widget.TextNode('<% out.print(lucene); %>', node, false);
		       
                } 
                //new YAHOO.widget.TextNode("Output", node, false);        
    }




function b2(node,i) {
            
//                new YAHOO.widget.TextNode(node.label +"", node, false);
		if(i == 1){
                	 <%for(int x = 0;x<ctoko;x++){%>
		        new YAHOO.widget.TextNode("<% out.print(toko[x]); %>", node, false);
		        <%}%>}
                else if (i ==2){
		        <%for(int x = 0;x<cstopo;x++){%>
		        new YAHOO.widget.TextNode("<% out.print(stopo[x]); %>", node, false);
		        <%}%>
                }
                else if (i ==3){
		        <%for(int x = 0;x<cstemo;x++){%>
		        new YAHOO.widget.TextNode("<% out.print(stemo[x]); %>", node, false);
		        <%}%>
                }
                else if (i ==4){
		        new YAHOO.widget.TextNode("<% out.print(nero); %>", node, false);
                }
                else if (i ==5){
		        new YAHOO.widget.TextNode("<% out.print(mewo); %>", node, false);
                }
                else if (i ==6){
		        <%for(int x = 0;x<ctranso;x++){%>
		        new YAHOO.widget.TextNode("<% out.print(transo[x]); %>", node, false);
		        <%}%>
                } 
                else if (i ==7){
		        <%for(int x = 0;x<ctranslito;x++){%>
		        new YAHOO.widget.TextNode("<% out.print(translito[x]); %>", node, false);
		        <%}%>
                } else if (i ==8){
		        
		        new YAHOO.widget.TextNode("<% out.print(transf); %>", node, false);
		      
                } 
                //new YAHOO.widget.TextNode("Output", node, false);        
    }
	//Add an onDOMReady handler to build the tree when the document is ready
    YAHOO.util.Event.onDOMReady(treeInit);

})();

</script>


</body>
</html>
