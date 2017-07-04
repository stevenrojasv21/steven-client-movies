'use strict';

var root = "http://api-movies.com/api/v1/";

var mymovies = angular.module('MyMovies', ['ngRoute', 'ui.router', 'ngResource', "bw.paging"])
.constant("ROOT", root)
.constant("APP_NAME", "My Movie");
