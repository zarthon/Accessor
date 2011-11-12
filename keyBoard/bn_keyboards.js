var BanResult = 0;
var BangaliType =0; 
var SynonymBType =0; 
var cur_lyr;
function SynonymB_Focus()
{
	BangaliType = 0;
	SynonymBType = 1;
}
function Bangali_Focus()
{
	BangaliType = 1;
	SynonymBType = 0;
}

function writeUnicodeToBanBox(Number)
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

function Bangali_1()
{
	if(BanResult==1)
	{
	
	}
else
	{
		
	}
}

function Bangali_2()
{
	if(BanResult==1)
	{
		writeUnicodeToBanBox(String.fromCharCode("33"));
	}
else
	{
		writeUnicodeToBanBox("1");
	}
}




function Bangali_3()
{
	if(BanResult==1)
	{
		writeUnicodeToBanBox(String.fromCharCode("64"));
		
	}
	else
	{
		writeUnicodeToBanBox("2");		
	}
}
function Bangali_4()
{
	if(BanResult==1)
	{
	    writeUnicodeToBanBox(String.fromCharCode("2509")+String.fromCharCode("2480")+String.fromCharCode("2509")+String.fromCharCode("2480"));
	}
	else
	{
		writeUnicodeToBanBox("3");		
	}
}
function Bangali_5()
{
	if(BanResult==1)
	{							
			writeUnicodeToBanBox(String.fromCharCode("2480")+String.fromCharCode("2509"));
		
	}
	else
	{
			writeUnicodeToBanBox("4");		
	}
}
function Bangali_6()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2460")+String.fromCharCode("2509")+String.fromCharCode("2462"));
		
	}
	else
	{
			writeUnicodeToBanBox("5");	}
}
function Bangali_7()
{
	if(BanResult==1)
	{
		
			writeUnicodeToBanBox(String.fromCharCode("2468")+String.fromCharCode("2509")+String.fromCharCode("2480"));
		
	}
	else
	{
		
			writeUnicodeToBanBox("6");		
	}
}
function Bangali_8()
{
if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2453")+String.fromCharCode("2509")+String.fromCharCode("2487"));
	}
	else
	{
			writeUnicodeToBanBox("7");	
	}
}
function Bangali_9()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2486")+String.fromCharCode("2509")+String.fromCharCode("2480"));
	}
	else
	{
			writeUnicodeToBanBox("8");	
			
	}
}
function Bangali_10()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("40"));
	}
	else
	{
			writeUnicodeToBanBox("9");	
	}
}
function Bangali_11()
{
	if(BanResult==1)
	{
		
			writeUnicodeToBanBox(String.fromCharCode("41"));
	}
	else
	{
		
			writeUnicodeToBanBox("0");		
    }
}
function Bangali_12()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2435"));		
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("45"));
	}
}
function Bangali_13()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2443")) ;
		
		
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2499"));
		
	
	}
}
function Bangali_14()
{
	if(BanResult==1)
	{
			
		
	}
	else
	{
					
		
	}
}
function Bangali_15()   //Tab button
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox("	  ");
		
	
	}
	else
	{
			writeUnicodeToBanBox("    ");
		
		
	}
}
function Bangali_16()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2452"));
		
		
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2508"));
		
		
	}
}
function Bangali_17()
{
	if(BanResult==1)
	{
		
			writeUnicodeToBanBox(String.fromCharCode("2448"));
		

	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2504"));
		
	
	}
}
function Bangali_18()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2438"));
		}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2494"));
	}
		
}

