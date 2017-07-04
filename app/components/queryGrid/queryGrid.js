'use strict';

mymovies
.config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'components/queryGrid/queryGrid.tpl.html',
                    controller: 'QueryGridCtrl',
                })
                .otherwise({
                        //redirectTo: '/whatever'
                });
        }
    ]
)
.controller("QueryGridCtrl", ['$scope', '$rootScope', '$http', '$q', '$location', "MultiService", 'ActorService', 'MovieService', QueryGridCtrl]);

function QueryGridCtrl($scope, $rootScope, $http, $q, $location, MultiService, ActorService, MovieService)
{
    $scope.route = '';

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
                //Validation for themoviedb.org
                if ($scope.totalPages > 1000) {
                    $scope.totalPages = 1000;
                }
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