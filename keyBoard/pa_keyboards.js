var Punresult = 0;
var PunjabiType =0; 
var SynonymPType =0; 
var cur_lyr;

function Reflect_Values()
{
	window.opener.document.getElementById("text_Area").value = document.getElementById("textfield").value;
	window.close();
}

function SynonymP_Focus()
{
	PunjabiType = 0;
	SynonymPType = 1;
}
function Punjabi_Focus()
{
	PunjabiType = 1;
	SynonymPType = 0;
}

function writeUnicodeToPunBox(Number)
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

function Punjabi_1()
{
	if(Punresult==1)
	{
		writeUnicodeToPunBox(String.fromCharCode("2617"));
	}
else
	{
	
	}
}

function Punjabi_2()
{
	if(Punresult==1)
	{
	
	}
else
	{
		writeUnicodeToPunBox(String.fromCharCode("49"));
	}
}




function Punjabi_3()
{
	if(Punresult==1)
	{
		writeUnicodeToPunBox(String.fromCharCode("2607"));
		
	}
	else
	{
		writeUnicodeToPunBox(String.fromCharCode("50"));		
	}
}
function Punjabi_4()
{
	if(Punresult==1)
	{
		writeUnicodeToPunBox(String.fromCharCode("2608"));
	}
	else
	{
		writeUnicodeToPunBox(String.fromCharCode("51"));		
	}
}
function Punjabi_5()
{
	if(Punresult==1)
	{							
			writeUnicodeToPunBox(String.fromCharCode("2673"));
		
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("52"));		
	}
}
function Punjabi_6()
{
	if(Punresult==1)
	{
			
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("53"));
	}
}
function Punjabi_7()
{
	if(Punresult==1)
	{
		
	}
	else
	{
		
			writeUnicodeToPunBox(String.fromCharCode("54"));		
	}
}
function Punjabi_8()
{
if(Punresult==1)
	{

	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("55"));
	}
}
function Punjabi_9()
{
	if(Punresult==1)
	{
	
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("56"));	
	}
}
function Punjabi_10()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("40"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("57"));	
	}
}
function Punjabi_11()
{
	if(Punresult==1)
	{
		
			writeUnicodeToPunBox(String.fromCharCode("41"));
	}
	else
	{
		
			writeUnicodeToPunBox(String.fromCharCode("48"));		
	
	}
}
function Punjabi_12()
{
	if(Punresult==1)
	{
			
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("45"));
	}
}

function Punjabi_15()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(" ");
		
	
	}
	else
	{
			writeUnicodeToPunBox(" ");
		
		
	}
}
function Punjabi_16()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2580"));
		
		
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2636"));
		
		
	}
}
function Punjabi_17()
{
	if(Punresult==1)
	{
		
			writeUnicodeToPunBox(String.fromCharCode("2576"));
		

	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2632"));
		
	
	}
}
function Punjabi_18()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2566"));
		}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2622"));
	}
		
}

function Punjabi_19()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2568"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2624"));
		}
}
function Punjabi_20()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2570"));
		}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2626"));
	}
}
function Punjabi_21()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2605"));
		}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2604"));
		}
}
function Punjabi_22()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2585"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2617"));
	}
}
function Punjabi_23()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2584"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2583"));
	}
}
function Punjabi_24()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2599"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2598"));
	}
}
function Punjabi_25()
{
	if(Punresult==1)
	{
		writeUnicodeToPunBox(String.fromCharCode("2589"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2588"));
	}
}
function Punjabi_26()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2594"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2593"));
	}
}
function Punjabi_27()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2590"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2620"));
	}
}
function Punjabi_28()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2579"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2635"));
	}
}
function Punjabi_29()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2575"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2631"));
	}
}
function Punjabi_30()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2565"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2637"));
	}
}
function Punjabi_31()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2567"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2623"));
	}
}
function Punjabi_32()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2569"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2625"));
	}
}
function Punjabi_33()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2603"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2602"));
	}
}
function Punjabi_34()
{
	if(Punresult==1)
	{

	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2608"));
	}
}
function Punjabi_35()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2582"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2581"));
	}
}
function Punjabi_36()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2597"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2596"));
	}
}
function Punjabi_37()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2587"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2586"));
	}
}
function Punjabi_38()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2592"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2591"));
	}
}
function Punjabi_39()
{
   if (navigator.appName == 'Netscape')
   {
   var evtPn = document.createEvent("MouseEvents");
   evtPn.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
   var cbPn = document.getElementById("mainSearch");
   cbPn.dispatchEvent(evtPn);
   }
   else
   {
   var cbPn=document.getElementById("mainSearch");
   cbPn.click();
   }
   
}

