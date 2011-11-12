var GujResult = 0;
var GujType =0; 
var SynonymGType =0; 

function Reflect_Values()
{
	window.opener.document.getElementById("text_Area").value = document.getElementById("textfield").value;
	window.close();
}
function SynonymG_Focus()
{
	GujType = 0;
	SynonymGType = 1;
}
function Gujarati_Focus()
{
	GujType = 1;
	SynonymGType = 0;
}

function writeUnicodeToGujBox(Number)
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

function Gujarati_1()
{
	if(GujResult==1)
	{
		//writeUnicodeToGujBox(String.fromCharCode("2322"));
		writeUnicodeToGujBox(String.fromCharCode("  "));
	}
        else
	{
	    writeUnicodeToGujBox(String.fromCharCode("  "));
	}
}

function Gujarati_2()
{
	if(GujResult==1)
	{
		writeUnicodeToGujBox(String.fromCharCode("2701"));
	}
        else
	{
		writeUnicodeToGujBox("1");
	}
}

function Gujarati_3()
{
	if(GujResult==1)
	{
		writeUnicodeToGujBox(String.fromCharCode("2757"));
	}
	else
	{
		writeUnicodeToGujBox("2");
	}
}
function Gujarati_4()
{
	if(GujResult==1)
	{
    	     writeUnicodeToGujBox(String.fromCharCode("2765")+String.fromCharCode("2736"));
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
		writeUnicodeToGujBox("3");
	}
}
function Gujarati_5()
{
	if(GujResult==1)
	{							
	        writeUnicodeToGujBox(String.fromCharCode("2736")+String.fromCharCode("2765"));
	}
	else
	{
		writeUnicodeToGujBox("4");
		
	}
}
function Gujarati_6()
{
	if(GujResult==1)
	{
		writeUnicodeToGujBox(String.fromCharCode("2716")+String.fromCharCode("2765")+String.fromCharCode("2718"));
		
	}
	else
	{
		writeUnicodeToGujBox("5");
	}
}
function Gujarati_7()
{
	if(GujResult==1)
	{
		
			writeUnicodeToGujBox(String.fromCharCode("2724")+String.fromCharCode("2765")+String.fromCharCode("2736"));
		
	}
	else
	{
		
			writeUnicodeToGujBox("6");
		
	}
}
function Gujarati_8()
{
        if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2709")+String.fromCharCode("2765")+String.fromCharCode("2743"));
	}
	else
	{
			writeUnicodeToGujBox("7");
	}
}
function Gujarati_9()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2742")+String.fromCharCode("2765")+String.fromCharCode("2736"));
	}
	else
	{
			writeUnicodeToGujBox("8");
	}
}
function Gujarati_10()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox("(");
	}
	else
	{
			writeUnicodeToGujBox("9");
	}
}
function Gujarati_11()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(")");
	}
	else
	{
		
			writeUnicodeToGujBox("0");
	}
}
function Gujarati_12()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox("-");
		
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2691"));
	}
}
function Gujarati_13()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2699")) ;
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2755"));
	}
}
function Gujarati_14()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2718"));
		
		
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2761")) ;
		
		
	}
}
function Gujarati_15()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox("    ");
    
        }
	else
	{
			writeUnicodeToGujBox("    ");
		
	}
}
function Gujarati_16()
{
      if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2708"));
		
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2764"));
		
	}
    
 }
 
function Gujarati_17()
{
	if(GujResult==1)
	{
		
			writeUnicodeToGujBox(String.fromCharCode("2704"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2760"));
		
	}
}

function Gujarati_18()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2694"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2750"));
	}
		
}

