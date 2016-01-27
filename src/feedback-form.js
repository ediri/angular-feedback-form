/*
 * angular-scroll-to-top
 *
 * Angular JS ScrollToTop Button
 *
 * (c) 2015 ediri
 * License: Apache License 2.0
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
            template:"<div id=\"feedback\" >{{buttonText}}</div>"
        }
            ;
    }]);
})();