function Bangali_19()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2440"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2496"));
	}
}
function Bangali_20()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2442"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2498"));
	}
}
function Bangali_21()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2477"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2476"));
	}
}
function Bangali_22()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2457"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2489"));
	}
}
function Bangali_23()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2456"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2455"));
	}
}
function Bangali_24()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2471"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2470"));
	}
}
function Bangali_25()
{
	if(BanResult==1)
	{
		writeUnicodeToBanBox(String.fromCharCode("2461"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2460"));
	}
}
function Bangali_26()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2466"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2465"));
	}
}
function Bangali_27()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2462"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2492"));
	}
}
function Bangali_28()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2451"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2507"));
	}
}
function Bangali_29()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2447"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2503"));
	}
}
function Bangali_30()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2437"));
			
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2509"));
	}
}
function Bangali_31()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2439"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2495"));
	}
}
function Bangali_32()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2441"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2497"));
	}
}
function Bangali_33()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2475"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2474"));
	}
}
function Bangali_34()
{
	if(BanResult==1)
	{
		
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2480"));
	}
}
function Bangali_35()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2454"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2453"));
	}
}
function Bangali_36()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2469"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2468"));
	}
}
function Bangali_37()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2459"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2458"));
	}
}
function Bangali_38()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2464"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2463"));
	}
}
function Bangali_39()
{
  if (navigator.appName == 'Netscape')
   {
  var evtBn = document.createEvent("MouseEvents");
  evtBn.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
  var cbBn = document.getElementById("mainSearch");
  cbBn.dispatchEvent(evtBn);
   }
  else
   {
   var cbBn=document.getElementById("mainSearch");
   cbBn.click();
   }
}
function Bangali_41()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2433"));
		
	}
	else
	{
		writeUnicodeToBanBox(String.fromCharCode("2434"));
	}
}
function Bangali_42()
{
	if(BanResult==1)
	{
		writeUnicodeToBanBox(String.fromCharCode("2467"));
		
	}
	else
	{
		writeUnicodeToBanBox(String.fromCharCode("2478"));
	}
}
function Bangali_43()
{
	if(BanResult==1)
	{
		    writeUnicodeToBanBox(String.fromCharCode("2524"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2472"));
	}
}
function Bangali_44()
{
	if(BanResult==1)
	{
		   writeUnicodeToBanBox(String.fromCharCode("2525"));
	}
	else
	{
			
	}
}
function Bangali_45()
{
	if(BanResult==1)
	{
			
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2482"));
	}
}
function Bangali_46()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2486"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2488"));
	}
}
function Bangali_47()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2487"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("44"));
	}
}
function Bangali_48()
{
	if(BanResult==1)
	{
            
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("46"));
	}
}
function Bangali_49()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(String.fromCharCode("2479"));
	}
	else
	{
			writeUnicodeToBanBox(String.fromCharCode("2527"));
	}
}
function Bangali_53()
{
	document.getElementById("textfield").focus(document.getElementById("textfield").caretPos);
	var temp = document.getElementById("textfield").value;
	document.getElementById("textfield").value = temp.substring(0,temp.length-1);
}

function Bangali_51()
{
	if(BanResult==1)
	{
			writeUnicodeToBanBox(" ");
	}
	else
	{
	        writeUnicodeToBanBox(" ");
	}
}

function Bangali_52()
{
    if(flag1==0)
    {
     ShowShiftKbdDn(cur_lyr);
     var id=document.getElementById("Banbutt52");
     id.style.borderColor="blue";
    }
     
    else
    {
     ShowShiftKbdUp(cur_lyr);
     var id=document.getElementById("Banbutt52");
     id.style.borderColor="";
    } 
}
function Bangali_56()
{
    if(flag1==0)
    {
     ShowShiftKbdDn(cur_lyr);
     var id=document.getElementById("Banbutt56");
     id.style.borderColor="blue";
    }

    else
    {
     ShowShiftKbdUp(cur_lyr);
     var id=document.getElementById("Banbutt55");
     id.style.borderColor="";
    }
}
function Bangali_53()
{
	document.getElementById("textfield").focus(document.getElementById("textfield").caretPos);
	var temp = document.getElementById("textfield").value;
	document.getElementById("textfield").value = temp.substring(0,temp.length-1);
}

