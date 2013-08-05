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
            $.getJSON("/api/LabQuestion", { type: routeparams.qtypeid }, function (data) {
                questionList.removeAll();
                $.each(data, function (key, list) {
                    
                    questionList.push(list);
                });
            });
        },
        PostAnswers: function () {
            $.ajax({
                url:'/api/LabQuestion',
                type:'POST',
                contentType:'application/json; charset=utf-8',
                data: ko.toJSON(questionList),
                success: function (status) { console.log(status);}
                });
        }
    };
});