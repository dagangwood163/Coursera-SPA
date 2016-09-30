(function () {
'use strict';

angular.module('menuapp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('categoryList', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/maincategorylist.template.html',
    controller: 'CategoryListController as categorylistctrl',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories()
			.then(function (result) {				  
                  return result;
                });
      }]
    }
  })

  .state('itemList', {
    url: '/items/{categoryid}',
    templateUrl: 'src/menuapp/templates/mainitemlist.template.html',
    controller: 'ItemListController as itemlistctrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService',            
			function ($stateParams, MenuDataService) {
			  //console.log($stateParams.categoryid);			
              return MenuDataService.getMatchedMenuItems($stateParams.categoryid)
			  .then(function (result) {
                  return result;
              });
            }
			
			/*
			function ($stateParams, MenuDataService) { 
              return MenuDataService.getAllCategories()
			  .then(function(categorylist) {						
				var categoryshortname = categorylist[$stateParams.categoryid].short_name;
				console.log(categoryshortname);
				return MenuDataService.getMatchedMenuItems(categoryshortname);
			  })
			  .then(function (result) {
                  return result;
              });
            }
			*/
			
			]
    }
  });
}

})();
