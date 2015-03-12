	/**
	* To get hexadecimal value of
	* decimal number in range [0,255]
	* @param {number} x			The decimal number.
	* @return {string}			Hexadecimal notation of parameter.
	*/
	function getHex(x){
		var hd = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
		return hd[Math.floor(x/16)]+hd[x%16];
	}
	
	/**
	* Returns object that has child
	* slider and label.
	*/
	function getSlider(label,id){
		return {
					layout		: 'column',
					width		: 450,
					defaults	: {border:false},
					items	: [{
									layout		: 'form',
									columnWidth	: 0.94,
									items		: [
													new Ext.Slider({
														id			: id,
														minValue	: 0,
														maxValue	: 255,
														width		: 350,
														isFormField	: true,
														fieldLabel	: label,
														listeners	: {
																		change	: refreshColor
														}
													})
									]
								},{
									columnWidth	: 0.06,
									xtype	: 'label',
									id		: label+'ValId',
									text	: '00'
					}]
		};
	}
	
	/**
	* Refreshes color by sliders' value.
	* Sliders' handler funciton.
	*/
	function refreshColor(slider,newVal){
		var redVal = Ext.getCmp('rdId').getValue();
		var greenVal = Ext.getCmp('grId').getValue();
		var blueVal = Ext.getCmp('blId').getValue();
		var colorToSet = '#' + getHex(redVal) + getHex(greenVal) + getHex(blueVal);
		//Ext.getBody().dom.style.background=colorToSet;
		document.getElementById('demoColorId').style.background=colorToSet;
		Ext.getCmp('hexReprezId').setValue(colorToSet);
		Ext.getCmp('rgbReprezId').setValue('rgb(' + redVal + ',' + greenVal + ',' + blueVal + ')');
		Ext.getCmp('redValId').setText(redVal);
		Ext.getCmp('greenValId').setText(greenVal);
		Ext.getCmp('blueValId').setText(blueVal);
	}
	
	/**
	* Returns color chosser
	* tool.
	*/
	function getColorChooser(){
		var pan = new Ext.Panel({
			height		: 190,
			width		: 550,
			defaults	: {border : false},
			//renderTo	: 'colorChooserPlaceId',
			items		: [
								new Ext.FormPanel({
									cls			: 'frame-padding',
									defaults	: {border : false},
									labelWidth	: 40,
									items		: [
													getSlider('red','rdId')
												,
													getSlider('green','grId')
												,
													getSlider('blue','blId')
												,
												{
													layout		: 'column',
													defaults	: {border:false},
													items	:[{
																layout		: 'form',
																columnWidth	: 0.35,
																labelWidth	: 40,
																defaults	: {border:false},
																items	: [{
																			xtype		: 'textfield',
																			id			: 'hexReprezId',
																			readOnly	: true,
																			fieldLabel	: 'Hex'
																		},{
																			xtype		: 'textfield',
																			id			: 'rgbReprezId',
																			readOnly	: true,
																			fieldLabel	: 'RGB'
																}]
															},{
																columnWidth	: 0.65,
																html		: '<table height=45 width="100%" id = "demoColorId"><tr>&nbsp;<td></td></tr></table>'
													}]
									}]
								})
			]
		});
		//refreshColor();
		return pan;
	};
	
	function popUpTime(){
		if(!Ext.getCmp('clockWinId')){
			new Ext.Window({
					height	: 50,
					width	: 70,
					id		: 'clockWinId',
					listeners	: {
								close 	: stopClock
					},
					html	: new Date().format('g:i:s A')
			}).show();
			startClock();
		}
	}

	var updateClock = function(){
		if(Ext.getCmp('clockWinId'))
		Ext.getCmp('clockWinId').body.update(new Date().format('g:i:s A'));
	}
	
	var clockTask = {
		run: updateClock,
		interval: 1000 
	}
	
	var taskRuner = new Ext.util.TaskRunner();
		
	function startClock(){
		taskRuner.start(clockTask);
	}
	
	function stopClock(){
		taskRuner.stopAll();
	}
	
	var taskRuner2 = new Ext.util.TaskRunner();
		
	function startTitle(){
		taskRuner2.start(titleTask);
	}
	

	function refreshTitle(){ 
		document.getElementById('titleId').innerHTML="J"; 
		setTimeout("startTitle()",500);
	}
	
	var updateTitle = function(){
		var tit = "JavaScript Demo Site By G.Beridze ...";
		var cur = document.getElementById('titleId').innerHTML;
		var l = cur.length;
		if(l==tit.length){
			taskRuner2.stopAll();
			setTimeout("refreshTitle()",1500);
		}
		else
			document.getElementById('titleId').innerHTML = cur + tit.charAt(l);
	}
	
	var titleTask = {
		run: updateTitle,
		interval: 20 
	}
	
	

	
	