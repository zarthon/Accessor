var HinResult = 0;
var HindiType =0; 
var SynonymType =0; 
var cur_lyr;
function Reflect_Values()
{
	window.opener.document.getElementById("text_Area").value = document.getElementById("textfield").value;
	window.close();
}
function Synonym_Focus()
{
	HindiType = 0;
	SynonymType = 1;
}
function Hindi_Focus()
{
	HindiType = 1;
	SynonymType = 0;
}

function writeUnicodeToBox(Number)
{
	
			if (navigator.appName == 'Netscape')
			{
				var pos = document.getElementById("textfield").selectionEnd;
				var text1 = "";
				var i=0; 
				var text2 ="";
				var lastPos = 0;
				for(i=0;i<pos;i++)
				{
					text1 = text1 + document.getElementById("textfield").value[i];
				}
				for(i=pos;i<document.getElementById("textfield").value.length;i++)
				{
					text2 = text2 + document.getElementById("textfield").value[i];
				}
				text1 = text1 + Number + text2;
				document.getElementById("textfield").value = text1 ;
				document.getElementById("textfield").selectionStart = pos+1;
				document.getElementById("textfield").selectionEnd = pos+1;
				document.getElementById("textfield").focus(pos+1);
			}
			else
			{
				document.getElementById("textfield").focus(document.getElementById("textfield").caretPos);
				document.getElementById("textfield").caretPos = document.selection.createRange().duplicate();
				document.getElementById("textfield").caretPos.text = Number;
						
			}
			
}

function Mapping_1()
{
	if(HinResult==1)
	{
		writeUnicodeToBox(String.fromCharCode("2322"));
	}
        else
	{
	    writeUnicodeToBox(String.fromCharCode("  "));
	}
}



function Mapping_2()
{
	if(HinResult==1)
	{
		writeUnicodeToBox(String.fromCharCode("2317"));
	}
        else
	{
		writeUnicodeToBox("1");
	}
}

function Mapping_3()
{
	if(HinResult==1)
	{
		writeUnicodeToBox(String.fromCharCode("2373"));
	}
	else
	{
		writeUnicodeToBox("2");
	}
}
function Mapping_4()
{
	if(HinResult==1)
	{
    	     writeUnicodeToBox(String.fromCharCode("2381")+String.fromCharCode("2352"));
                      if (navigator.appName == 'Netscape')
                        {
                                
                                var pos = document.getElementById("textfield").selectionEnd;
                                document.getElementById("textfield").selectionStart = pos+1;
                                document.getElementById("textfield").selectionEnd = pos+1;
                                document.getElementById("textfield").focus(pos+1);
                        }

	}
	else
	{
		writeUnicodeToBox("3");
	}
}
function Mapping_5()
{
	if(HinResult==1)
	{							
	        writeUnicodeToBox(String.fromCharCode("2352")+String.fromCharCode("2381"));
	}
	else
	{
		writeUnicodeToBox("4");
		
	}
}
function Mapping_6()
{
	if(HinResult==1)
	{
		writeUnicodeToBox(String.fromCharCode("2332")+String.fromCharCode("2381")+String.fromCharCode("2334"));
		
	}
	else
	{
		writeUnicodeToBox("5");
	}
}
function Mapping_7()
{
	if(HinResult==1)
	{
		
			writeUnicodeToBox(String.fromCharCode("2340")+String.fromCharCode("2381")+String.fromCharCode("2352"));
		
	}
	else
	{
		
			writeUnicodeToBox("6");
		
	}
}
function Mapping_8()
{
        if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2325")+String.fromCharCode("2381")+String.fromCharCode("2359"));
	}
	else
	{
			writeUnicodeToBox("7");
	}
}
function Mapping_9()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2358")+String.fromCharCode("2381")+String.fromCharCode("2352"));
	}
	else
	{
			writeUnicodeToBox("8");
	}
}
function Mapping_10()
{
	if(HinResult==1)
	{
			writeUnicodeToBox("(");
	}
	else
	{
			writeUnicodeToBox("9");
	}
}
function Mapping_11()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(")");
	}
	else
	{
		
			writeUnicodeToBox("0");
	}
}
function Mapping_12()
{
	if(HinResult==1)
	{
			writeUnicodeToBox("-");
		
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2307"));
	}
}
function Mapping_13()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2315")) ;
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2371"));
	}
}
function Mapping_14()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2334"));
		
		
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2377")) ;
		
		
	}
}
function Mapping_15()
{
	if(HinResult==1)
	{
			writeUnicodeToBox("    ");
    
        }
	else
	{
			writeUnicodeToBox("    ");
		
	}
}
function Mapping_16()
{
      if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2324"));
		
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2380"));
		
	}
    
 }
 