function Punjabi_41()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2562"));
		
	}
	else
	{
		writeUnicodeToPunBox(String.fromCharCode("2672"));
	}
}
function Punjabi_42()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2595"));
		
	}
	else
	{
		writeUnicodeToPunBox(String.fromCharCode("2606"));
	}
}
function Punjabi_43()
{
	if(Punresult==1)
	{

	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2600"));
	}
}
function Punjabi_44()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2674"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2613"));
	}
}
function Punjabi_45()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2611"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2610"));
	}
}
function Punjabi_46()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2614"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2616"));
	}
}
function Punjabi_47()
{
	if(Punresult==1)
	{

	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("44"));
	}
}
function Punjabi_48()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(String.fromCharCode("2404"));
	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("46"));	
    }
}
function Punjabi_49()
{
	if(Punresult==1)
	{

	}
	else
	{
			writeUnicodeToPunBox(String.fromCharCode("2607"));
	}
}
function Punjabi_53()
{
	document.getElementById("textfield").focus(document.getElementById("textfield").caretPos);
	var temp = document.getElementById("textfield").value;
	document.getElementById("textfield").value = temp.substring(0,temp.length-1);
}

function Punjabi_51()
{
	if(Punresult==1)
	{
			writeUnicodeToPunBox(" ");
	}
	else
	{
	
			writeUnicodeToPunBox(" ");
	}
}

function Punjabi_52()
{
	if(flag1==0)
	{
     ShowShiftKbdDn(cur_lyr);
     var id=document.getElementById("Punbutt52");
     id.style.borderColor="blue";
     }
     
    else
    {
     ShowShiftKbdUp(cur_lyr);
     var id=document.getElementById("Punbutt52"); 
     id.style.borderColor="";
    } 
}
function Punjabi_56()
{
     if(flag1==0)
      {
     ShowShiftKbdDn(cur_lyr);
     var id=document.getElementById("Punbutt56");
     id.style.borderColor="blue";
     }

    else
    {
     ShowShiftKbdUp(cur_lyr);
     var id=document.getElementById("Punbutt56");
     id.style.borderColor="";
    }
}


