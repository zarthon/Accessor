var Telresult =0;
var TeluguType =0; 
var SynonymTType =0; 
var cur_lyr;
function SynonymT_Focus()
{
	TeluguType = 0;
	SynonymType = 1;
}
function Telugu_Focus()
{
	TeluguType = 1;
	SynonymType = 0;
}
function Telugu_1()
{
	
	if(Telresult==1)
	{
		    writeUnicodeToTelBox(String.fromCharCode("3090"));
	}
    else
	{
			writeUnicodeToTelBox(String.fromCharCode("3146"));
	}
}

function writeUnicodeToTelBox(Number)
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
				document.getElementById("textfield").selectionStart=pos+1;
				document.getElementById("textfield").selectionEnd=pos+1;
				document.getElementById("textfield").focus(pos+1);
			}
			else
			{
				document.getElementById("textfield").focus(document.getElementById("textfield").caretPos);
				document.getElementById("textfield").caretPos = document.selection.createRange().duplicate();
				document.getElementById("textfield").caretPos.text = Number;
						
			}
			
}

function Telugu_2()
{
	if(Telresult==1)
	{
		writeUnicodeToTelBox(String.fromCharCode("3140"));
	}
else
	{
		writeUnicodeToTelBox("1");
	}
}
function Telugu_3()
{
	if(Telresult==1)
	{
		writeUnicodeToTelBox(String.fromCharCode("3168"));
		
	}
	else
	{
		writeUnicodeToTelBox("2");
		
	}
}



function Telugu_4()
{
	if(Telresult==1)
	{
		    writeUnicodeToTelBox(String.fromCharCode("3149")+String.fromCharCode("3120"));
	}
	else
	{
	    	writeUnicodeToTelBox("3");
		
	}
}
function Telugu_5()
{
	if(Telresult==1)
	{							
			writeUnicodeToTelBox(String.fromCharCode("3120")+String.fromCharCode("3149"));
		
	}
	else
	{
			writeUnicodeToTelBox("4");
		
	}
}
function Telugu_6()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3100")+String.fromCharCode("3149")+String.fromCharCode("3102"));
		
	}
	else
	{
			writeUnicodeToTelBox("5");
	}
}
function Telugu_7()
{
	if(Telresult==1)
	{
		
			writeUnicodeToTelBox(String.fromCharCode("3108")+String.fromCharCode("3149")+String.fromCharCode("3120"));
		
	}
	else
	{
		
			writeUnicodeToTelBox("6");
		
	}
}
function Telugu_8()
{
if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3093")+String.fromCharCode("3149")+String.fromCharCode("3127"));
	}
	else
	{
			writeUnicodeToTelBox("7");
	}
}
function Telugu_9()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3126")+String.fromCharCode("3149")+String.fromCharCode("3120"));
	}
	else
	{
			writeUnicodeToTelBox("8");
	}
}
function Telugu_10()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox("(");
	}
	else
	{
			writeUnicodeToTelBox("9");
	}
}
function Telugu_11()
{
	if(Telresult==1)
	{
		
			writeUnicodeToTelBox(")");
	}
	else
	{
	    	writeUnicodeToTelBox("0");
		
    }
}
function Telugu_12()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3075"));
		
	}
	else
	{
			writeUnicodeToTelBox("-");
	}
}
function Telugu_13()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3083")) ;
		
		
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3139"));
		
	
	}
}
function Telugu_14()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3089"));
		
		
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3145")) ;
		
		
	}
} 
function Telugu_15()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox("    ");
		
	
	}
	else
	{
			writeUnicodeToTelBox("    ");
		
		
	}
}
function Telugu_16()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3092"));
		
		
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3148"));
		
		
	}
}
function Telugu_17()
{
	if(Telresult==1)
	{
		
			writeUnicodeToTelBox(String.fromCharCode("3088"));
		

	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3144"));
		
	
	}
}
function Telugu_18()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3078"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3134"));
	}
		
}

