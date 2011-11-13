var Maresult = 0;
var MarathiType =0; 
var SynonymMaType =0; 
var cur_lyr;
function Reflect_Values()
{
	window.opener.document.getElementById("text_Area").value = document.getElementById("textfield").value;
	window.close();
}
function Synonym_Focus()
{
	MarathiType = 0;
	SynonymMaType = 1;
}
function Hindi_Focus()
{
	MarathiType = 1;
	SynonymMaType = 0;
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

function Marathi_1()
{
	if(Maresult==1)
	{
		writeUnicodeToBox(String.fromCharCode("2322"));
	}
     else
	{
	    writeUnicodeToBox(String.fromCharCode("  "));
	}
}



function Marathi_2()
{
	if(Maresult==1)
	{
		writeUnicodeToBox(String.fromCharCode("2317"));
	}
    else
	{
		writeUnicodeToBox("1");
	}
}

function Marathi_3()
{
	if(Maresult==1)
	{
		writeUnicodeToBox(String.fromCharCode("2373"));
	}
	else
	{
		writeUnicodeToBox("2");
	}
}
function Marathi_4()
{
	if(Maresult==1)
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
function Marathi_5()
{
	if(Maresult==1)
	{							
	  writeUnicodeToBox(String.fromCharCode("2352")+String.fromCharCode("2381"));
	}
	else
	{
		writeUnicodeToBox("4");
		
	}
}
function Marathi_6()
{
	if(Maresult==1)
	{
		writeUnicodeToBox(String.fromCharCode("2332")+String.fromCharCode("2381")+String.fromCharCode("2334"));
		
	}
	else
	{
		writeUnicodeToBox("5");
	}
}
function Marathi_7()
{
	if(Maresult==1)
	{
		
			writeUnicodeToBox(String.fromCharCode("2340")+String.fromCharCode("2381")+String.fromCharCode("2352"));
		
	}
	else
	{
		
			writeUnicodeToBox("6");
		
	}
}
function Marathi_8()
{
    if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2325")+String.fromCharCode("2381")+String.fromCharCode("2359"));
	}
	else
	{
			writeUnicodeToBox("7");
	}
}
function Marathi_9()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2358")+String.fromCharCode("2381")+String.fromCharCode("2352"));
	}
	else
	{
			writeUnicodeToBox("8");
	}
}
function Marathi_10()
{
	if(Maresult==1)
	{
			writeUnicodeToBox("(");
	}
	else
	{
			writeUnicodeToBox("9");
	}
}
function Marathi_11()
{
	if(Maresult==1)
	{
		
			writeUnicodeToBox(")");
	}
	else
	{
		
			writeUnicodeToBox("0");
		
	
	}
}
function Marathi_12()
{
	if(Maresult==1)
	{
			writeUnicodeToBox("-");
		
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2307"));
	}
}
function Marathi_13()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2315")) ;
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2371"));
	}
}
function Marathi_14()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2321"));
		
		
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2377")) ;
		
		
	}
}
function Marathi_15()
{
	if(Maresult==1)
	{
			writeUnicodeToBox("    ");
    
    }
	else
	{
			writeUnicodeToBox("    ");
		
	}
}
function Marathi_16()
{
      if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2324"));
		
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2380"));
		
	}
    
 }
 
function Marathi_17()
{
	if(Maresult==1)
	{
		
			writeUnicodeToBox(String.fromCharCode("2320"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2376"));
		
	}
}

function Marathi_18()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2310"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2366"));
	}
		
}

