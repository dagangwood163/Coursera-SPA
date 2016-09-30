(function () {
'use strict';

angular.module('menuapp')
.component('categorylist', {
  templateUrl: 'src/menuapp/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
