 var mwvanekula=0;
 var lurjikula=0;
var mm=0;
 var hh=0;
 var sc=0;
 var mmstr='';
 var hhstr='';
 var scstr='';
 var timestr='';
function timeCout()
 {  
	if(Ext.getCmp('damlwin2')){
		setTimeout("timeCout()",1000);
		sc++;
		if(sc>=60){
		mm++;
			sc=0;
			if(mm>=60){
				hh++;
				mm=0;
				if(hh>=24){
				   hh=0;
			       mm=0;
				   sc=0;
				}
			}
		}
		 if(sc<10)
		   scstr='0'+sc;
		 else if(sc>=10)
		   scstr=sc;
		 if(mm<10)
		   mmstr='0'+mm;
		 else if(mm>=10)
		   mmstr=mm;
		 if(hh<10)
		   hhstr='0'+hh;
		 else if(hh>=10)
		   hhstr=hh;
		 timestr='<font size=6 color="#8EA8CA">'+hhstr+'</font><font size=6 color="#8EA8CA">:</font><font size=6 color="#8EA8CA">'+mmstr+':'+'</font><font size=6 color="#8EA8CA">'+scstr+'</font>';
	     Ext.getCmp('damlwin2').body.update(timestr); 	
	}

 }
  function rmvkoch(koch,ujra)
 {
 var imigi=document.getElementById(koch).src;
      if(document.getElementById(ujra).innerHTML=='')
	    {  
		   if(koch[3]==ujra[1]||koch[4]==ujra[2]||(parseInt(ujra[1])>parseInt(koch[3])+2)||(parseInt(ujra[1])<parseInt(koch[3])-2)||(parseInt(ujra[2])>parseInt(koch[4])+2)||(parseInt(ujra[2])<parseInt(koch[4])-2))
			return false;
		//mwvane unda midiodes zevit
		if(document.getElementById(koch).src.indexOf('mwvane.png')!=-1)
		  { if(parseInt(koch[3])<parseInt(ujra[1]))
			return false;
		  }
		//End mwvane unda midiodes zevit
		//lurji unda midiodes qvevit
		if(document.getElementById(koch).src.indexOf('lurji.png')!=-1)
		  {
		    if(parseInt(koch[3])>parseInt(ujra[1]))
			return false;
		  }
		//end lurji unda midiodes qvevit
		if((parseInt(koch[3])-2==parseInt(ujra[1]))&&(parseInt(koch[4])+2==parseInt(ujra[2])))
		   { 
		   if((document.getElementById('c'+(parseInt(koch[3])-1)+''+(parseInt(koch[4])+1)).innerHTML=='')||(document.getElementById('img'+(parseInt(koch[3])-1)+''+(parseInt(koch[4])+1)).src==document.getElementById('img'+koch[3]+''+koch[4]).src))
		         return false;
		   else 
		       {
			     document.getElementById('c'+(parseInt(koch[3])-1)+''+(parseInt(koch[4])+1)).innerHTML='';
				 mwvanekula++;
                 pp='<font size=20 color="blue">'+lurjikula+'</font><font size=20>:</font><font color="green" size=20>'+mwvanekula+' </font>';
                 Ext.getCmp('damlwin1').body.update(pp);
				 }
				 
			 }
			 //---------------------------------------------------------------------------------------------------------------------
			
			 else if((parseInt(koch[3])+2==parseInt(ujra[1]))&&(parseInt(koch[4])-2==parseInt(ujra[2])))
		   { 
		   if((document.getElementById('c'+(parseInt(koch[3])+1)+''+(parseInt(koch[4])-1)).innerHTML=='')||(document.getElementById('img'+(parseInt(koch[3])+1)+''+(parseInt(koch[4])-1)).src==document.getElementById('img'+koch[3]+''+koch[4]).src))
		         return false;
		   else 
		       {
			     document.getElementById('c'+(parseInt(koch[3])+1)+''+(parseInt(koch[4])-1)).innerHTML='';
				 lurjikula++;
                 pp='<font size=20 color="blue">'+lurjikula+'</font><font size=20>:</font><font color="green" size=20>'+mwvanekula+'</font>';
                 Ext.getCmp('damlwin1').body.update(pp);
				 }
		   
			 }

			//------------------------------------------------------------------------------------------------------------------------------
			
			else if((parseInt(koch[3])+2==parseInt(ujra[1]))&&(parseInt(koch[4])+2==parseInt(ujra[2])))
		   { 
		   if((document.getElementById('c'+(parseInt(koch[3])+1)+''+(parseInt(koch[4])+1)).innerHTML=='')||(document.getElementById('img'+(parseInt(koch[3])+1)+''+(parseInt(koch[4])+1)).src==document.getElementById('img'+koch[3]+''+koch[4]).src))
		         return false;
		   else 
		       {
			     document.getElementById('c'+(parseInt(koch[3])+1)+''+(parseInt(koch[4])+1)).innerHTML='';
				 lurjikula++;
                 pp='<font size=20 color="blue">'+lurjikula+'</font><font size=20>:</font><font color="green" size=20>'+mwvanekula+'</font>';
                 Ext.getCmp('damlwin1').body.update(pp);
				 }
		   
			 }
		   //-------------------------------------------------------------------------------------------------------------------------------
		   else if((parseInt(koch[3])-2==parseInt(ujra[1]))&&(parseInt(koch[4])-2==parseInt(ujra[2])))
		   {
		   if((document.getElementById('c'+(parseInt(koch[3])-1)+''+(parseInt(koch[4])-1)).innerHTML=='')||(document.getElementById('img'+(parseInt(koch[3])-1)+''+(parseInt(koch[4])-1)).src==document.getElementById('img'+koch[3]+''+koch[4]).src))
		         return false;
		   else 
		       {
			     document.getElementById('c'+(parseInt(koch[3])-1)+''+(parseInt(koch[4])-1)).innerHTML='';
				 mwvanekula++;
                 pp='<font size=20 color="blue">'+lurjikula+'</font><font size=20>:</font><font color="green" size=20>'+mwvanekula+'</font>';
                 Ext.getCmp('damlwin1').body.update(pp);
				 }
				 
			 }
		   //-------------------------------------------------------------------------------------------------------------------------------
	       document.getElementById('c'+koch[3]+koch[4]).innerHTML='';
		   if(imigi.indexOf('lurji.png')!=-1)
			   document.getElementById(ujra).innerHTML='<img id=img'+ujra[1]+ujra[2]+' width=90 height=95  src="images/lurji.png"/>';
		   else
		     document.getElementById(ujra).innerHTML='<img id=img'+ujra[1]+ujra[2]+' width=80 height=85  src="images/mwvane.png"/>';
	         new Ext.dd.DragSource(document.getElementById('img'+ujra[1]+ujra[2]));
		   if(ujra[1]==8||ujra[1]==1)
		     {
			   //alert('damka');
			    //alert(document.getElementById('img'+ujra[1]+''+ujra[2]).id);
			   document.getElementById('img'+ujra[1]+''+ujra[2]).id='img'+ujra[1]+''+ujra[2]+'d';
			   //alert(document.getElementById('img'+ujra[1]+''+ujra[2]+'d').id);
			   //damkashi('img'+ujra[1]+''+ujra[2]);
			   //alert('img'+ujra[1]+''+ujra[2]);
			 }
		   return true;
		   
	    }
     else
	   return false;
 }
 function dalageba()
   {
     for(i=1;i<=3;i++)
	   { 
	    for(j=1;j<=4;j++)
	       {
		   if(i%2==1)
		     {k=2*j-1;
			 k1=2*j;}
		   else 
			  {k=2*j;
			  k1=2*j-1;}
		   document.getElementById('c'+i+''+k).innerHTML='<img id=img'+i+''+k+' width=90 height=95  src="images/lurji.png"/>';
		   document.getElementById('c'+(i+5)+''+k1).innerHTML='<img id=img'+(i+5)+''+k1+' width=80 height=85  src="images/mwvane.png"/>';         
		   new Ext.dd.DragSource(document.getElementById('img'+i+''+k));
	       new Ext.dd.DragSource(document.getElementById('img'+(i+5)+''+k1));
	        
		   }
	   }
new Ext.dd.DropTarget(document.getElementById('c11'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c11'))
  return true;
 else
  return false;
}}); 
new Ext.dd.DropTarget(document.getElementById('c13'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c13'))
  return true;
 else
  return false;
}}); 
new Ext.dd.DropTarget(document.getElementById('c15'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c15'))
  return true;
 else
  return false;
}}); 
new Ext.dd.DropTarget(document.getElementById('c17'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c17'))
  return true;
 else
  return false;
}}); 