function Marathi_19()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2312"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2368"));
	}
}
function Marathi_20()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2314"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2370"));
	}
}
function Marathi_21()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2349"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2348"));
	}
}
function Marathi_22()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2329"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2361"));
	}
}
function Marathi_23()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2328"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2327"));
	}
}
function Marathi_24()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2343"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2342"));
	}
}
function Marathi_25()
{
	if(Maresult==1)
	{
		writeUnicodeToBox(String.fromCharCode("2333"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2332"));
	}
}
function Marathi_26()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2338"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2337"));
	}
}
function Marathi_27()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2334"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2364"));
	}
}
function Marathi_28()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2323"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2379"));
	}
}
function Marathi_29()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2319"));
                  
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2375"));
	}
}
function Marathi_30()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2309"));

	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2381"));
	}
}
function Marathi_31()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2311"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2367"));
	}
}
function Marathi_32()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2313"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2369"));
	}
}
function Marathi_33()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2347"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2346"));
	}
}
function Marathi_34()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2353"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2352"));
	}
}
function Marathi_35()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2326"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2325"));
	}
}
function Marathi_36()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2341"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2340"));
	}
}
function Marathi_37()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2331"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2330"));
	}
}
function Marathi_38()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2336"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2335"));
	}
}
function Marathi_39()
{
       if (navigator.appName == 'Netscape')
       {
        var evtMr = document.createEvent("MouseEvents");
        evtMr.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
        var cbMr = document.getElementById("mainSearch");
        cbMr.dispatchEvent(evtMr);
       }
       else
       {
        var cbMr=document.getElementById("mainSearch");
        cbMr.click();
       }
}
function Marathi_40()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2320"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2374"));
	}
}
function Marathi_41()
{
	if(Maresult==1)
	{
	    writeUnicodeToBox(String.fromCharCode("2305"));
		
	}
	else
	{
		writeUnicodeToBox(String.fromCharCode("2306"));
	}
}
function Marathi_42()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2339"));
		
	}
	else
	{
		writeUnicodeToBox(String.fromCharCode("2350"));
	}
}
function Marathi_43()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2345"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2344"));
	}
}
function Marathi_44()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2356"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2357"));
	}
}
function Marathi_45()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2355"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2354"));
	}
}
function Marathi_46()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2358"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2360"));
	}
}
function Marathi_47()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2359"));
	}
	else
	{
			writeUnicodeToBox(",");
	}
}
function Marathi_48()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2404"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2364"));
	}
}
function Marathi_49()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(String.fromCharCode("2399"));
	}
	else
	{
			writeUnicodeToBox(String.fromCharCode("2351"));
	}
}

function Marathi_53()
{
	document.getElementById("textfield").focus(document.getElementById("textfield").caretPos);
	var temp = document.getElementById("textfield").value;
	document.getElementById("textfield").value = temp.substring(0,temp.length-1);
}
function Marathi_51()
{
	if(Maresult==1)
	{
			writeUnicodeToBox(" ");
	}
	else
	{
	
			writeUnicodeToBox(" ");
	}
}

function Marathi_52()
{
	if(flag1==0)
	{
      ShowShiftKbdDn(cur_lyr);
     var id=document.getElementById("Marbutt52");
      id.style.borderColor="blue";
     }
     
    else
    {
      ShowShiftKbdUp(cur_lyr);
     var id=document.getElementById("Marbutt52");
      id.style.borderColor="";
    } 
        
}
function Marathi_55()
{
        if(flag1==0)
        {
     ShowShiftKbdDn(cur_lyr);
     var id=document.getElementById("Marbutt55");
      id.style.borderColor="blue";
     }

    else
    {
     ShowShiftKbdUp(cur_lyr);
     var id=document.getElementById("Marbutt55");
      id.style.borderColor="";
    }

}

function WriteValuesToTextArea()
{
	document.getElementById("textfield").value = window.opener.document.getElementById("textfield").value;
}

