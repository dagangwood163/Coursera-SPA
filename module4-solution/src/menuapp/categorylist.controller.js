(function () {
'use strict';

angular.module('menuapp')
.controller('CategoryListController', CategoryListController);

CategoryListController.$inject = ['items']
function CategoryListController(items) {
  var mainCategoryList = this;
  mainCategoryList.items = items;
}

})();