function WriteValuesToTextArea()
{
	document.getElementById("textfield").value = window.opener.document.getElementById("text_Area").value;
}
function PunSubmit1(id)
{
Punresult = 1;
document.getElementById("Punbutt1").value="";
document.getElementById("Punbutt2").value="";
document.getElementById("Punbutt3").value=""+String.fromCharCode("2607")+"";
document.getElementById("Punbutt4").value=""+String.fromCharCode("2608")+"";
document.getElementById("Punbutt5").value=""+String.fromCharCode("2673")+"";
document.getElementById("Punbutt6").value="";
document.getElementById("Punbutt7").value="";
document.getElementById("Punbutt8").value="";
document.getElementById("Punbutt9").value="";
document.getElementById("Punbutt10").value=""+String.fromCharCode("40")+"";
document.getElementById("Punbutt11").value=""+String.fromCharCode("41")+"";
document.getElementById("Punbutt12").value=""+String.fromCharCode("45")+"";
document.getElementById("Punbutt15").value="Tab";
document.getElementById("Punbutt16").value=""+String.fromCharCode("2580")+"";
document.getElementById("Punbutt17").value=""+String.fromCharCode("2576")+"";
document.getElementById("Punbutt18").value=""+String.fromCharCode("2566")+"";;
document.getElementById("Punbutt19").value=""+String.fromCharCode("2568")+"";
document.getElementById("Punbutt20").value=""+String.fromCharCode("2570")+"";
document.getElementById("Punbutt21").value=""+String.fromCharCode("2605")+"";
document.getElementById("Punbutt22").value=""+String.fromCharCode("2585")+"";
document.getElementById("Punbutt23").value=""+String.fromCharCode("2584")+"";
document.getElementById("Punbutt24").value=""+String.fromCharCode("2599")+"";
document.getElementById("Punbutt25").value=""+String.fromCharCode("2589")+"";
document.getElementById("Punbutt26").value=""+String.fromCharCode("2594")+"";
document.getElementById("Punbutt27").value=""+String.fromCharCode("2590")+"";
document.getElementById("Punbutt28").value=""+String.fromCharCode("2579")+"";
document.getElementById("Punbutt29").value=""+String.fromCharCode("2575")+"";
document.getElementById("Punbutt30").value=""+String.fromCharCode("2565")+"";
document.getElementById("Punbutt31").value=""+String.fromCharCode("2567")+"";
document.getElementById("Punbutt32").value=""+String.fromCharCode("2569")+"";
document.getElementById("Punbutt33").value=""+String.fromCharCode("2603")+"";
document.getElementById("Punbutt34").value="";
document.getElementById("Punbutt35").value=""+String.fromCharCode("2582")+"";
document.getElementById("Punbutt36").value=""+String.fromCharCode("2597")+"";
document.getElementById("Punbutt37").value=""+String.fromCharCode("2587")+"";
document.getElementById("Punbutt38").value=""+String.fromCharCode("2592")+"";
document.getElementById("Punbutt39").value="Enter";
document.getElementById("Punbutt41").value=""+String.fromCharCode("2562")+"";
document.getElementById("Punbutt42").value=""+String.fromCharCode("2595")+"";
document.getElementById("Punbutt43").value="";
document.getElementById("Punbutt44").value=""+String.fromCharCode("2674")+"";
document.getElementById("Punbutt45").value=""+String.fromCharCode("2611")+"";
document.getElementById("Punbutt46").value=""+String.fromCharCode("2614")+"";
document.getElementById("Punbutt47").value="";
document.getElementById("Punbutt48").value=""+String.fromCharCode("2404")+"";
document.getElementById("Punbutt49").value="";


}
function Pun_Original_Keyboard(id)
{
	Punresult = 0;
	document.getElementById("Punbutt1").value="" ;
	document.getElementById("Punbutt2").value="" + String.fromCharCode("49")+"";
	document.getElementById("Punbutt3").value="" + String.fromCharCode("50")+"";
	document.getElementById("Punbutt4").value="" + String.fromCharCode("51")+"";
	document.getElementById("Punbutt5").value="" + String.fromCharCode("52")+"";
	document.getElementById("Punbutt6").value="" + String.fromCharCode("53")+"";
	document.getElementById("Punbutt7").value="" + String.fromCharCode("54")+"";
	document.getElementById("Punbutt8").value="" + String.fromCharCode("55")+"";
	document.getElementById("Punbutt9").value="" + String.fromCharCode("56")+"";
	document.getElementById("Punbutt10").value="" + String.fromCharCode("57")+"";
	document.getElementById("Punbutt11").value="" + String.fromCharCode("48")+"";
	document.getElementById("Punbutt12").value=""+String.fromCharCode("45")+"";
        document.getElementById("Punbutt53").value="<--";
	document.getElementById("Punbutt15").value="Tab";
	document.getElementById("Punbutt16").value=""+String.fromCharCode("2636")+"";
	document.getElementById("Punbutt17").value=""+String.fromCharCode("2632")+"";
	document.getElementById("Punbutt18").value=""+String.fromCharCode("2622")+"";
	document.getElementById("Punbutt19").value=""+String.fromCharCode("2624")+"";
	document.getElementById("Punbutt20").value=""+String.fromCharCode("2626")+"";
	document.getElementById("Punbutt21").value=""+String.fromCharCode("2604")+"";
	document.getElementById("Punbutt22").value=""+String.fromCharCode("2617")+"";
	document.getElementById("Punbutt23").value=""+String.fromCharCode("2583")+"";
	document.getElementById("Punbutt24").value=""+String.fromCharCode("2598")+"";
	document.getElementById("Punbutt25").value=""+String.fromCharCode("2588")+"";
	document.getElementById("Punbutt26").value=""+String.fromCharCode("2593")+"";
	document.getElementById("Punbutt27").value=""+String.fromCharCode("2620")+"";
	document.getElementById("Punbutt28").value=""+String.fromCharCode("2635")+"";
	document.getElementById("Punbutt29").value=""+String.fromCharCode("2631")+"";
	document.getElementById("Punbutt30").value=""+String.fromCharCode("2637")+"";
	document.getElementById("Punbutt31").value=""+String.fromCharCode("2623")+"";
	document.getElementById("Punbutt32").value=""+String.fromCharCode("2625")+"";
	document.getElementById("Punbutt33").value=""+String.fromCharCode("2602")+"";
	document.getElementById("Punbutt34").value=""+String.fromCharCode("2608")+"";
	document.getElementById("Punbutt35").value=""+String.fromCharCode("2581")+"";
	document.getElementById("Punbutt36").value=""+String.fromCharCode("2596")+"";
	document.getElementById("Punbutt37").value=""+String.fromCharCode("2586")+"";
	document.getElementById("Punbutt38").value=""+String.fromCharCode("2591")+"";
	document.getElementById("Punbutt39").value="Enter";
	document.getElementById("Punbutt41").value=""+String.fromCharCode("2672")+"";
	document.getElementById("Punbutt42").value=""+String.fromCharCode("2606")+"";
	document.getElementById("Punbutt43").value=""+String.fromCharCode("2600")+"";
	document.getElementById("Punbutt44").value=""+String.fromCharCode("2613")+"";
	document.getElementById("Punbutt45").value=""+String.fromCharCode("2610")+"";
	document.getElementById("Punbutt46").value=""+String.fromCharCode("2616")+"";
	document.getElementById("Punbutt47").value=""+String.fromCharCode("44")+"";
	document.getElementById("Punbutt48").value=""+String.fromCharCode("46")+"";
	document.getElementById("Punbutt49").value=""+String.fromCharCode("2607")+"";
	
	
}
                                                                                     

