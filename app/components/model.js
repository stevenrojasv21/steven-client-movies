shopping
.factory("ProductService", [
    "$resource",
    "ROOT",
    function ($resource, ROOT) {
        return $resource(ROOT + "products/:id", {
            id: "@id"
        }, {
            update: { method:'PUT' }
        });
    }
]);

