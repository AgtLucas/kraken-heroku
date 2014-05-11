'use strict';



requirejs.config({
    paths: {}
});


require([/* Dependencies */], function () {

    var app = {
        initialize: function () {
            console.log('Here we go!');
        }
    };

    app.initialize();

});