function Gujarati_19()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2696"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2752"));
	}
}
function Gujarati_20()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2698"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2754"));
	}
}
function Gujarati_21()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2733"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2732"));
	}
}
function Gujarati_22()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2713"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2745"));
	}
}
function Gujarati_23()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2712"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2711"));
	}
}
function Gujarati_24()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2727"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2726"));
	}
}
function Gujarati_25()
{
	if(GujResult==1)
	{
		writeUnicodeToGujBox(String.fromCharCode("2717"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2716"));
	}
}
function Gujarati_26()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2722"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2721"));
	}
}
function Gujarati_27()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2718"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2748"));
	}
}
function Gujarati_28()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2707"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2763"));
	}
}
function Gujarati_29()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2703"));
                  
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2759"));
	}
}
function Gujarati_30()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2693"));

	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2765"));
	}
}
function Gujarati_31()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2695"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2751"));
	}
}
function Gujarati_32()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2697"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2753"));
	}
}
function Gujarati_33()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2731"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2730"));
	}
}
function Gujarati_34()
{
	if(GujResult==1)
	{
			
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2736"));
	}
}
function Gujarati_35()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2710"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2709"));
	}
}
function Gujarati_36()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2725"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2724"));
	}
}
function Gujarati_37()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2715"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2714"));
	}
}
function Gujarati_38()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2720"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2719"));
	}
}
function Gujarati_39()
{
  	           if (navigator.appName == 'Netscape')
                     {
	            var evtgu = document.createEvent("MouseEvents");
		    evtgu.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
		    var cbgu = document.getElementById("mainSearch"); 
		    cbHi.dispatchEvent(evtgu);
                     }
                   else
                     {
                    var cbgu=document.getElementById("mainSearch");
                    cbgu.click();
                     }

}
function Gujarati_40()
{
	if(GujResult==1)
	{
			//writeUnicodeToGujBox(String.fromCharCode("2320"));
	}
	else
	{
			//writeUnicodeToGujBox(String.fromCharCode("2374"));
	}
}
function Gujarati_41()
{
	if(GujResult==1)
	{
	    writeUnicodeToGujBox(String.fromCharCode("2689"));
		
	}
	else
	{
		writeUnicodeToGujBox(String.fromCharCode("2690"));
	}
}
function Gujarati_42()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2723"));
		
	}
	else
	{
		writeUnicodeToGujBox(String.fromCharCode("2734"));
	}
}
function Gujarati_43()
{
	if(HinResult==1)
	{
			//writeUnicodeToGujBox(String.fromCharCode("2345"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2728"));
	}
}
function Gujarati_44()
{
	if(GujResult==1)
	{
			//writeUnicodeToGujBox(String.fromCharCode("2356"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2741"));
	}
}
function Gujarati_45()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2739"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2738"));
	}
}
function Gujarati_46()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2742"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2744"));
	}
}
function Gujarati_47()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2743"));
	}
	else
	{
			writeUnicodeToGujBox(",");
	}
}
function Gujarati_48()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(String.fromCharCode("2704"));
	}
	else
	{
			//writeUnicodeToGujBox(String.fromCharCode("2364"));
			writeUnicodeToGujBox(".");
	}
}
function Gujarati_49()
{
	if(GujResult==1)
	{
			//writeUnicodeToGujBox(String.fromCharCode("2399"));
	}
	else
	{
			writeUnicodeToGujBox(String.fromCharCode("2735"));
	}
}

function Gujarati_51()
{
	if(GujResult==1)
	{
			writeUnicodeToGujBox(" ");
	}
	else
	{
	
			writeUnicodeToGujBox(" ");
	}
}

function Gujarati_52()
{
	if(flag1==0)
	{
     ShowShiftKbdDn();
     GujSubmit1();
     flag1=1;
     var id=document.getElementById("Gujbutt52");
     id.style.borderColor="blue";
     var id=document.getElementById("Gujbutt55");
     id.style.borderColor="blue";

     }
     
    else
    {
     ShowShiftKbdUp();
     flag1=0;
     Guj_Original_Keyboard();
     var id=document.getElementById("Gujbutt52");
     id.style.borderColor="";
     var id=document.getElementById("Gujbutt55");
     id.style.borderColor="";

    } 
        
}
function Gujarati_55()
{
        if(flag1==0)
        {
     ShowShiftKbdDn();
     GujSubmit1();
     flag1=1;
     var id=document.getElementById("Gujbutt55");
     id.style.borderColor="blue";
     var id=document.getElementById("Gujbutt52");
     id.style.borderColor="blue";

     }

    else
    {
     ShowShiftKbdUp();
     flag1=0;
     Guj_Original_Keyboard();
     var id=document.getElementById("Gujbutt55");
     id.style.borderColor="";
     var id=document.getElementById("Gujbutt52");
     id.style.borderColor="";

    }

}

