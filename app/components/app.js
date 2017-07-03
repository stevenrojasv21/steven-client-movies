// Cambios de URL para direccionar las peticiones correctamente.
var root = document.location.href.split('/app/#!/')[0]; //replace("/app/#!/","");

var shopping = angular.module('Shopping', ['ngRoute', 'ui.router', 'ngResource'])
.constant("ROOT", root+"/api")
.constant("APP_NAME", "Shopping App");

shopping
.config(function ($stateProvider) {
    
    $stateProvider
        .state('/', {
            url: '/',
            /*templateUrl: 'components/searcher/searcher.tpl.html',
            controller: 'SearcherCtrl'*/
            views: {
                'searcher': {
                    templateUrl: 'components/searcher/searcher.tpl.html',
                    controller: 'SearcherCtrl'
                },
                'navbarCategory': {
                    templateUrl: 'components/navbarCategory/navbarCategory.tpl.html',
                    controller: 'NavbarCategoryCtrl'
                },
                'productGrid': {
                    templateUrl: 'components/productGrid/productGrid.tpl.html',
                    controller: 'ProductGridCtrl'
                }
            }
        });
    
    
    }
) 