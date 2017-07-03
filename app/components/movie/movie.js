mymovies
.config(function ($routeProvider) {
    $routeProvider
        .when('/movie/:id?', {
            templateUrl: 'components/movie/movie.tpl.html'            
            ,resolve: {
                $b: ["$q", "$route", "MovieService",
                function ($q, $route, MovieService) {
                    var productPromise = {};
                    if ($route.current.params.id) {
                        moviePromise = MovieService.get($route.current.params).$promise;
                    }
                    return $q.all({
                        movie: moviePromise
                    });
                }]
            }
            ,controller: 'MovieCtrl'
        })
        .otherwise({
                //redirectTo: '/whatever'
        });
    }
)  
.controller("MovieCtrl", ['$scope', '$rootScope', '$http', '$q', '$location','$b', 'MovieService', MovieCtrl]);

function MovieCtrl($scope, $rootScope, $http, $q, $location, $b, MovieService)
{
    angular.extend($scope, $b);

    $scope.movie = $scope.movie.content;

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
}
;