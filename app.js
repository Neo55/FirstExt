Ext.application({
    name: 'HelloExt',
    launch: function () {

      //  requires



        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'container',
                    width: 500,
                    height: 400,
                    layout: {
                        type: 'center'
                    },
                    
                    items: [
                        {
                            xtype: 'panel',
                            width: 300,
                            height: 250,
                            title: 'Авторизация',
                            defaultMargins:5,
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
                                    text: 'Ok'
                                }
                            ]
                            


                    }]
                },]
        });
    }
});