function WriteValuesToTextArea()
{
	document.getElementById("textfield").value = window.opener.document.getElementById("text_Area").value;
}
function Bansubmit1(id)
{
	BanResult = 1;
document.getElementById("Banbutt1").value="";
document.getElementById("Banbutt2").value=""+String.fromCharCode("33")+"";
document.getElementById("Banbutt3").value=""+String.fromCharCode("64")+"";
document.getElementById("Banbutt4").value=""+String.fromCharCode("2509")+String.fromCharCode("2480")+String.fromCharCode("2509")+String.fromCharCode("2480")+"";
document.getElementById("Banbutt5").value=""+String.fromCharCode("2480")+String.fromCharCode("2509")+"";
document.getElementById("Banbutt6").value=""+String.fromCharCode("2460")+String.fromCharCode("2509")+String.fromCharCode("2462")+"";
document.getElementById("Banbutt7").value=""+String.fromCharCode("2468")+String.fromCharCode("2509")+String.fromCharCode("2480")+"";
document.getElementById("Banbutt8").value=""+String.fromCharCode("2453")+String.fromCharCode("2509")+String.fromCharCode("2487")+"";
document.getElementById("Banbutt9").value=""+String.fromCharCode("2486")+String.fromCharCode("2509")+String.fromCharCode("2480")+"";
document.getElementById("Banbutt10").value=""+String.fromCharCode("40")+"";
document.getElementById("Banbutt11").value=""+String.fromCharCode("41")+"";
document.getElementById("Banbutt12").value=""+String.fromCharCode("2435")+"";
document.getElementById("Banbutt13").value=""+String.fromCharCode("2443")+"";
document.getElementById("Banbutt53").value="<--";
document.getElementById("Banbutt15").value="Tab";
document.getElementById("Banbutt16").value=""+String.fromCharCode("2452")+"";
document.getElementById("Banbutt17").value=""+String.fromCharCode("2448")+"";
document.getElementById("Banbutt18").value=""+String.fromCharCode("2438")+"";
document.getElementById("Banbutt19").value=""+String.fromCharCode("2440")+"";
document.getElementById("Banbutt20").value=""+String.fromCharCode("2442")+"";
document.getElementById("Banbutt21").value=""+String.fromCharCode("2477")+"";
document.getElementById("Banbutt22").value=""+String.fromCharCode("2457")+"";
document.getElementById("Banbutt23").value=""+String.fromCharCode("2456")+"";
document.getElementById("Banbutt24").value=""+String.fromCharCode("2471")+"";
document.getElementById("Banbutt25").value=""+String.fromCharCode("2461")+"";
document.getElementById("Banbutt26").value=""+String.fromCharCode("2466")+"";
document.getElementById("Banbutt27").value=""+String.fromCharCode("2462")+"";
document.getElementById("Banbutt28").value=""+String.fromCharCode("2451")+"";
document.getElementById("Banbutt29").value=""+String.fromCharCode("2447")+"";
document.getElementById("Banbutt30").value=""+String.fromCharCode("2437")+"";
document.getElementById("Banbutt31").value=""+String.fromCharCode("2439")+"";
document.getElementById("Banbutt32").value=""+String.fromCharCode("2441")+"";
document.getElementById("Banbutt33").value=""+String.fromCharCode("2475")+"";
document.getElementById("Banbutt34").value="";
document.getElementById("Banbutt35").value=""+String.fromCharCode("2454")+"";
document.getElementById("Banbutt36").value=""+String.fromCharCode("2469")+"";
document.getElementById("Banbutt37").value=""+String.fromCharCode("2459")+"";
document.getElementById("Banbutt38").value=""+String.fromCharCode("2464")+"";
document.getElementById("Banbutt39").value="Enter";
document.getElementById("Banbutt40").value="";
document.getElementById("Banbutt41").value=""+String.fromCharCode("2433")+"";
document.getElementById("Banbutt42").value=""+String.fromCharCode("2467")+"";
document.getElementById("Banbutt43").value=""+String.fromCharCode("2524")+"";
document.getElementById("Banbutt44").value=""+String.fromCharCode("2525")+"";
document.getElementById("Banbutt45").value="";
document.getElementById("Banbutt46").value=""+String.fromCharCode("2486")+"";
document.getElementById("Banbutt47").value=""+String.fromCharCode("2487")+"";
document.getElementById("Banbutt48").value="";
document.getElementById("Banbutt49").value=""+String.fromCharCode("2479")+"";
document.getElementById("Banbutt51").value="Space Bar"; 

}
function Ban_Original_Keyboard(id)
{
	BanResult = 0;
	document.getElementById("Banbutt1").value="" ;
	document.getElementById("Banbutt2").value="1";
	document.getElementById("Banbutt3").value="2";
	document.getElementById("Banbutt4").value="3";
	document.getElementById("Banbutt5").value="4";
	document.getElementById("Banbutt6").value="5";
	document.getElementById("Banbutt7").value="6";
	document.getElementById("Banbutt8").value="7";
	document.getElementById("Banbutt9").value="8";
	document.getElementById("Banbutt10").value="9";
	document.getElementById("Banbutt11").value="0";
	document.getElementById("Banbutt12").value=""+String.fromCharCode("45")+"";
	document.getElementById("Banbutt13").value=""+String.fromCharCode("2499")+"";
	document.getElementById("Banbutt53").value="<--";
	document.getElementById("Banbutt15").value="Tab";
	document.getElementById("Banbutt16").value=""+String.fromCharCode("2508")+"";
	document.getElementById("Banbutt17").value=""+String.fromCharCode("2504")+"";
	document.getElementById("Banbutt18").value=""+String.fromCharCode("2494")+"";
	document.getElementById("Banbutt19").value=""+String.fromCharCode("2496")+"";
	document.getElementById("Banbutt20").value=""+String.fromCharCode("2498")+"";
	document.getElementById("Banbutt21").value=""+String.fromCharCode("2476")+"";
	document.getElementById("Banbutt22").value=""+String.fromCharCode("2489")+"";
	document.getElementById("Banbutt23").value=""+String.fromCharCode("2455")+"";
	document.getElementById("Banbutt24").value=""+String.fromCharCode("2470")+"";
	document.getElementById("Banbutt25").value=""+String.fromCharCode("2460")+"";
	document.getElementById("Banbutt26").value=""+String.fromCharCode("2465")+"";
	document.getElementById("Banbutt27").value=""+String.fromCharCode("2492")+"";
	document.getElementById("Banbutt28").value=""+String.fromCharCode("2507")+"";
	document.getElementById("Banbutt29").value=""+String.fromCharCode("2503")+"";
	document.getElementById("Banbutt30").value=""+String.fromCharCode("2509")+"";
	document.getElementById("Banbutt31").value=""+String.fromCharCode("2495")+"";
	document.getElementById("Banbutt32").value=""+String.fromCharCode("2497")+"";
	document.getElementById("Banbutt33").value=""+String.fromCharCode("2474")+"";
	document.getElementById("Banbutt34").value=""+String.fromCharCode("2480")+"";
	document.getElementById("Banbutt35").value=""+String.fromCharCode("2453")+"";
	document.getElementById("Banbutt36").value=""+String.fromCharCode("2468")+"";
	document.getElementById("Banbutt37").value=""+String.fromCharCode("2458")+"";
	document.getElementById("Banbutt38").value=""+String.fromCharCode("2463")+"";
	document.getElementById("Banbutt39").value="Enter";
	document.getElementById("Banbutt40").value="";
	document.getElementById("Banbutt41").value=""+String.fromCharCode("2434")+"";
	document.getElementById("Banbutt42").value=""+String.fromCharCode("2478")+"";
	document.getElementById("Banbutt43").value=""+String.fromCharCode("2472")+"";
	document.getElementById("Banbutt44").value="";
	document.getElementById("Banbutt45").value=""+String.fromCharCode("2482")+"";
	document.getElementById("Banbutt46").value=""+String.fromCharCode("2488")+"";
	document.getElementById("Banbutt47").value=""+String.fromCharCode("44")+"";
	document.getElementById("Banbutt48").value=""+String.fromCharCode("46")+"";
	document.getElementById("Banbutt49").value=""+String.fromCharCode("2527")+"";
	document.getElementById("Banbutt51").value="Space Bar";  
}


