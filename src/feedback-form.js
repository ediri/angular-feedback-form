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
                    buttonText: '@',
                    modalId:'@'
                },
                link: function (scope, element, attrs) {

                },
                template: "<button type=\"button\" class=\"btn btn-primary feedback\" data-toggle=\"modal\" data-target=\"#{{modalId}}\">{{buttonText}}</button>"
            }
        }])

        .directive('feedbackmodal', ['$window', function ($window) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    id: '@'
                },
                link: function (scope, element, attrs) {

                },
                template: "<div id=\"{{id}}\" class=\"modal fade\" role=\"dialog\"> \
                            <div class=\"modal-dialog\"> \
                             <div class=\"modal-content\"> \
                              <div class=\"modal-header\"> \
                               <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button> \
                               <h4 class=\"modal-title\">Modal Header</h4> \
                              </div> \
                              <div class=\"modal-body\"> \
                               <p>Some text in the modal.</p> \
                              </div> \
                              <div class=\"modal-footer\"> \
                               <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button> \
                              </div> \
                             </div> \
                            </div> \
                           </div>"
            }
        }]);
})();