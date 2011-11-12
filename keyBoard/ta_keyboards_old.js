var Tamresult = 0;
var TamilType =0; 
var SynonymTaType =0; 

function SynonymTa_Focus()
{
	HindiType = 0;
	SynonymType = 1;
}
function Tamil_Focus()
{
	HindiType = 1;
	SynonymType = 0;
}
function Tamil_1()
{
	
	if(Tamresult==1)
	{
		writeUnicodeToTamBox(String.fromCharCode("2962"));
	}
   else
	{			
	writeUnicodeToTamBox(String.fromCharCode("3018"));
	}
}

function writeUnicodeToTamBox(num)
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
				text1 = text1 + num + text2;
				document.getElementById("textfield").value = text1 ;
				document.getElementById("textfield").selectionStart = pos+1;
				document.getElementById("textfield").selectionEnd = pos+1;
				document.getElementById("textfield").focus(pos+1);
			}
			else
			{
				document.getElementById("textfield").focus(document.getElementById("textfield").caretPos);
				document.getElementById("textfield").caretPos = document.selection.createRange().duplicate();
				document.getElementById("textfield").caretPos.text = num;
						
			}
			
}

function Tamil_2()
{
	if(Tamresult==1)
	{
			
	}
else
	{
		writeUnicodeToTamBox("1");
	}
}



function Tamil_3()
{
	if(Tamresult==1)
	{
		
		
	}
	else
	{
		writeUnicodeToTamBox("2");
		
	}
}
function Tamil_4()
{
	if(Tamresult==1)
	{
		
	}
	else
	{
		writeUnicodeToTamBox("3");
		
	}
}
function Tamil_5()
{
	if(Tamresult==1)
	{							
		
		
	}
	else
	{
			writeUnicodeToTamBox("4");
		
	}
}
function Tamil_6()
{
	if(Tamresult==1)
	{
		
		
	}
	else
	{
			writeUnicodeToTamBox("5");
	}
}
function Tamil_7()
{
	if(Tamresult==1)
	{
		
			writeUnicodeToTamBox(String.fromCharCode("2980")+String.fromCharCode("3021")+String.fromCharCode("2992"));
	}
	else
	{
		
			writeUnicodeToTamBox("6");
		
	}
}
function Tamil_8()
{
if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2965")+String.fromCharCode("3021")+String.fromCharCode("2999"));
	}
	else
	{
			writeUnicodeToTamBox("7");
	}
}
function Tamil_9()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2999")+String.fromCharCode("3021")+String.fromCharCode("2992"));
	}
	else
	{
			writeUnicodeToTamBox("8");
	}
}
function Tamil_10()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox("(");
	}
	else
	{
			writeUnicodeToTamBox("9");
	}
}
function Tamil_11()
{
	if(Tamresult==1)
	{
		
			writeUnicodeToTamBox(")");
	}
	else
	{
		
			writeUnicodeToTamBox("0");
		
	
	}
}
function Tamil_12()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2947"));
		
	}
	else
	{
			writeUnicodeToTamBox("-");
	}
}
function Tamil_15()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox("    ");
		
	
	}
	else
	{
			writeUnicodeToTamBox("    ");
		
		
	}
}
function Tamil_16()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2964"));
		
		
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("3020"));
		
		
	}
}
function Tamil_17()
{
	if(Tamresult==1)
	{
		
			writeUnicodeToTamBox(String.fromCharCode("2960"));
		

	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("3016"));
		
	
	}
}
function Tamil_18()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2950"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("3006"));
	}
		
}