function keyboard()
{
document.write("<body onLoad='javascript:CatchKeyCodeDn(window.event,cur_lyr)'>");
document.write("<br>");
document.write("<kbd><input type='button'   id='Banbutt1' value = '`' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_1()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt2' value = '1' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_2()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt3' value = '2' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_3()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt4' value = '3' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_4()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt5' value = '4' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_5()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt6' value = '5' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_6()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt7' value = '6' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_7()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt8' value = '7' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_8()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt9' value = '8' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_9()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt10' value = '9' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_10()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt11' value = '0' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_11()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt12' value = '&#45;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_12()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt13' value = '&#2499;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_13()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt53' value = '<--'  style='border-style: offset; background-color: #E8EEFA;color: #000000;width:48px;height:25px' onClick='javascript:Bangali_53()'></kbd>");
document.write("<BR>");
document.write("<kbd><input type='button'   id='Banbutt15' value = 'Tab' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:35px;height:25px' onClick='javascript:Bangali_15()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt16' value = '&#2508;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_16()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt17' value = '&#2504;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_17()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt18' value = '&#2494;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_18()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt19' value = '&#2496;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_19()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt20' value = '&#2498;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_20()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt21' value = '&#2476;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_21()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt22' value = '&#2489;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_22()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt23' value = '&#2455;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_23()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt24' value = '&#2470;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_24()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt25' value = '&#2460;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_25()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt26' value = '&#2465;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_26()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt27' value = '&#2492;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_27()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt54' value = ' ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:43px;height:25px' ></kbd>");
document.write("<BR>");
document.write("<kbd><input type='button'   id='Banbutt55' value = 'Caps' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:45px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Banbutt28' value = '&#2507;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_28()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt29' value = '&#2503;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_29()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt30' value = '&#2509;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_30()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt31' value = '&#2495;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_31()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt32' value = '&#2497;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_32()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt33' value = '&#2474;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_33()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt34' value = '&#2480;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_34()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt35' value = '&#2453;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_35()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt36' value = '&#2468;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_36()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt37' value = '&#2458;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_37()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt38' value = '&#2463;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_38()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt39' value = 'Enter' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:58px;height:25px' onClick='javascript:Bangali_39()'></kbd><BR>");
document.write("<kbd>");
document.write("<input type='button'        id='Banbutt52' value = 'Shift' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:65px;height:25px' onClick='javascript:Bangali_52()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt40' value = ' ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_40()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt41' value = '&#2434;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_41()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt42' value = '&#2478;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_42()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt43' value = '&#2472;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_43()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt44' value = ' ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_44()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt45' value = '&#2482;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_45()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt46' value = '&#2488;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_46()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt47' value = '&#44;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_47()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt48' value = '&#46;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_48()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt49' value = '&#2527;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Bangali_49()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt56' value = 'Shift' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:73px;height:25px' onClick='javascript:Bangali_56()' ></kbd>");
document.write("<BR>");
document.write("<kbd><input type='button'   id='Banbutt57' value = 'Ctrl' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:43px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Banbutt58' value = ' ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:34px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Banbutt59' value = 'Alt' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Banbutt51' value = 'Space Bar'; style='border-style: offset; background-color: #E8EEFA;color: #000000;width:183px;height:25px' onClick='javascript:Bangali_51()'></kbd>");
document.write("<kbd><input type='button'   id='Banbutt60' value = 'Alt Gr' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:45px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Banbutt61' value = ' ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Banbutt62' value = ' ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Banbutt63' value = 'Ctrl' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:43px;height:25px' ></kbd>");// JavaScript Document

document.write("</p>");
document.write("</body>");
}