function Mapping_17()
{
	if(HinResult==1)
	{
		
			writeUnicodeToBox(String.fromCharCode("2320"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2376"));
		
	}
}

function Mapping_18()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2310"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2366"));
	}
		
}

function Mapping_19()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2312"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2368"));
	}
}
function Mapping_20()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2314"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2370"));
	}
}
function Mapping_21()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2349"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2348"));
	}
}
function Mapping_22()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2329"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2361"));
	}
}
function Mapping_23()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2328"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2327"));
	}
}
function Mapping_24()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2343"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2342"));
	}
}
function Mapping_25()
{
	if(HinResult==1)
	{
		writeUnicodeToBox(String.fromCharCode("2333"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2332"));
	}
}
function Mapping_26()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2338"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2337"));
	}
}
function Mapping_27()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2334"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2364"));
	}
}
function Mapping_28()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2323"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2379"));
	}
}
function Mapping_29()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2319"));
                  
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2375"));
	}
}
function Mapping_30()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2309"));

	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2381"));
	}
}
function Mapping_31()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2311"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2367"));
	}
}
function Mapping_32()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2313"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2369"));
	}
}
function Mapping_33()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2347"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2346"));
	}
}
function Mapping_34()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2353"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2352"));
	}
}
function Mapping_35()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2326"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2325"));
	}
}
function Mapping_36()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2341"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2340"));
	}
}
function Mapping_37()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2331"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2330"));
	}
}
function Mapping_38()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2336"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2335"));
	}
}
function Mapping_39()
{
  	           if (navigator.appName == 'Netscape')
                     {
	            var evtHi = document.createEvent("MouseEvents");
		    evtHi.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
		    var cbHi = document.getElementById("mainSearch"); 
		    cbHi.dispatchEvent(evtHi);
                     }
                   else
                     {
                    var cbHi=document.getElementById("mainSearch");
                    cbHi.click();
                     }

}
function Mapping_40()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2320"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2374"));
	}
}
function Mapping_41()
{
	if(HinResult==1)
	{
	    writeUnicodeToBox(String.fromCharCode("2305"));
		
	}
	else
	{
		writeUnicodeToBox(String.fromCharCode("2306"));
	}
}
function Mapping_42()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2339"));
		
	}
	else
	{
		writeUnicodeToBox(String.fromCharCode("2350"));
	}
}
function Mapping_43()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2345"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2344"));
	}
}
function Mapping_44()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2356"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2357"));
	}
}
function Mapping_45()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2355"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2354"));
	}
}
function Mapping_46()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2358"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2360"));
	}
}
function Mapping_47()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2359"));
	}
	else
	{
			writeUnicodeToBox(",");
	}
}
function Mapping_48()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2404"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2364"));
	}
}
function Mapping_49()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2399"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2351"));
	}
}

function Mapping_51()
{
	if(HinResult==1)
	{
			writeUnicodeToBox(" ");
	}
	else
	{
	
			writeUnicodeToBox(" ");
	}
}

function Mapping_52()
{
if(flag1==0)
	{
     ShowShiftKbdDn(cur_lyr);
     var id=document.getElementById("butt52");
     id.style.borderColor="blue";
     }
     
    else
    {
     ShowShiftKbdUp(cur_lyr);
     var id=document.getElementById("butt52");
     id.style.borderColor="";
    } 
        
}
function Mapping_55()
{

        if(flag1==0)
        {
     ShowShiftKbdDn(cur_lyr);
     var id=document.getElementById("butt55");
     id.style.borderColor="blue";
     }

    else
    {
     ShowShiftKbdUp(cur_lyr);
     var id=document.getElementById("butt55");
     id.style.borderColor="";
    }

}

function Mapping_53()
{
	document.getElementById("textfield").focus(document.getElementById("textfield").caretPos);
	var temp = document.getElementById("textfield").value;
	document.getElementById("textfield").value = temp.substring(0,temp.length-1);
}

