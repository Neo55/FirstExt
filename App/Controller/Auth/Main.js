Ext.define('Ext.controller.auth.Main', {
    extend: 'Ext.app.Controller',

    //routes: {
    //    'peoples': 'onPeoplesPanel'
    //},

    views: ['App.view.auth.MainWin'
    ],
    stores: [],
    models: [],

    init: function () {
        this.control({
            'mainPanelAuth button[text = Ok]': {
                clickAuth: this.onClickAuth
            }
        });
    },

    onClickAuth: function() {
        console.log('sdfsdf')

    }

});