function Telugu_19()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3080"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3136"));
	}
}
function Telugu_20()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3082"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3138"));
	}
}
function Telugu_21()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3117"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3116"));
	}
}
function Telugu_22()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3097"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3129"));
	}
}
function Telugu_23()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3096"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3095"));
	}
}
function Telugu_24()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3111"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3110"));
	}
}
function Telugu_25()
{
	if(Telresult==1)
	{
		    writeUnicodeToTelBox(String.fromCharCode("3101"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3100"));
	}
}
function Telugu_26()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3106"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3105"));
	}
}
function Telugu_27()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3102"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3102"));
	}
}
function Telugu_28()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3091"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3147"));
	}
}
function Telugu_29()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3087"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3143"));
	}
}
function Telugu_30()
{
	if(Telresult==1)
	{
			
			writeUnicodeToTelBox(String.fromCharCode("3077"));

	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3149"));
	}
}
function Telugu_31()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3079"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3135"));
	}
}
function Telugu_32()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3081"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3137"));
	}
}
function Telugu_33()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3115"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3114"));
	}
}
function Telugu_34()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3121"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3120"));
	}
}
function Telugu_35()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3094"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3093"));
	}
}
function Telugu_36()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3109"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3108"));
	}
}
function Telugu_37()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3099"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3098"));
	}
}
function Telugu_38()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3104"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3103"));
	}
}
function Telugu_39()
{
   if (navigator.appName == 'Netscape')
   {
   var evtTe = document.createEvent("MouseEvents");
   evtTe.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
   var cbTe = document.getElementById("mainSearch");
   cbTe.dispatchEvent(evtTe);
   }
   else
   {
    var cbTe=document.getElementById("mainSearch");
    cbTe.click();
   }
}
function Telugu_40()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3086"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3142"));
	}
}
function Telugu_41()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3073"));
		
	}
	else
	{
		    writeUnicodeToTelBox(String.fromCharCode("3074"));
	}
}
function Telugu_42()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3107"));
		
	}
	else
	{
		    writeUnicodeToTelBox(String.fromCharCode("3118"));
	}
}
function Telugu_43()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox("");
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3112"));
	}
}
function Telugu_44()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox("");
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3125"));
	}
}
function Telugu_45()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3123"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3122"));
	}
}
function Telugu_46()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3126"));
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3128"));
	}
}
function Telugu_47()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(String.fromCharCode("3127"));
	}
	else
	{
			writeUnicodeToTelBox(",");
	}
}
function Telugu_48()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(">");
	}
	else
	{
			writeUnicodeToTelBox(".");
	}
}
function Telugu_49()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox("");
	}
	else
	{
			writeUnicodeToTelBox(String.fromCharCode("3119"));
	}
}

function Telugu_51()
{
	if(Telresult==1)
	{
			writeUnicodeToTelBox(" ");
	}
	else
	{
	
			writeUnicodeToTelBox(" ");
	}
}

function Telugu_52()
{
	 if(flag1==0)
	 {   
     ShowShiftKbdDn(cur_lyr);
     var id=document.getElementById("Telbutt52");
     id.style.borderColor="blue";
     }
     
     else
     {
     ShowShiftKbdUp(cur_lyr);
     var id=document.getElementById("Telbutt52");
     id.style.borderColor="";
     } 

}
function Telugu_56()
{
         if(flag1==0)
         {
     ShowShiftKbdDn(cur_lyr);
     var id=document.getElementById("Telbutt56");
     id.style.borderColor="blue";
     }

     else
     {
     ShowShiftKbdUp(cur_lyr);
     var id=document.getElementById("Telbutt56");
     id.style.borderColor="";
     }
}

function Telugu_53()
{
	document.getElementById("textfield").focus(document.getElementById("textfield").caretPos);
	var temp = document.getElementById("textfield").value;
	document.getElementById("textfield").value = temp.substring(0,temp.length-1);
}