function WriteValuesToTextArea()
{
	document.getElementById("textfield").value = window.opener.document.getElementById("textfield").value;
}
function Submit1(id){
cur_lyr=id;

HinResult = 1;

document.getElementById("butt1").value=""+String.fromCharCode("2322")+"";

document.getElementById("butt2").value=""+String.fromCharCode("2317")+"";

document.getElementById("butt3").value=""+String.fromCharCode("2373")+"";

document.getElementById("butt4").value=""+String.fromCharCode("2381")+String.fromCharCode("2352")+"";

document.getElementById("butt5").value=""+String.fromCharCode("2352")+String.fromCharCode("2381")+"";

document.getElementById("butt6").value=""+String.fromCharCode("2332")+String.fromCharCode("2381")+String.fromCharCode("2334")+"";

document.getElementById("butt7").value=""+String.fromCharCode("2340")+String.fromCharCode("2381")+String.fromCharCode("2352")+"";

document.getElementById("butt8").value=""+String.fromCharCode("2325")+String.fromCharCode("2381")+String.fromCharCode("2359")+"";

document.getElementById("butt9").value=""+String.fromCharCode("2358")+String.fromCharCode("2381")+String.fromCharCode("2352")+"";

document.getElementById("butt10").value="(";

document.getElementById("butt11").value=")";

document.getElementById("butt12").value="-";

document.getElementById("butt13").value=""+String.fromCharCode("2315")+"";


document.getElementById("butt53").value="<--";

document.getElementById("butt15").value="Tab";

document.getElementById("butt16").value=""+String.fromCharCode("2324")+"";

document.getElementById("butt17").value=""+String.fromCharCode("2320")+"";

document.getElementById("butt18").value=""+String.fromCharCode("2310")+"";

document.getElementById("butt19").value=""+String.fromCharCode("2312")+"";

document.getElementById("butt20").value=""+String.fromCharCode("2314")+"";

document.getElementById("butt21").value=""+String.fromCharCode("2349")+"";

document.getElementById("butt22").value=""+String.fromCharCode("2329")+"";

document.getElementById("butt23").value=""+String.fromCharCode("2328")+"";

document.getElementById("butt24").value=""+String.fromCharCode("2343")+"";

document.getElementById("butt25").value=""+String.fromCharCode("2333")+"";

document.getElementById("butt26").value=""+String.fromCharCode("2338")+"";

document.getElementById("butt27").value=""+String.fromCharCode("2334")+"";

document.getElementById("butt28").value=""+String.fromCharCode("2323")+"";

document.getElementById("butt29").value=""+String.fromCharCode("2319")+"";

document.getElementById("butt30").value=""+String.fromCharCode("2309")+"";


document.getElementById("butt31").value=""+String.fromCharCode("2311")+"";

document.getElementById("butt32").value=""+String.fromCharCode("2313")+"";

document.getElementById("butt33").value=""+String.fromCharCode("2347")+"";

document.getElementById("butt34").value=""+String.fromCharCode("2353")+"";

document.getElementById("butt35").value=""+String.fromCharCode("2326")+"";

document.getElementById("butt36").value=""+String.fromCharCode("2341")+"";

document.getElementById("butt37").value=""+String.fromCharCode("2331")+"";

document.getElementById("butt38").value=""+String.fromCharCode("2336")+"";

document.getElementById("butt39").value="Enter";

document.getElementById("butt40").value=""+String.fromCharCode("2320")+"";

document.getElementById("butt41").value=""+String.fromCharCode("2305")+"";

document.getElementById("butt42").value=""+String.fromCharCode("2339")+"";

document.getElementById("butt43").value=""+String.fromCharCode("2345")+"";

document.getElementById("butt44").value=""+String.fromCharCode("2356")+"";

document.getElementById("butt45").value=""+String.fromCharCode("2355")+"";

document.getElementById("butt46").value=""+String.fromCharCode("2358")+"";

document.getElementById("butt47").value=""+String.fromCharCode("2359")+"";

document.getElementById("butt48").value=""+String.fromCharCode("2404")+"";

document.getElementById("butt49").value=""+String.fromCharCode("2399")+"";


document.getElementById("butt51").value="Space"; 







}

function Original_Keyboard(id)

