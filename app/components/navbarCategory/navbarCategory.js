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
.controller("NavbarCategoryCtrl", ['$scope','$http', '$q', '$location', "ProductService", NavbarCategoryCtrl]);

function NavbarCategoryCtrl($scope, $http, $q, $location, ProductService)
{
    $scope.items = [
    {
      "categori_id": 1,
      "name": "drinks"
    },
    {
      "categori_id": 2,
      "name": "lunch"
    },
    {
      "categori_id": 3,
      "name": "food"
    },
    {
      "categori_id": 4,
      "name": "sea"
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