function Tamil_19()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2952"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("3008"));
	}
}
function Tamil_20()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2954"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("3010"));
	}
}
function Tamil_21()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2986"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("2986"));
	}
}
function Tamil_22()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2969"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("3001"));
	}
}
function Tamil_23()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2965"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("2965"));
	}
}
function Tamil_24()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2980"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("2980"));
	}
}
function Tamil_25()
{
	if(Tamresult==1)
	{
		writeUnicodeToTamBox(String.fromCharCode("2970"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("2972"));
	}
}
function Tamil_26()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2975"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("2975"));
	}
}
function Tamil_27()
{
	if(Tamresult==1)
	{
			
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("2974"));
	}
}
function Tamil_28()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2963"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("3019"));
	}
}
function Tamil_29()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2959"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("3015"));
	}
}
function Tamil_30()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2949"));
			

	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("3021"));
	}
}
function Tamil_31()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2951"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("3007"));
	}
}
function Tamil_32()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2953"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("3009"));
	}
}
function Tamil_33()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2986"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("2986"));
	}
}
function Tamil_34()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2993"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("2992"));
	}
}
function Tamil_35()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2965"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("2965"));
	}
}
function Tamil_36()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2980"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("2980"));
	}
}
function Tamil_37()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2970"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("2970"));
	}
}
function Tamil_38()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2975"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("2975"));
	}
}
function Tamil_39()
{ 
 if (navigator.appName == 'Netscape')
  {
  var evtTa = document.createEvent("MouseEvents");
  evtTa.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
  var cbTa = document.getElementByName("UNL Tamil");
  cbTa.dispatchEvent(evtTa);
  }
  else
   {
   var cbTa=document.getElementByName("UNL Tamil");
   cbTa.click();
   }

 }
function Tamil_40()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2958"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("3014"));
	}
}
function Tamil_42()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2979"));
		
	}
	else
	{
		writeUnicodeToTamBox(String.fromCharCode("2990"));
	}
}
function Tamil_43()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2985"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("2984"));
	}
}
function Tamil_44()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2996"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("2997"));
	}
}
function Tamil_45()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2995"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("2994"));
	}
}
function Tamil_46()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2999"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("3000"));
	}
}
function Tamil_47()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2999"));
	}
	else
	{
			writeUnicodeToTamBox(",");
	}
}
function Tamil_48()
{
	if(Tamresult==1)
	{
	       writeUnicodeToTamBox(String.fromCharCode("3000")+String.fromCharCode("3021")+String.fromCharCode("2992")+String.fromCharCode("3008"));
	}
	else
	{
			writeUnicodeToTamBox(".");
	}
}
function Tamil_49()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(String.fromCharCode("2991"));
	}
	else
	{
			writeUnicodeToTamBox(String.fromCharCode("2991"));
	}
}
function Tamil_53()
{
	document.getElementById("textfield").focus(document.getElementById("textfield").caretPos);
	var temp = document.getElementById("textfield").value;
	document.getElementById("textfield").value = temp.substring(0,temp.length-1);
}
function Tamil_51()
{
	if(Tamresult==1)
	{
			writeUnicodeToTamBox(" ");
	}
	else
	{
	
			writeUnicodeToTamBox(" ");
	}
}

function Tamil_52()
{
if(flag1==0)
	{
     ShowShiftKbdDn();
     var id=document.getElementById("Tambutt52");
     id.style.borderColor="blue";
     }
     
    else
    {
     ShowShiftKbdUp();
     var id=document.getElementById("Tambutt52");
      id.style.borderColor="";
    } 
}
function Tamil_57()
{
if(flag1==0)
        {
     ShowShiftKbdDn();
     var id=document.getElementById("Tambutt57");
     id.style.borderColor="blue";
     }

    else
    {
     ShowShiftKbdUp();
     var id=document.getElementById("Tambutt57");
      id.style.borderColor="";
    }
}

