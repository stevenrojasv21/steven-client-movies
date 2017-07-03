shopping
/*.config(function ($stateProvider) {
    
    $stateProvider
        .state('searcher', {
            url: '/',
            //templateUrl: 'components/searcher/searcher.tpl.html',
            //controller: 'SearcherCtrl'
            views: {
                'searcher': {
                    templateUrl: 'components/searcher/searcher.tpl.html',
                    controller: 'SearcherCtrl'
                }
            }
        });
    
    
    }
) */     
.controller("SearcherCtrl", ['$scope','$http', '$q', '$location', "ProductService",SearcherCtrl]);

function SearcherCtrl($scope, $http, $q, $location, ProductService)
{
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