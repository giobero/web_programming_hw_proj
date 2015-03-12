	Ext.ns('Ext.GiorgiBeridze');
	Ext.onReady(function() {
		Ext.QuickTips.init();
		var viewport = new Ext.Viewport({
			layout:'border',
			items:[{
				region	: 'center',
				xtype: 'grouptabpanel',
				tabWidth: 200,
				activeGroup: 0,
				items: [{
							mainItem	: 0,
							expanded	: true,
							items: [{
								title: 'About Me',
								tabTip: 'About Me'
							},{
								title	: 'Personal info',
								tabTip	: 'Personal info',
								iconCls	: 'icon-user',
								layout	: 'fit',
								bodyStyle	: 'padding-left: 15px; padding-top:15px;',
								defaults	: {border:false},
								listeners	: {
											activate: function(){
												if (!document.getElementById('myImgId').isDone){
													new Ext.Resizable('myImgId', {
														wrap:true,
														pinned:true,
														minWidth:50,
														minHeight: 50,
														preserveRatio: true
													});
													document.getElementById('myImgId').isDone=true;
												}
											}
								},
								items	: [{
											layout	: 'column',
											defaults	: {border : false},
											items	: [{
														//columnWidth		: 0.5,
														html:	'<img id="myImgId" height="250" width="200" src="img\\myPic.jpg">'
													},{
														//columnWidth		: 0.5,
														layout			: 'form',
														defaults		: {
																			border : false,
																			width	: 170
														},
														labelWidth		: 100,
														labelAlign		: 'right',
														items			: [{
																			xtype		: 'textfield',
																			fieldLabel	: 'Name',
																			readOnly	: true,
																			value		: 'Giorgi'
																		},{
																			xtype		: 'textfield',
																			fieldLabel	: 'Surname',
																			readOnly	: true,
																			value		: 'Beridze'
																		},{
																			xtype		: 'textfield',
																			fieldLabel	: 'DOB',
																			readOnly	: true,
																			value		: '14.11.1989'
																		},{
																			xtype		: 'textfield',
																			fieldLabel	: 'Address',
																			readOnly	: true,
																			value		: 'Agmashenebeli ave. 52/54'
																		},{
																			xtype		: 'textfield',
																			fieldLabel	: 'City',
																			readOnly	: true,
																			value		: 'Tbilisi'
																		},{
																			xtype		: 'textfield',
																			fieldLabel	: 'Country',
																			readOnly	: true,
																			value		: 'Georgia'
																		},{
																			xtype		: 'textfield',
																			fieldLabel	: 'e-mail',
																			readOnly	: true,
																			value		: 'gio.beri@gmail.com'
																		},{
																			xtype		: 'textfield',
																			fieldLabel	: 'Phone',
																			readOnly	: true,
																			value		: '898-35-65-09'
																		},{
																			xtype		: 'textfield',
																			fieldLabel	: 'Occupation',
																			readOnly	: true,
																			value		: 'student'
														}]
											}]
								}]
							}]
						},{
							mainItem	: 0,
							expanded	: true,
							items: [{
								title: 'JavaScript Demos',
								tabTip: 'JavaScript Demos'
							},{
								title	: 'Color Chooser',
								tabTip	: 'Color Chooser',
								iconCls	: 'icon-color-wheel',
								items	: [
											getColorChooser()
								]
							}]
						},{
							mainItem	: 0,
							expanded	: true,
							items: [{
								title	: 'Games',
								tabTip	: 'Games'
							},{
								title	: 'Damka',
								tabTip	: 'Damka',
								id		: 'damkaPlace',
								iconCls	: 'icon-bricks',
								listeners	: {
												activate : showDamka
								}
							}]
						},{
							mainItem	: 0,
							expanded	: true,
							items: [{
								title: 'Guest\'s Place',
								tabTip: 'Guest\'s Place'
							},{
								title	: 'Leave your comments',
								tabTip	: 'Leave your comments',
								layout	: 'fit',
								iconCls	: 'icon-comment',
								id		: 'commentsGrid'
							}]
				}]
			},{
				region	: 'north',
				html	: '<div id="titleId" align="center" style="font-size:24px;  color:#5F65BB;">J</div>'
			}]
		});
		startTitle();
	});