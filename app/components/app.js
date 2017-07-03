var root = "http://api-movies.com/api/v1/";

var mymovies = angular.module('MyMovies', ['ngRoute', 'ui.router', 'ngResource'])
.constant("ROOT", root)
.constant("APP_NAME", "My Movie");

mymovies
.config(function ($stateProvider) {
    
    $stateProvider
        .state('/', {
            url: '/',
            views: {
                'searcher': {
                    templateUrl: 'components/searcher/searcher.tpl.html',
                    controller: 'SearcherCtrl'
                },
                'navbarCategory': {
                    templateUrl: 'components/navbarCategory/navbarCategory.tpl.html',
                    controller: 'NavbarCategoryCtrl'
                },
                'queryGrid': {
                    templateUrl: 'components/queryGrid/queryGrid.tpl.html',
                    controller: 'QueryGridCtrl'
                }
            }
        })
        .state('/actor', {
            url: '/actor',
            views: {
                'actor': {
                    templateUrl: 'components/actor/actor.tpl.html',
                    controller: 'ActorCtrl'
                },
            }
        });
    
    
    }
) 