function Gujarati_53()
{
	document.getElementById("textfield").focus(document.getElementById("textfield").caretPos);
	var temp = document.getElementById("textfield").value;
	document.getElementById("textfield").value = temp.substring(0,temp.length-1);
}

function WriteValuesToTextArea()
{
	document.getElementById("textfield").value = window.opener.document.getElementById("textfield").value;
}
function GujSubmit1()

{

GujResult = 1;

document.getElementById("Gujbutt1").value=""+String.fromCharCode("  ")+"";

document.getElementById("Gujbutt2").value=""+String.fromCharCode("2701")+"";

document.getElementById("Gujbutt3").value=""+String.fromCharCode("2757")+"";

document.getElementById("Gujbutt4").value=""+String.fromCharCode("2765")+String.fromCharCode("2736")+"";

document.getElementById("Gujbutt5").value=""+String.fromCharCode("2736")+String.fromCharCode("2765")+"";

document.getElementById("Gujbutt6").value=""+String.fromCharCode("2716")+String.fromCharCode("2765")+String.fromCharCode("2718")+"";

document.getElementById("Gujbutt7").value=""+String.fromCharCode("2724")+String.fromCharCode("2765")+String.fromCharCode("2736")+"";

document.getElementById("Gujbutt8").value=""+String.fromCharCode("2709")+String.fromCharCode("2765")+String.fromCharCode("2743")+"";

document.getElementById("Gujbutt9").value=""+String.fromCharCode("2742")+String.fromCharCode("2765")+String.fromCharCode("2743")+"";

document.getElementById("Gujbutt10").value="(";

document.getElementById("Gujbutt11").value=")";

document.getElementById("Gujbutt12").value="-";

document.getElementById("Gujbutt13").value=""+String.fromCharCode("2699")+"";



document.getElementById("Gujbutt53").value="Backspace";

document.getElementById("Gujbutt15").value="Tab";

document.getElementById("Gujbutt16").value=""+String.fromCharCode("2708")+"";

document.getElementById("Gujbutt17").value=""+String.fromCharCode("2704")+"";

document.getElementById("Gujbutt18").value=""+String.fromCharCode("2694")+"";

document.getElementById("Gujbutt19").value=""+String.fromCharCode("2696")+"";

document.getElementById("Gujbutt20").value=""+String.fromCharCode("2698")+"";

document.getElementById("Gujbutt21").value=""+String.fromCharCode("2733")+"";

document.getElementById("Gujbutt22").value=""+String.fromCharCode("2713")+"";

document.getElementById("Gujbutt23").value=""+String.fromCharCode("2712")+"";

document.getElementById("Gujbutt24").value=""+String.fromCharCode("2727")+"";

document.getElementById("Gujbutt25").value=""+String.fromCharCode("2717")+"";

document.getElementById("Gujbutt26").value=""+String.fromCharCode("2722")+"";

document.getElementById("Gujbutt27").value=""+String.fromCharCode("2718")+"";

document.getElementById("Gujbutt28").value=""+String.fromCharCode("2707")+"";

document.getElementById("Gujbutt29").value=""+String.fromCharCode("2703")+"";

document.getElementById("Gujbutt30").value=""+String.fromCharCode("2693")+"";


document.getElementById("Gujbutt31").value=""+String.fromCharCode("2695")+"";

document.getElementById("Gujbutt32").value=""+String.fromCharCode("2697")+"";

document.getElementById("Gujbutt33").value=""+String.fromCharCode("2731")+"";

document.getElementById("Gujbutt34").value=""+String.fromCharCode("2736")+"";

document.getElementById("Gujbutt35").value=""+String.fromCharCode("2710")+"";

document.getElementById("Gujbutt36").value=""+String.fromCharCode("2725")+"";

document.getElementById("Gujbutt37").value=""+String.fromCharCode("2715")+"";

document.getElementById("Gujbutt38").value=""+String.fromCharCode("2720")+"";

document.getElementById("Gujbutt39").value="Enter";

document.getElementById("Gujbutt40").value=""+String.fromCharCode("  ")+"";

document.getElementById("Gujbutt41").value=""+String.fromCharCode("2689")+"";

document.getElementById("Gujbutt42").value=""+String.fromCharCode("2723")+"";

document.getElementById("Gujbutt43").value=""+String.fromCharCode("  ")+"";

document.getElementById("Gujbutt44").value=""+String.fromCharCode("  ")+"";

document.getElementById("Gujbutt45").value=""+String.fromCharCode("2739")+"";

document.getElementById("Gujbutt46").value=""+String.fromCharCode("2742")+"";

document.getElementById("Gujbutt47").value=""+String.fromCharCode("2743")+"";

document.getElementById("Gujbutt48").value=""+String.fromCharCode("2704")+"";

document.getElementById("Gujbutt49").value=""+String.fromCharCode("  ")+"";


document.getElementById("Gujbutt51").value="Space Bar"; 






}

