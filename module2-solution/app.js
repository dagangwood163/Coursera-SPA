(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
	
  var ToBuyItemsList = this;
  
  ToBuyItemsList.items = ShoppingListCheckOffService.getToBuyItems();  
 
  ToBuyItemsList.boughtItem = function (itemIndex) {
	ShoppingListCheckOffService.RemoveToBuyItem(itemIndex);
  }
  
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {  
  
  var BoughtItemsList = this;
  
  BoughtItemsList.items = ShoppingListCheckOffService.getBoughtItems();  
}


function ShoppingListCheckOffService() {
  
  var service = this;  
  
  // List of shopping items
  var itemsToBuy = [{ name: "cookies", itemQuantity: 10 }, { name: "fruits", itemQuantity: 20 },  
  { name: "eggs", itemQuantity: 10 },  { name: "breads", itemQuantity: 5 },  
  { name: "water", itemQuantity: 12 },  { name: "cokes", itemQuantity: 9 }];
  
  var itemsBought = [];

  service.RemoveToBuyItem = function (itemIndex) {
	var item = {
      name: itemsToBuy[itemIndex].name,
      itemQuantity: itemsToBuy[itemIndex].itemQuantity
    };
    itemsBought.push(item);  
    itemsToBuy.splice(itemIndex, 1);	
  };
	
  service.getToBuyItems = function () {
	console.log(itemsToBuy);
    return itemsToBuy;
  };
  
  service.getBoughtItems = function () {
    return itemsBought;
  };
}

})();