function keyboard()
{
document.write("<body onLoad='javascript:CatchKeyCodeDn(window.event,cur_lyr)'>");
document.write("<br>");
document.write("<kbd><input type='button'   id='Punbutt1'  value = '`' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_1()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt2'  value = '&#49;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_2()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt3'  value = '&#50;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_3()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt4'  value = '&#51;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_4()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt5'  value = '&#52;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_5()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt6'  value = '&#53;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_6()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt7'  value = '&#54;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_7()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt8'  value = '&#55;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_8()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt9'  value = '&#56;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_9()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt10'  value = '&#57;'style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_10()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt11'  value = '&#48;'style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_11()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt12'  value = '&#45;'style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_12()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt53'  value = '<--' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:48px;height:25px' onClick='javascript:Punjabi_53()'></kbd>");
document.write("<BR>");
document.write("<kbd><input type='button'   id='Punbutt15'  value = ' Tab ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:35px;height:25px' onClick='javascript:Punjabi_15()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt16'  value = '&#2636;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_16()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt17'  value = '&#2632;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_17()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt18'  value = '&#2622;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_18()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt19'  value = '&#2624;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_19()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt20'  value = '&#2626;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_20()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt21'  value = '&#2604;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_21()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt22'  value = '&#2617;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_22()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt23'  value = '&#2583;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_23()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt24'  value = '&#2598;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_24()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt25'  value = '&#2588;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_25()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt26'  value = '&#2593;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_26()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt27'  value = '&#2620;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_27()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt54'  value = ' ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' ></kbd>");
document.write("<BR>");
document.write("<kbd><input type='button'   id='Punbutt55'  value = 'Caps' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:45px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Punbutt28'  value = '&#2635;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_28()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt29'  value = '&#2631;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_29()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt30'  value = '&#2637;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_30()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt31'  value = '&#2623;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_31()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt32'  value = '&#2625;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_32()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt33'  value = '&#2602;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_33()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt34'  value = '&#2608;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_34()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt35'  value = '&#2581;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_35()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt36'  value = '&#2596;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_36()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt37'  value = '&#2586;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_37()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt38'  value = '&#2591;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_38()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt39'  value = 'Enter' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:58px;height:25px' onClick='javascript:Punjabi_39()'></kbd>");

document.write("<BR>");

document.write("<kbd>");
document.write("<input type='button'  id='Punbutt52' value = 'Shift' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:65px;height:25px' onClick='javascript:Punjabi_52()'></kbd>");

document.write("<kbd><input type='button'   id='Punbutt41'  value = '&#2672;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_41()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt42'  value = '&#2606;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_42()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt43'  value = '&#2600;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_43()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt44'  value = '&#2613;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_44()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt45'  value = '&#2610;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_45()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt46'  value = '&#2616;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_46()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt47'  value = '&#46;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_47()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt48'  value = '&#46;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_48()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt49'  value = '&#2607;' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_49()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt64'  value = ' ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Punjabi_64()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt56'  value = 'Shift' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:73px;height:25px' onClick='javascript:Punjabi_56()' ></kbd>");

document.write("<BR>");

document.write("<kbd><input type='button'   id='Punbutt57'  value = 'Ctrl' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:43px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Punbutt58'  value = ' ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:34px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Punbutt59'  value = 'Alt' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Punbutt51'  value = 'Space    ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:183px;height:25px' onClick='javascript:Punjabi_51()'></kbd>");
document.write("<kbd><input type='button'   id='Punbutt60'  value = 'Alt Gr' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:45px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Punbutt61'  value = ' ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Punbutt62'  value = ' ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Punbutt63'  value = 'Ctrl' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:43px;height:25px' ></kbd>");
document.write("</body>");
}