function WriteValuesToTextArea()
{
	document.getElementById("textfield").value = window.opener.document.getElementById("text_Area").value;
}
function TelSubmit1(id)
{
Telresult = 1;
document.getElementById("Telbutt1").value=" "+String.fromCharCode("3090")+" ";
document.getElementById("Telbutt2").value=" "+String.fromCharCode("3140")+" ";
document.getElementById("Telbutt3").value=" "+String.fromCharCode("3168")+" ";
document.getElementById("Telbutt4").value=" "+String.fromCharCode("3149")+String.fromCharCode("3120")+" ";
document.getElementById("Telbutt5").value=" "+String.fromCharCode("3120")+String.fromCharCode("3149")+" ";
document.getElementById("Telbutt6").value=" "+String.fromCharCode("3100")+String.fromCharCode("3149")+String.fromCharCode("3102")+" ";
document.getElementById("Telbutt7").value=" "+String.fromCharCode("3108")+String.fromCharCode("3149")+String.fromCharCode("3120")+" ";
document.getElementById("Telbutt8").value=" "+String.fromCharCode("3093")+String.fromCharCode("3149")+String.fromCharCode("3127")+" ";
document.getElementById("Telbutt9").value=" "+String.fromCharCode("3126")+String.fromCharCode("3149")+String.fromCharCode("3120")+" ";
document.getElementById("Telbutt10").value=" ( ";
document.getElementById("Telbutt11").value=" ) ";
document.getElementById("Telbutt12").value=" "+String.fromCharCode("3075")+" ";
document.getElementById("Telbutt13").value=" "+String.fromCharCode("3083")+" ";
document.getElementById("Telbutt53").value=" <-- ";
document.getElementById("Telbutt15").value=" Tab ";
document.getElementById("Telbutt16").value=" "+String.fromCharCode("3092")+" ";
document.getElementById("Telbutt17").value=" "+String.fromCharCode("3088")+" ";
document.getElementById("Telbutt18").value=" "+String.fromCharCode("3078")+" ";
document.getElementById("Telbutt19").value=" "+String.fromCharCode("3080")+" ";
document.getElementById("Telbutt20").value=" "+String.fromCharCode("3082")+" ";
document.getElementById("Telbutt21").value=" "+String.fromCharCode("3117")+" ";
document.getElementById("Telbutt22").value=" "+String.fromCharCode("3097")+" ";
document.getElementById("Telbutt23").value=" "+String.fromCharCode("3096")+" ";
document.getElementById("Telbutt24").value=" "+String.fromCharCode("3111")+" ";
document.getElementById("Telbutt25").value=" "+String.fromCharCode("3101")+" ";
document.getElementById("Telbutt26").value=" "+String.fromCharCode("3106")+" ";
document.getElementById("Telbutt27").value=" "+String.fromCharCode("3102")+" ";
document.getElementById("Telbutt28").value=" "+String.fromCharCode("3091")+" ";
document.getElementById("Telbutt29").value=" "+String.fromCharCode("3087")+" ";
document.getElementById("Telbutt30").value=" "+String.fromCharCode("3077")+" ";
document.getElementById("Telbutt31").value=" "+String.fromCharCode("3079")+" ";
document.getElementById("Telbutt32").value=" "+String.fromCharCode("3081")+" ";
document.getElementById("Telbutt33").value=" "+String.fromCharCode("3115")+" ";
document.getElementById("Telbutt34").value=" "+String.fromCharCode("3121")+" ";
document.getElementById("Telbutt35").value=" "+String.fromCharCode("3094")+" ";
document.getElementById("Telbutt36").value=" "+String.fromCharCode("3109")+" ";
document.getElementById("Telbutt37").value=" "+String.fromCharCode("3099")+" ";
document.getElementById("Telbutt38").value=" "+String.fromCharCode("3104")+" ";
document.getElementById("Telbutt39").value="  Enter  ";
document.getElementById("Telbutt40").value=" "+String.fromCharCode("3086")+" ";
document.getElementById("Telbutt41").value=" "+String.fromCharCode("3073")+" ";
document.getElementById("Telbutt42").value=" "+String.fromCharCode("3107")+" ";
document.getElementById("Telbutt43").value="  ";
document.getElementById("Telbutt44").value="  ";
document.getElementById("Telbutt45").value=" "+String.fromCharCode("3123")+" ";
document.getElementById("Telbutt46").value=" "+String.fromCharCode("3126")+" ";
document.getElementById("Telbutt47").value=" "+String.fromCharCode("3127")+" ";
document.getElementById("Telbutt48").value=" > ";
document.getElementById("Telbutt49").value="  ";
document.getElementById("Telbutt51").value="           Space Bar    "; 


}
function Tel_Original_Keyboard(id)
{
	Telresult = 0;
	document.getElementById("Telbutt1").value=" "+String.fromCharCode("3146")+" ";
	document.getElementById("Telbutt2").value=" 1 ";
	document.getElementById("Telbutt3").value=" 2 ";
	document.getElementById("Telbutt4").value=" 3 ";
	document.getElementById("Telbutt5").value=" 4 ";
	document.getElementById("Telbutt6").value=" 5 ";
	document.getElementById("Telbutt7").value=" 6 ";
	document.getElementById("Telbutt8").value=" 7 ";
	document.getElementById("Telbutt9").value=" 8 ";
	document.getElementById("Telbutt10").value=" 9 ";
	document.getElementById("Telbutt11").value=" 0 ";
	document.getElementById("Telbutt12").value=" - ";
        document.getElementById("Telbutt13").value=" "+String.fromCharCode("3139")+" ";
        document.getElementById("Telbutt53").value=" <--";
	document.getElementById("Telbutt15").value=" Tab ";
	document.getElementById("Telbutt16").value=" "+String.fromCharCode("3148")+" ";
	document.getElementById("Telbutt17").value=" "+String.fromCharCode("3144")+" ";
	document.getElementById("Telbutt18").value=" "+String.fromCharCode("3134")+" ";
	document.getElementById("Telbutt19").value=" "+String.fromCharCode("3136")+" ";
	document.getElementById("Telbutt20").value=" "+String.fromCharCode("3138")+" ";
	document.getElementById("Telbutt21").value=" "+String.fromCharCode("3116")+" ";
	document.getElementById("Telbutt22").value=" "+String.fromCharCode("3129")+" ";
	document.getElementById("Telbutt23").value=" "+String.fromCharCode("3095")+" ";
	document.getElementById("Telbutt24").value=" "+String.fromCharCode("3110")+" ";
	document.getElementById("Telbutt25").value=" "+String.fromCharCode("3100")+" ";
	document.getElementById("Telbutt26").value=" "+String.fromCharCode("3105")+" ";
	document.getElementById("Telbutt27").value=" "+String.fromCharCode("3102")+" ";
	document.getElementById("Telbutt28").value=" "+String.fromCharCode("3147")+" ";
	document.getElementById("Telbutt29").value=" "+String.fromCharCode("3143")+" ";
	document.getElementById("Telbutt30").value=" "+String.fromCharCode("3149")+" ";
	document.getElementById("Telbutt31").value=" "+String.fromCharCode("3135")+" ";
	document.getElementById("Telbutt32").value=" "+String.fromCharCode("3137")+" ";
	document.getElementById("Telbutt33").value=" "+String.fromCharCode("3114")+" ";
	document.getElementById("Telbutt34").value=" "+String.fromCharCode("3120")+" ";
	document.getElementById("Telbutt35").value=" "+String.fromCharCode("3093")+" ";
	document.getElementById("Telbutt36").value=" "+String.fromCharCode("3108")+" ";
	document.getElementById("Telbutt37").value=" "+String.fromCharCode("3098")+" ";
	document.getElementById("Telbutt38").value=" "+String.fromCharCode("3103")+" ";
	document.getElementById("Telbutt39").value="  Enter  ";
	document.getElementById("Telbutt40").value=" "+String.fromCharCode("3142")+" ";
	document.getElementById("Telbutt41").value=" "+String.fromCharCode("3074")+" ";
	document.getElementById("Telbutt42").value=" "+String.fromCharCode("3118")+" ";
	document.getElementById("Telbutt43").value=" "+String.fromCharCode("3112")+" ";
	document.getElementById("Telbutt44").value=" "+String.fromCharCode("3125")+" ";
	document.getElementById("Telbutt45").value=" "+String.fromCharCode("3122")+" ";
	document.getElementById("Telbutt46").value=" "+String.fromCharCode("3128")+" ";
	document.getElementById("Telbutt47").value=" , "
	document.getElementById("Telbutt48").value=" . ";
	document.getElementById("Telbutt49").value=" "+String.fromCharCode("3119")+" ";
	document.getElementById("Telbutt51").value="           Space Bar    ";  
        

	
}
                                                                                     

