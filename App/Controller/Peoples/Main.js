Ext.define('Ext.controller.peoples.Main', {
    extend: 'Ext.app.Controller',

    routes : {
        'peoples' : 'onPeoplesPanel'
    },
 
    views: ['App.View.Peoples.MainPanel'
    ],
    stores: [],
    models: [],

    init: function() {
        this.control({
           
        });
    },



});