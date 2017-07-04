'use strict';

var root = "http://http://steven-api-movies.herokuapp.com/api/v1/";

var mymovies = angular.module('MyMovies', ['ngRoute', 'ui.router', 'ngResource', "bw.paging"])
.constant("ROOT", root)
.constant("APP_NAME", "My Movie");
