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
    $scope.route = '';
    //This pagination can be an independent component
    $scope.totalPages = 100;
    $scope.pageSize = 20;
    $scope.currentPage = 1;
    $scope.shownPages = [];

    /*$scope.updatePaginate = function () {
        var maxPages = 10;
        $scope
        for (var i = 0; i < maxPages; ++i) {
            //$scope.shownPages.push(0);
        }
    }*/

    $scope.search = function (page = 1) {    
        $scope.currentPage = page;

        switch($scope.searchType) {
            case 'actor':
                $scope.result = ActorService.query({'query': $scope.searchProduct, 'page': page}).$promise;
                $scope.route = 'actor';
                break;
            case 'movie':
                $scope.result = MovieService.query({'query': $scope.searchProduct, 'page': page}).$promise;
                $scope.route = 'movie';
                break;
            default:
                $scope.result = MultiService.query({'query': $scope.searchProduct, 'page': page}).$promise;
                $scope.route = '';
                break;        
        }

        $scope.result = $scope.result.then(
            function(data) {
                $scope.rootScope = data.content;
                $scope.totalPages = data.content.total_pages;
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