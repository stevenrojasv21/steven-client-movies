shopping
/*.config(function ($stateProvider) {
    
    $stateProvider
        .state('navbarCategory', {
            url: '/',
            //templateUrl: 'components/searcher/searcher.tpl.html',
            //controller: 'SearcherCtrl'
            views: {
                'navbarCategory': {
                    templateUrl: 'components/navbarCategory/navbarCategory.tpl.html',
                    controller: 'NavbarCategoryCtrl'
                }
            }
        });
    
    
    }
)*/
.controller("ProductGridCtrl", ['$scope','$http', '$q', '$location', "ProductService", ProductGridCtrl]);

function ProductGridCtrl($scope, $http, $q, $location, ProductService)
{
    $scope.products = [
    {
      "id": 1,
      "name": "Lorem",
      "price": "60.000",
      "available": true,
      "best_seller": true,
      "categories": [
        1,
        4
      ],
      "img": "http://lorempixel.com/200/100/food/",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    },
    {
      "id": 2,
      "name": "ipsum",
      "price": "20.000",
      "available": false,
      "best_seller": false,
      "categories": [
        4
      ],
      "img": "http://lorempixel.com/200/100/food/",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    },
    {
      "id": 3,
      "name": "dolor",
      "price": "10.000",
      "available": true,
      "best_seller": true,
      "categories": [
        4
      ],
      "img": "http://lorempixel.com/200/100/food/",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    },
    {
      "id": 4,
      "name": "sit",
      "price": "35.000",
      "available": false,
      "best_seller": false,
      "categories": [
        1,
        2
      ],
      "img": "http://lorempixel.com/200/100/food/",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    },
    {
      "id": 5,
      "name": "amet",
      "price": "12.000",
      "available": true,
      "best_seller": true,
      "categories": [
        1,
        4
      ],
      "img": "http://lorempixel.com/200/100/food/",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    },
    {
      "id": 6,
      "name": "consectetur",
      "price": "120.000",
      "available": true,
      "best_seller": false,
      "categories": [
        1,
        4
      ],
      "img": "http://lorempixel.com/200/100/food/",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    },
    {
      "id": 7,
      "name": "adipiscing",
      "price": "50.000",
      "available": false,
      "best_seller": false,
      "categories": [
        1,
        3
      ],
      "img": "http://lorempixel.com/200/100/food/",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    },
    {
      "id": 8,
      "name": "elit",
      "price": "2000",
      "available": true,
      "best_seller": false,
      "categories": [
        1,
        3
      ],
      "img": "http://lorempixel.com/200/100/food/",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    },
    {
      "id": 9,
      "name": "Maecenas",
      "price": "150.000",
      "available": true,
      "best_seller": true,
      "categories": [
        2,
        4
      ],
      "img": "http://lorempixel.com/200/100/food/",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    },
    {
      "id": 10,
      "name": "eu",
      "price": "200.000",
      "available": false,
      "best_seller": true,
      "categories": [
        2,
        3
      ],
      "img": "http://lorempixel.com/200/100/food/",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    }
  ];
    $scope.search = function () {        
        $scope.result = alert($scope.searchProduct);//ProductService.query({'name':$scope.search}).$promise;
        /*$http({
            method: 'GET',
            url: ROOT+'/user',
            params: {'instructions': $scope.instructions}
        }).then(function successCallback(response) {
            $scope.resultado = response.data;
        }, function errorCallback(response) {
            $scope.resultado = 'Ha ocurrido un error con la entrada. Por favor, verifiquela.';
        });*/
    };
}
;