var origWidth,origHeight;
var flag=0;
var flag1=0;
var flag2=0;
var flag3=0;
var ctrlkeystatus;
var cur_lyr;
if (document.layers) 
{
	origWidth = window.innerWidth; 
	origHeight = window.innerHeight;
	window.onresize = function() 
	  { 
	    if (window.innerWidth != origWidth || window.innerHeight != origHeight) 
	    history.go(0); 
	  }
}



function swapLayers(id,show,hide) 
{
   if(id == 'lyr2')
   {
   if(flag3==0)
      {
         flag3=1;
         document.getElementById('show').innerHTML= hide;
       }
       else
      {
        flag3=0;
         document.getElementById('show').innerHTML= show;
       }
    }
    else if( id == 'lyr1')
    {  
    if(flag3==0)
      {
         flag3=1;
         document.getElementById('show').innerHTML= hide;
       }
       else
      {
        flag3=0;
         document.getElementById('show').innerHTML= show;
       }
    }
    else if( id == 'lyr3')
    {  
    if(flag3==0)
      {
         flag3=1;
         document.getElementById('show').innerHTML= hide;
       }
       else
      {
        flag3=0;
         document.getElementById('show').innerHTML= show;
       }
    }
    
    else if( id == 'lyr4')
    {  
    if(flag3==0)
      {
         flag3=1;
         document.getElementById('show').innerHTML= hide;
       }
       else
      {
        flag3=0;
         document.getElementById('show').innerHTML= show;
       }
    }
    
    else if( id == 'lyr5')
    {  
    if(flag3==0)
      {
         flag3=1;
         document.getElementById('show').innerHTML= hide;
       }
       else
      {
        flag3=0;
         document.getElementById('show').innerHTML= show;
       }
    }
    
    else if( id == 'lyr6')
    {  
    if(flag3==0)
      {
         flag3=1;
         document.getElementById('show').innerHTML= hide;
       }
       else
      {
        flag3=0;
         document.getElementById('show').innerHTML= show;
       }
    }
    
  if (cur_lyr && flag2==0) 
  hideLayer(cur_lyr);
  else
  showLayer(id);
  cur_lyr = id;
}

function showLayer(id) 
{
  	var lyr = getElemRefs(id);
	if (lyr ) 
	{
  		
		lyr.css.visibility = "visible";
		lyr.style.display="";
		document.getElementById("transl1").focus();
	}
	flag2=0;
}
function showTemplate(id){
	var lyr = getElemRefs(id);
	if(lyr){
		lyr.css.visibility = "visible";
		lyr.style.display = "";
	}
}


function hideLayer(id)
{
  var lyr = getElemRefs(id);
  if (lyr && lyr.css) 
  lyr.style.display = "none";
  document.getElementById("transl1").focus();
  flag2=1;
}

