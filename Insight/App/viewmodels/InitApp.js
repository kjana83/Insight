/// <reference path="../../Scripts/knockout.validation.debug.js" />
/// <reference path="../../Scripts/knockout-2.2.1.debug.js" />
define(function (require) {
    var http = require('durandal/http'),
       system = require('durandal/system'),
       app = require('durandal/app');

    var questions = {
        Question: "Does the biological research involves any biological materials to animals1?",
        Answer: ko.observable().extend({ required: {Message:'Answer is required'} }),
        QuestionCode: "QEST01"
    };

    questions.errors = ko.validation.group(questions);
    return {
        questions: questions
    }
});
