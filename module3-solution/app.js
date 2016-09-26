(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.directive('foundItems', FoundItems)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.service('MenuSearchService', MenuSearchService);

  function FoundItems(){
    var ddo = {
      templateUrl: 'MenuItemList.html',
      scope: {
        items: '<',
        notFound: '=',
        onRemove: '&'
      },
      controller: FoundItemsController,
      controllerAs: 'foundItems',
      bindToController: true,
      transclude: true
    };

    return ddo;
  }

  function FoundItemsController(){
    var foundItems = this;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var vm = this;
    vm.found = [];
    vm.searchTerm = '';
    vm.loading = false;

    var isBlank = function(){return vm.searchTerm.trim() == ''};

    vm.narrowIt = function(){
      vm.loading = true;
      if (isBlank()) {
        vm.notFound = true;
        vm.found = [];
        vm.loading = false;
        return
      }

      MenuSearchService
      .getMatchedMenuItems(vm.searchTerm)
      .then(function(result){
        vm.found = result;
        vm.loading = false;
        vm.notFound = vm.found.length < 1
      });
    }

    vm.removeItem = function(itemIndex){
      vm.found.splice(itemIndex, 1);
    }; 
  }
  
  MenuSearchService.$inject = ['ApiBasePath', '$http']
  function MenuSearchService(ApiBasePath, $http){

  var service = this;

    service.getMatchedMenuItems = function (searchTerm){

	return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
		}).then(function (response) {
        var menuItems = response.data.menu_items;

        // process result and only keep items that match
        var foundItems = [];
        for(var index = 0; index < menuItems.length; index++){
          if(menuItems[index].description.includes(searchTerm)){
            foundItems.push(menuItems[index]);
          }
        }
        // return processed items
        return foundItems;
      });
    };
  }

})();
