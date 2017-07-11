var controller = angular.module('eventController', [])
  .controller("mainController", mainController);

function mainController($scope, $http, $sce, $window) {

  $scope.newProduct = {
    "title": "Insert Product",
    "cost": 0
  };


  $scope.data = [{
      "title": "Popcorn",
      "cost": 3,
      "amount": 0
    },
    {
      "title": "Snickers",
      "cost": 4,
      "amount": 0,
      "dealTitle": "(5 for the price of 3)",
      "dealAmount": 5,
      "dealLowered": 3

    },
    {
      "title": "Soda",
      "cost": 2,
      "amount": 0
    }
  ];



  $scope.productTotal = function(product) {
    if (product.dealAmount) {
      return (Math.floor(product.amount / product.dealAmount) * (product.cost * product.dealLowered)) + (product.amount % product.dealAmount * product.cost);

    } else {
      return product.amount * product.cost;
    }


  };

  $scope.totalCost = function() {
    var total = 0;
    angular.forEach($scope.data, function(product, key) {
      total += $scope.productTotal(product);


    });

    return total;
  };

  //
  $scope.addProduct = function() {

    $scope.newProduct.amount = 0;
    $scope.data.push($scope.newProduct);

    $scope.newProduct = {
      "title": "Insert Product",
      "cost": 0
    };
  };


}