function Guj_Original_Keyboard()

{

	GujResult = 0;

	document.getElementById("Gujbutt1").value="";

	document.getElementById("Gujbutt2").value="1";

	document.getElementById("Gujbutt3").value="2";

	document.getElementById("Gujbutt4").value="3";

	document.getElementById("Gujbutt5").value="4";

	document.getElementById("Gujbutt6").value="5";

	document.getElementById("Gujbutt7").value="6";

	document.getElementById("Gujbutt8").value="7";

	document.getElementById("Gujbutt9").value="8";

	document.getElementById("Gujbutt10").value="9";

	document.getElementById("Gujbutt11").value="0";

	document.getElementById("Gujbutt12").value=""+String.fromCharCode("2691")+"";

	document.getElementById("Gujbutt13").value=""+String.fromCharCode("2755")+"";
	

	document.getElementById("Gujbutt53").value="Backspace";

	document.getElementById("Gujbutt15").value="Tab";

	document.getElementById("Gujbutt16").value=""+String.fromCharCode("2764")+"";

	document.getElementById("Gujbutt17").value=""+String.fromCharCode("2760")+"";

	document.getElementById("Gujbutt18").value=""+String.fromCharCode("2750")+"";

	document.getElementById("Gujbutt19").value=""+String.fromCharCode("2752")+"";

	document.getElementById("Gujbutt20").value=""+String.fromCharCode("2754")+"";

	document.getElementById("Gujbutt21").value=""+String.fromCharCode("2732")+"";

	document.getElementById("Gujbutt22").value=""+String.fromCharCode("2745")+"";

	document.getElementById("Gujbutt23").value=""+String.fromCharCode("2711")+"";

	document.getElementById("Gujbutt24").value=""+String.fromCharCode("2726")+"";

	document.getElementById("Gujbutt25").value=""+String.fromCharCode("2716")+"";

	document.getElementById("Gujbutt26").value=""+String.fromCharCode("2721")+"";

	document.getElementById("Gujbutt27").value=""+String.fromCharCode("2761")+"";
    
	document.getElementById("Gujbutt54").value="CapsLock";

	document.getElementById("Gujbutt28").value=""+String.fromCharCode("2763")+"";

	document.getElementById("Gujbutt29").value=""+String.fromCharCode("2759")+"";

	document.getElementById("Gujbutt30").value=""+String.fromCharCode("2765")+"";

	document.getElementById("Gujbutt31").value=""+String.fromCharCode("2751")+"";

	document.getElementById("Gujbutt32").value=""+String.fromCharCode("2753")+"";

	document.getElementById("Gujbutt33").value=""+String.fromCharCode("2730")+"";

	document.getElementById("Gujbutt34").value=""+String.fromCharCode("2736")+"";

	document.getElementById("Gujbutt35").value=""+String.fromCharCode("2709")+"";

	document.getElementById("Gujbutt36").value=""+String.fromCharCode("2724")+"";

	document.getElementById("Gujbutt37").value=""+String.fromCharCode("2714")+"";

	document.getElementById("Gujbutt38").value=""+String.fromCharCode("2719")+"";

	document.getElementById("Gujbutt39").value="Enter";

	document.getElementById("Gujbutt40").value=""+String.fromCharCode("  ")+"";

	document.getElementById("Gujbutt41").value=""+String.fromCharCode("2690")+"";

	document.getElementById("Gujbutt42").value=""+String.fromCharCode("2723")+"";

	document.getElementById("Gujbutt43").value=""+String.fromCharCode("2728")+"";

	document.getElementById("Gujbutt44").value=""+String.fromCharCode("2741")+"";

	document.getElementById("Gujbutt45").value=""+String.fromCharCode("2738")+"";

	document.getElementById("Gujbutt46").value=""+String.fromCharCode("2744")+"";

	document.getElementById("Gujbutt47").value=","

	document.getElementById("Gujbutt48").value=""+"."+"";

	document.getElementById("Gujbutt49").value=""+String.fromCharCode("2735")+"";


	document.getElementById("Gujbutt51").value="Space Bar";  

	

	

}

