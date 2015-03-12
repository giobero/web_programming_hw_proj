	
	Ext.onReady(function(){
		
		var gStore = new Ext.data.ArrayStore({
			fields	: ["guest","date","time","comment"]
		});
		
		var grid = new Ext.grid.GridPanel({
			id		: 'commGridId',
			tbar	: [{
						xtype	: 'button',
						text	: 'leave comment',
						iconCls	: 'icon-comment',
						handler	: showCommentForm
			}],
			store		: gStore,
				columns: [
				new Ext.grid.RowNumberer(),
				{header: 'Guest name', dataIndex: 'guest'},
				{header: 'Date',  dataIndex: 'date'},
				{header: 'Time',  dataIndex: 'time'},
				{header: 'Comment', dataIndex: 'comment'}
				],
			viewConfig: {
				forceFit: true,
			},
			sm: new Ext.grid.RowSelectionModel({singleSelect:true}),
			title: 'Guest Comments Grid'
		});
		
		Ext.getCmp('commentsGrid').add(grid);
	});
	
	function showCommentForm(){
		var win1=new Ext.Window({
			title	: 'Comment Window',
			layout	:'fit',
			id		:'commentForm',
			width	:400,
			height	:200,
			items	: [
						new Ext.form.FormPanel({
							buttonAlign	: 'center',
							border		: false,
							defaults	: {width : 200},
							bodyStyle	: 'padding-left: 15px; padding-top:15px;',
							items	: [{
										xtype		: 'textarea',
										fieldLabel	: 'comment',
										height		: 100,
										allowBlank	: false,
										id			: 'usrComment',
										enableKeyEvents	: true,
										listeners	: {
												specialkey	: addComment
										}
									},{
										xtype		: 'textfield',
										fieldLabel	: 'your name',
										allowBlank	: false,
										id			: 'usrGst',
										enableKeyEvents	: true,
										listeners	: {
												specialkey	: addComment
										}
									}]
						})
			]
		}).show();
	}
	
	function addComment(field,event){
		if(event.button!=12) return;
		var usrNm = Ext.getCmp('usrGst').getValue();
		var usrComm  = Ext.getCmp('usrComment').getValue();
		if(usrNm=='' || usrComm==''){
			Ext.Msg.alert('Warning!','Please fill all fields');
			return;
		}
		 var newRec = new Ext.data.Record({
            guest	: usrNm,
            comment	: usrComm,
			date	: new Date().format('d.m.Y'),
			time	: new Date().format('g:i:s A')
        });
		Ext.getCmp('commGridId').store.add(newRec);
		Ext.getCmp('commentForm').close();
	}
	