/*! 
 * angular-feedback-form v0.0.1
 * https://github.com/ediri/angular-feedback-form
 * Copyright (c) 2016 ediri
 * License: MIT
 */
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
            replace: true,
            scope: {
                buttonText: '@'
            },
            link: function (scope, element, attrs) {

            },
            template: "<div class=\"btn btn-primary feedback\" >{{buttonText}}</div>"
        }
            ;
    }]);
})();