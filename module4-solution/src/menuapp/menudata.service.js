(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q', '$http']
function MenuDataService($q, $http) {
 var service = this;

	service.getAllCategories = function ()
	{
		return $http({
		method: "GET",
		url: ("https://davids-restaurant.herokuapp.com/categories.json")
		}).then(function (response) {
			
			var htppdata = response.data;
			
			var allCategories = [];
			
			for(var index = 0; index < htppdata.length; index++){
                allCategories.push(htppdata[index]);
			}
			
			return allCategories;
		});
	}
 
    service.getMatchedMenuItems = function (categoryShortName){

	return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
		}).then(function (response) {			
        var htppdata = response.data.menu_items;

        var menuItems = [];
		
        for(var index = 0; index < htppdata.length; index++){
            menuItems.push(htppdata[index]);
        }
        
        return menuItems;
		
      });
    };
  }
  
})();
