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
 * (c) 2016 ediri
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
                    modalId: '@'
                },
                link: function (scope, element, attrs) {

                },
                template: "<button type=\"button\" class=\"btn btn-primary feedback\" data-toggle=\"modal\" data-target=\"#{{modalId}}\">{{buttonText}}</button>"
            }
        }])

        .directive('feedbackmodal', ['$window', '$http', '$timeout', function ($window, $http, $timeout) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    modalId: '@',
                    modalHeaderTitle: '@',
                    modalInfoText: '@',
                    postUrl: '@',
                    user: '@'

                },
                controller: function ($scope) {
                    $scope.feedback = {user: $scope.user};
                    $scope.submitForm = function (formName) {
                        var form = $scope[formName];
                        if (form.$valid) {
                            angular.element('#submitFeedbackButton').prop('disabled', true);
                            $http.post($scope.postUrl, $scope.feedback).success(function (data, status, headers, config) {
                                $scope.succesMessage = "Thanks for providing your feedback! This window will automatically close in 5 seconds.";
                                $timeout(function () {
                                    angular.element('#' + $scope.modalId).modal('hide')
                                }, 5000);
                            }).error(function (data, status, headers, config) {
                                $scope.error = data;
                                angular.element('#submitFeedbackButton').prop('disabled', false);
                            });
                        }
                    };
                },
                controllerAs: 'ctrl',
                link: function (scope, element, attrs) {
                    $(element).on('show.bs.modal', function (e) {
                        scope.feedback = {user: scope.user};
                        scope.succesMessage = null;
                        scope.feedbackForm.$setPristine();
                        scope.$apply();
                        angular.element('#user').trigger('focus');

                    })
                    $(element).on('shown.bs.modal', function (e) {
                        angular.element('#user').trigger('focus');

                    })
                },
                template: "<div id=\"{{modalId}}\" class=\"modal fade\" role=\"dialog\"> \
                            <div class=\"modal-dialog\"> \
                             <div class=\"modal-content\"> \
                               <div class=\"alert alert-success alert-float\" role=\"alert\" ng-show=\"succesMessage\"> \
                                <p>{{succesMessage}}</p> \
                               </div> \
                              <div class=\"modal-header\"> \
                               <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button> \
                               <h3 class=\"modal-title\">{{modalHeaderTitle}}</h3> \
                              </div> \
                              <form class=\"form-horizontal\" name=\"feedbackForm\" ng-submit=\"submitForm('feedbackForm')\" novalidate> \
                              <div class=\"modal-body\"> \
                               <div class=\"alert alert-info\" role=\"alert\"> \
                                <p>{{modalInfoText}}</p> \
                               </div> \
                               <div class=\"alert alert-danger\" role=\"alert\" ng-show=\"error\"> \
                                <p>{{error}}</p> \
                               </div> \
                                  <div class=\"form-group\" ng-class=\"{ 'has-error' : feedbackForm.user.$invalid && !feedbackForm.user.$pristine }\"> \
                                    <label class=\"control-label col-sm-3\" for=\"user\">Name</label> \
                                    <div class=\"col-sm-9\"> \
                                     <input type=\"text\" class=\"form-control\" name=\"user\" ng-model=\"feedback.user\" id=\"user\" required> \
                                    </div> \
                                  </div> \
                                  <div class=\"form-group\" ng-class=\"{ 'has-error' : feedbackForm.description.$invalid && !feedbackForm.description.$pristine }\"> \
                                    <label class=\"control-label col-sm-3\" for=\"description\">Beschreibung</label> \
                                    <div class=\"col-sm-9\"> \
                                     <textarea class=\"form-control\" name=\"description\" ng-model=\"feedback.description\"  id=\"description\" rows=\"12\" wrap=\"virtual\" required> </textarea> \
                                    </div>\
                                  </div> \
                              </div> \
                              <div class=\"modal-footer\"> \
                               <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button> \
                               <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"feedbackForm.$invalid\" id=\"submitFeedbackButton\">OK</button> \
                              </div> \
                             </div> \
                            </div> \
                           </div>"
            }
        }]);
})();