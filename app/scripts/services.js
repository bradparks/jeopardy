'use strict';

/* Services */

var jeopardyServices = angular.module('webappApp');

jeopardyServices.factory('Question', ['$resource',
  function($resource){
    return $resource('/questions', {});
  }]);