function MarSubmit1(id){
cur_lyr=id;

Maresult = 1;

document.getElementById("Marbutt1").value=""+String.fromCharCode("2322")+"";

document.getElementById("Marbutt2").value=""+String.fromCharCode("2317")+"";

document.getElementById("Marbutt3").value=""+String.fromCharCode("2373")+"";

document.getElementById("Marbutt4").value=""+String.fromCharCode("2381")+String.fromCharCode("2352")+"";

document.getElementById("Marbutt5").value=""+String.fromCharCode("2352")+String.fromCharCode("2381")+"";

document.getElementById("Marbutt6").value=""+String.fromCharCode("2332")+String.fromCharCode("2381")+String.fromCharCode("2334")+"";

document.getElementById("Marbutt7").value=""+String.fromCharCode("2340")+String.fromCharCode("2381")+String.fromCharCode("2352")+"";

document.getElementById("Marbutt8").value=""+String.fromCharCode("2325")+String.fromCharCode("2381")+String.fromCharCode("2359")+"";

document.getElementById("Marbutt9").value=""+String.fromCharCode("2358")+String.fromCharCode("2381")+String.fromCharCode("2352")+"";

document.getElementById("Marbutt10").value="(";

document.getElementById("Marbutt11").value=")";

document.getElementById("Marbutt12").value="-";

document.getElementById("Marbutt13").value=""+String.fromCharCode("2315")+"";


document.getElementById("Marbutt53").value="<--";

document.getElementById("Marbutt15").value="Tab";

document.getElementById("Marbutt16").value=""+String.fromCharCode("2324")+"";

document.getElementById("Marbutt17").value=""+String.fromCharCode("2320")+"";

document.getElementById("Marbutt18").value=""+String.fromCharCode("2310")+"";

document.getElementById("Marbutt19").value=""+String.fromCharCode("2312")+"";

document.getElementById("Marbutt20").value=""+String.fromCharCode("2314")+"";

document.getElementById("Marbutt21").value=""+String.fromCharCode("2349")+"";

document.getElementById("Marbutt22").value=""+String.fromCharCode("2329")+"";

document.getElementById("Marbutt23").value=""+String.fromCharCode("2328")+"";

document.getElementById("Marbutt24").value=""+String.fromCharCode("2343")+"";

document.getElementById("Marbutt25").value=""+String.fromCharCode("2333")+"";

document.getElementById("Marbutt26").value=""+String.fromCharCode("2338")+"";

document.getElementById("Marbutt27").value=""+String.fromCharCode("2334")+"";

document.getElementById("Marbutt28").value=""+String.fromCharCode("2323")+"";

document.getElementById("Marbutt29").value=""+String.fromCharCode("2319")+"";

document.getElementById("Marbutt30").value=""+String.fromCharCode("2309")+"";


document.getElementById("Marbutt31").value=""+String.fromCharCode("2311")+"";

document.getElementById("Marbutt32").value=""+String.fromCharCode("2313")+"";

document.getElementById("Marbutt33").value=""+String.fromCharCode("2347")+"";

document.getElementById("Marbutt34").value=""+String.fromCharCode("2353")+"";

document.getElementById("Marbutt35").value=""+String.fromCharCode("2326")+"";

document.getElementById("Marbutt36").value=""+String.fromCharCode("2341")+"";

document.getElementById("Marbutt37").value=""+String.fromCharCode("2331")+"";

document.getElementById("Marbutt38").value=""+String.fromCharCode("2336")+"";

document.getElementById("Marbutt39").value="Enter";

document.getElementById("Marbutt40").value=""+String.fromCharCode("2320")+"";

document.getElementById("Marbutt41").value=""+String.fromCharCode("2305")+"";

document.getElementById("Marbutt42").value=""+String.fromCharCode("2339")+"";

document.getElementById("Marbutt43").value=""+String.fromCharCode("2345")+"";

document.getElementById("Marbutt44").value=""+String.fromCharCode("2356")+"";

document.getElementById("Marbutt45").value=""+String.fromCharCode("2355")+"";

document.getElementById("Marbutt46").value=""+String.fromCharCode("2358")+"";

document.getElementById("Marbutt47").value=""+String.fromCharCode("2359")+"";

document.getElementById("Marbutt48").value=""+String.fromCharCode("2404")+"";

document.getElementById("Marbutt49").value=""+String.fromCharCode("2399")+"";


document.getElementById("Marbutt51").value="Space"; 







}

function Mar_Original_Keyboard(id)

