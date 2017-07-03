mymovies
.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'components/queryGrid/queryGrid.tpl.html',            
            /*resolve: {
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
            },*/
            controller: 'QueryGridCtrl',
        })
        .otherwise({
                //redirectTo: '/whatever'
        });
    }
)
.controller("QueryGridCtrl", ['$scope', '$rootScope', '$http', '$q', '$location', /*'$b',*/ "MultiService", 'ActorService', 'MovieService', QueryGridCtrl]);

function QueryGridCtrl($scope, $rootScope, $http, $q, $location, /*$b,*/ MultiService, ActorService, MovieService)
{
    //angular.extend($scope, $b);
    $scope.route = '';

    $scope.search = function () {    
        switch($scope.searchType) {
            case 'actor':
                $scope.result = ActorService.query({'query': $scope.searchProduct }).$promise;
                $scope.route = 'actor';
                break;
            case 'movie':
                $scope.result = MovieService.query({'query': $scope.searchProduct }).$promise;
                $scope.route = 'movie';
                break;
            default:
                $scope.result = MultiService.query({'query': $scope.searchProduct }).$promise;
                $scope.route = '';
                break;        
        }

        $scope.result = $scope.result.then(
            function(data) {
                console.log(data.content);
                $scope.rootScope = data.content;
            },
            function (error) {
                console.error(error);
            }
        );
    };


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