{

	HinResult = 0;

	document.getElementById("butt1").value="`";

	document.getElementById("butt2").value="1";

	document.getElementById("butt3").value="2";

	document.getElementById("butt4").value="3";

	document.getElementById("butt5").value="4";

	document.getElementById("butt6").value="5";

	document.getElementById("butt7").value="6";

	document.getElementById("butt8").value="7";

	document.getElementById("butt9").value="8";

	document.getElementById("butt10").value="9";

	document.getElementById("butt11").value="0";

	document.getElementById("butt12").value=""+String.fromCharCode("2307")+"";

	document.getElementById("butt13").value=""+String.fromCharCode("2371")+"";

	document.getElementById("butt53").value="<--";

	document.getElementById("butt15").value="Tab";

	document.getElementById("butt16").value=""+String.fromCharCode("2380")+"";

	document.getElementById("butt17").value=""+String.fromCharCode("2376")+"";

	document.getElementById("butt18").value=""+String.fromCharCode("2366")+"";

	document.getElementById("butt19").value=""+String.fromCharCode("2368")+"";

	document.getElementById("butt20").value=""+String.fromCharCode("2370")+"";

	document.getElementById("butt21").value=""+String.fromCharCode("2348")+"";

	document.getElementById("butt22").value=""+String.fromCharCode("2361")+"";

	document.getElementById("butt23").value=""+String.fromCharCode("2327")+"";

	document.getElementById("butt24").value=""+String.fromCharCode("2342")+"";

	document.getElementById("butt25").value=""+String.fromCharCode("2332")+"";

	document.getElementById("butt26").value=""+String.fromCharCode("2337")+"";

	document.getElementById("butt27").value=""+String.fromCharCode("2377")+"";
    
	document.getElementById("butt54").value="Caps";

	document.getElementById("butt28").value=""+String.fromCharCode("2379")+"";

	document.getElementById("butt29").value=""+String.fromCharCode("2375")+"";

	document.getElementById("butt30").value=""+String.fromCharCode("2381")+"";

	document.getElementById("butt31").value=""+String.fromCharCode("2367")+"";

	document.getElementById("butt32").value=""+String.fromCharCode("2369")+"";

	document.getElementById("butt33").value=""+String.fromCharCode("2346")+"";

	document.getElementById("butt34").value=""+String.fromCharCode("2352")+"";

	document.getElementById("butt35").value=""+String.fromCharCode("2325")+"";

	document.getElementById("butt36").value=""+String.fromCharCode("2340")+"";

	document.getElementById("butt37").value=""+String.fromCharCode("2330")+"";

	document.getElementById("butt38").value=""+String.fromCharCode("2335")+"";

	document.getElementById("butt39").value="Enter";

	document.getElementById("butt40").value=""+String.fromCharCode("2374")+"";

	document.getElementById("butt41").value=""+String.fromCharCode("2306")+"";

	document.getElementById("butt42").value=""+String.fromCharCode("2350")+"";

	document.getElementById("butt43").value=""+String.fromCharCode("2344")+"";

	document.getElementById("butt44").value=""+String.fromCharCode("2357")+"";

	document.getElementById("butt45").value=""+String.fromCharCode("2354")+"";

	document.getElementById("butt46").value=""+String.fromCharCode("2360")+"";

	document.getElementById("butt47").value=","

	document.getElementById("butt48").value=""+String.fromCharCode("2364")+"";

	document.getElementById("butt49").value=""+String.fromCharCode("2351")+"";


	document.getElementById("butt51").value="Space";  

	

	

}

