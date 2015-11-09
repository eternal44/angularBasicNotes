(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecachedron',
      price: 2.95,
      description: '...',
      canPurchase: false,
      soldOut: false
    },
    {
      name: 'Pentagonal Gem',
      price: 3.95,
      description: 'Bigger Gem!',
      canPurchase: false,
      soldOut: true
    }
  ]
})();
