Ext.define('App.view.auth.MainWin', {
        extend: 'Ext.panel.Panel',
        alias: 'widget.personpanel',

            width: 500,
            height: 360,
            padding: 10,
            layout: 'border',
            items: [
                {
                    xtype: 'carGridView',
                    region: 'center'
                },
                {
                    xtype: 'panel',
                    html: '<div style="font: normal 18px cursive"><center><font size = "10">Каталог автомобилей</font></center></div>',
                    region: 'north',
                    height: 80
                },
                {
                    xtype: 'searchCarView',
                    title: 'Поиск',
                    region: 'west',
                    width: 300,
                    collapsible: true,
                    collapsed: false
                }
            ],
            renderTo: Ext.getBody()
        });