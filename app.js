Ext.application(
{
    name: 'Test application',

    controllers: [
    'auth.Main',
    'peoples.Main'
    ],

    views: [
'auth.MainPanel',
'peoples.MainPanel',
'auth.MainWin'
    ],
    

    launch: function () {
        Ext.create('Ext.container.Viewport',
        {
            layout: 'center',
            autoMaximize : true,
            items:
            [
                {
                     xtype: 'mainPanelAuth'
                }
            ]
        });
    }
});