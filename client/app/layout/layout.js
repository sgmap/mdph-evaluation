'use strict';

angular.module('evaluationApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('layout', {
        url: '',
        resolve: {
          currentUser: function(Auth) {
            return Auth.getCurrentUser().$promise;
          }
        },
        templateUrl: 'app/layout/layout.html',
        controller: 'LayoutCtrl',
        controllerAs: 'layoutCtrl',
        abstract: true,
        data: {
          title: 'Outil de soutien'
        }
      });
  });
