	
	Ext.onReady(function(){
		if (Ext.getCmp('tabsId')){
			Ext.getCmp('tabsId').add({
				xtype		: 'tabpanel',
				items		: [{
									title	: 'tools',
									height	: 500,
									items	: [{
													xtype		: 'tabpanel',
													tabPosition	: 'bottom',
													items		: [{
																		title	: 'Calculator'
																},{
																		title	: 'See what time is it',
																		listeners	: {
																					activate	: popUpTime
																		}
													}]
									}]
				}]
			});
		}
	});