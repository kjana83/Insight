/// <reference path="../../Scripts/knockout-2.2.1.debug.js" />
define(function (require) {
    var http = require('durandal/http'),
        system = require('durandal/system'),
        app = require('durandal/app'),
        questionList = ko.observableArray();
   
    return {
        questions:questionList,
        activate: function (routeparams) {
            console.log(routeparams.qtypeid);
            system.log('Initial App activated');
            
            http.get("/api/LabQuestion", { type: routeparams.qtypeid }).then(function (data) {
                questionList.removeAll();
                $.each(data, function (key, list) {
                    questionList.push(list);
                });
            });
        },
        PostAnswers: function () {
            console.log(ko.toJSON(questionList));
            http.post('/api/LabQuestion', questionList);
        }
    };
});
 