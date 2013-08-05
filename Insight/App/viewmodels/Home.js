define(function (require) {

    var router = require('durandal/plugins/router'),
        system = require('durandal/system'),
        app = require('durandal/app'),
        composition = require('durandal/composition');

    return {
        activate: function () {
            system.log(router.activeItem());
            system.log("Home has been activated");
        }
    };
});