function WriteValuesToTextArea()
{
	document.getElementById("textfield").value = window.opener.document.getElementById("text_Area").value;
}
function TamSubmit1()
{
	Tamresult = 1;
	document.getElementById("Tambutt1").value=""+String.fromCharCode("2962")+"";
	document.getElementById("Tambutt2").value="";
	document.getElementById("Tambutt3").value="";
	document.getElementById("Tambutt4").value="";
	document.getElementById("Tambutt5").value="";
	document.getElementById("Tambutt6").value="";
	document.getElementById("Tambutt7").value=""+String.fromCharCode("2980")+String.fromCharCode("3021")+String.fromCharCode("2992")+"";
	document.getElementById("Tambutt8").value=""+String.fromCharCode("2965")+String.fromCharCode("3021")+String.fromCharCode("2999")+"";
	document.getElementById("Tambutt9").value=""+String.fromCharCode("2999")+String.fromCharCode("3021")+String.fromCharCode("2992")+"";
	document.getElementById("Tambutt10").value="(";
	document.getElementById("Tambutt11").value=")";
	document.getElementById("Tambutt12").value=""+String.fromCharCode("2947")+"";
	document.getElementById("Tambutt53").value="Backspace";
	document.getElementById("Tambutt15").value="Tab";
	document.getElementById("Tambutt16").value=""+String.fromCharCode("2964")+"";
	document.getElementById("Tambutt17").value=""+String.fromCharCode("2960")+"";
	document.getElementById("Tambutt18").value=""+String.fromCharCode("2950")+"";;
	document.getElementById("Tambutt19").value=""+String.fromCharCode("2952")+"";
	document.getElementById("Tambutt20").value=""+String.fromCharCode("2954")+"";
	document.getElementById("Tambutt21").value=""+String.fromCharCode("2986")+"";
	document.getElementById("Tambutt22").value=""+String.fromCharCode("2969")+"";
	document.getElementById("Tambutt23").value=""+String.fromCharCode("2965")+"";
	document.getElementById("Tambutt24").value=""+String.fromCharCode("2980")+"";
	document.getElementById("Tambutt25").value=""+String.fromCharCode("2970")+"";
	document.getElementById("Tambutt26").value=""+String.fromCharCode("2975")+"";
	document.getElementById("Tambutt27").value="";
	document.getElementById("Tambutt28").value=""+String.fromCharCode("2963")+"";
	document.getElementById("Tambutt29").value=""+String.fromCharCode("2959")+"";
	document.getElementById("Tambutt30").value=""+String.fromCharCode("2949")+"";
	document.getElementById("Tambutt31").value=""+String.fromCharCode("2951")+"";
	document.getElementById("Tambutt32").value=""+String.fromCharCode("2953")+"";
	document.getElementById("Tambutt33").value=""+String.fromCharCode("2986")+"";
	document.getElementById("Tambutt34").value=""+String.fromCharCode("2993")+"";
	document.getElementById("Tambutt35").value=""+String.fromCharCode("2965")+"";
	document.getElementById("Tambutt36").value=""+String.fromCharCode("2980")+"";
	document.getElementById("Tambutt37").value=""+String.fromCharCode("2970")+"";
	document.getElementById("Tambutt38").value=""+String.fromCharCode("2975")+"";
	document.getElementById("Tambutt39").value="Enter";
	document.getElementById("Tambutt40").value=""+String.fromCharCode("2958")+"";
	document.getElementById("Tambutt42").value=""+String.fromCharCode("2979")+"";
	document.getElementById("Tambutt43").value=""+String.fromCharCode("2985")+"";
	document.getElementById("Tambutt44").value=""+String.fromCharCode("2996")+"";
	document.getElementById("Tambutt45").value=""+String.fromCharCode("2995")+"";
	document.getElementById("Tambutt46").value=""+String.fromCharCode("2999")+"";
	document.getElementById("Tambutt47").value=""+String.fromCharCode("2999")+"";
	document.getElementById("Tambutt48").value=""+String.fromCharCode("3000")+String.fromCharCode("3021")+String.fromCharCode("2992")+String.fromCharCode("3008")+"";
	document.getElementById("Tambutt49").value=""+String.fromCharCode("2991")+"";
	document.getElementById("Tambutt51").value="Space Bar"; 

}
function Tam_Original_Keyboard()
{
	Tamresult = 0;
	document.getElementById("Tambutt1").value=""+String.fromCharCode("3018")+"";
	document.getElementById("Tambutt2").value="1";
	document.getElementById("Tambutt3").value="2";
	document.getElementById("Tambutt4").value="3";
	document.getElementById("Tambutt5").value="4";
	document.getElementById("Tambutt6").value="5";
	document.getElementById("Tambutt7").value="6";
	document.getElementById("Tambutt8").value="7";
	document.getElementById("Tambutt9").value="8";
	document.getElementById("Tambutt10").value="9";
	document.getElementById("Tambutt11").value="0";
	document.getElementById("Tambutt12").value="-";
        document.getElementById("Tambutt53").value="Backspace";
        document.getElementById("Tambutt15").value="Tab";
	document.getElementById("Tambutt16").value=""+String.fromCharCode("3020")+"";
	document.getElementById("Tambutt17").value=""+String.fromCharCode("3016")+"";
	document.getElementById("Tambutt18").value=""+String.fromCharCode("3006")+"";
	document.getElementById("Tambutt19").value=""+String.fromCharCode("3008")+"";
	document.getElementById("Tambutt20").value=""+String.fromCharCode("3010")+"";
	document.getElementById("Tambutt21").value=""+String.fromCharCode("2986")+"";
	document.getElementById("Tambutt22").value=""+String.fromCharCode("3001")+"";
	document.getElementById("Tambutt23").value=""+String.fromCharCode("2965")+"";
	document.getElementById("Tambutt24").value=""+String.fromCharCode("2980")+"";
	document.getElementById("Tambutt25").value=""+String.fromCharCode("2972")+"";
	document.getElementById("Tambutt26").value=""+String.fromCharCode("2975")+"";
	document.getElementById("Tambutt27").value=""+String.fromCharCode("2974")+"";
	document.getElementById("Tambutt28").value=""+String.fromCharCode("3019")+"";
	document.getElementById("Tambutt29").value=""+String.fromCharCode("3015")+"";
	document.getElementById("Tambutt30").value=""+String.fromCharCode("3021")+"";
	document.getElementById("Tambutt31").value=""+String.fromCharCode("3007")+"";
	document.getElementById("Tambutt32").value=""+String.fromCharCode("3009")+"";
	document.getElementById("Tambutt33").value=""+String.fromCharCode("2986")+"";
	document.getElementById("Tambutt34").value=""+String.fromCharCode("2992")+"";
	document.getElementById("Tambutt35").value=""+String.fromCharCode("2965")+"";
	document.getElementById("Tambutt36").value=""+String.fromCharCode("2980")+"";
	document.getElementById("Tambutt37").value=""+String.fromCharCode("2970")+"";
	document.getElementById("Tambutt38").value=""+String.fromCharCode("2975")+"";
	document.getElementById("Tambutt39").value="Enter";
	document.getElementById("Tambutt40").value=""+String.fromCharCode("3014")+"";
	document.getElementById("Tambutt42").value=""+String.fromCharCode("2990")+"";
	document.getElementById("Tambutt43").value=""+String.fromCharCode("2984")+"";
	document.getElementById("Tambutt44").value=""+String.fromCharCode("2997")+"";
	document.getElementById("Tambutt45").value=""+String.fromCharCode("2994")+"";
	document.getElementById("Tambutt46").value=""+String.fromCharCode("3000")+"";
	document.getElementById("Tambutt47").value=","
	document.getElementById("Tambutt48").value=".";
	document.getElementById("Tambutt49").value=""+String.fromCharCode("2991")+"";
	document.getElementById("Tambutt51").value="Space Bar";  
	
}
function keyboard()
{                                                                          
   document.write("<kbd><input type='button'   id='Tambutt1'  value = '&#3018;' style='width:40px;height:25px' onClick='javascript:Tamil_1()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt2'  value = '1' style='width:40px;height:25px' onClick='javascript:Tamil_2()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt3'  value = '2' style='width:40px;height:25px' onClick='javascript:Tamil_3()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt4'  value = '3' style='width:40px;height:25px' onClick='javascript:Tamil_4()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt5'  value = '4' style='width:40px;height:25px' onClick='javascript:Tamil_5()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt6'  value = '5' style='width:40px;height:25px' onClick='javascript:Tamil_6()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt7'  value = '6' style='width:40px;height:25px' onClick='javascript:Tamil_7()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt8'  value = '7' style='width:40px;height:25px' onClick='javascript:Tamil_8()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt9'  value = '8' style='width:40px;height:25px' onClick='javascript:Tamil_9()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt10' value = '9' style='width:40px;height:25px' onClick='javascript:Tamil_10()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt11' value = '0' style='width:40px;height:25px' onClick='javascript:Tamil_11()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt12' value = '-' style='width:40px;height:25px' onClick='javascript:Tamil_12()'></kbd>");
     document.write("<kbd><input type='button'   id='Tambutt53' value = 'Backspace' style='width:85px;height:25px' onClick='javascript:Tamil_53()'></kbd>");
   document.write("<BR>");
   document.write("<kbd><input type='button'   id='Tambutt15'   value = 'Tab' style='width:50px;height:25px' onClick='javascript:Tamil_15()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt16'  value = '&#3020;' style='width:40px;height:25px' onClick='javascript:Tamil_16()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt17'  value = '&#3016;' style='width:40px;height:25px' onClick='javascript:Tamil_17()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt18'  value = '&#3006;' style='width:40px;height:25px' onClick='javascript:Tamil_18()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt19'  value = '&#3008;' style='width:40px;height:25px' onClick='javascript:Tamil_19()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt20'  value = '&#3010;' style='width:40px;height:25px' onClick='javascript:Tamil_20()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt21'  value = '&#2986;' style='width:40px;height:25px' onClick='javascript:Tamil_21()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt22'  value = '&#3001;' style='width:40px;height:25px' onClick='javascript:Tamil_22()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt23'  value = '&#2965;' style='width:40px;height:25px' onClick='javascript:Tamil_23()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt24'  value = '&#2980;' style='width:40px;height:25px' onClick='javascript:Tamil_24()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt25'  value = '&#2972;' style='width:40px;height:25px' onClick='javascript:Tamil_25()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt26'  value = '&#2975;' style='width:40px;height:25px' onClick='javascript:Tamil_26()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt27'  value = '&#2974;' style='width:40px;height:25px' onClick='javascript:Tamil_27()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt54'  value = '' style='width:35px;height:25px' ></kbd>");
   document.write("<BR>");
   document.write("<kbd><input type='button'   id='Tambutt55'  value = 'CapsLock' style='width:65px;height:25px' ></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt28'  value = '&#3019;' style='width:40px;height:25px' onClick='javascript:Tamil_28()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt29'  value = '&#3015;' style='width:40px;height:25px' onClick='javascript:Tamil_29()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt30'  value = '&#3021;' style='width:40px;height:25px' onClick='javascript:Tamil_30()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt31'  value = '&#3007;' style='width:40px;height:25px' onClick='javascript:Tamil_31()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt32'  value = '&#3009;' style='width:40px;height:25px' onClick='javascript:Tamil_32()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt33'  value = '&#2986;' style='width:40px;height:25px' onClick='javascript:Tamil_33()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt34'  value = '&#2992;' style='width:40px;height:25px' onClick='javascript:Tamil_34()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt35'  value = '&#2965;' style='width:40px;height:25px' onClick='javascript:Tamil_35()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt36'  value = '&#2980;' style='width:40px;height:25px' onClick='javascript:Tamil_36()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt37'  value = '&#2970;' style='width:40px;height:25px' onClick='javascript:Tamil_37()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt38'  value = '&#2975;' style='width:40px;height:25px' onClick='javascript:Tamil_38()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt39'  value = 'Enter' style='width:60px;height:25px' onClick='javascript:Tamil_39()'></kbd>");
   document.write("<BR>");
   document.write("<kbd>");
   document.write("<input type='button'  id='Tambutt52' value = 'Shift' style='width:85px;height:25px' onClick='javascript:Tamil_52()'></kbd>");

   document.write("<kbd><input type='button'   id='Tambutt40'  value = '&#3014;' style='width:40px;height:25px' onClick='javascript:Tamil_40()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt42'  value = '&#2990;' style='width:40px;height:25px' onClick='javascript:Tamil_42()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt43'  value = '&#2984;' style='width:40px;height:25px' onClick='javascript:Tamil_43()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt44'  value = '&#2997;' style='width:40px;height:25px' onClick='javascript:Tamil_44()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt45'  value = '&#2994;' style='width:40px;height:25px' onClick='javascript:Tamil_45()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt46'  value = '&#3000;' style='width:40px;height:25px' onClick='javascript:Tamil_46()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt47'  value = ',' style='width:40px;height:25px' onClick='javascript:Tamil_47()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt48'  value = '.' style='width:40px;height:25px' onClick='javascript:Tamil_48()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt49'  value = '&#2991;' style='width:40px;height:25px' onClick='javascript:Tamil_49()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt56'  value = '' style='width:40px;height:25px' onClick='javascript:Tamil_56()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt57'  value = 'Shift' style='width:80px;height:25px' onClick='javascript:Tamil_57()'></kbd>");
   document.write("<BR>");
   document.write("<kbd><input type='button'   id='Tambutt58'  value = 'Ctrl' style='width:40px;height:25px' ></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt59'  value = '' style='width:40px;height:25px' ></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt60'  value = 'Alt' style='width:40px;height:25px' ></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt51'  value = 'Space Bar' style='width:285px;height:25px' onClick='javascript:Tamil_51()'></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt61'  value = 'Alt Gr' style='width:40px;height:25px' ></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt62'  value = '' style='width:40px;height:25px' ></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt63'  value = '' style='width:40px;height:25px' ></kbd>");
   document.write("<kbd><input type='button'   id='Tambutt64'  value = 'Ctrl' style='width:40px;height:25px' ></kbd>");
}
