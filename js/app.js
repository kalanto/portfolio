angular.module('app',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
   $stateProvider
   .state('home',{
      url:'/'
   ,  templateUrl:'../views/home.html'
   })
   .state('projects',{
      url:'projects'
   ,  templateUrl:'../views/proj.html'
   })
   .state('about',{
      url:'about'
   ,  templateUrl:'../views/abt.html'
   })
   $urlRouterProvider
   .otherwise('/')
})
