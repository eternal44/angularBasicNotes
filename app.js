(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab
    };
  });

  var gems = [
    {
      name: 'Dodecachedron',
      price: 2.000,
      description: '...',
      canPurchase: false,
      soldOut: false,
      images: [
        "images/gem-01.gif",
        "images/gem-03.gif",
        "images/gem-04.gif"
      ],
    },
    {
      name: 'Pentagonal Gem',
      price: 3.95,
      description: 'Bigger Gem!',
      canPurchase: false,
      soldOut: true,
      images: [
        "images/gem-05.gif",
        "images/gem-06.gif",
        "images/gem-07.gif"
      ],
    }
  ]
})();
