// APP MODULES ===============================================
// congigure the modules to include on our app
var app = angular.module('pbCanvas', [
  'ngRoute',
  'evgenyneu.markdown-preview'
]);



// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller

app.config(function($routeProvider) {

    $routeProvider
      // home page (canvas page)
      .when('/', {
        templateUrl: 'angular/templates/canvas.html',
        //controller: 'mainController'
      })
      .when('/canvas', {
        redirectTo: '/'
      })
      // contact page
      .when('/contact', {
          templateUrl: 'angular/templates/contact.html',
          //controller: 'contactController'
      })
      // about page
      .when('/about', {
          templateUrl: 'angular/templates/about.html',
          //controller: 'aboutController'
      })
      //help
      .when('/help', {
          templateUrl: 'angular/templates/help.html',
          //controller: 'aboutController'
      })
      .when('/view', {
          templateUrl: 'angular/templates/view.html',
          //controller: 'aboutController'
      })
      .when('/changelog', {
          templateUrl: 'angular/templates/changelog.html',
          //controller: 'aboutController'
      })
      //404
      .when('/404', {
          templateUrl: 'angular/templates/404.html',
          //controller: 'aboutController'
      })
      .otherwise({
        redirectTo: '404'
      });
});
  
/*
// CONTROLLERS ============================================
// home page controller
app.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});
*/