{

	Maresult = 0;

	document.getElementById("Marbutt1").value="";

	document.getElementById("Marbutt2").value="1";

	document.getElementById("Marbutt3").value="2";

	document.getElementById("Marbutt4").value="3";

	document.getElementById("Marbutt5").value="4";

	document.getElementById("Marbutt6").value="5";

	document.getElementById("Marbutt7").value="6";

	document.getElementById("Marbutt8").value="7";

	document.getElementById("Marbutt9").value="8";

	document.getElementById("Marbutt10").value="9";

	document.getElementById("Marbutt11").value="0";

	document.getElementById("Marbutt12").value=""+String.fromCharCode("2307")+"";

	document.getElementById("Marbutt13").value=""+String.fromCharCode("2371")+"";

	document.getElementById("Marbutt53").value="<--";

	document.getElementById("Marbutt15").value="Tab";

	document.getElementById("Marbutt16").value=""+String.fromCharCode("2380")+"";

	document.getElementById("Marbutt17").value=""+String.fromCharCode("2376")+"";

	document.getElementById("Marbutt18").value=""+String.fromCharCode("2366")+"";

	document.getElementById("Marbutt19").value=""+String.fromCharCode("2368")+"";

	document.getElementById("Marbutt20").value=""+String.fromCharCode("2370")+"";

	document.getElementById("Marbutt21").value=""+String.fromCharCode("2348")+"";

	document.getElementById("Marbutt22").value=""+String.fromCharCode("2361")+"";

	document.getElementById("Marbutt23").value=""+String.fromCharCode("2327")+"";

	document.getElementById("Marbutt24").value=""+String.fromCharCode("2342")+"";

	document.getElementById("Marbutt25").value=""+String.fromCharCode("2332")+"";

	document.getElementById("Marbutt26").value=""+String.fromCharCode("2337")+"";

	document.getElementById("Marbutt27").value=""+String.fromCharCode("2377")+"";
    
	document.getElementById("Marbutt54").value="Caps";

	document.getElementById("Marbutt28").value=""+String.fromCharCode("2379")+"";

	document.getElementById("Marbutt29").value=""+String.fromCharCode("2375")+"";

	document.getElementById("Marbutt30").value=""+String.fromCharCode("2381")+"";

	document.getElementById("Marbutt31").value=""+String.fromCharCode("2367")+"";

	document.getElementById("Marbutt32").value=""+String.fromCharCode("2369")+"";

	document.getElementById("Marbutt33").value=""+String.fromCharCode("2346")+"";

	document.getElementById("Marbutt34").value=""+String.fromCharCode("2352")+"";

	document.getElementById("Marbutt35").value=""+String.fromCharCode("2325")+"";

	document.getElementById("Marbutt36").value=""+String.fromCharCode("2340")+"";

	document.getElementById("Marbutt37").value=""+String.fromCharCode("2330")+"";

	document.getElementById("Marbutt38").value=""+String.fromCharCode("2335")+"";

	document.getElementById("Marbutt39").value="Enter";

	document.getElementById("Marbutt40").value=""+String.fromCharCode("2374")+"";

	document.getElementById("Marbutt41").value=""+String.fromCharCode("2306")+"";

	document.getElementById("Marbutt42").value=""+String.fromCharCode("2350")+"";

	document.getElementById("Marbutt43").value=""+String.fromCharCode("2344")+"";

	document.getElementById("Marbutt44").value=""+String.fromCharCode("2357")+"";

	document.getElementById("Marbutt45").value=""+String.fromCharCode("2354")+"";

	document.getElementById("Marbutt46").value=""+String.fromCharCode("2360")+"";

	document.getElementById("Marbutt47").value=","

	document.getElementById("Marbutt48").value=""+String.fromCharCode("2364")+"";

	document.getElementById("Marbutt49").value=""+String.fromCharCode("2351")+"";


	document.getElementById("Marbutt51").value="Space";   

	

	

}

function keyboard()