function keyboard(){
document.write("<body onclick='javascript:CatchKeyCodeDn(window.event,cur_lyr);CatchKeyCodeUp(event,cur_lyr);'>");
document.write("<br>");
document.write("<kbd><input type='button'   id='butt1' value = '`' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_1()'></kbd>");
document.write("<kbd><input type='button'   id='butt2' value = '1' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_2()'></kbd>");
document.write("<kbd><input type='button'   id='butt3' value = '2' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_3()'></kbd>");
document.write("<kbd><input type='button'   id='butt4' value = '3' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_4()'></kbd>");
document.write("<kbd><input type='button'   id='butt5' value = '4' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_5()'></kbd>");
document.write("<kbd><input type='button'   id='butt6' value = '5' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_6()'></kbd>");
document.write("<kbd><input type='button'   id='butt7' value = '6' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_7()'></kbd>");
document.write("<kbd><input type='button'   id='butt8' value = '7' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_8()'></kbd>");
document.write("<kbd><input type='button'   id='butt9' value = '8' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_9()'></kbd>");
document.write("<kbd><input type='button'   id='butt10' value = '9' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_10()'></kbd>");

document.write("<kbd><input type='button'   id='butt11' value = '0' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_11()'></kbd>");

document.write("<kbd><input type='button'   id='butt12' value = '&#2307;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_12()'></kbd>");

document.write("<kbd><input type='button'   id='butt13' value = '&#2371;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_13()'>");

document.write("</kbd>");

document.write("<kbd><input type='button'   id='butt53' value = '<--'  style='border-style: offset; background-color: #E8EEFA;color: #000000;width:48px;height:25px' onClick='javascript:Mapping_53()'></kbd>");

document.write("<BR>");

document.write("<kbd><input type='button'   id='butt15' value = 'Tab' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:35px;height:25px' onClick='javascript:Mapping_15()'></kbd>");

document.write("<kbd><input type='button'  id='butt16' value = '&#2380;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_16()'></kbd>");

document.write("<kbd><input type='button'  id='butt17' value = '&#2376;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_17()'></kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='butt18' value = '&#2366;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_18()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='butt19' value = '&#2368;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_19()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='butt20' value = '&#2370;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_20()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='butt21' value = '&#2348;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_21()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='butt22' value = '&#2361;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_22()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='butt23' value = '&#2327;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_23()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='butt24' value = '&#2342;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_24()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='butt25' value = '&#2332;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_25()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='butt26' value = '&#2337;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_26()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='butt27' value = '&#2377;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_14()'></kbd>");
document.write("<kbd><input type='button'  id='butt63' value = '\\' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:43px;height:25px' ></kbd>");

document.write("<BR>");
document.write("<kbd><input type='button'  id='butt54' value = 'Caps' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:45px;height:25px' ></kbd>");

document.write("<kbd><input type='button'  id='butt28' value = '&#2379;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_28()'></kbd>");

document.write("<kbd><input type='button'  id='butt29' value = '&#2375;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_29()'></kbd>");

document.write("<kbd><input type='button'  id='butt30' value = '&#2381;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:35px;height:25px' onClick='javascript:Mapping_30()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='butt31' value = '&#2367;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_31()'>");

document.write("</kbd>");



document.write("<kbd>");

document.write("<input type='button'  id='butt32' value = '&#2369;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_32()'></kbd><kbd>");

document.write("<input type='button'  id='butt33' value = '&#2346;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_33()'></kbd><kbd>");

document.write("<input type='button'  id='butt34' value = '&#2352;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_34()'></kbd><kbd>");

document.write("<input type='button'  id='butt35' value = '&#2325;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_35()'></kbd><kbd>");

document.write("<input type='button'  id='butt36' value = '&#2340;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_36()'></kbd><kbd>");

document.write("<input type='button'  id='butt37' value = '&#2330;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_37()'></kbd><kbd>");

document.write("<input type='button'  id='butt38' value = '&#2335;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_38()'></kbd><kbd>");



document.write("<input type='button'  id='butt39' value = 'Enter' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:58px;height:25px' onClick='javascript:Mapping_39()'></kbd><BR>");



document.write("<kbd>");

document.write("<input type='button'  id='butt52' value = 'Shift' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:65px;height:25px' onClick='javascript:Mapping_52()'></kbd>");



document.write("<kbd>");

document.write("<input type='button'  id='butt40' value = '&#2374;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_40()'></kbd>");

document.write("<kbd>");



document.write("<input type='button'  id='butt41' value = '&#2306;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_41()'></kbd><kbd>");

document.write("<input type='button'  id='butt42' value = '&#2350;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_42()'></kbd><kbd>");

document.write("<input type='button'  id='butt43' value = '&#2344;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_43()'></kbd><kbd>");

document.write("<input type='button'  id='butt44' value = '&#2357;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_44()'></kbd><kbd>");

document.write("<input type='button'  id='butt45' value = '&#2354;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_45()'></kbd><kbd>");

document.write("<input type='button'  id='butt46' value = '&#2360;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_46()'></kbd><kbd>");

document.write("<input type='button'  id='butt47' value = ',' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_47()'></kbd><kbd>");

document.write("<input type='button'  id='butt48' value = '&#2364;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_48()'></kbd><kbd>");

document.write("<input type='button'  id='butt49' value = '&#2351;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Mapping_49()'></kbd><kbd>");

document.write("<input type='button'  id='butt55' value = 'Shift' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:73px;height:25px' onClick='javascript:Mapping_55()' ></kbd>");
//document.write("<input type='button'  id='butt55' value = 'Shift' style='width:95px;height:25px' onClick='javascript:Mapping_55(cur_lyr)' ></kbd>");

document.write("<BR>");
document.write("<kbd><input type='button'  id='butt56' value = 'Ctrl' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:43px;height:25px'></kbd>");
document.write("<kbd><input type='button'  id='butt57' value = ' ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:34px;height:25px' ></kbd>");
document.write("<kbd><input type='button'  id='butt58' value = 'Alt' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px'></kbd>");


document.write("<kbd><input type='button'  id='butt51' value = 'Space   '; style='border-style: offset; background-color: #E8EEFA;color: #000000;width:183px;height:25px' onClick='javascript:Mapping_51()'></kbd>");
document.write("<kbd><input type='button'  id='butt59' value = 'Alt Gr' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:45px;height:25px'></kbd>");
document.write("<kbd><input type='button'  id='butt60' value = ' ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' ></kbd>");
document.write("<kbd><input type='button'  id='butt61' value = ' ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' ></kbd>");
document.write("<kbd><input type='button'  id='butt62' value = 'Ctrl' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:43px;height:25px'></kbd>");
document.write("</body>");
}



                                                                                     

