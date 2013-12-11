'use strict';

/* Services */

var jeopardyServices = angular.module('webappApp');

jeopardyServices.factory('Question', ['$resource',
  function($resource){
  	console.log('service fired');
    return $resource('/app/scripts/dummyData.json', {});
  }]);
