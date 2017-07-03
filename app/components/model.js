mymovies
.factory("MovieService", [
    "$resource",
    "ROOT",
    function ($resource, ROOT) {
        return $resource(ROOT + "movies/:id", {
            id: "@id"
        }, {
           		'query': { method: 'GET', url: ROOT + "movies/search" }
        });
    }
])
.factory("ActorService", [
    "$resource",
    "ROOT",
    function ($resource, ROOT) {
        return $resource(ROOT + "actors/:id", {
            id: "@id"
        }, {
            	'query': { method: 'GET', url: ROOT + "actors/search" }
        });
    }
])
.factory("MultiService", [
    "$resource",
    "ROOT",
    function ($resource, ROOT) {
    	console.log('Hi');
        return $resource(ROOT + "multi/:id", {
            id: "@id"
        }, {
            	'query': { method: 'GET' }
        });
    }
]);

