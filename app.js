Ext.application(
{
    name: 'Test application',

    requires:
        [
            'App.View.Auth.MainPanel',
            'App.View.Peoples.MainPanel',
            'Ext.controller.auth.Main',
            'Ext.controller.peoples.Main'
        ],

    launch: function () {
        Ext.create('Ext.container.Viewport',
        {
            layout: 'center',
            items:
            [
                {
                     xtype: 'mainPanelAuth'
                }
            ]
        });
    }
});