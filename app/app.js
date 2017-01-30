console.log('test')

var app = angular.module('musicAngular', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')
    $routeProvider
      .when('/home', {
        controller: 'HomeCtrl',
        templateUrl: '/partials/home.html'
      })
      .when('/profile', {
        controller: 'ProfileCtrl',
        templateUrl: '/partials/profile.html'
      })
      .otherwise ({redirectTo: '/' })
   })

app.controller('HomeCtrl', function ($scope) {

})

app.controller('ProfileCtrl', function($scope) {

})
