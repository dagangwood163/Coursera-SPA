(function () {
'use strict';

angular.module('menuapp')
.controller('ItemListController', ItemListController);

ItemListController.$inject = ['items']
function ItemListController(items) {
  var mainItemListController = this;
  mainItemListController.items = items;
}

})();
