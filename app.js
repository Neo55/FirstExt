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
                    layout: 'border',
                    items: [
                        {
                           // xtype: 'panel',
                            width: 400,
                            height: 300,
                            title:'auth',
                          //  layout: 'border',
                            region:'center'


                    }]
                },]
        });
    }
});