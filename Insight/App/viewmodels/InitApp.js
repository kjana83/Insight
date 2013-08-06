/// <reference path="../../Scripts/knockout.validation.debug.js" />
/// <reference path="../../Scripts/knockout-2.2.1.debug.js" />
define(function (require) {
    var http = require('durandal/http'),
       system = require('durandal/system'),
       app = require('durandal/app');

    var questions =
        {
            QuestionCode1: 'QTS01',
            Answer1: ko.observable().extend({ required: true }),
            QuestionCode2: 'QTS02',
            Answer2: ko.observable().extend({ required: true })

        }
        
    questions.errors = ko.validation.group(questions);

    return {
        questions: questions
    }
});
