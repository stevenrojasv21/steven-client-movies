mymovies
.config(function ($routeProvider) {
    $routeProvider
        .when('/actor/:id/movies', {
            templateUrl: 'components/actor/actor-movies.tpl.html'            
            ,resolve: {
                $b: ["$q", "$route", "ActorService",
                function ($q, $route, ActorService) {
                    var productPromise = {};
                    if ($route.current.params.id) {
                        actorMoviesPromise = ActorService.movies($route.current.params).$promise;
                    }
                    return $q.all({
                        movies: actorMoviesPromise
                    });
                }]
            }
            ,controller: 'ActorMoviesCtrl'
        })
        .otherwise({
                //redirectTo: '/whatever'
        });
    }
)  
.controller("ActorMoviesCtrl", ['$scope', '$rootScope', '$http', '$q', '$location','$b', 'ActorService', ActorMoviesCtrl]);

function ActorMoviesCtrl($scope, $rootScope, $http, $q, $location, $b, ActorService)
{
    angular.extend($scope, $b);

    $scope.movies = $scope.movies.content;

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