function getElemRefs(id)
{
	var el = (document.getElementById)? document.getElementById(id): (document.all)? document.all[id]: (document.layers)? document.layers[id]: null;
	if (el) el.css = (el.style)? el.style: el;
	return el;
}

        
function CatchKeyCodeDn(e)     //Catch the keycode when key is pressed..
{
                      var keynum

	                    if(window.event) // IE
	                    {
		                    keynum = e.keyCode
	                    }
	                    else if(e.which) // Netscape/Firefox/Opera
	                    {
		                    keynum = e.which
	                    }
                    	
	                    if(keynum == 17 || (keynum>=96 && keynum<=111))
		                    ctrlkeystatus = 1;

	                    if(ctrlkeystatus == 1)
		            return;
                            if(flag2==1)
		            return false;
		                   
		                

if(cur_lyr)
{
	    if(cur_lyr)
     {
	    if(window.event) // IE
	    {
		    if(e.keyCode == 16)
		    {
		              ShowShiftKbdDn();
		    }
		    if(e.keyCode == 17 || (keynum>=96 && keynum<=111))
			return true;

	    }
	    else if(e.which)  // For Netscape/Firefox/Opera - Gaurav
	    {
		    if(e.which == 16)
		    {
			      ShowShiftKbdDn();
		    }
	    }
     }
}


  

if(cur_lyr == 'lyr2')
{
 var Keydcode = e.keyCode ? e.keyCode : e.which;
  switch(Keydcode)
  {
   
    
     case 8:
     var id=document.getElementById("butt53");
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 case 20:
     var id=document.getElementById("butt54");
     if(flag==0)
     {
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 case 220:
     var id=document.getElementById("butt63");
     if(flag==0)
     {
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 case 91:
     var id=document.getElementById("butt57");
     if(flag==0)
     {
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 
	 
	 case 92:
     var id=document.getElementById("butt60");
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 case 93:
     var id=document.getElementById("butt61");
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 59:
     var id=document.getElementById("butt37");
     Mapping_37();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 16:
     var id=document.getElementById("butt52");
     var id1=document.getElementById("butt55");
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     id1.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 9://Tab
     var id=document.getElementById("butt15");
     Mapping_15();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 44://,
     var id=document.getElementById("butt47");
     Mapping_47();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 47://
     var id=document.getElementById("butt49");
     Mapping_49();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     
     case 96://
     var id=document.getElementById("butt1");
     Mapping_1();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 49:
     var id=document.getElementById("butt2");
     Mapping_2();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 50:
     var id=document.getElementById("butt3");
     Mapping_3();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 51:
     var id=document.getElementById("butt4");
     Mapping_4();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 52:
     var id=document.getElementById("butt5");
     Mapping_5();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 53:
     var id=document.getElementById("butt6");
     Mapping_6();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 54:
     var id=document.getElementById("butt7");
     Mapping_7();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 55:
     var id=document.getElementById("butt8");
     Mapping_8();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 56:
     var id=document.getElementById("butt9");
     Mapping_9();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 57:
     var id=document.getElementById("butt10");
     Mapping_10();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break; 
     
     case 48:
     var id=document.getElementById("butt11");
     Mapping_11();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 65://a
     var id=document.getElementById("butt28"); 
     Mapping_28();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 66://b
     var id=document.getElementById("butt44");
     Mapping_44();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 67://c
     var id=document.getElementById("butt42");
     Mapping_42();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 68://d
     var id=document.getElementById("butt30");
     Mapping_30();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 69://e
     var id=document.getElementById("butt18");
     Mapping_18();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 70://f
     var id=document.getElementById("butt31");
     Mapping_31();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 71://g
     var id=document.getElementById("butt32");
     Mapping_32();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 72://h
     var id=document.getElementById("butt33");
     Mapping_33();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 73://i
     var id=document.getElementById("butt23");
     Mapping_23();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 74://j
     var id=document.getElementById("butt34");
     Mapping_34();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 75://k 
     var id=document.getElementById("butt35");
     Mapping_35();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 76://l
     var id=document.getElementById("butt36");
     Mapping_36();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 77://m
     var id=document.getElementById("butt46");
     Mapping_46();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 78://n
     var id=document.getElementById("butt45");
     Mapping_45();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 79://o 
     var id=document.getElementById("butt24");
     Mapping_24();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 80://p
     var id=document.getElementById("butt25");
     Mapping_25();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 81://q
     var id=document.getElementById("butt16");
     Mapping_16();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
      
     case 82://r
     var id=document.getElementById("butt19");
     Mapping_19();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 83://s
     var id=document.getElementById("butt29");
     Mapping_29();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 84://t
     var id=document.getElementById("butt20");
     Mapping_20();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 85://u
     var id=document.getElementById("butt22");
     Mapping_22();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 86://v
     var id=document.getElementById("butt43");
     Mapping_43();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 87://w
     var id=document.getElementById("butt17");
     Mapping_17();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 88://x
     var id=document.getElementById("butt41");
     Mapping_41();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 89://y
     var id=document.getElementById("butt21");
     Mapping_21();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 90://z
     var id=document.getElementById("butt40");
     Mapping_40();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 192://z
     var id=document.getElementById("butt1");
     Mapping_1();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 189://z
     var id=document.getElementById("butt12");
     Mapping_12();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 187://z
     var id=document.getElementById("butt13");
     Mapping_13();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 219://z
     var id=document.getElementById("butt26");
     Mapping_26();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 221://z
     var id=document.getElementById("butt27");
     Mapping_14();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 186://z
     var id=document.getElementById("butt37");
     Mapping_37();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 222://z
     var id=document.getElementById("butt38");
     Mapping_38();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 13://z
     var id=document.getElementById("butt39");
     Mapping_39();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 188://z
     var id=document.getElementById("butt47");
     Mapping_47();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 190://z
     var id=document.getElementById("butt48");
     Mapping_48();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 191://z
     var id=document.getElementById("butt49");
     Mapping_49();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 32://z
     var id=document.getElementById("butt51");
     Mapping_51();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
 }
 
}

else if(cur_lyr == 'lyr1')
{
var Keydcode = e.keyCode ? e.keyCode : e.which;
switch(Keydcode)
  {
  
     case 8:
     var id=document.getElementById("Banbutt53");
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 case 20:
     var id=document.getElementById("Banbutt55");
     if(flag==0)
     {
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 case 220:
     var id=document.getElementById("Banbutt54");
     if(flag==0)
     {
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 case 91:
     var id=document.getElementById("Banbutt58");
     if(flag==0)
     {
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 
	 
	 case 92:
     var id=document.getElementById("Banbutt61");
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 case 93:
     var id=document.getElementById("Banbutt62");
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 59:
     var id=document.getElementById("Banbutt37");
     Bangali_37();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 16:
     var id=document.getElementById("Banbutt52");
     var id1=document.getElementById("Banbutt56");
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     id1.style.borderColor="blue";
  
     flag=1;
     }
     break;
  
     case 49:
     var id=document.getElementById("Banbutt2");
     Bangali_2();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 50:
     var id=document.getElementById("Banbutt3");
     Bangali_3();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 51:
     var id=document.getElementById("Banbutt4");
     Bangali_4();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 52:
     var id=document.getElementById("Banbutt5");
     Bangali_5();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 53:
     var id=document.getElementById("Banbutt6");
     Bangali_6();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 54:
     var id=document.getElementById("Banbutt7");
     Bangali_7();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 55:
     var id=document.getElementById("Banbutt8");
     Bangali_8();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 56:
     var id=document.getElementById("Banbutt9");
     Bangali_9();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 57:
     var id=document.getElementById("Banbutt10");
     Bangali_10();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 32:
     var id=document.getElementById("Banbutt51");
     Bangali_51();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 59:
     var id=document.getElementById("Banbutt37");
     Bangali_37();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 44:
     var id=document.getElementById("Banbutt48");
     Bangali_48();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 45:
     var id=document.getElementById("Banbutt12");
     Bangali_12();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 48:
     var id=document.getElementById("Banbutt11");
     Bangali_11();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 61:
     var id=document.getElementById("Banbutt13");
     Bangali_13();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 9://Tab
     var id=document.getElementById("Banbutt15");
     Bangali_15();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 44://,
     var id=document.getElementById("Banbutt47");
     Bangali_47();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    
     

     case 47://
     var id=document.getElementById("Banbutt49");
     Bangali_49();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 65://a
     var id=document.getElementById("Banbutt28");
     Bangali_28();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 66://b
     var id=document.getElementById("Banbutt45");
     Bangali_45();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
    case 67://c
    var id=document.getElementById("Banbutt43");
     Bangali_43();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 68://d
    var id=document.getElementById("Banbutt30");
     Bangali_30();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 69://e
    var id=document.getElementById("Banbutt18");
     Bangali_18();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 70://f
    var id=document.getElementById("Banbutt31");
     Bangali_31();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
    case 71://g
    var id=document.getElementById("Banbutt32");
     Bangali_32();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 72://h
    var id=document.getElementById("Banbutt33");
     Bangali_33();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 73://i
    var id=document.getElementById("Banbutt23");
     Bangali_23();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 74://j
    var id=document.getElementById("Banbutt34");
     Bangali_34();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 75://k
    var id=document.getElementById("Banbutt35");
     Bangali_35();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
    case 76://l
    var id=document.getElementById("Banbutt36");
     Bangali_36();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 77://m
    var id=document.getElementById("Banbutt47");
     Bangali_47();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 78://n
    var id=document.getElementById("Banbutt46");
     Bangali_46();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 79://o
    var id=document.getElementById("Banbutt24");
     Bangali_24();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 80://p
    var id=document.getElementById("Banbutt25");
     Bangali_25();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 81://q
    var id=document.getElementById("Banbutt16");
     Bangali_16();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 82://r
    var id=document.getElementById("Banbutt19");
     Bangali_19();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 83://s
    var id=document.getElementById("Banbutt29");
     Bangali_29();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 84://t
    var id=document.getElementById("Banbutt20");
     Bangali_20();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 85://u
    var id=document.getElementById("Banbutt22");
     Bangali_22();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 86://v
    var id=document.getElementById("Banbutt44");
     Bangali_44();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 87://w
    var id=document.getElementById("Banbutt17");
     Bangali_17();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 88://x
    var id=document.getElementById("Banbutt42");
     Bangali_42();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 89://y
    var id=document.getElementById("Banbutt21");
     Bangali_21();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 90://z
    var id=document.getElementById("Banbutt41");
     Bangali_41();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 186://.
     var id=document.getElementById("Banbutt37");
     Bangali_37();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 222://.
     var id=document.getElementById("Banbutt38");
     Bangali_38();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 13://.
     var id=document.getElementById("Banbutt39");
     Bangali_39();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 188://.
     var id=document.getElementById("Banbutt48");
     Bangali_48();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 190://.
     var id=document.getElementById("Banbutt49");
     Bangali_49();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 219://.
     var id=document.getElementById("Banbutt26");
     Bangali_26();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 221://.
     var id=document.getElementById("Banbutt27");
     Bangali_27();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 189://.
     var id=document.getElementById("Banbutt12");
     Bangali_12();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 187://.
     var id=document.getElementById("Banbutt13");
     Bangali_13();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 }
 
}
 else if(cur_lyr == 'lyr4')
{
var Keydcode = e.keyCode ? e.keyCode : e.which;
switch(Keydcode)
  {
      case 8://Tab
     var id=document.getElementById("Tambutt53");

       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 case 20:
     var id=document.getElementById("Tambutt55");
     if(flag==0)
     {
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 case 220:
     var id=document.getElementById("Tambutt54");
     if(flag==0)
     {
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 case 91:
     var id=document.getElementById("Tambutt59");
     if(flag==0)
     {
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 
	 
	 case 92:
     var id=document.getElementById("Tambutt62");
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 case 93:
     var id=document.getElementById("Tambutt63");
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 59://Tab
     var id=document.getElementById("Tambutt37");
     Tamil_37();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
  
     case 16:
     var id=document.getElementById("Tambutt52");
     var id1=document.getElementById("Tambutt57");
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     id1.style.borderColor="blue"; 
    flag=1;
     }
     break;
     
     case 9://Tab
     var id=document.getElementById("Tambutt15");
     Tamil_15();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 188://.
     var id=document.getElementById("Tambutt48");
     Tamil_48();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 47://
     var id=document.getElementById("Tambutt49");
     Tamil_49();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 48:
     var id=document.getElementById("Tambutt11");
     Tamil_11();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 49:
     var id=document.getElementById("Tambutt2");
     Tamil_2();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 50:
     var id=document.getElementById("Tambutt3");
     Tamil_3();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 51:
     var id=document.getElementById("Tambutt4");
     Tamil_4();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 52:
     var id=document.getElementById("Tambutt5");
     Tamil_5();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 53:
     var id=document.getElementById("Tambutt6");
     Tamil_6();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 54:
     var id=document.getElementById("Tambutt7");
     Tamil_7();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 55:
     var id=document.getElementById("Tambutt8");
     Tamil_8();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 56:
     var id=document.getElementById("Tambutt9");
     Tamil_9();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 57:
     var id=document.getElementById("Tambutt10");
     Tamil_10();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break; 

     case 65://a
     var id=document.getElementById("Tambutt28");
     Tamil_28();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 66://b
     var id=document.getElementById("Tambutt45");
     Tamil_45();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
    case 67://c
    var id=document.getElementById("Tambutt43");
     Tamil_43();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 68://d
    var id=document.getElementById("Tambutt30");
     Tamil_30();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 69://e
    var id=document.getElementById("Tambutt18");
     Tamil_18();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 70://f
    var id=document.getElementById("Tambutt31");
     Tamil_31();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
    case 71://g
    var id=document.getElementById("Tambutt32");
     Tamil_32();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 72://h
    var id=document.getElementById("Tambutt33");
     Tamil_33();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 73://i
    var id=document.getElementById("Tambutt23");
     Tamil_23();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 74://j
    var id=document.getElementById("Tambutt34");
     Tamil_34();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 75://k
    var id=document.getElementById("Tambutt35");
     Tamil_35();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
    case 76://l
    var id=document.getElementById("Tambutt36");
     Tamil_36();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 77://m
    var id=document.getElementById("Tambutt47");
     Tamil_47();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 78://n
    var id=document.getElementById("Tambutt46");
     Tamil_46();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 79://o
    var id=document.getElementById("Tambutt24");
     Tamil_24();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 80://p
    var id=document.getElementById("Tambutt25");
     Tamil_25();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 81://q
    var id=document.getElementById("Tambutt16");
     Tamil_16();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 82://r
    var id=document.getElementById("Tambutt19");
     Tamil_19();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 83://s
    var id=document.getElementById("Tambutt29");
     Tamil_29();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 84://t
    var id=document.getElementById("Tambutt20");
     Tamil_20();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 85://u
    var id=document.getElementById("Tambutt22");
     Tamil_22();
        if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 86://v
    var id=document.getElementById("Tambutt44");
     Tamil_44();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 87://w
    var id=document.getElementById("Tambutt17");
     Tamil_17();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 88://x
    var id=document.getElementById("Tambutt42");
     Tamil_42();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 89://y
    var id=document.getElementById("Tambutt21");
     Tamil_21();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 90://z
    var id=document.getElementById("Tambutt40");
     Tamil_40();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 192://z
     var id=document.getElementById("Tambutt1");
     Tamil_1();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 189://z
     var id=document.getElementById("Tambutt12");
     Tamil_12();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 219://z
     var id=document.getElementById("Tambutt26");
     Tamil_26();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 221://z
     var id=document.getElementById("Tambutt27");
     Tamil_27();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 186://z
     var id=document.getElementById("Tambutt37");
     Tamil_37();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 222://z
     var id=document.getElementById("Tambutt38");
     Tamil_38();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 13://Enter
     var id=document.getElementById("Tambutt39");
     Tamil_39();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 188://,
     var id=document.getElementById("Tambutt48");
     Tamil_48();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 190://>
     var id=document.getElementById("Tambutt49");
     Tamil_49();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 32://Enter
     var id=document.getElementById("Tambutt51");
     Tamil_51();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 }

}
else if(cur_lyr == 'lyr5')
{
var Keydcode = e.keyCode ? e.keyCode : e.which;
switch(Keydcode)
  {
    case 8:
     var id=document.getElementById("Telbutt53");

       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	  case 20:
     var id=document.getElementById("Telbutt55");
     if(flag==0)
     {
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 case 220:
     var id=document.getElementById("Telbutt54");
     if(flag==0)
     {
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 case 91:
     var id=document.getElementById("Telbutt58");
     if(flag==0)
     {
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 
	 
	 case 92:
     var id=document.getElementById("Telbutt61");
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 case 93:
     var id=document.getElementById("Telbutt62");
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 59://Tab
     var id=document.getElementById("Telbutt37");
     Telugu_37();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 16:
     var id=document.getElementById("Telbutt52");
     var id1=document.getElementById("Telbutt56");
     if(flag==0)
     {
     
     id.style.borderColor="blue";
          id1.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 9://Tab
     var id=document.getElementById("Telbutt15");
     Telugu_15();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 44://,
     var id=document.getElementById("Telbutt47");
     Telugu_47();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    

     case 47://
     var id=document.getElementById("Telbutt49");
     Telugu_49();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 48://
     var id=document.getElementById("Telbutt11");
     Telugu_11();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 49://
     var id=document.getElementById("Telbutt2");
     Telugu_2();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 50://
     var id=document.getElementById("Telbutt3");
     Telugu_3();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 51://
     var id=document.getElementById("Telbutt4");
     Telugu_4();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 52://
     var id=document.getElementById("Telbutt5");
     Telugu_5();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 53://
     var id=document.getElementById("Telbutt6");
     Telugu_6();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 54://
     var id=document.getElementById("Telbutt7");
     Telugu_7();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 55://
     var id=document.getElementById("Telbutt8");
     Telugu_8();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 56://
     var id=document.getElementById("Telbutt9");
     Telugu_9();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 57://
     var id=document.getElementById("Telbutt10");
     Telugu_10();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 65://a
     var id=document.getElementById("Telbutt28");
     Telugu_28();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 66://b
     var id=document.getElementById("Telbutt44");
     Telugu_44();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
    case 67://c
    var id=document.getElementById("Telbutt42");
     Telugu_42();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 68://d
    var id=document.getElementById("Telbutt30");
     Telugu_30();
        if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 69://e
    var id=document.getElementById("Telbutt18");
     Telugu_18();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 70://f
    var id=document.getElementById("Telbutt31");
     Telugu_31();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
    case 71://g
    var id=document.getElementById("Telbutt32");
     Telugu_32();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 72://h
    var id=document.getElementById("Telbutt33");
     Telugu_33();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 73://i
    var id=document.getElementById("Telbutt23");
     Telugu_23();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 74://j
    var id=document.getElementById("Telbutt34");
     Telugu_34();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 75://k
    var id=document.getElementById("Telbutt35");
     Telugu_35();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
    case 76://l
    var id=document.getElementById("Telbutt36");
     Telugu_36();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 77://m
    var id=document.getElementById("Telbutt46");
     Telugu_46();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 78://n
    var id=document.getElementById("Telbutt45");
     Telugu_45();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 79://o
    var id=document.getElementById("Telbutt24");
     Telugu_24();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 80://p
    var id=document.getElementById("Telbutt25");
     Telugu_25();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 81://q
    var id=document.getElementById("Telbutt16");
     Telugu_16();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 82://r
    var id=document.getElementById("Telbutt19");
     Telugu_19();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 83://s
    var id=document.getElementById("Telbutt29");
     Telugu_29();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 84://t
    var id=document.getElementById("Telbutt20");
     Telugu_20();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 85://u.
    var id=document.getElementById("Telbutt22");
     Telugu_22();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 86://v
    var id=document.getElementById("Telbutt43");
     Telugu_43();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 87://w
    var id=document.getElementById("Telbutt17");
     Telugu_17();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 88://x
    var id=document.getElementById("Telbutt41");
     Telugu_41();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 89://y
    var id=document.getElementById("Telbutt21");
     Telugu_21();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 90://z
    var id=document.getElementById("Telbutt40");
     Telugu_40();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 192://~
     var id=document.getElementById("Telbutt1");
     Telugu_1();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 189://-
     var id=document.getElementById("Telbutt12");
     Telugu_12();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 187://+
     var id=document.getElementById("Telbutt13");
     Telugu_13();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 219://[
     var id=document.getElementById("Telbutt26");
     Telugu_26();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 221://]
     var id=document.getElementById("Telbutt27");
     Telugu_27();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 186://:
     var id=document.getElementById("Telbutt37");
     Telugu_37();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 222://"
     var id=document.getElementById("Telbutt38");
     Telugu_38();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 13://Enter
     var id=document.getElementById("Telbutt39");
     Telugu_39();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     
     case 188://<
     var id=document.getElementById("Telbutt47");
     Telugu_47();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 190://>
     var id=document.getElementById("Telbutt48");
     Telugu_48();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 191://?
     var id=document.getElementById("Telbutt49");
     Telugu_49();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 32://SpaceBar
     var id=document.getElementById("Telbutt51");
     Telugu_51();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     
 }
 
}

else if(cur_lyr == 'lyr6')
{
var Keydcode = e.keyCode ? e.keyCode : e.which;
switch(Keydcode)
  {
  
     case 8:
     var id=document.getElementById("Punbutt53");

       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break
	 case 20:
     var id=document.getElementById("Punbutt55");
     if(flag==0)
     {
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 case 220:
     var id=document.getElementById("Punbutt54");
     if(flag==0)
     {
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 case 91:
     var id=document.getElementById("Punbutt58");
     if(flag==0)
     {
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 
	 
	 case 92:
     var id=document.getElementById("Punbutt61");
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 case 93:
     var id=document.getElementById("Punbutt62");
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
  
     case 59://Tab
     var id=document.getElementById("Punbutt37");
     Punjabi_37();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 16:
     var id=document.getElementById("Punbutt52");
     var id1=document.getElementById("Punbutt56");
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     id1.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 9://Tab
     var id=document.getElementById("Punbutt15");
     Punjabi_15();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 44://,
     var id=document.getElementById("Punbutt47");
     Punjabi_47();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 47://
     var id=document.getElementById("Punbutt49");
     Punjabi_49();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 48://
     var id=document.getElementById("Punbutt11");
     Punjabi_11();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 49://
     var id=document.getElementById("Punbutt2");
     Punjabi_2();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 50://
     var id=document.getElementById("Punbutt3");
     Punjabi_3();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 51://
     var id=document.getElementById("Punbutt4");
     Punjabi_4();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 52://
     var id=document.getElementById("Punbutt5");
     Punjabi_5();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 53://
     var id=document.getElementById("Punbutt6");
     Punjabi_6();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 54://
     var id=document.getElementById("Punbutt7");
     Punjabi_7();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 55://
     var id=document.getElementById("Punbutt8");
     Punjabi_8();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 56://
     var id=document.getElementById("Punbutt9");
     Punjabi_9();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 57://
     var id=document.getElementById("Punbutt10");
     Punjabi_10();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 65://a
     var id=document.getElementById("Punbutt28");
     Punjabi_28();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 66://b
     var id=document.getElementById("Punbutt45");
     Punjabi_45();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
    case 67://c
    var id=document.getElementById("Punbutt43");
     Punjabi_43();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 68://d
    var id=document.getElementById("Punbutt30");
     Punjabi_30();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 69://e
    var id=document.getElementById("Punbutt18");
     Punjabi_18();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 70://f
    var id=document.getElementById("Punbutt31");
     Punjabi_31();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
    case 71://g
    var id=document.getElementById("Punbutt32");
     Punjabi_32();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 72://h
    var id=document.getElementById("Punbutt33");
     Punjabi_33();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 73://i
    var id=document.getElementById("Punbutt23");
     Punjabi_23();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 74://j
    var id=document.getElementById("Punbutt34");
     Punjabi_34();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 75://k
    var id=document.getElementById("Punbutt35");
     Punjabi_35();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
    case 76://l.
    var id=document.getElementById("Punbutt36");
     Punjabi_36();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 77://m
    var id=document.getElementById("Punbutt47");
     Punjabi_47();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 78://n
    var id=document.getElementById("Punbutt46");
     Punjabi_46();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 79://o
    var id=document.getElementById("Punbutt24");
     Punjabi_24();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 80://p
    var id=document.getElementById("Punbutt25");
     Punjabi_25();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 81://q
    var id=document.getElementById("Punbutt16");
     Punjabi_16();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 82://r
    var id=document.getElementById("Punbutt19");
     Punjabi_19();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 83://s
    var id=document.getElementById("Punbutt29");
     Punjabi_29();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 84://t
    var id=document.getElementById("Punbutt20");
     Punjabi_20();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 85://u
    var id=document.getElementById("Punbutt22");
     Punjabi_22();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 86://v
    var id=document.getElementById("Punbutt44");
     Punjabi_44();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 87://w
    var id=document.getElementById("Punbutt17");
     Punjabi_17();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 88://x
    var id=document.getElementById("Punbutt42");
     Punjabi_42();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 89://y
    var id=document.getElementById("Punbutt21");
     Punjabi_21();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    case 90://z
    var id=document.getElementById("Punbutt41");
     Punjabi_41();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 189://-
     var id=document.getElementById("Punbutt12");
     Punjabi_12();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 219://[
     var id=document.getElementById("Punbutt26");
     Punjabi_26();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 221://]
     var id=document.getElementById("Punbutt27");
     Punjabi_27();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 186://:
     var id=document.getElementById("Punbutt37");
     Punjabi_37();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 222://"
     var id=document.getElementById("Punbutt38");
     Punjabi_38();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 13://Enter
     var id=document.getElementById("Punbutt39");
     Punjabi_39();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 188://<
     var id=document.getElementById("Punbutt48");
     Punjabi_48();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 190://>
     var id=document.getElementById("Punbutt49");
     Punjabi_49();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 32://SpaceBar
     var id=document.getElementById("Punbutt51");
     Punjabi_51();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 }
 
}


else if(cur_lyr == 'lyr3')
{
var Keydcode = e.keyCode ? e.keyCode : e.which;
switch(Keydcode)
  {
  
      case 8:
     var id=document.getElementById("Marbutt53");

       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 case 20:
     var id=document.getElementById("Marbutt54");
     if(flag==0)
     {
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 case 220:
     var id=document.getElementById("Marbutt63");
     if(flag==0)
     {
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 case 91:
     var id=document.getElementById("Marbutt57");
     if(flag==0)
     {
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 
	 
	 case 92:
     var id=document.getElementById("Marbutt60");
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
	 
	 case 93:
     var id=document.getElementById("Marbutt61");
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 59://Tab
     var id=document.getElementById("Marbutt37");
     Marathi_37();
       if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 16:
     var id=document.getElementById("Marbutt52");
     var id1=document.getElementById("Marbutt55");

     if(flag==0)
     {
     
     id.style.borderColor="blue";
     id1.style.borderColor="blue";

     flag=1;
     }
     break;
     
      
     case 9://Tab
     var id=document.getElementById("Marbutt15");
     Marathi_15();
      if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 44://,
     var id=document.getElementById("Marbutt47");

     Marathi_47();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

    
     
     case 47://
     var id=document.getElementById("Marbutt49");

     Marathi_49();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     
     case 96://
     var id=document.getElementById("Marbutt1");

     Marathi_1();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 49:
     var id=document.getElementById("Marbutt2");
     Marathi_2();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 50:
     var id=document.getElementById("Marbutt3");
     Marathi_3();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 51:
     var id=document.getElementById("Marbutt4");
     Marathi_4();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 52:
     var id=document.getElementById("Marbutt5");
     Marathi_5();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 53:
     var id=document.getElementById("Marbutt6");
     Marathi_6();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 54:
     var id=document.getElementById("Marbutt7");
     Marathi_7();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 55:
     var id=document.getElementById("Marbutt8");
     Marathi_8();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 56:
     var id=document.getElementById("Marbutt9");
     Marathi_9();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     case 57:
     var id=document.getElementById("Marbutt10");
     Marathi_10();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break; 
     
     case 48:
     var id=document.getElementById("Marbutt11");
     Marathi_11();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 65://a
     var id=document.getElementById("Marbutt28"); 
     
     Marathi_28();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 66://b
     var id=document.getElementById("Marbutt44");
     Marathi_44();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 67://c
     var id=document.getElementById("Marbutt42");
     Marathi_42();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 68://d
     var id=document.getElementById("Marbutt30");
     Marathi_30();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 69://e
     var id=document.getElementById("Marbutt18");
     Marathi_18();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 70://f
     var id=document.getElementById("Marbutt31");
     Marathi_31();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 71://g
     var id=document.getElementById("Marbutt32");
     Marathi_32();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 72://h
     var id=document.getElementById("Marbutt33");
     Marathi_33();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 73://i
     var id=document.getElementById("Marbutt23");
     Marathi_23();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 74://j
     var id=document.getElementById("Marbutt34");
     Marathi_34();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 75://k 
     var id=document.getElementById("Marbutt35");
     Marathi_35();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 76://l
     var id=document.getElementById("Marbutt36");
     Marathi_36();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 77://m
     var id=document.getElementById("Marbutt46");
     Marathi_46();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 78://n
     var id=document.getElementById("Marbutt45");
     Marathi_45();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 79://o 
     var id=document.getElementById("Marbutt24");
     Marathi_24();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 80://p
     var id=document.getElementById("Marbutt25");
     Marathi_25();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 81://q
     var id=document.getElementById("Marbutt16");
     Marathi_16();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
      
     case 82://r
     var id=document.getElementById("Marbutt19");
     Marathi_19();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 83://s
     var id=document.getElementById("Marbutt29");
     Marathi_29();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 84://t
     var id=document.getElementById("Marbutt20");
     Marathi_20();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 85://u
     var id=document.getElementById("Marbutt22");
     Marathi_22();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 86://v
     var id=document.getElementById("Marbutt43");
     Marathi_43();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 87://w
     var id=document.getElementById("Marbutt17");
     Marathi_17();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
 
     case 88://x
     var id=document.getElementById("Marbutt41");
     Marathi_41();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 89://y
     var id=document.getElementById("Marbutt21");
     Marathi_21();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;

     case 90://z
     var id=document.getElementById("Marbutt40");
     Marathi_40();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 192://z
     var id=document.getElementById("Marbutt1");
     Marathi_1();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 189://z
     var id=document.getElementById("Marbutt12");
     Marathi_12();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 187://z
     var id=document.getElementById("Marbutt13");
     Marathi_13();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 219://z
     var id=document.getElementById("Marbutt26");
     Marathi_26();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 221://z
     var id=document.getElementById("Marbutt27");
     Marathi_27();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 186://z
     var id=document.getElementById("Marbutt37");
     Marathi_37();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 222://z
     var id=document.getElementById("Marbutt38");
     Marathi_38();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 13://z
     var id=document.getElementById("Marbutt39");
     Marathi_39();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 188://z
     var id=document.getElementById("Marbutt47");
     Marathi_47();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 190://z
     var id=document.getElementById("Marbutt48");
     Marathi_48();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 191://z
     var id=document.getElementById("Marbutt49");
     Marathi_49();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
     
     case 32://z
     var id=document.getElementById("Marbutt51");
     Marathi_51();
     if(flag==0)
     {
     
     id.style.borderColor="blue";
     flag=1;
     }
     break;
  }
 }
}
function CatchKeyCodeUp(e)             //Catch key code when key is released..
{


                            var keynum

	                        if(window.event) // IE
	                        {
		                        keynum = e.keyCode
	                        }
	                        else if(e.which) // Netscape/Firefox/Opera
	                        {
		                        keynum = e.which
	                        }
                        	
	                        if(keynum == 17 || (keynum>=96 && keynum<=111))
		                        ctrlkeystatus = 0;

	                        if(ctrlkeystatus == 1)
		                        return;


  if(cur_lyr)
{
	if(window.event) // IE
	{
		if(e.keyCode == 16)
		{
			ShowShiftKbdUp();
                  
		}
            
	}
	else if(e.which) // For Netscape/Firefox/Opera - Gaurav
	{
		if(e.which == 16)
		{
			ShowShiftKbdUp();
		}
	}
}
 
 


if(cur_lyr == 'lyr2')
{
var Keyucode = e.keyCode ? e.keyCode : e.which;
switch(Keyucode)

  {
    
     case 8://,
     var id=document.getElementById("butt53");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
	 case 20:
     var id=document.getElementById("butt54");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
	 case 220:
     var id=document.getElementById("butt63");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
	
	 
	 case 91:
     var id=document.getElementById("butt57");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 
	 
	 case 92:
     var id=document.getElementById("butt60");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 case 93:
     var id=document.getElementById("butt61");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
     case 59://,
     var id=document.getElementById("butt37");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     
     break;
     case 16://Shift
     var id=document.getElementById("butt52");
     var id1=document.getElementById("butt55");
     if(flag)
     {
      
     id.style.borderColor="";
     id1.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 9://Tab
     var id=document.getElementById("butt15");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
     case 44://,
     var id=document.getElementById("butt47");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     
     break;

     

     case 47://
     var id=document.getElementById("butt49");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     
     case 96://
     var id=document.getElementById("butt1");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     case 49:
     var id=document.getElementById("butt2");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 50:
     var id=document.getElementById("butt3");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 51:
     var id=document.getElementById("butt4");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 52:
     var id=document.getElementById("butt5");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 53:
     var id=document.getElementById("butt6");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 54:
     var id=document.getElementById("butt7");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     case 55:
     var id=document.getElementById("butt8");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 56:
     var id=document.getElementById("butt9");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 57:
     var id=document.getElementById("butt10");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 48:
     var id=document.getElementById("butt11");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;

     case 65://a
     var id=document.getElementById("butt28");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
 
     case 66://b
     var id=document.getElementById("butt44");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
 
     case 67://c
     var id=document.getElementById("butt42");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 68://d
     var id=document.getElementById("butt30");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;
     }
     
     break;

     case 69://e
     var id=document.getElementById("butt18");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 70://f
     var id=document.getElementById("butt31");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
 
     case 71://g
     var id=document.getElementById("butt32");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 72://h
     var id=document.getElementById("butt33");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 73://i
     var id=document.getElementById("butt23");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     
     break;

     case 74://j
     var id=document.getElementById("butt34");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 75://k
     var id=document.getElementById("butt35");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
 
     case 76://l
     var id=document.getElementById("butt36");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 77://m
     var id=document.getElementById("butt46");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 78://n
     var id=document.getElementById("butt45");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 79://o
     var id=document.getElementById("butt24");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 80://p
     var id=document.getElementById("butt25");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 81://q
     var id=document.getElementById("butt16");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
      
     case 82://r
     var id=document.getElementById("butt19");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 83://s
     var id=document.getElementById("butt29");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 84://t
     var id=document.getElementById("butt20");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 85://u
     var id=document.getElementById("butt22");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 86://v
     var id=document.getElementById("butt43");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 87://w
     var id=document.getElementById("butt17");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
 
     case 88://x
     var id=document.getElementById("butt41");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 89://y
     var id=document.getElementById("butt21");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     
     break;

     case 90://z
     var id=document.getElementById("butt40");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     
     case 192://z
     var id=document.getElementById("butt1");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     
     case 189://z
     var id=document.getElementById("butt12");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     case 187://z
     var id=document.getElementById("butt13");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     
     case 219://z
     var id=document.getElementById("butt26");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     case 221://z
     var id=document.getElementById("butt27");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     
     case 186://z
     var id=document.getElementById("butt37");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     case 222://z
     var id=document.getElementById("butt38");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     
     case 188://z
     var id=document.getElementById("butt47");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     
     case 190://z
     var id=document.getElementById("butt48");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     
     case 191://z
     var id=document.getElementById("butt49");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     
     case 32://z
     var id=document.getElementById("butt51");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
      break;
      
      
     case 13://Enter
     var id=document.getElementById("butt39");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     break;
      
  }
  
}
else if(cur_lyr == 'lyr1')
{
var Keyucode =e.keyCode ? e.keyCode : e.which;
switch(Keyucode)
  {
  
      case 8:
     var id=document.getElementById("Banbutt53");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
	 case 20:
     var id=document.getElementById("Banbutt55");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 case 220:
     var id=document.getElementById("Banbutt54");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 case 91:
     var id=document.getElementById("Banbutt58");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 
	 
	 case 92:
     var id=document.getElementById("Banbutt61");
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 case 93:
     var id=document.getElementById("Banbutt62");
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
  case 59:
     var id=document.getElementById("Banbutt37");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     case 16://Shift
     var id=document.getElementById("Banbutt52");
     var id1=document.getElementById("Banbutt56");
     if(flag)
     {
      
     id.style.borderColor="";
     id1.style.borderColor="";

     flag=0;    
     }
     break;
     
     case 9://Tab
      var id=document.getElementById("Banbutt15");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 49:
     var id=document.getElementById("Banbutt2");
      if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 50:
     var id=document.getElementById("Banbutt3");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 51:
     var id=document.getElementById("Banbutt4");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     case 52:
     var id=document.getElementById("Banbutt5");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     case 53:
     var id=document.getElementById("Banbutt6");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     case 54:
     var id=document.getElementById("Banbutt7");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     case 55:
     var id=document.getElementById("Banbutt8");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     case 56:
     var id=document.getElementById("Banbutt9");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     case 57:
     var id=document.getElementById("Banbutt10");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break; 
     case 44:
     var id=document.getElementById("Banbutt48");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 45:
     var id=document.getElementById("Banbutt12");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 32:
     var id=document.getElementById("Banbutt51");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     case 48:
     var id=document.getElementById("Banbutt11");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     case 61:
     var id=document.getElementById("Banbutt13");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
 
     case 44://,
      var id=document.getElementById("Banbutt47");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

     

     case 47://
     var id=document.getElementById("Banbutt49");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

     case 65://a
     var id=document.getElementById("Banbutt28");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
     case 66://b
     var id=document.getElementById("Banbutt45");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
    case 67://c
    var id=document.getElementById("Banbutt43");
      if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }

     break;

    case 68://d
    var id=document.getElementById("Banbutt30");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 69://e
    var id=document.getElementById("Banbutt18");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 70://f
    var id=document.getElementById("Banbutt31");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
    case 71://g
    var id=document.getElementById("Banbutt32");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 72://h
    var id=document.getElementById("Banbutt33");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 73://i
    var id=document.getElementById("Banbutt23");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 74://j
    var id=document.getElementById("Banbutt34");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 75://k
    var id=document.getElementById("Banbutt35");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
    case 76://l
    var id=document.getElementById("Banbutt36");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 77://m
    var id=document.getElementById("Banbutt47");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 78://n
    var id=document.getElementById("Banbutt46");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 79://o
    var id=document.getElementById("Banbutt24");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 80://p
    var id=document.getElementById("Banbutt25");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 81://q
    var id=document.getElementById("Banbutt16");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 82://r
    var id=document.getElementById("Banbutt19");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 83://s
    var id=document.getElementById("Banbutt29");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 84://t
    var id=document.getElementById("Banbutt20");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 85://u  
     var id=document.getElementById("Banbutt22");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 86://v
    var id=document.getElementById("Banbutt44");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 87://w
    var id=document.getElementById("Banbutt17");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 88://x
    var id=document.getElementById("Banbutt42");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 89://y
    var id=document.getElementById("Banbutt21");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 90://z
    var id=document.getElementById("Banbutt41");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 186://z
    var id=document.getElementById("Banbutt37");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 222://z
    var id=document.getElementById("Banbutt38");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 13://z
    var id=document.getElementById("Banbutt39");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 188://z
    var id=document.getElementById("Banbutt48");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 190://z
    var id=document.getElementById("Banbutt49");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 219://z
    var id=document.getElementById("Banbutt26");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 221://z
    var id=document.getElementById("Banbutt27");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 189://z
    var id=document.getElementById("Banbutt12");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 187://z
    var id=document.getElementById("Banbutt13");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 }
  
}
 else if(cur_lyr == 'lyr4')
{
var Keyucode = e.keyCode ? e.keyCode : e.which;
switch(Keyucode)
  {
  
     case 8:
     var id=document.getElementById("Tambutt53");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
	 case 20:
     var id=document.getElementById("Tambutt55");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 case 220:
     var id=document.getElementById("Tambutt54");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 case 91:
     var id=document.getElementById("Tambutt59");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 
	 
	 case 92:
     var id=document.getElementById("Tambutt62");
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 case 93:
     var id=document.getElementById("Tambutt63");
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
    case 59:
     var id=document.getElementById("Tambutt37");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     case 16://Shift
     var id=document.getElementById("Tambutt52");
     var id1=document.getElementById("Tambutt57");
     if(flag)
     {
      
     id.style.borderColor="";
     id1.style.borderColor="";
     flag=0;    
     }
     break;
     
      
     case 9://Tab
     var id=document.getElementById("Tambutt15");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
     case 44://,
     var id=document.getElementById("Tambutt47");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    

     case 47://
     var id=document.getElementById("Tambutt49");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 49://
     var id=document.getElementById("Tambutt2");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 50://
     var id=document.getElementById("Tambutt3");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 51://
     var id=document.getElementById("Tambutt4");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 52://
     var id=document.getElementById("Tambutt5");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 53://
     var id=document.getElementById("Tambutt6");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 54://
     var id=document.getElementById("Tambutt7");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 55://
     var id=document.getElementById("Tambutt8");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 56://
     var id=document.getElementById("Tambutt9");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 57://
     var id=document.getElementById("Tambutt10");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 48://
     var id=document.getElementById("Tambutt11");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

     case 65://a
     var id=document.getElementById("Tambutt28");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
     case 66://b
     var id=document.getElementById("Tambutt45");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
    case 67://c
    var id=document.getElementById("Tambutt43");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 68://d
    var id=document.getElementById("Tambutt30");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 69://e
    var id=document.getElementById("Tambutt18");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 70://f
    var id=document.getElementById("Tambutt31");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
    case 71://g
    var id=document.getElementById("Tambutt32");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 72://h
    var id=document.getElementById("Tambutt33");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 73://i
    var id=document.getElementById("Tambutt23");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 74://j
    var id=document.getElementById("Tambutt34");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 75://k
    var id=document.getElementById("Tambutt35");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
    case 76://l
    var id=document.getElementById("Tambutt36");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 77://m
    var id=document.getElementById("Tambutt47");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 78://n.
    var id=document.getElementById("Tambutt46");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 79://o
    var id=document.getElementById("Tambutt24");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 80://p
    var id=document.getElementById("Tambutt25");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 81://q
    var id=document.getElementById("Tambutt16");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 82://r
    var id=document.getElementById("Tambutt19");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 83://s
    var id=document.getElementById("Tambutt29");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 84://t
    var id=document.getElementById("Tambutt20");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 85://u
    var id=document.getElementById("Tambutt22");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 86://v
    var id=document.getElementById("Tambutt44");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 87://w
    var id=document.getElementById("Tambutt17");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 88://x
    var id=document.getElementById("Tambutt42");
    if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 89://y
    var id=document.getElementById("Tambutt21");
    if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

     case 90://z
     var id=document.getElementById("Tambutt40");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 192://z
     var id=document.getElementById("Tambutt1");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 189://z
     var id=document.getElementById("Tambutt12");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 219://z
     var id=document.getElementById("Tambutt26");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 221://z
     var id=document.getElementById("Tambutt27");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 186://z
     var id=document.getElementById("Tambutt37");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 222://z
     var id=document.getElementById("Tambutt38");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 13://Enter
     var id=document.getElementById("Tambutt39");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 188://,
     var id=document.getElementById("Tambutt48");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 190://>
     var id=document.getElementById("Tambutt49");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 32://>
     var id=document.getElementById("Tambutt51");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
    
     
     
 }
 
}
else if(cur_lyr == 'lyr5')
{
var Keyucode = e.keyCode ? e.keyCode : e.which;
switch(Keyucode)
  {
  
     case 8:
     var id=document.getElementById("Telbutt53");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
	 case 20:
     var id=document.getElementById("Telbutt55");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 case 220:
     var id=document.getElementById("Telbutt54");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 case 91:
     var id=document.getElementById("Telbutt58");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 
	 
	 case 92:
     var id=document.getElementById("Telbutt61");
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 case 93:
     var id=document.getElementById("Telbutt62");
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     case 59:
     var id=document.getElementById("Telbutt37");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     case 16://Shift
     var id=document.getElementById("Telbutt52");
     var id1=document.getElementById("Telbutt56"); 
    if(flag)
     {
      
     id.style.borderColor="";
     id1.style.borderColor="";
 
    flag=0;    
     }
     break;
     
     case 9://Tab
     var id=document.getElementById("Telbutt15");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
     case 44://,
     var id=document.getElementById("Telbutt47");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

     

     case 47://
     var id=document.getElementById("Telbutt49");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

     case 48://
     var id=document.getElementById("Telbutt11");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 49://
     var id=document.getElementById("Telbutt2");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 50://
     var id=document.getElementById("Telbutt3");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 51://
     var id=document.getElementById("Telbutt4");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 52://
     var id=document.getElementById("Telbutt5");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 53://
     var id=document.getElementById("Telbutt6");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 54://
     var id=document.getElementById("Telbutt7");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 55://
     var id=document.getElementById("Telbutt8");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 56://
     var id=document.getElementById("Telbutt9");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 57://
     var id=document.getElementById("Telbutt10");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 47://
     var id=document.getElementById("Telbutt49");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 65://a
     var id=document.getElementById("Telbutt28");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
     case 66://b
     var id=document.getElementById("Telbutt44");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
    case 67://c
    var id=document.getElementById("Telbutt42");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 68://d
    var id=document.getElementById("Telbutt30");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 69://e
    var id=document.getElementById("Telbutt18");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 70://f
    var id=document.getElementById("Telbutt31");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
    case 71://g
    var id=document.getElementById("Telbutt32");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 72://h
    var id=document.getElementById("Telbutt33");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 73://i
    var id=document.getElementById("Telbutt23");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 74://j
    var id=document.getElementById("Telbutt34");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 75://k
    var id=document.getElementById("Telbutt35");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
    case 76://l
    var id=document.getElementById("Telbutt36");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 77://m
    var id=document.getElementById("Telbutt46");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 78://n
    var id=document.getElementById("Telbutt45");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 79://o
    var id=document.getElementById("Telbutt24");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 80://p
    var id=document.getElementById("Telbutt25");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 81://q
    var id=document.getElementById("Telbutt16");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 82://r
    var id=document.getElementById("Telbutt19");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 83://s
    var id=document.getElementById("Telbutt29");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 84://t
    var id=document.getElementById("Telbutt20");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 85://u
    var id=document.getElementById("Telbutt22");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 86://v
    var id=document.getElementById("Telbutt43");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 87://w
    var id=document.getElementById("Telbutt17");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 88://x
    var id=document.getElementById("Telbutt41");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 89://y
    var id=document.getElementById("Telbutt21");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 90://z
    var id=document.getElementById("Telbutt40");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 192://z
    var id=document.getElementById("Telbutt1");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 189://-
    var id=document.getElementById("Telbutt12");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 187://+
    var id=document.getElementById("Telbutt13");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 219://[
     var id=document.getElementById("Telbutt26");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 221://]
     var id=document.getElementById("Telbutt27");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

     case 186://:
     var id=document.getElementById("Telbutt37");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 222://"
     var id=document.getElementById("Telbutt38");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

     case 13://Enter
     var id=document.getElementById("Telbutt39");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 188://<
     var id=document.getElementById("Telbutt47");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 190://>
     var id=document.getElementById("Telbutt48");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 191://?
     var id=document.getElementById("Telbutt49");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 32://SpaceBar
     var id=document.getElementById("Telbutt51");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

 }
}

else if(cur_lyr == 'lyr6')
{
var Keyucode = e.keyCode ? e.keyCode : e.which;
switch(Keyucode)
  {
  
     case 8:
     var id=document.getElementById("Punbutt53");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
	  case 20:
     var id=document.getElementById("Punbutt55");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 case 220:
     var id=document.getElementById("Punbutt54");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 case 91:
     var id=document.getElementById("Punbutt58");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 
	 
	 case 92:
     var id=document.getElementById("Punbutt61");
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 case 93:
     var id=document.getElementById("Punbutt62");
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
    case 59:
     var id=document.getElementById("Punbutt37");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     case 16://Shift
     var id=document.getElementById("Punbutt52");
     var id1=document.getElementById("Punbutt56");
     if(flag)
     {
     id.style.borderColor="";
     id1.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 9://Tab
     var id=document.getElementById("Punbutt15");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
     case 44://,
     var id=document.getElementById("Punbutt47");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

     case 47://
     var id=document.getElementById("Punbutt49");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 48://
     var id=document.getElementById("Punbutt11");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 49://
     var id=document.getElementById("Punbutt2");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 50://
     var id=document.getElementById("Punbutt3");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 51://
     var id=document.getElementById("Punbutt4");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 52://
     var id=document.getElementById("Punbutt5");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     case 53://
     var id=document.getElementById("Punbutt6");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 54://
     var id=document.getElementById("Punbutt7");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 55://
     var id=document.getElementById("Punbutt8");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 56://
     var id=document.getElementById("Punbutt9");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 57://
     var id=document.getElementById("Punbutt10");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

     case 65://a
     var id=document.getElementById("Punbutt28");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
     case 66://b
     var id=document.getElementById("Punbutt45");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
    case 67://c
    var id=document.getElementById("Punbutt43");
    if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 68://d
    var id=document.getElementById("Punbutt30");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 69://e
    var id=document.getElementById("Punbutt18");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 70://f
    var id=document.getElementById("Punbutt31");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
    case 71://g
    var id=document.getElementById("Punbutt32");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 72://h
    var id=document.getElementById("Punbutt33");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 73://i
    var id=document.getElementById("Punbutt23");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 74://j
    var id=document.getElementById("Punbutt34");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 75://k
    var id=document.getElementById("Punbutt35");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
    case 76://l
    var id=document.getElementById("Punbutt36");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 77://m
    var id=document.getElementById("Punbutt47");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 78://n
    var id=document.getElementById("Punbutt46");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 79://o
    var id=document.getElementById("Punbutt24");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 80://p
    var id=document.getElementById("Punbutt25");
    if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 81://q
    var id=document.getElementById("Punbutt16");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 82://r
    var id=document.getElementById("Punbutt19");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 83://s
    var id=document.getElementById("Punbutt29");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 84://t
    var id=document.getElementById("Punbutt20");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 85://u
    var id=document.getElementById("Punbutt22");
    if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 86://v
    var id=document.getElementById("Punbutt44");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 87://w
    var id=document.getElementById("Punbutt17");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 88://x
    var id=document.getElementById("Punbutt42");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

    case 89://y
    var id=document.getElementById("Punbutt21");
    if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;

     case 90://z
     var id=document.getElementById("Punbutt41");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 189://-
    var id=document.getElementById("Punbutt12");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 219://[
     var id=document.getElementById("Punbutt26");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 221://]
     var id=document.getElementById("Punbutt27");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 186://:
     var id=document.getElementById("Punbutt37");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 222://"
     var id=document.getElementById("Punbutt38");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 13://Enter
     var id=document.getElementById("Punbutt39");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 188://<
     var id=document.getElementById("Punbutt48");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 190://>
     var id=document.getElementById("Punbutt49");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
     
     case 32://SpaceBar
     var id=document.getElementById("Punbutt51");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 }
 
}


else if(cur_lyr == 'lyr3')
{
 var Keyucode = e.keyCode ? e.keyCode : e.which;
  
  switch(Keyucode)

  {
     case 8://,
     var id=document.getElementById("Marbutt53");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     
     break;
	  case 20:
     var id=document.getElementById("Marbutt54");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 case 220:
     var id=document.getElementById("Marbutt63");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 case 91:
     var id=document.getElementById("Marbutt57");
     if(flag)
     {
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 
	 
	 case 92:
     var id=document.getElementById("Marbutt60");
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
	 
	 case 93:
     var id=document.getElementById("Marbutt61");
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     case 59://,
     var id=document.getElementById("Marbutt37");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     
     break;
     case 16://Shift
     var id=document.getElementById("Marbutt52");
     var id1=document.getElementById("Marbutt55");     
     if(flag)
     {
     id.style.borderColor="";
     id1.style.borderColor="";  
     flag=0;    
     }
     break;
     
     case 9://Tab
     var id=document.getElementById("Marbutt15");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     break;
 
     case 44://,
     var id=document.getElementById("Marbutt47");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     
     break;

     

     case 47://
     var id=document.getElementById("Marbutt49");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     
     case 96://
     var id=document.getElementById("Marbutt1");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     case 49:
     var id=document.getElementById("Marbutt2");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 50:
     var id=document.getElementById("Marbutt3");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 51:
     var id=document.getElementById("Marbutt4");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 52:
     var id=document.getElementById("Marbutt5");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 53:
     var id=document.getElementById("Marbutt6");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 54:
     var id=document.getElementById("Marbutt7");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     case 55:
     var id=document.getElementById("Marbutt8");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 56:
     var id=document.getElementById("Marbutt9");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 57:
     var id=document.getElementById("Marbutt10");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;
     
     case 48:
     var id=document.getElementById("Marbutt11");
     
     if(flag)
     {
     
     id.style.borderColor="";
     flag=0;
     }
     break;

     case 65://a
     var id=document.getElementById("Marbutt28");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
 
     case 66://b
     var id=document.getElementById("Marbutt44");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
 
     case 67://c
     var id=document.getElementById("Marbutt42");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 68://d
     var id=document.getElementById("Marbutt30");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;
     }
     
     break;

     case 69://e
     var id=document.getElementById("Marbutt18");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 70://f
     var id=document.getElementById("Marbutt31");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
 
     case 71://g
     var id=document.getElementById("Marbutt32");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 72://h
     var id=document.getElementById("Marbutt33");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 73://i
     var id=document.getElementById("Marbutt23");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     
     break;

     case 74://j
     var id=document.getElementById("Marbutt34");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 75://k
     var id=document.getElementById("Marbutt35");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
 
     case 76://l
     var id=document.getElementById("Marbutt36");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 77://m
     var id=document.getElementById("Marbutt46");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 78://n
     var id=document.getElementById("Marbutt45");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 79://o
     var id=document.getElementById("Marbutt24");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 80://p
     var id=document.getElementById("Marbutt25");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 81://q
     var id=document.getElementById("Marbutt16");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
      
     case 82://r
     var id=document.getElementById("Marbutt19");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 83://s
     var id=document.getElementById("Marbutt29");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 84://t
     var id=document.getElementById("Marbutt20");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 85://u
     var id=document.getElementById("Marbutt22");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 86://v
     var id=document.getElementById("Marbutt43");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 87://w
     var id=document.getElementById("Marbutt17");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
 
     case 88://x
     var id=document.getElementById("Marbutt41");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;

     case 89://y
     var id=document.getElementById("Marbutt21");
     if(flag)
     {
      
     id.style.borderColor="";
     flag=0;    
     }
     
     break;

     case 90://z
     var id=document.getElementById("Marbutt40");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     
     case 192://z
     var id=document.getElementById("Marbutt1");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     
     case 189://z
     var id=document.getElementById("Marbutt12");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     case 187://z
     var id=document.getElementById("Marbutt13");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     
     case 219://z
     var id=document.getElementById("Marbutt26");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     case 221://z
     var id=document.getElementById("Marbutt27");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     
     case 186://z
     var id=document.getElementById("Marbutt37");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     case 222://z
     var id=document.getElementById("Marbutt38");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     
     case 188://z
     var id=document.getElementById("Marbutt47");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     
     case 190://z
     var id=document.getElementById("Marbutt48");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     
     case 191://z
     var id=document.getElementById("Marbutt49");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
     break;
     
     case 32://z
     var id=document.getElementById("Marbutt51");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     
      break;
      
      
     case 13://Enter
     var id=document.getElementById("Marbutt39");
     if(flag)
     {
     
     id.style.borderColor=""; 
     flag=0;    
     }
     break;
      
  }
  }
  
 ShowNormalKeyboard();
}

function ShowShiftKbdDn()
{
			if(cur_lyr == 'lyr1')
			{
				Bansubmit1();
				flag1=1;
			}
			if(cur_lyr == 'lyr2')
			{
				Submit1();
				flag1=1;
			}
			if(cur_lyr == 'lyr3')
			{
				MarSubmit1();
				flag1=1;
			}
			if(cur_lyr == 'lyr4')
			{
				TamSubmit1();
				flag1=1;
			}
			if(cur_lyr == 'lyr5')
			{
				TelSubmit1();
				flag1=1;
			}
			if(cur_lyr == 'lyr6')
			{
				PunSubmit1();
				flag1=1;
			}
}

function ShowShiftKbdUp()
{
			if(cur_lyr == 'lyr1')
			{
				Ban_Original_Keyboard();
				flag1=0;
			}
			if(cur_lyr == 'lyr2')
			{
				Original_Keyboard();
				flag1=0;
			}
			if(cur_lyr == 'lyr3')
			{
				Mar_Original_Keyboard();
				flag1=0;
			}
			if(cur_lyr == 'lyr4')
			{
				Tam_Original_Keyboard();
				flag1=0;
			}
			if(cur_lyr == 'lyr5')
			{
				Tel_Original_Keyboard();
				flag1=0;
			}
			if(cur_lyr == 'lyr6')
			{
				Pun_Original_Keyboard();
				flag1=0;
			}
}



function SupressTextEcho(e) 
{
	 var keynum;

      
	  
	 if(window.event) // IE
     {
			keynum = e.keyCode;
	 }
	 else if(e.which) // Netscape/Firefox/Opera
	 {
			keynum = e.which;
	 }
	 
	 if(( keynum >= 33  &&  keynum <= 40 ) || keynum == 45 || keynum == 46 || keynum == 8 )
	 return;
	  
	 if(keynum == 17 || ( keynum >= 96 && keynum <= 111))    
	 return true;
	  
	 if(keynum == 17 || (keynum >= 96 && keynum <= 111))
     ctrlkeystatus = 1;
		     
     if(ctrlkeystatus == 1 || keynum==13 || flag2==1 )
     return;
     
    if(keynum == 32 || keynum == 17)
    {
        if(trimAll(document.getElementById("transl1").value) == "")
        return false;
        return true;
    }

      
    if(cur_lyr == null)
	 return true;
		  
     if(cur_lyr == 'lyr7')
	 return true;
     else                               
	 return false;
}	 

       function trimAll(sString)
       {
         while (sString.substring(0,1) == ' ')
         {
               sString = sString.substring(1, sString.length);
	   
         }

 
          while (sString.substring(sString.length-1, sString.length) == ' ')
         {
               sString = sString.substring(0,sString.length-1);
         }
         return sString;
      }

function ShowNormalKeyboard()
{

      if(cur_lyr == 'lyr2')
	 {
	   var varHindi = new Array("butt15", "butt47", "butt48","butt49","butt29","butt45","butt43","butt31","butt18","butt32","butt33","butt34","butt23","butt35","butt36","butt37","butt46","butt24","butt25","butt16","butt19","butt30","butt20","butt22","butt44","butt17","butt42","butt21","butt1","butt2","butt3","butt4","butt5","butt6","butt7","butt8","butt9","butt10","butt11","butt12","butt13","butt26","butt27","butt28","butt38","butt39","butt40","butt41","butt51","butt52","butt53","butt54","butt55","butt56","butt57","butt58","butt59","butt60","butt61","butt62","butt63");
	   var cidH;
	     for(var i=0; i < varHindi.length; i++)
	     {
			    cidH = document.getElementById(varHindi[i]);
			    cidH.style.borderColor="";
	     }
	 }                                                                  
			
				
	else if(cur_lyr == 'lyr3')
	{
	  var varMarathi = new Array("Marbutt15", "Marbutt47", "Marbutt48","Marbutt49","Marbutt29","Marbutt45","Marbutt43","Marbutt31","Marbutt18","Marbutt32","Marbutt33","Marbutt34","Marbutt23","Marbutt35","Marbutt36","Marbutt37","Marbutt47","Marbutt46","Marbutt24","Marbutt25","Marbutt16","Marbutt19","Marbutt30","Marbutt20","Marbutt22","Marbutt44","Marbutt17","Marbutt42","Marbutt21","Marbutt1","Marbutt2","Marbutt3","Marbutt4","Marbutt5","Marbutt6","Marbutt7","Marbutt8","Marbutt9","Marbutt10","Marbutt11","Marbutt12","Marbutt13","Marbutt14","Marbutt26","Marbutt27","Marbutt28","Marbutt38","Marbutt39","Marbutt40","Marbutt41","Marbutt51","Marbutt52","Marbutt53","Marbutt54","Marbutt55","Marbutt56","Marbutt57","Marbutt58","Marbutt59","Marbutt60","Marbutt61","Marbutt62","Marbutt63");
	  var cidM;
	     for(var i=0; i < varMarathi.length; i++)
	     {
			    cidM = document.getElementById(varMarathi[i]);
			    cidM.style.borderColor="";
	     }
	}
	
	else if(cur_lyr == 'lyr4')
	{
	  var varTamil = new Array("Tambutt15", "Tambutt47", "Tambutt48","Tambutt49","Tambutt29","Tambutt45","Tambutt43","Tambutt31","Tambutt18","Tambutt32","Tambutt33","Tambutt34","Tambutt23","Tambutt35","Tambutt36","Tambutt37","Tambutt47","Tambutt46","Tambutt24","Tambutt25","Tambutt16","Tambutt19","Tambutt30","Tambutt20","Tambutt22","Tambutt44","Tambutt17","Tambutt42","Tambutt21","Tambutt1","Tambutt2","Tambutt3","Tambutt4","Tambutt5","Tambutt6","Tambutt7","Tambutt8","Tambutt9","Tambutt10","Tambutt11","Tambutt12","Tambutt26","Tambutt27","Tambutt28","Tambutt38","Tambutt39","Tambutt40","Tambutt51","Tambutt52","Tambutt53","Tambutt54","Tambutt55","Tambutt56","Tambutt57","Tambutt58","Tambutt59","Tambutt60","Tambutt61","Tambutt62","Tambutt63","Tambutt64");
	  var cidTa;
	     for(var i=0; i < varTamil.length; i++)
	     {
			    cidTa = document.getElementById(varTamil[i]);
			    cidTa.style.borderColor="";
	     }
	 }
	 
	 else if(cur_lyr == 'lyr5')
	 {
	   var varTelugu = new Array("Telbutt15", "Telbutt47", "Telbutt48","Telbutt49","Telbutt29","Telbutt45","Telbutt43","Telbutt31","Telbutt18","Telbutt32","Telbutt33","Telbutt34","Telbutt23","Telbutt35","Telbutt36","Telbutt37","Telbutt47","Telbutt46","Telbutt24","Telbutt25","Telbutt16","Telbutt19","Telbutt30","Telbutt20","Telbutt22","Telbutt44","Telbutt17","Telbutt42","Telbutt21","Telbutt1","Telbutt2","Telbutt3","Telbutt4","Telbutt5","Telbutt6","Telbutt7","Telbutt8","Telbutt9","Telbutt10","Telbutt11","Telbutt12","Telbutt13","Telbutt26","Telbutt27","Telbutt28","Telbutt38","Telbutt39","Telbutt40","Telbutt41","Telbutt51","Telbutt52","Telbutt53","Telbutt54","Telbutt55","Telbutt56","Telbutt57","Telbutt58","Telbutt59","Telbutt60","Telbutt61","Telbutt62","Telbutt63");
	   var cidTe;
	     for(var i=0; i < varTelugu.length; i++)
	     {
			    cidTe = document.getElementById(varTelugu[i]);
	                    cidTe.style.borderColor="";
	     }
	 }
	 
     else if(cur_lyr == 'lyr1')
	 {
	   var varBangali = new Array("Banbutt15", "Banbutt47", "Banbutt48","Banbutt49","Banbutt29","Banbutt45","Banbutt43","Banbutt31","Banbutt18","Banbutt32","Banbutt33","Banbutt34","Banbutt23","Banbutt35","Banbutt36","Banbutt37","Banbutt47","Banbutt46","Banbutt24","Banbutt25","Banbutt16","Banbutt19","Banbutt30","Banbutt20","Banbutt22","Banbutt44","Banbutt17","Banbutt42","Banbutt21","Banbutt1","Banbutt2","Banbutt3","Banbutt4","Banbutt5","Banbutt6","Banbutt7","Banbutt8","Banbutt9","Banbutt10","Banbutt11","Banbutt12","Banbutt13","Banbutt26","Banbutt27","Banbutt28","Banbutt38","Banbutt39","Banbutt40","Banbutt41","Banbutt51","Banbutt52","Banbutt53","Banbutt54","Banbutt55","Banbutt56","Banbutt57","Banbutt58","Banbutt59","Banbutt60","Banbutt61","Banbutt62","Banbutt63");
	   var cidB;
	     for(var i=0; i < varBangali.length; i++)
	     {
			    cidB = document.getElementById(varBangali[i]);
			    cidB.style.borderColor="";
	     }
	 }
	 
	 else if(cur_lyr == 'lyr6')
	 {
	   var varPunjabi = new Array("Punbutt15", "Punbutt48","Punbutt49","Punbutt29","Punbutt45","Punbutt43","Punbutt31","Punbutt18","Punbutt32","Punbutt33","Punbutt34","Punbutt23","Punbutt35","Punbutt36","Punbutt37","Punbutt47","Punbutt46","Punbutt24","Punbutt25","Punbutt16","Punbutt19","Punbutt30","Punbutt20","Punbutt22","Punbutt44","Punbutt17","Punbutt42","Punbutt21","Punbutt1","Punbutt2","Punbutt3","Punbutt4","Punbutt5","Punbutt6","Punbutt7","Punbutt8","Punbutt9","Punbutt10","Punbutt11","Punbutt12","Punbutt26","Punbutt27","Punbutt28","Punbutt38","Punbutt39","Punbutt41","Punbutt51","Punbutt52","Punbutt53","Punbutt54","Punbutt55","Punbutt56","Punbutt57","Punbutt58","Punbutt59","Punbutt60","Punbutt61","Punbutt62","Punbutt63","Punbutt64");
	   var cidP;
	     for(var i=0; i < varPunjabi.length; i++)
	     {
			    cidP = document.getElementById(varPunjabi[i]);
			    cidP.style.borderColor="";
	     }
	 }
     else return;

}


