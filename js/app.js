angular.module('app',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
   $stateProvider
   .state('home',{
      url:'/'
   ,  templateUrl:'../views/home.html'
   })
   .state('projects',{
      url:'/projects'
   ,  templateUrl:'../views/projects.html'
   })
   .state('about',{
      url:'/about'
   ,  templateUrl:'../views/about.html'
   })
   .state('contact',{
      url:'/contact'
   ,  templateUrl:'../views/contact.html'
   })
   $urlRouterProvider
   .otherwise('/')
})
