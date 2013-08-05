define(function (require) {

    var router = require('durandal/plugins/router'),
        system = require('durandal/system'),
        home = require('viewmodels/home');

    return {
        router:router,
        activate: function () {
            system.log("Shell has been activated");
            return router.activate("home");
        }
    };
}); 


