(function () {
'use strict';

angular.module('menuapp')
.component('itemlist', {
  templateUrl: 'src/menuapp/templates/itemlist.template.html',
  bindings: {
    items: '<'
  }
});

})();
