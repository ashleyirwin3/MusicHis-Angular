console.log('test')

angular
  .module('musicAngular', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        controller: 'HomeCtrl',
        templateUrl: '/partials/home.html',
       })
      .when('/profile', {
        controller: 'ProfileCtrl',
        templateUrl: '/partials/profile.html'
      })
   })
