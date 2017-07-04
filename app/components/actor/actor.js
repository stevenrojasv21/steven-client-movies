mymovies
.config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/actor/:id?', {
                    templateUrl: 'components/actor/actor.tpl.html'            
                    ,resolve: {
                        $b: ["$q", "$route", "ActorService",
                        function ($q, $route, ActorService) {
                            var actorPromise = {};
                            if ($route.current.params.id) {
                                actorPromise = ActorService.get($route.current.params).$promise;
                            }
                            return $q.all({
                                actor: actorPromise
                            });
                        }]
                    }
                    ,controller: 'ActorCtrl'
                })
                .otherwise({
                        //redirectTo: '/whatever'
                });
            }
    ]
)  
.controller("ActorCtrl", ['$scope', '$rootScope', '$http', '$q', '$location','$b', 'ActorService', ActorCtrl]);

function ActorCtrl($scope, $rootScope, $http, $q, $location, $b, ActorService)
{
    angular.extend($scope, $b);

    $scope.actor = $scope.actor.content;

    $scope.$watch('rootScope', function () {
        $rootScope.$emit('changeRootScope', {
            rootScope: $scope.rootScope
        });
    });

    $rootScope.$on('changeRootScope', function (event, args) {
      if (args.rootScope) {
        $scope.rootScope = (args.rootScope) ? args.rootScope : null;
        $scope.content = $scope.rootScope;
        $scope.results = $scope.rootScope.results;
      }
    });
    
    /*$scope.getListProduct = function() {
        var promise = ProductService.query({language: $translate.use()}).$promise;
        promise.then(function(data) {$scope.products = data;});
    };
    
    $scope.editProduct = function(product_code) {
        $location.path('product/'+product_code);
    };
    
    $scope.deleteProduct = function(product) {
        $translate('deleteMessage').then(
            function (data) {
                if(confirm(data)) {
                    $scope.product = {};
                    $scope.product.id = product.product_code,
                    ProductService.delete($scope.product, 
                        function(data) {
                            $translate('successMessage').then( function (data) {
                                    alert(data); 
                                    $scope.getListProduct();
                                }                   
                            );

                        },
                        function(data) {
                            $translate('errorMessage').then( function (data) {
                                    alert(data);
                                }                   
                            );
                        }
                    );
                }
            }
        );
    }*/
}
;