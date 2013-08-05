require.config({
    paths: {
        "text": "durandal/amd/text"
    }
});

define(function (require) {
    var app = require("durandal/app"),
        viewLocator = require('durandal/viewLocator'),
        router = require("durandal/plugins/router"),
        system = require("durandal/system");

    system.debug(true);
    app.title = "Insight Registration";
    app.start().then(function () {
        viewLocator.useConvention();
        router.useConvention();
        router.mapNav('home');
        router.mapNav('QandA/:qtypeid');
        app.setRoot('viewmodels/shell', 'entrance');
    });
});