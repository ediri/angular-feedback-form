/*
 * angular-feedback-form
 *
 * Angular JS Feedback Button with a basic Feedback Form
 *
 * (c) 2015 ediri
 * MIT Licenese
 */

(function () {
    'use strict';

    angular.module('feedbackForm', []).directive('feedbackbutton', ['$window', function ($window) {
        return {
            restrict: 'E',
            scope: {
                buttonText: '@'
            },
            link: function (scope, element, attrs) {

            },
            template: "<div id=\"feedback\" >{{buttonText}}</div>"
        }
            ;
    }]);
})();