function keyboard()

{

document.write("<body onLoad='javascript:CatchKeyCodeDn(window.event,cur_lyr)'>");
document.write("<br>");
document.write("<kbd><input type='button'   id='Gujbutt1' value = '' style='width:26px;height:25px' onClick='javascript:Gujarati_1()'></kbd>");
document.write("<kbd><input type='button'   id='Gujbutt2' value = '1' style='width:26px;height:25px' onClick='javascript:Gujarati_2()'></kbd>");
document.write("<kbd><input type='button'   id='Gujbutt3' value = '2' style='width:26px;height:25px' onClick='javascript:Gujarati_3()'></kbd>");
document.write("<kbd><input type='button'   id='Gujbutt4' value = '3' style='width:26px;height:25px' onClick='javascript:Gujarati_4()'></kbd>");
document.write("<kbd><input type='button'   id='Gujbutt5' value = '4' style='width:26px;height:25px' onClick='javascript:Gujarati_5()'></kbd>");
document.write("<kbd><input type='button'   id='Gujbutt6' value = '5' style='width:26px;height:25px' onClick='javascript:Gujarati_6()'></kbd>");
document.write("<kbd><input type='button'   id='Gujbutt7' value = '6' style='width:26px;height:25px' onClick='javascript:Gujarati_7()'></kbd>");
document.write("<kbd><input type='button'   id='Gujbutt8' value = '7' style='width:26px;height:25px' onClick='javascript:Gujarati_8()'></kbd>");
document.write("<kbd><input type='button'   id='Gujbutt9' value = '8' style='width:26px;height:25px' onClick='javascript:Gujarati_9()'></kbd>");
document.write("<kbd><input type='button'   id='Gujbutt10' value = '9' style='width:26px;height:25px' onClick='javascript:Gujarati_10()'></kbd>");

document.write("<kbd><input type='button'   id='Gujbutt11' value = '0' style='width:26px;height:25px' onClick='javascript:Gujarati_11()'></kbd>");

document.write("<kbd><input type='button'   id='Gujbutt12' value = '&#2691;' style='width:26px;height:25px' onClick='javascript:Gujarati_12()'></kbd>");

document.write("<kbd><input type='button'   id='Gujbutt13' value = '&#2755;' style='width:26px;height:25px' onClick='javascript:Gujarati_13()'>");

document.write("</kbd>");

document.write("<kbd><input type='button'   id='Gujbutt53' value = 'Backspace'  style='width:70px;height:25px' onClick='javascript:Gujarati_53()'></kbd>");

document.write("<BR>");

document.write("<kbd><input type='button'   id='Gujbutt15' value = 'Tab' style='width:50px;height:25px' onClick='javascript:Gujarati_15()'></kbd>");

document.write("<kbd><input type='button'  id='Gujbutt16' value = '&#2764;' style='width:26px;height:25px' onClick='javascript:Gujarati_16()'></kbd>");

document.write("<kbd><input type='button'  id='Gujbutt17' value = '&#2760;' style='width:26px;height:25px' onClick='javascript:Gujarati_17()'></kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Gujbutt18' value = '&#2750;' style='width:26px;height:25px' onClick='javascript:Gujarati_18()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Gujbutt19' value = '&#2752;' style='width:26px;height:25px' onClick='javascript:Gujarati_19()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Gujbutt20' value = '&#2754;' style='width:26px;height:25px' onClick='javascript:Gujarati_20()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Gujbutt21' value = '&#2732;' style='width:26px;height:25px' onClick='javascript:Gujarati_21()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Gujbutt22' value = '&#2745;' style='width:26px;height:25px' onClick='javascript:Gujarati_22()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Gujbutt23' value = '&#2711;' style='width:26px;height:25px' onClick='javascript:Gujarati_23()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Gujbutt24' value = '&#2726;' style='width:26px;height:25px' onClick='javascript:Gujarati_24()'>");



document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Gujbutt25' value = '&#2717;' style='width:26px;height:25px' onClick='javascript:Gujarati_25()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Gujbutt26' value = '&#2721;' style='width:26px;height:25px' onClick='javascript:Gujarati_26()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Gujbutt27' value = '&#2761;' style='width:26px;height:25px' onClick='javascript:Gujarati_14()'></kbd>");
document.write("<kbd><input type='button'  id='Gujbutt63' value = '' style='width:55px;height:25px' ></kbd>");

document.write("<BR>");
document.write("<kbd><input type='button'  id='Gujbutt54' value = 'CapsLock' style='width:65px;height:25px' ></kbd>");

document.write("<kbd><input type='button'  id='Gujbutt28' value = '&#2763;' style='width:26px;height:25px' onClick='javascript:Gujarati_28()'></kbd>");

document.write("<kbd><input type='button'  id='Gujbutt29' value = '&#2759;' style='width:26px;height:25px' onClick='javascript:Gujarati_29()'></kbd>");

document.write("<kbd><input type='button'  id='Gujbutt30' value = '&#2765;' style='width:26px;height:25px' onClick='javascript:Gujarati_30()'>");

document.write("</kbd>");

document.write("<kbd>");

document.write("<input type='button'  id='Gujbutt31' value = '&#2751;' style='width:26px;height:25px' onClick='javascript:Gujarati_31()'>");

document.write("</kbd>");



document.write("<kbd>");

document.write("<input type='button'  id='Gujbutt32' value = '&#2753;' style='width:26px;height:25px' onClick='javascript:Gujarati_32()'></kbd><kbd>");

document.write("<input type='button'  id='Gujbutt33' value = '&#2730;' style='width:26px;height:25px' onClick='javascript:Gujarati_33()'></kbd><kbd>");

document.write("<input type='button'  id='Gujbutt34' value = '&#2736;' style='width:26px;height:25px' onClick='javascript:Gujarati_34()'></kbd><kbd>");

document.write("<input type='button'  id='Gujbutt35' value = '&#2709;' style='width:26px;height:25px' onClick='javascript:Gujarati_35()'></kbd><kbd>");

document.write("<input type='button'  id='Gujbutt36' value = '&#2724;' style='width:26px;height:25px' onClick='javascript:Gujarati_36()'></kbd><kbd>");

document.write("<input type='button'  id='Gujbutt37' value = '&#2714;' style='width:26px;height:25px' onClick='javascript:Gujarati_37()'></kbd><kbd>");

document.write("<input type='button'  id='Gujbutt38' value = '&#2719;' style='width:26px;height:25px' onClick='javascript:Gujarati_38()'></kbd><kbd>");



document.write("<input type='button'  id='Gujbutt39' value = 'Enter' style='width:75px;height:25px' onClick='javascript:Gujarati_39()'></kbd><BR>");



document.write("<kbd>");

document.write("<input type='button'  id='Gujbutt52' value = 'Shift' style='width:80px;height:25px' onClick='javascript:Gujarati_52()'></kbd>");



document.write("<kbd>");

document.write("<input type='button'  id='Gujbutt40' value = ' ' style='width:26px;height:25px' onClick='javascript:Gujarati_40()'></kbd>");

document.write("<kbd>");



document.write("<input type='button'  id='Gujbutt41' value = '&#2690;' style='width:26px;height:25px' onClick='javascript:Gujarati_41()'></kbd><kbd>");

document.write("<input type='button'  id='Gujbutt42' value = '&#2734;' style='width:26px;height:25px' onClick='javascript:Gujarati_42()'></kbd><kbd>");

document.write("<input type='button'  id='Gujbutt43' value = '&#2728;' style='width:26px;height:25px' onClick='javascript:Gujarati_43()'></kbd><kbd>");

document.write("<input type='button'  id='Gujbutt44' value = '&#2741;' style='width:26px;height:25px' onClick='javascript:Gujarati_44()'></kbd><kbd>");

document.write("<input type='button'  id='Gujbutt45' value = '&#2738;' style='width:26px;height:25px' onClick='javascript:Gujarati_45()'></kbd><kbd>");

document.write("<input type='button'  id='Gujbutt46' value = '&#2744;' style='width:26px;height:25px' onClick='javascript:Gujarati_46()'></kbd><kbd>");

document.write("<input type='button'  id='Gujbutt47' value = ',' style='width:26px;height:25px' onClick='javascript:Gujarati_47()'></kbd><kbd>");

document.write("<input type='button'  id='Gujbutt48' value = '.' style='width:26px;height:25px' onClick='javascript:Gujarati_48()'></kbd><kbd>");

document.write("<input type='button'  id='Gujbutt49' value = '&#2735;' style='width:26px;height:25px' onClick='javascript:Gujarati_49()'></kbd><kbd>");

document.write("<input type='button'  id='Gujbutt55' value = 'Shift' style='width:95px;height:25px' onClick='javascript:Gujarati_55()' ></kbd>");

document.write("<BR>");
document.write("<kbd><input type='button'  id='Gujbutt56' value = 'Ctrl' style='width:40px;height:25px'></kbd>");
document.write("<kbd><input type='button'  id='Gujbutt57' value = '' style='width:34px;height:25px' ></kbd>");
document.write("<kbd><input type='button'  id='Gujbutt58' value = 'Alt' style='width:26px;height:25px'></kbd>");


document.write("<kbd><input type='button'  id='Gujbutt51' value = 'Space Bar  '; style='width:180px;height:25px' onClick='javascript:Gujarati_51()'></kbd>");
document.write("<kbd><input type='button'  id='Gujbutt59' value = 'Alt Gr' style='width:45px;height:25px'></kbd>");
document.write("<kbd><input type='button'  id='Gujbutt60' value = '' style='width:34px;height:25px' ></kbd>");
document.write("<kbd><input type='button'  id='Gujbutt61' value = '' style='width:34px;height:25px' ></kbd>");
document.write("<kbd><input type='button'  id='Gujbutt62' value = 'Ctrl' style='width:40px;height:25px'></kbd>");
document.write("</body>");
}



                                                                                     