{
document.write("<body onLoad='javascript:CatchKeyCodeDn(window.event,cur_lyr)'>");
document.write("<br>");
document.write("<kbd><input type='button'   id='Marbutt1' value = '`' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_1()'></kbd>");

document.write("<kbd><input type='button'   id='Marbutt2' value = '1' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_2()'></kbd>");

document.write("<kbd><input type='button'   id='Marbutt3' value = '2' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_3()'></kbd>");

document.write("<kbd><input type='button'   id='Marbutt4' value = '3' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_4()'></kbd>");

document.write("<kbd><input type='button'   id='Marbutt5' value = '4' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_5()'></kbd>");

document.write("<kbd><input type='button'   id='Marbutt6' value = '5' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_6()'></kbd>");

document.write("<kbd><input type='button'   id='Marbutt7' value = '6' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_7()'></kbd>");

document.write("<kbd><input type='button'   id='Marbutt8' value = '7' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_8()'></kbd>");

document.write("<kbd><input type='button'   id='Marbutt9' value = '8' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_9()'></kbd>");

document.write("<kbd><input type='button'   id='Marbutt10' value = '9' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_10()'></kbd>");

document.write("<kbd><input type='button'   id='Marbutt11' value = '0' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_11()'></kbd>");

document.write("<kbd><input type='button'   id='Marbutt12' value = '&#2307;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_12()'></kbd>");

document.write("<kbd><input type='button'   id='Marbutt13' value = '&#2371;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_13()'>");

document.write("</kbd>");

document.write("<kbd><input type='button'   id='Marbutt53' value = '<--'  style='border-style: offset; background-color: #E8EEFA;color: #000000;width:48px;height:25px' onClick='javascript:Marathi_53()'></kbd>");

document.write("<BR>");

document.write("<kbd><input type='button'   id='Marbutt15' value = 'Tab' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:35px;height:25px' onClick='javascript:Marathi_15()'></kbd>");

document.write("<kbd><input type='button'  id='Marbutt16' value = '&#2380;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_16()'></kbd>");

document.write("<kbd><input type='button'  id='Marbutt17' value = '&#2376;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_17()'></kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Marbutt18' value = '&#2366;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_18()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Marbutt19' value = '&#2368;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_19()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Marbutt20' value = '&#2370;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_20()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Marbutt21' value = '&#2348;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_21()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Marbutt22' value = '&#2361;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_22()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Marbutt23' value = '&#2327;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_23()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Marbutt24' value = '&#2342;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_24()'>");

document.write("</kbd>");


document.write("<kbd>");

document.write("<input type='button'  id='Marbutt25' value = '&#2332;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_25()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Marbutt26' value = '&#2337;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_26()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Marbutt27' value = '&#2377;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_14()'></kbd>");
document.write("<kbd><input type='button'  id='Marbutt63' value = '\\' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' ></kbd>");

document.write("<BR>");
document.write("<kbd><input type='button'  id='Marbutt54' value = 'Caps' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:45px;height:25px' ></kbd>");

document.write("<kbd><input type='button'  id='Marbutt28' value = '&#2379;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_28()'></kbd>");

document.write("<kbd><input type='button'  id='Marbutt29' value = '&#2375;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_29()'></kbd>");

document.write("<kbd><input type='button'  id='Marbutt30' value = '&#2381;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_30()'></kbd>");


document.write("<kbd>");

document.write("<input type='button'  id='Marbutt31' value = '&#2367;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_31()'>");

document.write("</kbd>");



document.write("<kbd>");

document.write("<input type='button'  id='Marbutt32' value = '&#2369;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_32()'></kbd><kbd>");

document.write("<input type='button'  id='Marbutt33' value = '&#2346;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_33()'></kbd><kbd>");

document.write("<input type='button'  id='Marbutt34' value = '&#2352;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_34()'></kbd><kbd>");

document.write("<input type='button'  id='Marbutt35' value = '&#2325;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_35()'></kbd><kbd>");

document.write("<input type='button'  id='Marbutt36' value = '&#2340;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_36()'></kbd><kbd>");

document.write("<input type='button'  id='Marbutt37' value = '&#2330;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_37()'></kbd><kbd>");

document.write("<input type='button'  id='Marbutt38' value = '&#2335;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_38()'></kbd><kbd>");



document.write("<input type='button'  id='Marbutt39' value = 'Enter' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:58px;height:25px' onClick='javascript:Marathi_39()'></kbd><BR>");



document.write("<kbd>");

document.write("<input type='button'  id='Marbutt52' value = 'Shift' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:65px;height:25px'  onClick='javascript:Marathi_52()'></kbd>");



document.write("<kbd>");

document.write("<input type='button'  id='Marbutt40' value = '&#2374;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_40()'></kbd>");

document.write("<kbd>");



document.write("<input type='button'  id='Marbutt41' value = '&#2306;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_41()'></kbd><kbd>");

document.write("<input type='button'  id='Marbutt42' value = '&#2350;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_42()'></kbd><kbd>");

document.write("<input type='button'  id='Marbutt43' value = '&#2344;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_43()'></kbd><kbd>");

document.write("<input type='button'  id='Marbutt44' value = '&#2357;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_44()'></kbd><kbd>");

document.write("<input type='button'  id='Marbutt45' value = '&#2354;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_45()'></kbd><kbd>");

document.write("<input type='button'  id='Marbutt46' value = '&#2360;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_46()'></kbd><kbd>");

document.write("<input type='button'  id='Marbutt47' value = ',' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_47()'></kbd><kbd>");

document.write("<input type='button'  id='Marbutt48' value = '&#2364;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_48()'></kbd><kbd>");

document.write("<input type='button'  id='Marbutt49' value = '&#2351;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Marathi_49()'></kbd>");

document.write("<input type='button'  id='butt55' value = 'Shift' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:73px;height:25px' onClick='javascript:Marathi_55()' ></kbd>");

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



                                                                                     