function keyboard()
{
document.write("<body onLoad='javascript:CatchKeyCodeDn(window.event,cur_lyr)'>");
document.write("<br>");
document.write("<kbd><input type='button'   id='Telbutt1' value = ' &#3146; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px'  onClick='javascript:Telugu_1()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt2' value = ' 1 ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px'  onClick='javascript:Telugu_2()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt3' value = ' 2 ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_3()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt4' value = ' 3 ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_4()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt5' value = ' 4 ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_5()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt6' value = ' 5 ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_6()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt7' value = ' 6 ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_7()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt8' value = ' 7 ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_8()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt9' value = ' 8 ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_9()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt10' value = ' 9 ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_10()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt11' value = ' 0 ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_11()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt12' value = ' - ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_12()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt13' value = ' &#3139; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_13()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt53' value = '<--'  style='border-style: offset; background-color: #E8EEFA;color: #000000;width:48px;height:25px' onClick='javascript:Telugu_53()'></kbd>");
document.write("<BR>");
document.write("<kbd><input type='button'   id='Telbutt15' value = ' Tab ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:35px;height:25px' onClick='javascript:Telugu_15()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt16' value = ' &#3148; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_16()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt17' value = ' &#3144; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_17()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt18' value = ' &#3134; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_18()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt19' value = ' &#3136; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_19()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt20' value = ' &#3138; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_20()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt21' value = ' &#3116; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_21()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt22' value = ' &#3129; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_22()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt23' value = ' &#3095; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_23()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt24' value = ' &#3110; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_24()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt25' value = ' &#3100; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_25()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt26' value = ' &#3105; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_26()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt27' value = ' &#3102; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_27()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt54' value = ' ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:43px;height:25px' ></kbd>");
document.write("<BR>");
document.write("<kbd><input type='button'   id='Telbutt55' value = 'Caps' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:45px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Telbutt28' value = ' &#3147; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_28()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt29' value = ' &#3143; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_29()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt30' value = ' &#3149; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_30()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt31' value = ' &#3135; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_31()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt32' value = ' &#3137; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_32()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt33' value = ' &#3114; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_33()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt34' value = ' &#3120; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_34()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt35' value = ' &#3093; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_35()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt36' value = ' &#3108; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_36()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt37' value = ' &#3098; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_37()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt38' value = ' &#3103; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_38()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt39' value = 'Enter' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:58px;height:25px' onClick='javascript:Telugu_39()'></kbd><BR>");
document.write("<kbd>");
document.write("<input type='button'  id='Telbutt52' value = 'Shift' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:65px;height:25px' onClick='javascript:Telugu_52()'></kbd>");

document.write("<kbd><input type='button'   id='Telbutt40' value = ' &#3142; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_40()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt41' value = ' &#3074; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_41()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt42' value = ' &#3118; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_42()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt43' value = ' &#3112; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_43()'></kbd>");
document.write("<kbd><input type= 'button'  id='Telbutt44' value = ' &#3125; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_44()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt45' value = ' &#3122; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_45()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt46' value = ' &#3128; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_46()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt47' value = ' , ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_47()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt48' value = ' . ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_48()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt49' value = ' &#3119; ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' onClick='javascript:Telugu_49()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt56' value = 'Shift' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:73px;height:25px' onClick='javascript:Telugu_56()'></kbd>");
document.write("<BR>");
document.write("<kbd><input type='button'   id='Telbutt57' value = 'Ctrl' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:43px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Telbutt58' value = ' ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:34px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Telbutt59' value = 'Alt' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' ></kbd>");

document.write("<kbd><input type='button'   id='Telbutt51' value = 'Space Bar' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:183px;height:25px' onClick='javascript:Telugu_51()'></kbd>");
document.write("<kbd><input type='button'   id='Telbutt60' value = 'Alt Gr' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:45px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Telbutt61' value = ' ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Telbutt62' value = ' ' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:30px;height:25px' ></kbd>");
document.write("<kbd><input type='button'   id='Telbutt63' value = 'Ctrl' style='border-style: offset; background-color: #E8EEFA;color: #000000;width:43px;height:25px' ></kbd>");
document.write("</body>");
}