new Ext.dd.DropTarget(document.getElementById('c22'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c22'))
  return true;
 else
  return false;
}}); 
new Ext.dd.DropTarget(document.getElementById('c24'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c24'))
  return true;
 else
  return false;
}}); 
new Ext.dd.DropTarget(document.getElementById('c26'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c26'))
  return true;
 else
  return false;
}}); 
new Ext.dd.DropTarget(document.getElementById('c28'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c28'))
  return true;
 else
  return false;
}}); 
new Ext.dd.DropTarget(document.getElementById('c31'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c31'))
  return true;
 else
  return false;
}});
new Ext.dd.DropTarget(document.getElementById('c33'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c33'))
  return true;
 else
  return false;
}}); 
new Ext.dd.DropTarget(document.getElementById('c35'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c35'))
  return true;
 else
  return false;
}}); 
new Ext.dd.DropTarget(document.getElementById('c37'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c37'))
  return true;
 else
  return false;
}}); 
new Ext.dd.DropTarget(document.getElementById('c62'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c62'))
  return true;
 else
  return false;
}}); 
new Ext.dd.DropTarget(document.getElementById('c64'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c64'))
  return true;
 else
  return false;
}}); 
new Ext.dd.DropTarget(document.getElementById('c66'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c66'))
  return true;
 else
  return false;
}}); 
new Ext.dd.DropTarget(document.getElementById('c68'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c68'))
  return true;
 else
  return false;
}}); 
new Ext.dd.DropTarget(document.getElementById('c71'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c71'))
  return true;
 else
  return false;
}}); 
new Ext.dd.DropTarget(document.getElementById('c73'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c73'))
  return true;
 else
  return false;
}}); 
new Ext.dd.DropTarget(document.getElementById('c75'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c75'))
  return true;
 else
  return false;
}}); 
new Ext.dd.DropTarget(document.getElementById('c77'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c77'))
  return true;
 else
  return false;
}}); 
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
	  new Ext.dd.DropTarget(document.getElementById('c42'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c42'))
  return true;
 else
  return false;
}}); 
	  new Ext.dd.DropTarget(document.getElementById('c44'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c44'))
  return true;
 else
  return false;
}}); 
	  new Ext.dd.DropTarget(document.getElementById('c46'),{notifyDrop:function(dd, e, data){
 if(rmvkoch(dd.id,'c46'))
  return true;
 else
  return false;
}}); 
	  new Ext.dd.DropTarget(document.getElementById('c48'),{notifyDrop:function(dd, e, data){
 if(rmvkoch(dd.id,'c48'))
  return true;
 else
  return false;
}}); 
	  new Ext.dd.DropTarget(document.getElementById('c51'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c51'))
  return true;
 else
  return false;
}}); 
	  new Ext.dd.DropTarget(document.getElementById('c53'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c53'))
  return true;
 else
  return false;
}}); 
	  new Ext.dd.DropTarget(document.getElementById('c55'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c55'))
  return true;
 else
  return false;
}}); 
	  new Ext.dd.DropTarget(document.getElementById('c57'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c57'))
  return true;
 else
  return false;
}}); 
new Ext.dd.DropTarget(document.getElementById('c62'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c62'))
  return true;
 else
  return false;
}});
new Ext.dd.DropTarget(document.getElementById('c64'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c64'))
  return true;
 else
  return false;
}});
new Ext.dd.DropTarget(document.getElementById('c66'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c66'))
  return true;
 else
  return false;
}});
new Ext.dd.DropTarget(document.getElementById('c68'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c68'))
  return true;
 else
  return false;
}});
new Ext.dd.DropTarget(document.getElementById('c71'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c71'))
  return true;
 else
  return false;
}});
new Ext.dd.DropTarget(document.getElementById('c73'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c73'))
  return true;
 else
  return false;
}});
new Ext.dd.DropTarget(document.getElementById('c75'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c75'))
  return true;
 else
  return false;
}});
new Ext.dd.DropTarget(document.getElementById('c77'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c77'))
  return true;
 else
  return false;
}});
new Ext.dd.DropTarget(document.getElementById('c82'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c82'))
  return true;
 else
  return false;
}});
new Ext.dd.DropTarget(document.getElementById('c84'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c84'))
  return true;
 else
  return false;
}});
new Ext.dd.DropTarget(document.getElementById('c86'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c86'))
  return true;
 else
  return false;
}});
new Ext.dd.DropTarget(document.getElementById('c88'),{notifyDrop:function(dd, e, data){
if(rmvkoch(dd.id,'c88'))
  return true;
 else
  return false;
}});
    }
 function setDapa()
	{
	  var dapa='<table cellpadding="0" cellspacing="0" width="720" height="720">';
	  var k=0;
	  var k1=0;
	  for(i=1;i<=4;i++)
	   { 
	    k=2*i-1;
	   	dapa+='<tr><td class="shav" id="c'+k+'1"></td><td class="tetr" id="c'+k+'2"></td><td class="shav" id="c'+k+'3"></td><td class="tetr" id="c'+k+'4"></td><td class="shav"id="c'+k+'5"></td><td class="tetr" id="c'+k+'6"></td><td class="shav" id="c'+k+'7"></td><td class="tetr" id="c'+k+'8"></td></tr>';
		dapa+='<tr><td class="tetr" id="c'+(k+1)+'1"></td><td class="shav" id="c'+(k+1)+'2"></td><td class="tetr" id="c'+(k+1)+'3"></td><td class="shav" id="c'+(k+1)+'4"></td><td class="tetr" id="c'+(k+1)+'5"></td><td class="shav" id="c'+(k+1)+'6"></td><td class="tetr" id="c'+(k+1)+'7"></td><td class="shav" id="c'+(k+1)+'8"></td></tr>';
		}
	dapa+='</table>';
	var wini=Ext.getCmp('damlwin');
	wini.body.update(dapa);
  }
function showDamka(){
	var win=new Ext.Window({
	   title	: 'Damk',
	   layout	: 'fit',
	   id		: 'damlwin',
	   width	: 735,
	   height	: 767,
	   x		: 315.75,
	   listeners	: {
				close : function(){
					if(Ext.getCmp('damlwin1')) Ext.getCmp('damlwin1').close();
					if(Ext.getCmp('damlwin2')) Ext.getCmp('damlwin2').close();
				}
	   },
	   html:''
	}).show();
	setDapa();
	dalageba();
	var win1=new Ext.Window({
		layout:'fit',
		id:'damlwin1',
		width:100,
		height:80,
		x:140,
		y:0,
		html:'<font size=20 color="blue">0</font><font size=20 color="#8EA8CA">:</font><font size=20 color="green">0</font>'
	}).show();
	var win2=new Ext.Window({
	   layout:'fit',
	   id:'damlwin2',
	   width:140,
	   height:80,
	   x:0,
	   y:0,
	   html:'<font size=6 color="#8EA8CA">00:00:00</font>'
	}).show();
	setTimeout("timeCout()",1000);
}