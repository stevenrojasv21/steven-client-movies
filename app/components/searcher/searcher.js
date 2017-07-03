mymovies    
.controller("SearcherCtrl", ['$scope', '$rootScope','$http', '$q', '$location', "MultiService", 'ActorService', 'MovieService', SearcherCtrl]);

function SearcherCtrl($scope, $rootScope, $http, $q, $location, MultiService, ActorService, MovieService)
{
    $scope.$watch('rootScope', function () {
        $rootScope.$emit('changeRootScope', {
            rootScope: $scope.rootScope
        });
    });

    $rootScope.$on('changeRootScope', function (event, args) {
        $scope.rootScope = args.rootScope;
    });

    $scope.search = function () {    
        switch($scope.searchType) {
            case 'actor':
                $scope.result = ActorService.query({'query': $scope.searchProduct }).$promise
                break;
            case 'movie':
                $scope.result = MovieService.query({'query': $scope.searchProduct }).$promise
                break;
            default:
                $scope.result = MultiService.query({'query': $scope.searchProduct }).$promise
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
}
;