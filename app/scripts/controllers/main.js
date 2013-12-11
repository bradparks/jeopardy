'use strict';

angular.module('webappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

  angular.module('webappApp')
  .controller('QuestionSelectCtrl', function QuestionSelectCtrl($scope, Question) {
  	$scope.datas = Question.query();
  });
