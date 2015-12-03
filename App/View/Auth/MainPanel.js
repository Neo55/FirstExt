Ext.define('App.view.auth.MainPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainPanelAuth',
    width: 300,
    height: 250,
    title: 'прив',

            items: [
             {
                 xtype: 'textfield',
                 fieldLabel: 'Login'
             },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Password'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnAuthOk',
                                    text: 'Ok',
                                    //handler: function () {
                                    //    var dialog = Ext.create('App.View.Peoples.MainPanel');
                                    //    dialog.show();
                                    //    this.up('panel').close();
                                    //}
                                }
            ]
    
})