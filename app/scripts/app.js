'use strict';

angular.module('webappApp', [
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngMockE2E'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  //Nuke this when the backend is finished.
  //You can't get mad at me for this! This is what we agreed on!!!
  .run(function ($httpBackend) {
	var questions = [{
					"category": "LAKES & RIVERS",
					"questions": [{
						"ID": 1,
						"cash": 100,
						"clue": "River mentioned most often in the Bible",
						"answer": "The Jordan"
					},
					{
						"ID": 2,
						"cash": 200,
						"clue": "Scottish word for lake",
						"answer": "loch"
					},
					{
						"ID": 3,
						"cash": 300,
						"clue": "River in this famous song:",
						"answer": "the Volga River"
					},
					{
						"ID": 4,
						"cash": 400,
						"clue": "American river only 33 miles shorter than the Mississippi",
						"answer": "the Missouri"
					},
					{
						"ID": 5,
						"cash": 500,
						"clue": "Worlds largest lake, nearly 5 times as big as Superior",
						"answer": "the Caspian Sea"
					}]
				},
				{
					"category": "INVENTIONS",
					"questions": [{
						"ID": 6,
						"cash": 100,
						"clue": "River mentioned most often in the Bible",
						"answer": "The Jordan"
					},
					{
						"ID": 7,
						"cash": 200,
						"clue": "Scottish word for lake",
						"answer": "loch"
					},
					{
						"ID": 8,
						"cash": 300,
						"clue": "River in this famous song:",
						"answer": "the Volga River"
					},
					{
						"ID": 9,
						"cash": 400,
						"clue": "American river only 33 miles shorter than the Mississippi",
						"answer": "the Missouri"
					},
					{
						"ID": 10,
						"cash": 500,
						"clue": "Worlds largest lake, nearly 5 times as big as Superior",
						"answer": "the Caspian Sea"
					}]
				},
				{
					"category": "ANIMALS",
					"questions": [{
						"ID": 11,
						"cash": 100,
						"clue": "River mentioned most often in the Bible",
						"answer": "The Jordan"
					},
					{
						"ID": 12,
						"cash": 200,
						"clue": "Scottish word for lake",
						"answer": "loch"
					},
					{
						"ID": 13,
						"cash": 300,
						"clue": "River in this famous song:",
						"answer": "the Volga River"
					},
					{
						"ID": 14,
						"cash": 400,
						"clue": "American river only 33 miles shorter than the Mississippi",
						"answer": "the Missouri"
					},
					{
						"ID": 15,
						"cash": 500,
						"clue": "Worlds largest lake, nearly 5 times as big as Superior",
						"answer": "the Caspian Sea"
					}]
				},
				{
					"category": "FOREIGN CUISINE",
					"questions": [{
						"ID": 16,
						"cash": 100,
						"clue": "River mentioned most often in the Bible",
						"answer": "The Jordan"
					},
					{
						"ID": 17,
						"cash": 200,
						"clue": "Scottish word for lake",
						"answer": "loch"
					},
					{
						"ID": 18,
						"cash": 300,
						"clue": "River in this famous song:",
						"answer": "the Volga River"
					},
					{
						"ID": 19,
						"cash": 400,
						"clue": "American river only 33 miles shorter than the Mississippi",
						"answer": "the Missouri"
					},
					{
						"ID": 20,
						"cash": 500,
						"clue": "Worlds largest lake, nearly 5 times as big as Superior",
						"answer": "the Caspian Sea"
					}]
				},
				{
					"category": "ACTORS & ROLES",
					"questions": [{
						"ID": 21,
						"cash": 100,
						"clue": "River mentioned most often in the Bible",
						"answer": "The Jordan"
					},
					{
						"ID": 22,
						"cash": 200,
						"clue": "Scottish word for lake",
						"answer": "loch"
					},
					{
						"ID": 23,
						"cash": 300,
						"clue": "River in this famous song:",
						"answer": "the Volga River"
					},
					{
						"ID": 24,
						"cash": 400,
						"clue": "American river only 33 miles shorter than the Mississippi",
						"answer": "the Missouri"
					},
					{
						"ID": 25,
						"cash": 500,
						"clue": "Worlds largest lake, nearly 5 times as big as Superior",
						"answer": "the Caspian Sea"
					}]
				},
				{
					"category": "NUMBER PLEASE",
					"questions": [{
						"ID": 26,
						"cash": 100,
						"clue": "River mentioned most often in the Bible",
						"answer": "The Jordan"
					},
					{
						"ID": 27,
						"cash": 200,
						"clue": "Scottish word for lake",
						"answer": "loch"
					},
					{
						"ID": 28,
						"cash": 300,
						"clue": "River in this famous song:",
						"answer": "the Volga River"
					},
					{
						"ID": 29,
						"cash": 400,
						"clue": "American river only 33 miles shorter than the Mississippi",
						"answer": "the Missouri"
					},
					{
						"ID": 30,
						"cash": 500,
						"clue": "Worlds largest lake, nearly 5 times as big as Superior",
						"answer": "the Caspian Sea"
					}]
				}];

	$httpBackend.whenGET('/questions').respond(questions);
});
