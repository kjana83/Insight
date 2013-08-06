define(function (require) {

    var router = require('durandal/plugins/router'),
        system = require('durandal/system'),
        home = require('viewmodels/home'),
        InitApp = require('viewmodels/InitApp');
    var valid = {
        isInitAppValid: function () {
            return (InitApp.questions.errors().length>0)?'Invalid':'Valid';
        }
    };

    return {
        router: router,
        valid: valid,
        activate: function () {
            system.log("Shell has been activated");
            return router.activate("home");
        }
    };
}); 


